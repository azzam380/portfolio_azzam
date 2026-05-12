<template>
  <div class="app-layout">
    <div class="background-decorations">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
    </div>
    
    <Sidebar />
    
    <main class="main-content" :class="{ 'expanded': isSidebarExpanded }">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import { isSidebarExpanded } from './composables/useSidebar'
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

@media (min-width: 1024px) {
  .app-layout {
    flex-direction: row;
  }
}

.main-content {
  flex: 1;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 5rem; /* Space for mobile bottom nav */
  position: relative;
  overflow-x: hidden;
}

@media (min-width: 1024px) {
  .main-content {
    margin-left: 88px; /* Width of the mini desktop sidebar */
    padding-bottom: 0;
    transition: margin-left 0.3s ease;
  }
  .main-content.expanded {
    margin-left: 280px; /* Width of the expanded sidebar */
  }
}

.background-decorations {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: -10;
}
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  z-index: -1;
  animation: blob-move 20s infinite alternate;
}
.blob-1 {
  width: 500px; height: 500px; top: -100px; right: -100px; background-color: rgba(79, 70, 229, 0.1);
}
.blob-2 {
  width: 400px; height: 400px; bottom: 10%; left: -100px; animation-delay: -5s; background-color: rgba(2, 132, 199, 0.1);
}
@keyframes blob-move {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(50px, 100px) scale(1.1); }
}

/* Page Transition */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
