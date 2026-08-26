import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './styles/main.css'
import '@blossom-carousel/vue/style.css'

// Route views are lazy-loaded to keep the initial bundle small — the marketplace
// demo mini-apps and their kit are only fetched when a visitor opens a template.
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name: 'home', component: () => import('./views/HomeView.vue') },
        { path: '/about', name: 'about', component: () => import('./views/AboutView.vue') },
        { path: '/projects', name: 'projects', component: () => import('./views/ProjectsView.vue') },
        // Generic project detail (handles all projects, including internet-banking)
        { path: '/projects/:slug', name: 'project-detail', component: () => import('./views/ProjectDetailView.vue') },
        { path: '/contact', name: 'contact', component: () => import('./views/ContactView.vue') },
        // Marketplace routes
        { path: '/marketplace', name: 'marketplace', component: () => import('./views/MarketplaceView.vue') },
        { path: '/marketplace/:slug', name: 'marketplace-detail', component: () => import('./views/MarketplaceDetailView.vue') },
        { path: '/marketplace/:slug/demo/:page?', name: 'marketplace-demo', component: () => import('./views/MarketplaceDemoView.vue'), meta: { bare: true } },
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
        contact: 'Contact | Phuc Khang',
        marketplace: 'Marketplace | Phuc Khang',
        'marketplace-detail': 'Template | Phuc Khang',
        'marketplace-demo': 'Demo | Phuc Khang',
    }
    document.title = titles[to.name] || 'Phuc Khang'
})

createApp(App).use(router).mount('#app')
