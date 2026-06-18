import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './styles/main.css'

// Route views
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ProjectDetailView from './views/ProjectDetailView.vue'
import ProjectDetailInternetBanking from './views/ProjectDetailInternetBanking.vue' // Import the new component
import ContactView from './views/ContactView.vue'
import MarketplaceView from './views/MarketplaceView.vue'
import MarketplaceDetailView from './views/MarketplaceDetailView.vue'

// Setup Router
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name: 'home', component: HomeView },
        { path: '/about', name: 'about', component: AboutView },
        { path: '/projects', name: 'projects', component: ProjectsView },
        // Existing route for generic project detail
        { path: '/projects/:slug', name: 'project-detail', component: ProjectDetailView },
        // New route for Internet Banking detail page
        { path: '/projects/internet-banking', name: 'project-detail-internet-banking', component: ProjectDetailInternetBanking },
        { path: '/contact', name: 'contact', component: ContactView },
        // Marketplace routes
        { path: '/marketplace', name: 'marketplace', component: MarketplaceView },
        { path: '/marketplace/:slug', name: 'marketplace-detail', component: MarketplaceDetailView },
    ],
    scrollBehavior() {
        // Lenis handles scroll-to-top on route change via router.afterEach in App.vue
        return false
    }
})

// Page title per route
router.afterEach((to) => {
    const titles = {
        home: 'Phuc Khang — Creative Developer',
        about: 'About | Phuc Khang',
        projects: 'Projects | Phuc Khang',
        'project-detail': 'Project | Phuc Khang',
        'project-detail-internet-banking': 'KBIZ Internet Banking | Phuc Khang', // New title for specific project
        contact: 'Contact | Phuc Khang',
        marketplace: 'Marketplace | Phuc Khang',
        'marketplace-detail': 'Template | Phuc Khang',
    }
    document.title = titles[to.name] || 'Phuc Khang'
})

createApp(App).use(router).mount('#app')
