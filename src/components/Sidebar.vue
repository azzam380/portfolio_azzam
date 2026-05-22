<template>
  <nav class="sidebar" :class="{ 'expanded': isSidebarExpanded }">
    <div class="sidebar-container">
      <div class="brand-container hidden-mobile">
        <router-link to="/" class="brand group" title="Portfolio">
          <span v-if="!isSidebarExpanded">P<span class="brand-highlight">.</span></span>
          <span v-else>PORT<span class="brand-highlight">FOLIO.</span></span>
        </router-link>
      </div>

      <button @click="toggleSidebar" class="toggle-btn hidden-mobile" aria-label="Toggle Sidebar">
        <ChevronRightIcon v-if="!isSidebarExpanded" class="icon toggle-icon" />
        <ChevronLeftIcon v-else class="icon toggle-icon" />
      </button>

      <div class="nav-links">
        <router-link to="/" class="nav-item" active-class="active">
          <HomeIcon class="icon" />
          <span class="nav-text hidden-mobile" v-show="isSidebarExpanded">{{ t.sidebar.home }}</span>
        </router-link>

        <router-link to="/about" class="nav-item" active-class="active">
          <UserIcon class="icon" />
          <span class="nav-text hidden-mobile" v-show="isSidebarExpanded">{{ t.sidebar.about }}</span>
        </router-link>

        <router-link to="/skills" class="nav-item" active-class="active">
          <Code2Icon class="icon" />
          <span class="nav-text hidden-mobile" v-show="isSidebarExpanded">{{ t.sidebar.skills }}</span>
        </router-link>

        <router-link to="/experience" class="nav-item" active-class="active">
          <BriefcaseIcon class="icon" />
          <span class="nav-text hidden-mobile" v-show="isSidebarExpanded">{{ t.sidebar.experience }}</span>
        </router-link>

        <router-link to="/project" class="nav-item" active-class="active">
          <FolderIcon class="icon" />
          <span class="nav-text hidden-mobile" v-show="isSidebarExpanded">{{ t.sidebar.project }}</span>
        </router-link>

        <router-link to="/certificates" class="nav-item" active-class="active">
          <AwardIcon class="icon" />
          <span class="nav-text hidden-mobile" v-show="isSidebarExpanded">{{ t.sidebar.certificates }}</span>
        </router-link>

        <router-link to="/contact" class="nav-item" active-class="active">
          <SendIcon class="icon" />
          <span class="nav-text hidden-mobile" v-show="isSidebarExpanded">{{ t.sidebar.contact }}</span>
        </router-link>
      </div>

      <div class="sidebar-footer hidden-mobile">
        <div class="social-links">
          <a href="https://github.com/azzam380" target="_blank" rel="noopener noreferrer" class="social-link"><GithubIcon class="social-icon" /></a>
          <a href="https://www.linkedin.com/in/muhammad-azzam-185610321/" target="_blank" rel="noopener noreferrer" class="social-link"><LinkedinIcon class="social-icon" /></a>
          <a href="https://www.instagram.com/azzamidn24/" target="_blank" rel="noopener noreferrer" class="social-link"><InstagramIcon class="social-icon" /></a>
        </div>

        <button @click="toggleLanguage" class="lang-toggle" :title="currentLocale === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'">
          <span :class="{ active: currentLocale === 'id' }">ID</span>
          <span class="separator">|</span>
          <span :class="{ active: currentLocale === 'en' }">EN</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { 
  Home as HomeIcon, 
  User as UserIcon, 
  Code2 as Code2Icon, 
  Briefcase as BriefcaseIcon, 
  Award as AwardIcon, 
  Send as SendIcon,
  Github as GithubIcon,
  Linkedin as LinkedinIcon,
  Instagram as InstagramIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Folder as FolderIcon
} from 'lucide-vue-next'
import { isSidebarExpanded, toggleSidebar } from '../composables/useSidebar'
import { useLanguage } from '../composables/useLanguage'

const { currentLocale, toggleLanguage, t } = useLanguage()
</script>

<style scoped>
/* Mobile First (Bottom Navigation) */
.sidebar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--slate-900);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 50;
  padding: 0.5rem 1rem;
}

