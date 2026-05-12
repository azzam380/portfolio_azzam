<template>
  <section id="skills" class="page-container bg-slate-900-40">
    <div class="container text-center">
      <div class="skills-header" ref="headerRef">
        <h2 class="section-subtitle">{{ t.skills.subtitle }}</h2>
        <h3 class="section-title">
          {{ t.skills.title1 }}<span class="gradient-text">{{ t.skills.title2 }}</span>
        </h3>
        <p class="section-desc">
          {{ t.skills.desc }}
        </p>
      </div>

      <div class="skills-grid" ref="cardsRef">
        <div v-for="(skill, index) in skills" :key="index" class="glass-card skill-card">
          <div :class="['icon-box', `bg-${skill.color}`, `hover-bg-${skill.color}`]">
            <component :is="skill.icon" class="icon" :class="`text-${skill.color}`" />
          </div>
          <h4 class="skill-name">{{ skill.name }}</h4>
          <div class="progress-bar-container">
            <div class="progress-fill" :class="`bg-fill-${skill.color}`" :style="{ width: skill.level }"></div>
          </div>
          <p class="skill-category">
            {{ skill.category }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Code2 as Code2Icon, FileJson as FileJsonIcon, Layout as LayoutIcon, Database as DatabaseIcon, Server as ServerIcon, Layers as LayersIcon, Atom as AtomIcon, Wind as WindIcon } from 'lucide-vue-next'
import gsap from 'gsap'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const headerRef = ref(null)
const cardsRef = ref(null)

const skills = [
  { name: 'HTML & CSS', level: '95%', category: 'Expert', color: 'orange', icon: Code2Icon },
  { name: 'JavaScript', level: '85%', category: 'Advanced', color: 'yellow', icon: FileJsonIcon },
  { name: 'Flutter', level: '75%', category: 'Intermediate', color: 'sky', icon: LayoutIcon },
  { name: 'Backend Dev', level: '80%', category: 'Intermediate', color: 'indigo', icon: DatabaseIcon },
  { name: 'Laravel', level: '85%', category: 'Advanced', color: 'red', icon: ServerIcon },
  { name: 'Vue.js', level: '80%', category: 'Advanced', color: 'emerald', icon: LayersIcon },
  { name: 'React / Next.js', level: '80%', category: 'Advanced', color: 'sky', icon: AtomIcon },
  { name: 'Tailwind CSS', level: '90%', category: 'Advanced', color: 'cyan', icon: WindIcon },
]

onMounted(() => {
  gsap.fromTo(headerRef.value, 
    { y: 30, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
  )

  gsap.fromTo('.skill-card', 
    { y: 50, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
  )
})
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 4rem 1.5rem 6rem 1.5rem;
}

.container {
  margin: auto;
  width: 100%;
}

.bg-slate-900-40 {
  background-color: rgba(15, 23, 42, 0.4);
}

.text-center {
  text-align: center;
}

.skills-header {
  max-width: 42rem;
  margin: 0 auto 5rem auto;
}

.section-subtitle {
  color: var(--indigo-500);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 900;
  line-height: 1.25;
}

@media (min-width: 768px) {
  .section-title { font-size: 3rem; }
}

.section-desc {
  color: var(--text-secondary);
  font-size: 1.125rem;
  margin-top: 1rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  justify-items: center;
}

@media (min-width: 640px) {
  .skills-grid { grid-template-columns: repeat(2, 1fr); gap: 2rem; }
}

@media (min-width: 1024px) {
  .skills-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: 1280px) {
  .skills-grid { grid-template-columns: repeat(4, 1fr); }
}

.skill-card {
  width: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 640px) {
  .skill-card { padding: 2rem; }
}

@media (min-width: 1024px) {
  .skill-card { padding: 2.5rem; }
}

.icon-box {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: background-color 0.3s;
}

@media (min-width: 768px) {
  .icon-box {
    width: 4rem;
    height: 4rem;
    margin-bottom: 2rem;
  }
}

.icon {
  width: 1.75rem;
  height: 1.75rem;
}

@media (min-width: 768px) {
  .icon {
    width: 2rem;
    height: 2rem;
  }
}

.skill-name {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

@media (min-width: 768px) {
  .skill-name { font-size: 1.25rem; }
}

.progress-bar-container {
  width: 100%;
  background-color: var(--slate-800);
  height: 0.375rem;
  border-radius: 9999px;
  margin-top: 1rem;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 9999px;
}

.skill-category {
  font-size: 0.625rem;
  color: var(--text-muted);
  margin-top: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

@media (min-width: 768px) {
  .skill-category { font-size: 0.75rem; }
}

/* Dynamic Colors */
.bg-orange { background-color: rgba(249, 115, 22, 0.1); }
.skill-card:hover .hover-bg-orange { background-color: rgba(249, 115, 22, 0.2); }
.text-orange { color: #f97316; }
.bg-fill-orange { background-color: #f97316; }

.bg-yellow { background-color: rgba(234, 179, 8, 0.1); }
.skill-card:hover .hover-bg-yellow { background-color: rgba(234, 179, 8, 0.2); }
.text-yellow { color: #eab308; }
.bg-fill-yellow { background-color: #eab308; }

.bg-sky { background-color: rgba(14, 165, 233, 0.1); }
.skill-card:hover .hover-bg-sky { background-color: rgba(14, 165, 233, 0.2); }
.text-sky { color: #0ea5e9; }
.bg-fill-sky { background-color: #0ea5e9; }

.bg-indigo { background-color: rgba(99, 102, 241, 0.1); }
.skill-card:hover .hover-bg-indigo { background-color: rgba(99, 102, 241, 0.2); }
.text-indigo { color: #6366f1; }
.bg-fill-indigo { background-color: #6366f1; }

.bg-red { background-color: rgba(239, 68, 68, 0.1); }
.skill-card:hover .hover-bg-red { background-color: rgba(239, 68, 68, 0.2); }
.text-red { color: #ef4444; }
.bg-fill-red { background-color: #ef4444; }

.bg-emerald { background-color: rgba(16, 185, 129, 0.1); }
.skill-card:hover .hover-bg-emerald { background-color: rgba(16, 185, 129, 0.2); }
.text-emerald { color: #10b981; }
.bg-fill-emerald { background-color: #10b981; }

.bg-cyan { background-color: rgba(6, 182, 212, 0.1); }
.skill-card:hover .hover-bg-cyan { background-color: rgba(6, 182, 212, 0.2); }
.text-cyan { color: #06b6d4; }
.bg-fill-cyan { background-color: #06b6d4; }
</style>
