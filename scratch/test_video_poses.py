import cv2, os, math
import numpy as np

video_path = r'D:\project\portfolio\Recording 2026-09-22 212518.mp4'
cap = cv2.VideoCapture(video_path)
fps = cap.get(cv2.CAP_PROP_FPS)

mx, my = 1800, 930

def get_pose_old(dx, dy):
    CLOCKWISE = ['right', 'down-right', 'down', 'down-left', 'left', 'up-left', 'up', 'up-right']
    SECTOR = (math.pi * 2) / 8
    if math.hypot(dx, dy) < 40:
        return 'center'
    angle = math.atan2(dy, dx)
    sec = (round(angle / SECTOR) + 8) % 8
    return CLOCKWISE[sec]

def get_pose_new(dx, dy):
    dist = math.hypot(dx, dy)
    if dist < 45:
        return 'center'
    
    if dx >= 0 and dy >= -20:
        return 'right' if dx > 0 else 'down'
    if dy > 30:
        return 'down-left' if dx < -30 else 'down'
        
    elev_deg = math.degrees(math.atan2(abs(dy), abs(dx))) if dx != 0 else 90
    
    if elev_deg < 25:
        return 'left'        # 9h00 (horizontal left)
    elif elev_deg < 65:
        return 'up-left'     # 10h30 (diagonal up-left)
    else:
        return 'up'          # 12h00 (vertical up)

print(f"{'Sec':<5} | {'Mouse (x,y)':<15} | {'dx, dy':<15} | {'Elev Deg':<10} | {'Old Pose':<10} | {'New Pose':<10}")
print('-'*80)

test_secs = [1, 3, 5, 7, 9, 11, 13]
seen_secs = set()
frame_idx = 0

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    sec = round(frame_idx / fps, 1)
    sec_int = int(round(sec))
    
    if sec_int in test_secs and sec_int not in seen_secs and abs(sec - sec_int) < 0.05:
        seen_secs.add(sec_int)
        # Find white mouse cursor
        white = (frame[:, :, 0] > 240) & (frame[:, :, 1] > 240) & (frame[:, :, 2] > 240)
        ys, xs = np.where(white)
        if len(xs) > 0:
            cx, cy = int(np.mean(xs)), int(np.mean(ys))
            dx, dy = cx - mx, cy - my
            elev = math.degrees(math.atan2(abs(dy), abs(dx))) if dx != 0 else 90
            old_p = get_pose_old(dx, dy)
            new_p = get_pose_new(dx, dy)
            print(f"{sec:<5.1f} | ({cx},{cy}) | ({dx},{dy}) | {elev:<10.1f} | {old_p:<10} | {new_p:<10}")
    frame_idx += 1
cap.release()
