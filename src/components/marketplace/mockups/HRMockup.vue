<template>
  <div class="hr-mockup">
    <!-- Browser Shell -->
    <div class="browser-shell">
      <div class="browser-bar">
        <div class="browser-dots">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
        </div>
        <div class="browser-url">
          <span class="lock-icon">🔒</span>
          <span>hrportal.company.com/dashboard</span>
        </div>
      </div>

      <div class="app-layout">
        <!-- Sidebar -->
        <aside class="sidebar">
          <div class="sidebar-logo">
            <div class="logo-icon">HR</div>
            <span>HRPortal</span>
          </div>
          <nav class="sidebar-nav">
            <div class="nav-item active">
              <span class="nav-icon">📊</span>
              <span>Dashboard</span>
            </div>
            <div class="nav-item">
              <span class="nav-icon">👥</span>
              <span>Employees</span>
            </div>
            <div class="nav-item">
              <span class="nav-icon">📅</span>
              <span>Attendance</span>
            </div>
            <div class="nav-item">
              <span class="nav-icon">💰</span>
              <span>Payroll</span>
            </div>
            <div class="nav-item">
              <span class="nav-icon">⭐</span>
              <span>Performance</span>
            </div>
            <div class="nav-item">
              <span class="nav-icon">📋</span>
              <span>Reports</span>
            </div>
          </nav>
        </aside>

        <!-- Main Content -->
        <main class="main-content">
          <!-- Top bar -->
          <div class="topbar">
            <div class="topbar-title">
              <h2>Dashboard Overview</h2>
              <span class="topbar-date">June 2025</span>
            </div>
            <div class="topbar-actions">
              <div class="search-bar">
                <span>🔍</span>
                <span class="search-placeholder">Search employees...</span>
              </div>
              <div class="avatar-group">
                <div class="avatar av1">JD</div>
                <div class="avatar av2">MK</div>
                <div class="avatar av3">+5</div>
              </div>
            </div>
          </div>

          <!-- Stats row -->
          <div class="stats-row">
            <div class="stat-card">
              <div class="stat-icon" style="background: rgba(79,142,247,0.15); color: #4f8ef7;">👥</div>
              <div class="stat-info">
                <div class="stat-value">248</div>
                <div class="stat-label">Total Employees</div>
              </div>
              <div class="stat-trend up">+12%</div>
            </div>
            <div class="stat-card">
              <div class="stat-icon" style="background: rgba(74,222,128,0.15); color: #4ade80;">✅</div>
              <div class="stat-info">
                <div class="stat-value">94.2%</div>
                <div class="stat-label">Attendance Rate</div>
              </div>
              <div class="stat-trend up">+2.1%</div>
            </div>
            <div class="stat-card">
              <div class="stat-icon" style="background: rgba(251,191,36,0.15); color: #fbbf24;">📋</div>
              <div class="stat-info">
                <div class="stat-value">18</div>
                <div class="stat-label">Open Positions</div>
              </div>
              <div class="stat-trend down">-3</div>
            </div>
            <div class="stat-card">
              <div class="stat-icon" style="background: rgba(168,85,247,0.15); color: #a855f7;">💰</div>
              <div class="stat-info">
                <div class="stat-value">$2.4M</div>
                <div class="stat-label">Monthly Payroll</div>
              </div>
              <div class="stat-trend up">+5%</div>
            </div>
          </div>

          <!-- Bottom row -->
          <div class="bottom-row">
            <!-- Employee list -->
            <div class="employee-list">
              <div class="panel-header">
                <span>Recent Employees</span>
                <span class="view-all">View all →</span>
              </div>
              <div class="emp-row" v-for="emp in employees" :key="emp.name">
                <div class="emp-avatar" :style="{ background: emp.color }">{{ emp.initials }}</div>
                <div class="emp-info">
                  <div class="emp-name">{{ emp.name }}</div>
                  <div class="emp-dept">{{ emp.dept }}</div>
                </div>
                <div class="emp-status" :class="emp.status">{{ emp.statusLabel }}</div>
              </div>
            </div>

            <!-- Attendance chart -->
            <div class="attendance-chart">
              <div class="panel-header">
                <span>Weekly Attendance</span>
                <span class="view-all">This week</span>
              </div>
              <div class="chart-bars">
                <div class="chart-col" v-for="day in weekDays" :key="day.label">
                  <div class="bar-wrap">
                    <div class="bar" :style="{ height: day.pct + '%', background: day.color }"></div>
                  </div>
                  <div class="bar-label">{{ day.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
const employees = [
  { name: 'Alice Nguyen', dept: 'Engineering', initials: 'AN', color: '#4f8ef7', status: 'active', statusLabel: 'Active' },
  { name: 'Bob Tran', dept: 'Marketing', initials: 'BT', color: '#a855f7', status: 'leave', statusLabel: 'On Leave' },
  { name: 'Carol Le', dept: 'Design', initials: 'CL', color: '#2dd4bf', status: 'active', statusLabel: 'Active' },
  { name: 'David Pham', dept: 'Finance', initials: 'DP', color: '#fbbf24', status: 'active', statusLabel: 'Active' },
]

const weekDays = [
  { label: 'Mon', pct: 92, color: '#4f8ef7' },
  { label: 'Tue', pct: 88, color: '#4f8ef7' },
  { label: 'Wed', pct: 95, color: '#4ade80' },
  { label: 'Thu', pct: 91, color: '#4f8ef7' },
  { label: 'Fri', pct: 78, color: '#fbbf24' },
]
</script>

<style scoped>
.hr-mockup {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6);
}

.browser-shell {
  background: #0d1117;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  overflow: hidden;
}

.browser-bar {
  background: #161b22;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.browser-dots { display: flex; gap: 6px; }
.dot { width: 10px; height: 10px; border-radius: 50%; }
.dot-red { background: #ff5f56; }
.dot-yellow { background: #ffbd2e; }
.dot-green { background: #27c93f; }

.browser-url {
  flex: 1;
  background: #0d1117;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 6px;
  padding: 4px 12px;
  font-size: 11px;
  color: rgba(255,255,255,0.4);
  display: flex;
  align-items: center;
  gap: 6px;
  max-width: 360px;
}

.app-layout {
  display: flex;
  height: 420px;
}

.sidebar {
  width: 160px;
  background: #0d1117;
  border-right: 1px solid rgba(255,255,255,0.06);
  padding: 16px 0;
  flex-shrink: 0;
}

.sidebar-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px 16px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  margin-bottom: 12px;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
}

.logo-icon {
  width: 28px;
  height: 28px;
  background: #4f8ef7;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  color: #fff;
}

.sidebar-nav { display: flex; flex-direction: column; gap: 2px; padding: 0 8px; }

.nav-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 8px;
  border-radius: 6px;
  font-size: 11px;
  color: rgba(255,255,255,0.45);
  cursor: pointer;
}

.nav-item.active {
  background: rgba(79,142,247,0.15);
  color: #4f8ef7;
}

.nav-icon { font-size: 13px; }

.main-content {
  flex: 1;
  background: #0b0f14;
  padding: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.topbar-title h2 {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  margin: 0;
}

.topbar-date { font-size: 11px; color: rgba(255,255,255,0.4); }

.topbar-actions { display: flex; align-items: center; gap: 10px; }

.search-bar {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 6px;
  padding: 5px 10px;
  font-size: 11px;
  color: rgba(255,255,255,0.3);
}

.avatar-group { display: flex; }
.avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  border: 2px solid #0b0f14;
  margin-left: -6px;
}
.av1 { background: #4f8ef7; }
.av2 { background: #a855f7; }
.av3 { background: rgba(255,255,255,0.15); color: rgba(255,255,255,0.6); }

.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}

.stat-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.stat-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  flex-shrink: 0;
}

.stat-info { flex: 1; min-width: 0; }
.stat-value { font-size: 13px; font-weight: 700; color: #fff; }
.stat-label { font-size: 9px; color: rgba(255,255,255,0.4); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

.stat-trend {
  font-size: 9px;
  font-weight: 600;
  padding: 2px 5px;
  border-radius: 4px;
}
.stat-trend.up { background: rgba(74,222,128,0.15); color: #4ade80; }
.stat-trend.down { background: rgba(248,113,113,0.15); color: #f87171; }

.bottom-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  flex: 1;
  min-height: 0;
}

.employee-list, .attendance-chart {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 10px;
  padding: 10px;
  overflow: hidden;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 11px;
  font-weight: 600;
  color: #fff;
}

.view-all { color: #4f8ef7; font-weight: 400; cursor: pointer; }

.emp-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 0;
  border-bottom: 1px solid rgba(255,255,255,0.04);
}

.emp-avatar {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
}

.emp-info { flex: 1; min-width: 0; }
.emp-name { font-size: 10px; font-weight: 600; color: #fff; }
.emp-dept { font-size: 9px; color: rgba(255,255,255,0.4); }

.emp-status {
  font-size: 9px;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 500;
}
.emp-status.active { background: rgba(74,222,128,0.15); color: #4ade80; }
.emp-status.leave { background: rgba(251,191,36,0.15); color: #fbbf24; }

.chart-bars {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  height: 100px;
  padding-top: 8px;
}

.chart-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  height: 100%;
}

.bar-wrap {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: flex-end;
}

.bar {
  width: 100%;
  border-radius: 4px 4px 0 0;
  min-height: 4px;
  transition: height 0.3s ease;
}

.bar-label { font-size: 9px; color: rgba(255,255,255,0.4); }
</style>
