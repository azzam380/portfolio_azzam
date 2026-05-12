<template>
  <section id="about" class="page-container">
    <div class="container">
      <div class="about-grid">
        <div class="about-image-col" ref="imageRef">
          <div class="image-wrapper group">
            <div class="glow-bg"></div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
              alt="Workspace"
              class="about-image shadow-2xl"
            />
          </div>
        </div>
        
        <div class="about-content" ref="contentRef">
          <div class="header-group">
            <h2 class="section-subtitle">{{ t.about.subtitle }}</h2>
            <h3 class="section-title">
              {{ t.about.title1 }}<span class="text-white">{{ t.about.title2 }}</span>{{ t.about.title3 }}
            </h3>
          </div>

          <p class="desc-text text-lg">
            {{ t.about.desc1_1 }}<span class="text-indigo-400">IDN Boarding School Solo</span>{{ t.about.desc1_2 }}<span class="text-white font-bold">'INDOPEDIA'</span>{{ t.about.desc1_3 }}
          </p>

          <p class="desc-text">
            {{ t.about.desc2 }}
          </p>

          <div class="stats-grid">
            <div class="stat-card glass-card">
              <h4 class="stat-value text-indigo-400">02+</h4>
              <p class="stat-label">{{ t.about.expYear }}</p>
            </div>
            <div class="stat-card glass-card">
              <h4 class="stat-value text-sky-400">20+</h4>
              <p class="stat-label">{{ t.about.projectDone }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const imageRef = ref(null)
const contentRef = ref(null)

onMounted(() => {
  gsap.fromTo(imageRef.value, 
    { y: 50, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
  )

  gsap.fromTo(contentRef.value, 
    { y: 50, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' }
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

.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
  }
}

.image-wrapper {
  position: relative;
}

.glow-bg {
  position: absolute;
  inset: -1rem;
  background: linear-gradient(to right, var(--indigo-500), var(--sky-500));
  border-radius: 1.5rem;
  opacity: 0.2;
  filter: blur(24px);
  transition: opacity 0.3s;
}

.group:hover .glow-bg {
  opacity: 0.3;
}

.about-image {
  position: relative;
  width: 100%;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: block;
}

.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.header-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.section-subtitle {
  color: var(--indigo-500);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.875rem;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 900;
  line-height: 1.25;
}

@media (min-width: 768px) {
  .section-title { font-size: 3rem; }
}

.desc-text {
  color: var(--text-secondary);
  line-height: 1.625;
}

.text-lg {
  font-size: 1.125rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 1rem;
}

@media (min-width: 640px) {
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.stat-card {
  padding: 1.5rem;
  text-align: center;
}

@media (min-width: 640px) {
  .stat-card {
    text-align: left;
  }
}

.stat-value {
  font-size: 1.875rem;
  font-weight: 900;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-muted);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.05em;
}

.text-indigo-400 { color: var(--indigo-400); }
.text-sky-400 { color: var(--sky-400); }
</style>
