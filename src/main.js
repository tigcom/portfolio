import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import './styles/main.css'
import '@blossom-carousel/vue/style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const routes = [
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
]

export const createApp = ViteSSG(
    App,
    {
        routes,
        scrollBehavior() {
            // Lenis handles scroll-to-top on route change via router.afterEach in App.vue
            return false
        }
    },
    ({ app, router, routes, isClient, initialState }) => {
        app.directive('reveal', {
            getSSRProps() { return {} },
            mounted(el) {
                if (!isClient) return
                const delay = parseFloat(el.dataset.delay || 0)
                gsap.set(el, { opacity: 0, y: 30 })
                ScrollTrigger.create({
                    trigger: el, start: 'top 88%', once: true,
                    onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 0.8, delay, ease: 'power3.out' })
                })
            }
        })

        // Page title per route
        router.afterEach((to) => {
            if (isClient) {
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
            }
        })
    }
)
