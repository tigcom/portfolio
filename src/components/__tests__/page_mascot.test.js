import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

const CLOCKWISE = [
  'right',
  'down-right',
  'down',
  'down-left',
  'left',
  'up-left',
  'up',
  'up-right'
];
const SECTOR = (Math.PI * 2) / CLOCKWISE.length;
const HYSTERESIS = 0.03;

function wrap(angle) {
  return Math.atan2(Math.sin(angle), Math.cos(angle));
}

function computeDirection(dx, dy, currentSector = -1, deadZone = 40) {
  const dist = Math.hypot(dx, dy);
  if (dist < deadZone) {
    return { direction: 'center', sector: -1 };
  }

  const angle = Math.atan2(dy, dx);
  if (currentSector !== -1 && Math.abs(wrap(angle - currentSector * SECTOR)) < SECTOR / 2 + HYSTERESIS) {
    return { direction: CLOCKWISE[currentSector], sector: currentSector };
  }

  const sector = (Math.round(angle / SECTOR) + CLOCKWISE.length) % CLOCKWISE.length;
  return { direction: CLOCKWISE[sector], sector };
}

const DIRECTIONS = [
  'up-left', 'up', 'up-right',
  'left', 'center', 'right',
  'down-left', 'down', 'down-right'
];

function cell3x3(index) {
  return {
    backgroundSize: '300% 300%',
    backgroundPosition: `${(index % 3) * 50}% ${Math.floor(index / 3) * 50}%`
  };
}

describe('PageMascot pure 360-degree trigonometric directional tracking logic', () => {
  it('triggers center pose inside deadZone', () => {
    expect(computeDirection(0, 0).direction).toBe('center');
    expect(computeDirection(15, -15).direction).toBe('center');
  });

  it('correctly maps 9h (left) when mouse is near bottom left', () => {
    expect(computeDirection(-1400, -80).direction).toBe('left');
  });

  it('correctly maps 10h30 (up-left) to center, hero section, and upper-left screen content', () => {
    // Center screen (dx = -840, dy = -430) => up-left!
    expect(computeDirection(-840, -430).direction).toBe('up-left');
    // Upper-left screen (dx = -1400, dy = -730) => up-left!
    expect(computeDirection(-1400, -730).direction).toBe('up-left');
    // Top-left corner (dx = -1800, dy = -930) => up-left!
    expect(computeDirection(-1800, -930).direction).toBe('up-left');
  });

  it('correctly maps 12h (up) near top right header nav', () => {
    // Directly above mascot (dx = 0, dy = -730) => up!
    expect(computeDirection(0, -730).direction).toBe('up');
  });

  it('correctly maps remaining quadrants cleanly', () => {
    expect(computeDirection(500, -500).direction).toBe('up-right');
    expect(computeDirection(500, 0).direction).toBe('right');
    expect(computeDirection(500, 500).direction).toBe('down-right');
    expect(computeDirection(0, 500).direction).toBe('down');
    expect(computeDirection(-500, 500).direction).toBe('down-left');
  });

  it('properly applies small hysteresis (0.03 rad) to prevent jitter at sector boundaries', () => {
    const initial = computeDirection(-1400, -80); // left (sector 4)
    expect(initial.direction).toBe('left');

    // Angle right on the boundary between left and up-left (-157.5 deg)
    // Within 0.03 rad of boundary: held by hysteresis
    const boundaryAngle = -157.6 * (Math.PI / 180);
    const held = computeDirection(500 * Math.cos(boundaryAngle), 500 * Math.sin(boundaryAngle), initial.sector);
    expect(held.direction).toBe('left');

    // Moving further into up-left (-152.9 deg, center screen): switches to up-left
    const centerAngle = -152.9 * (Math.PI / 180);
    const switched = computeDirection(500 * Math.cos(centerAngle), 500 * Math.sin(centerAngle), initial.sector);
    expect(switched.direction).toBe('up-left');
  });

  it('maps 3x3 background positions cleanly', () => {
    expect(cell3x3(DIRECTIONS.indexOf('up-left'))).toEqual({
      backgroundSize: '300% 300%',
      backgroundPosition: '0% 0%'
    });
    expect(cell3x3(DIRECTIONS.indexOf('up'))).toEqual({
      backgroundSize: '300% 300%',
      backgroundPosition: '50% 0%'
    });
    expect(cell3x3(DIRECTIONS.indexOf('left'))).toEqual({
      backgroundSize: '300% 300%',
      backgroundPosition: '0% 50%'
    });
    expect(cell3x3(DIRECTIONS.indexOf('center'))).toEqual({
      backgroundSize: '300% 300%',
      backgroundPosition: '50% 50%'
    });
    expect(cell3x3(DIRECTIONS.indexOf('right'))).toEqual({
      backgroundSize: '300% 300%',
      backgroundPosition: '100% 50%'
    });
  });

  it('centres the dead zone inside the body instead of half the body', () => {
    const size = 76;
    const deadZone = Math.max(14, size * 0.3);
    const deadZoneExit = deadZone * 1.18;
    // Truoc day la 0.5 * size = 38, tuc ban kinh vung chet bang nua than nhan vat.
    expect(deadZone).toBeLessThan(size / 2);
    expect(deadZoneExit).toBeGreaterThan(deadZone);
  });

  it('verifies mascot webp assets exist in public/mascots/', () => {
    const dirWebp = path.resolve(process.cwd(), 'public/mascots/turtle-directions.webp');
    const reactWebp = path.resolve(process.cwd(), 'public/mascots/turtle-reactions.webp');
    expect(fs.existsSync(dirWebp)).toBe(true);
    expect(fs.statSync(dirWebp).size).toBeGreaterThan(100000);
    expect(fs.existsSync(reactWebp)).toBe(true);
    expect(fs.statSync(reactWebp).size).toBeGreaterThan(100000);
  });
});

