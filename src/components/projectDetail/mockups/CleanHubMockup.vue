<template>
  <div class="clean-hub-mockup">
    <!-- Browser UI -->
    <div class="browser-header">
      <div class="browser-dots">
        <span></span><span></span><span></span>
      </div>
      <div class="browser-url">cleanhub.com/admin/dashboard</div>
    </div>

    <div class="app-container">
      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="logo-area">
          <div class="logo-box">CH</div>
          <span class="logo-text">Clean Hub</span>
        </div>
        <nav class="side-nav">
          <div class="nav-item active">
            <span class="icon">📊</span> Dashboard
          </div>
          <div class="nav-item">
            <span class="icon">👥</span> Nhân viên
          </div>
          <div class="nav-item">
            <span class="icon">📑</span> Hợp đồng
          </div>
          <div class="nav-item">
            <span class="icon">⏰</span> Chấm công
          </div>
          <div class="nav-item">
            <span class="icon">💰</span> Bảng lương
          </div>
          <div class="nav-item">
            <span class="icon">📦</span> Vật tư
          </div>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="main-content">
        <!-- Top Nav -->
        <header class="top-nav">
          <div class="search-bar">Tìm kiếm...</div>
          <div class="user-info">
            <div class="notif">🔔</div>
            <div class="avatar">Admin</div>
          </div>
        </header>

        <!-- Dashboard Content -->
        <div class="dashboard-body">
          <h2 class="page-title">Tổng quan hệ thống</h2>
          
          <div class="stats-grid">
            <div class="stat-card">
              <span class="stat-label">Tổng nhân viên</span>
              <span class="stat-value">124</span>
              <span class="stat-trend">+5% tháng này</span>
            </div>
            <div class="stat-card">
              <span class="stat-label">Hợp đồng mới</span>
              <span class="stat-value">12</span>
              <span class="stat-trend">+2 dự án</span>
            </div>
            <div class="stat-card">
              <span class="stat-label">Doanh thu</span>
              <span class="stat-value">450M</span>
              <span class="stat-trend">+12% vs quý trước</span>
            </div>
          </div>

          <!-- Table Mockup -->
          <div class="data-table-card">
            <div class="card-header">Lịch điều động hôm nay</div>
            <div class="mock-table">
              <div class="table-row header">
                <span>Nhân viên</span>
                <span>Khách hàng</span>
                <span>Trạng thái</span>
              </div>
              <div class="table-row">
                <span>Nguyễn Văn A</span>
                <span>Chung cư ABC</span>
                <span class="status-badge done">Đã hoàn thành</span>
              </div>
              <div class="table-row">
                <span>Trần Thị B</span>
                <span>Tòa nhà XYZ</span>
                <span class="status-badge pending">Đang thực hiện</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.clean-hub-mockup {
  width: 100%;
  max-width: 1000px;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0,0,0,0.2);
  color: #334155;
  font-family: sans-serif;
}

.browser-header {
  background: #f1f5f9;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e2e8f0;
}

.browser-dots {
  display: flex;
  gap: 6px;
}

.browser-dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #cbd5e1;
}

.browser-url {
  margin: 0 auto;
  font-size: 11px;
  background: #fff;
  padding: 2px 40px;
  border-radius: 4px;
  border: 1px solid #e2e8f0;
  color: #94a3b8;
}

.app-container {
  display: flex;
  height: 500px;
}

/* Sidebar */
.sidebar {
  width: 200px;
  background: #fff;
  border-right: 1px solid #f1f5f9;
  display: flex;
  flex-direction: column;
}

.logo-area {
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-box {
  width: 32px;
  height: 32px;
  background: #2563eb;
  color: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.logo-text {
  font-weight: 700;
  color: #1e293b;
}

.side-nav {
  padding: 10px;
  flex: 1;
}

.nav-item {
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #64748b;
  transition: all 0.2s;
}

.nav-item:hover {
  background: #f8fafc;
}

.nav-item.active {
  background: #eff6ff;
  color: #2563eb;
  font-weight: 500;
}

/* Main Content */
.main-content {
  flex: 1;
  background: #f8fafc;
  display: flex;
  flex-direction: column;
}

.top-nav {
  height: 56px;
  background: #fff;
  border-bottom: 1px solid #f1f5f9;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search-bar {
  font-size: 13px;
  color: #94a3b8;
  background: #f1f5f9;
  padding: 6px 16px;
  border-radius: 20px;
  width: 200px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.avatar {
  width: 32px;
  height: 32px;
  background: #e2e8f0;
  border-radius: 50%;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dashboard-body {
  padding: 24px;
  overflow-y: auto;
}

.page-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}

.stat-card {
  background: #fff;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #f1f5f9;
  display: flex;
  flex-direction: column;
}

.stat-label {
  font-size: 12px;
  color: #64748b;
  margin-bottom: 4px;
}

.stat-value {
  font-size: 20px;
  font-weight: 700;
  color: #1e293b;
}

.stat-trend {
  font-size: 10px;
  color: #10b981;
  margin-top: 4px;
}

.data-table-card {
  background: #fff;
  border-radius: 12px;
  border: 1px solid #f1f5f9;
  padding: 16px;
}

.card-header {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 16px;
}

.mock-table {
  display: flex;
  flex-direction: column;
}

.table-row {
  display: grid;
  grid-template-columns: 1fr 1fr 120px;
  padding: 10px 0;
  font-size: 12px;
  border-bottom: 1px solid #f8fafc;
}

.table-row.header {
  font-weight: 600;
  color: #94a3b8;
}

.status-badge {
  padding: 2px 8px;
  border-radius: 100px;
  font-size: 10px;
  text-align: center;
}

.status-badge.done {
  background: #dcfce7;
  color: #15803d;
}

.status-badge.pending {
  background: #fef9c3;
  color: #a16207;
}
</style>
