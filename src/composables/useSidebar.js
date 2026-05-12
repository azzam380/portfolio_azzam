import { ref } from 'vue'

export const isSidebarExpanded = ref(false)

export const toggleSidebar = () => {
  isSidebarExpanded.value = !isSidebarExpanded.value
}
