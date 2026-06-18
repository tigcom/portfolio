<template>
  <div class="lms-mockup">
    <div class="browser-shell">
      <div class="browser-bar">
        <div class="browser-dots">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
        </div>
        <div class="browser-url">
          <span>🔒</span>
          <span>learnhub.edu/dashboard</span>
        </div>
      </div>

      <div class="app-layout">
        <!-- Sidebar -->
        <aside class="sidebar">
          <div class="sidebar-brand">
            <div class="brand-icon">L</div>
            <span>LearnHub</span>
          </div>
          <div class="sidebar-section">
            <div class="section-label">LEARNING</div>
            <div class="nav-item active"><span>📚</span> My Courses</div>
            <div class="nav-item"><span>🎯</span> Progress</div>
            <div class="nav-item"><span>📝</span> Assignments</div>
            <div class="nav-item"><span>🏆</span> Certificates</div>
          </div>
          <div class="sidebar-section">
            <div class="section-label">EXPLORE</div>
            <div class="nav-item"><span>🔍</span> Browse</div>
            <div class="nav-item"><span>⭐</span> Wishlist</div>
          </div>
        </aside>

        <!-- Main -->
        <main class="main-content">
          <!-- Welcome bar -->
          <div class="welcome-bar">
            <div>
              <div class="welcome-text">Welcome back, <strong>Minh Khang</strong> 👋</div>
              <div class="welcome-sub">You have 2 lessons due today</div>
            </div>
            <div class="streak-badge">
              <span>🔥</span>
              <span>14 day streak</span>
            </div>
          </div>

          <!-- Progress cards -->
          <div class="progress-section">
            <div class="section-title">Continue Learning</div>
            <div class="course-cards">
              <div class="course-card" v-for="course in courses" :key="course.title">
                <div class="course-thumb" :style="{ background: course.bg }">
                  <span class="course-icon">{{ course.icon }}</span>
                </div>
                <div class="course-body">
                  <div class="course-title">{{ course.title }}</div>
                  <div class="course-instructor">{{ course.instructor }}</div>
                  <div class="progress-bar-wrap">
                    <div class="progress-bar" :style="{ width: course.progress + '%', background: course.color }"></div>
                  </div>
                  <div class="progress-text">{{ course.progress }}% complete</div>
                </div>
                <button class="resume-btn" :style="{ color: course.color }">Resume →</button>
              </div>
            </div>
          </div>

          <!-- Stats row -->
          <div class="stats-row">
            <div class="stat-item" v-for="s in stats" :key="s.label">
              <div class="stat-val" :style="{ color: s.color }">{{ s.val }}</div>
              <div class="stat-lbl">{{ s.label }}</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
const courses = [
  { title: 'Vue 3 Masterclass', instructor: 'By Evan You', progress: 68, bg: 'linear-gradient(135deg, #1a1a3e, #2d2d6b)', color: '#7c6af7', icon: '⚡' },
  { title: 'UI/UX Design Fundamentals', instructor: 'By Sarah Chen', progress: 42, bg: 'linear-gradient(135deg, #1a0f2e, #2d1b4e)', color: '#a855f7', icon: '🎨' },
  { title: 'Spring Boot Microservices', instructor: 'By James Lee', progress: 85, bg: 'linear-gradient(135deg, #0d2137, #1a3a5c)', color: '#38bdf8', icon: '☕' },
]

const stats = [
  { val: '12', label: 'Courses Enrolled', color: '#7c6af7' },
  { val: '8', label: 'Completed', color: '#4ade80' },
  { val: '3', label: 'Certificates', color: '#fbbf24' },
  { val: '248h', label: 'Learning Time', color: '#38bdf8' },
]
</script>

<style scoped>
.lms-mockup {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 40px 80px rgba(0,0,0,0.6);
}

.browser-shell {
  background: #0d1117;
  border: 1px solid rgba(124,106,247,0.15);
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
  max-width: 320px;
}

.app-layout {
  display: flex;
  height: 400px;
}

.sidebar {
  width: 150px;
  background: #0a0d12;
  border-right: 1px solid rgba(255,255,255,0.06);
  padding: 14px 0;
  flex-shrink: 0;
}

.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 14px 14px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  margin-bottom: 12px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
}

.brand-icon {
  width: 26px;
  height: 26px;
  background: linear-gradient(135deg, #7c6af7, #a855f7);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 800;
  color: #fff;
}

.sidebar-section { padding: 0 8px; margin-bottom: 12px; }

.section-label {
  font-size: 8px;
  color: rgba(255,255,255,0.25);
  letter-spacing: 1.5px;
  padding: 0 6px;
  margin-bottom: 4px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 6px 8px;
  border-radius: 6px;
  font-size: 10px;
  color: rgba(255,255,255,0.45);
  cursor: pointer;
  margin-bottom: 1px;
}

.nav-item.active {
  background: rgba(124,106,247,0.15);
  color: #7c6af7;
}

.main-content {
  flex: 1;
  background: #0b0f14;
  padding: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.welcome-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, rgba(124,106,247,0.1), rgba(168,85,247,0.1));
  border: 1px solid rgba(124,106,247,0.2);
  border-radius: 10px;
  padding: 10px 14px;
}

.welcome-text { font-size: 12px; color: #fff; margin-bottom: 2px; }
.welcome-sub { font-size: 10px; color: rgba(255,255,255,0.45); }

.streak-badge {
  display: flex;
  align-items: center;
  gap: 5px;
  background: rgba(251,191,36,0.1);
  border: 1px solid rgba(251,191,36,0.2);
  border-radius: 100px;
  padding: 5px 10px;
  font-size: 10px;
  color: #fbbf24;
  font-weight: 600;
}

.progress-section { flex: 1; min-height: 0; }

.section-title {
  font-size: 11px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 8px;
}

.course-cards { display: flex; flex-direction: column; gap: 6px; }

.course-card {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 8px;
  padding: 8px 10px;
}

.course-thumb {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.course-icon { font-size: 16px; }

.course-body { flex: 1; min-width: 0; }
.course-title { font-size: 10px; font-weight: 600; color: #fff; margin-bottom: 1px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.course-instructor { font-size: 9px; color: rgba(255,255,255,0.4); margin-bottom: 5px; }

.progress-bar-wrap {
  height: 3px;
  background: rgba(255,255,255,0.08);
  border-radius: 2px;
  margin-bottom: 3px;
}

.progress-bar {
  height: 100%;
  border-radius: 2px;
  transition: width 0.3s ease;
}

.progress-text { font-size: 8px; color: rgba(255,255,255,0.35); }

.resume-btn {
  background: transparent;
  border: none;
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
}

.stat-item {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 8px;
  padding: 8px;
  text-align: center;
}

.stat-val { font-size: 14px; font-weight: 700; margin-bottom: 2px; }
.stat-lbl { font-size: 8px; color: rgba(255,255,255,0.4); }
</style>
