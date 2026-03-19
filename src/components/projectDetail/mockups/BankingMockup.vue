<template>
  <div class="banking-mockup">
    <!-- Browser UI -->
    <div class="browser-header">
      <div class="browser-dots">
        <span></span><span></span><span></span>
      </div>
      <div class="browser-url">tigbank.com/dashboard</div>
    </div>

    <div class="app-container">
      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="logo-area">
          <div class="logo-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
          </div>
          <span class="logo-text">TigBank</span>
        </div>
        <nav class="side-nav">
          <div class="nav-item active">🏠 Home</div>
          <div class="nav-item">💸 Transfer</div>
          <div class="nav-item">💳 Cards</div>
          <div class="nav-item">📊 Reports</div>
          <div class="nav-item">⚙️ Settings</div>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="main-content">
        <header class="top-nav">
          <div class="welcome">
            <span class="greet">Good morning,</span>
            <span class="name">Dailé</span>
          </div>
          <div class="user-actions">
            <div class="search-icon">🔍</div>
            <div class="avatar">D</div>
          </div>
        </header>

        <div class="dashboard-content">
          <!-- Balance Cards -->
          <div class="balance-grid">
            <div class="card main-card">
              <span class="label">Total Balance</span>
              <span class="amount">$24,500.00</span>
              <div class="card-footer">
                <span class="account-num">**** 4290</span>
                <span class="visa">VISA</span>
              </div>
            </div>
            <div class="card secondary-card">
              <span class="label">Savings</span>
              <span class="amount">$8,240.50</span>
              <span class="growth">+2.4%</span>
            </div>
          </div>

          <!-- Recent Transactions -->
          <div class="transactions-section">
            <div class="section-header">
              <h3>Recent Transactions</h3>
              <span class="view-all">See all</span>
            </div>
            <div class="transaction-list">
              <div class="transaction-item">
                <div class="t-icon shopping">🛒</div>
                <div class="t-info">
                  <span class="t-name">Apple Store</span>
                  <span class="t-date">Mar 15, 2025</span>
                </div>
                <span class="t-amount negative">-$999.00</span>
              </div>
              <div class="transaction-item">
                <div class="t-icon salary">💰</div>
                <div class="t-info">
                  <span class="t-name">Salary Deposit</span>
                  <span class="t-date">Mar 12, 2025</span>
                </div>
                <span class="t-amount positive">+$4,200.00</span>
              </div>
              <div class="transaction-item">
                <div class="t-icon food">🍕</div>
                <div class="t-info">
                  <span class="t-name">Pizza Hut</span>
                  <span class="t-date">Mar 10, 2025</span>
                </div>
                <span class="t-amount negative">-$32.50</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.banking-mockup {
  width: 100%;
  max-width: 1000px;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0,0,0,0.15);
  font-family: 'Inter', -apple-system, sans-serif;
  color: #1a1a1a;
}

.browser-header {
  background: #f8fafc;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #edf2f7;
}

.browser-dots {
  display: flex;
  gap: 6px;
}

.browser-dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #cbd5e0;
}

.browser-url {
  margin: 0 auto;
  font-size: 11px;
  background: #fff;
  padding: 3px 50px;
  border-radius: 6px;
  border: 1px solid #edf2f7;
  color: #a0aec0;
}

.app-container {
  display: flex;
  height: 520px;
}

/* Sidebar */
.sidebar {
  width: 180px;
  background: #1a202c;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.logo-area {
  padding: 30px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-circle {
  width: 32px;
  height: 32px;
  background: #4299e1;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-text {
  font-weight: 700;
  letter-spacing: -0.5px;
}

.side-nav {
  padding: 10px;
  flex: 1;
}

.nav-item {
  padding: 12px 16px;
  font-size: 13px;
  color: #a0aec0;
  cursor: pointer;
  border-radius: 10px;
  margin-bottom: 4px;
  transition: all 0.2s;
}

.nav-item:hover {
  background: #2d3748;
  color: #fff;
}

.nav-item.active {
  background: #2d3748;
  color: #fff;
}

/* Main Content */
.main-content {
  flex: 1;
  background: #f7fafc;
  display: flex;
  flex-direction: column;
}

.top-nav {
  padding: 24px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.welcome {
  display: flex;
  flex-direction: column;
}

.greet {
  font-size: 13px;
  color: #718096;
}

.name {
  font-size: 18px;
  font-weight: 700;
}

.user-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.avatar {
  width: 36px;
  height: 36px;
  background: #4299e1;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
}

.dashboard-content {
  padding: 0 32px 32px;
  overflow-y: auto;
}

.balance-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
}

.card {
  padding: 24px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
}

.main-card {
  background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
  color: #fff;
}

.secondary-card {
  background: #fff;
  border: 1px solid #edf2f7;
}

.label {
  font-size: 12px;
  opacity: 0.8;
  margin-bottom: 8px;
}

.amount {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: auto;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.account-num {
  font-size: 12px;
  letter-spacing: 2px;
}

.visa {
  font-style: italic;
  font-weight: 800;
  font-size: 14px;
}

.growth {
  font-size: 12px;
  color: #48bb78;
  font-weight: 600;
  margin-top: 4px;
}

.transactions-section {
  background: #fff;
  border-radius: 20px;
  border: 1px solid #edf2f7;
  padding: 24px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.section-header h3 {
  font-size: 16px;
  font-weight: 700;
}

.view-all {
  font-size: 12px;
  color: #4299e1;
  font-weight: 600;
  cursor: pointer;
}

.transaction-item {
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f7fafc;
}

.transaction-item:last-child {
  border-bottom: none;
}

.t-icon {
  width: 40px;
  height: 40px;
  background: #f7fafc;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin-right: 16px;
}

.t-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.t-name {
  font-size: 14px;
  font-weight: 600;
}

.t-date {
  font-size: 12px;
  color: #718096;
}

.t-amount {
  font-weight: 700;
  font-size: 14px;
}

.t-amount.negative {
  color: #e53e3e;
}

.t-amount.positive {
  color: #48bb78;
}
</style>
