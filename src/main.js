import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './styles/main.css'

// Route views
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ProjectDetailView from './views/ProjectDetailView.vue'
import ContactView from './views/ContactView.vue'

// Setup Router
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name: 'home', component: HomeView },
        { path: '/about', name: 'about', component: AboutView },
        { path: '/projects', name: 'projects', component: ProjectsView },
        { path: '/projects/:slug', name: 'project-detail', component: ProjectDetailView },
        { path: '/contact', name: 'contact', component: ContactView },
    ],
    scrollBehavior() {
        return { top: 0, behavior: 'instant' }
    }
})

// Page title per route
router.afterEach((to) => {
    const titles = {
        home: 'Minh Dev — Creative Developer',
        about: 'About | Minh Dev',
        projects: 'Projects | Minh Dev',
        'project-detail': 'Project | Minh Dev',
        contact: 'Contact | Minh Dev',
    }
    document.title = titles[to.name] || 'Minh Dev'
})

createApp(App).use(router).mount('#app')