.sidebar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.nav-links {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  color: var(--text-secondary);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
}

.nav-item:hover {
  color: white;
  background-color: rgba(255, 255, 255, 0.05);
}

.nav-item.active {
  color: var(--indigo-400);
  font-weight: 700;
}

.icon {
  width: 1.5rem;
  height: 1.5rem;
  transition: transform 0.3s;
}

.nav-item.active .icon {
  transform: scale(1.1);
}

.hidden-mobile {
  display: none;
}

/* Desktop Sidebar */
@media (min-width: 1024px) {
  .sidebar {
    bottom: auto;
    top: 0;
    left: 0;
    width: 88px; /* Mini Sidebar Width */
    height: 100vh;
    border-top: none;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    padding: 2.5rem 0; /* Remove horizontal padding for centering */
    transition: width 0.3s ease;
    position: fixed; /* Keep it fixed so it doesn't scroll */
  }

  .sidebar.expanded {
    width: 280px;
    padding: 2.5rem 1.5rem;
  }

  .sidebar-container {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center; /* Center items */
  }
  
  .sidebar.expanded .sidebar-container {
    align-items: stretch;
  }

  .hidden-mobile {
    display: block;
  }

  .brand-container {
    margin-bottom: 3rem;
    padding-left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
  }
  
  .sidebar.expanded .brand-container {
    justify-content: space-between;
    padding-left: 1rem;
    padding-right: 0.5rem;
  }

  .toggle-btn {
    position: absolute;
    top: 2rem;
    right: -16px; /* Outside the right edge */
    background-color: var(--indigo-600);
    border: 2px solid var(--slate-900);
    color: white;
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 50%;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 60;
  }

  .toggle-btn:hover {
    background-color: var(--indigo-500);
    transform: scale(1.1);
  }
  
  .toggle-icon {
    width: 1.25rem;
    height: 1.25rem;
  }

  .brand {
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: -0.05em;
    color: white;
    transition: all 0.3s ease;
  }
  
  .sidebar.expanded .brand {
    font-size: 1.5rem;
  }

  .brand-highlight {
    color: var(--indigo-500);
    transition: color 0.3s ease;
  }

  .group:hover .brand-highlight {
    color: var(--indigo-400);
  }

  .nav-links {
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    width: 100%;
    align-items: center;
  }
  
  .sidebar.expanded .nav-links {
    align-items: stretch;
  }

  .nav-item {
    flex-direction: row;
    justify-content: center;
    padding: 1rem;
    border-radius: 1rem;
    width: auto;
  }
  
  .sidebar.expanded .nav-item {
    justify-content: flex-start;
    gap: 1.25rem;
    width: 100%;
  }

  .nav-text {
    display: none; /* Hide text on desktop too */
  }
  
  .sidebar.expanded .nav-text {
    display: block;
    font-size: 1.125rem;
    font-weight: 500;
  }
  
  .nav-item.active .nav-text {
    font-weight: 700;
  }

  .icon {
    width: 1.75rem;
    height: 1.75rem;
  }

  .sidebar-footer {
    margin-top: auto;
    padding: 1.5rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
  
  .sidebar.expanded .sidebar-footer {
    align-items: flex-start;
    padding: 1.5rem;
  }

  .social-links {
    display: flex;
    flex-direction: column; /* Stack socials vertically */
    gap: 1.5rem;
  }
  
  .sidebar.expanded .social-links {
    flex-direction: row;
  }

  .social-link {
    color: var(--text-muted);
    transition: all 0.3s ease;
  }

  .social-link:hover {
    color: white;
  }

  .social-icon {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  .lang-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: rgba(30, 41, 59, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0.5rem 0.75rem;
    border-radius: 9999px;
    color: var(--text-muted);
    font-size: 0.75rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .lang-toggle:hover {
    background: rgba(255, 255, 255, 0.05);
    color: white;
  }

  .lang-toggle span.active {
    color: var(--indigo-400);
  }

  .lang-toggle .separator {
    color: var(--slate-600);
    font-weight: 400;
  }
}
</style>
