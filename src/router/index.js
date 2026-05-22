import { createRouter, createWebHistory } from 'vue-router'
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Skills from '../components/Skills.vue'
import Experience from '../components/Experience.vue'
import Project from '../components/Project.vue'
import Certificates from '../components/Certificates.vue'
import Contact from '../components/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Hero
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    },
    {
      path: '/certificates',
      name: 'certificates',
      component: Certificates
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