// Lop nghieng chay lien tuc de lap khoang giua 8 nac roi rac cua luoi 3x3.
const LEAN_REACH = 520;
function leanVector(dx, dy) {
  const distance = Math.hypot(dx, dy);
  if (distance < 1) return { x: 0, y: 0 };
  const reach = Math.min(1, distance / LEAN_REACH);
  return { x: (dx / distance) * reach, y: (dy / distance) * reach };
}

describe('PageMascot continuous lean (fills the gaps between the 8 snapped poses)', () => {
  it('does not lean when the pointer sits on the centre', () => {
    expect(leanVector(0, 0)).toEqual({ x: 0, y: 0 });
    expect(leanVector(0.4, 0.4)).toEqual({ x: 0, y: 0 });
  });

  it('leans toward the pointer, not away from it', () => {
    expect(leanVector(500, 0).x).toBeGreaterThan(0);
    expect(leanVector(-500, 0).x).toBeLessThan(0);
    expect(leanVector(0, -500).y).toBeLessThan(0);
    expect(leanVector(0, 500).y).toBeGreaterThan(0);
  });

  it('stays inside the unit circle so the shift can never outgrow the box', () => {
    for (const [dx, dy] of [[0, 0], [300, 400], [-900, 200], [5000, -5000], [12, 5]]) {
      expect(Math.hypot(leanVector(dx, dy).x, leanVector(dx, dy).y)).toBeLessThanOrEqual(1.0001);
    }
  });

  it('saturates past LEAN_REACH so a far pointer stops dragging the head', () => {
    expect(leanVector(LEAN_REACH, 0).x).toBeCloseTo(1, 3);
    expect(leanVector(LEAN_REACH * 8, 0).x).toBeCloseTo(1, 3);
    expect(leanVector(LEAN_REACH / 2, 0).x).toBeCloseTo(0.5, 3);
  });

  it('is symmetric left/right so the head never favours one side', () => {
    expect(leanVector(-640, -360).x).toBeCloseTo(-leanVector(640, -360).x, 6);
    expect(leanVector(-640, -360).y).toBeCloseTo(leanVector(640, -360).y, 6);
  });

  it('answers between two snaps: two angles inside one sector lean differently', () => {
    const a = leanVector(500 * Math.cos(-0.1), 500 * Math.sin(-0.1));
    const b = leanVector(500 * Math.cos(-0.5), 500 * Math.sin(-0.5));
    expect(Math.abs(a.x - b.x)).toBeGreaterThan(0.01);
  });
});
