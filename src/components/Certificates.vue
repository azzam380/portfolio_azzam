<template>
  <section id="certificates" class="page-container bg-slate-900-20">
    <div class="container">
      <div class="header-flex" ref="headerRef">
        <div class="header-text">
          <h2 class="section-subtitle">{{ t.certificates.subtitle }}</h2>
          <h3 class="section-title">{{ t.certificates.title }}</h3>
          <p class="section-desc">{{ t.certificates.desc }}</p>
        </div>
      </div>

      <div class="cert-grid" ref="gridRef">
        <div v-for="(cert, index) in certificates" :key="index" class="cert-card glass-card group">
          <div class="cert-image-wrapper">
            <img :src="cert.image" :alt="cert.title" class="cert-image" />
            <div class="cert-overlay">
              <button class="view-btn">
                <EyeIcon class="icon" />
              </button>
            </div>
          </div>
          <div class="cert-content">
            <span class="cert-meta">{{ cert.issuer }} • {{ cert.year }}</span>
            <h4 class="cert-title">{{ cert.title }}</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Eye as EyeIcon } from 'lucide-vue-next'
import gsap from 'gsap'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const headerRef = ref(null)
const gridRef = ref(null)

const certificates = [
  { title: 'Belajar Dasar AI', issuer: 'Dicoding', year: '2025', image: '/images/Belajar Dasar AI.png' },
  { title: 'Dasar Pemrograman Web', issuer: 'Dicoding', year: '2025', image: '/images/Sertifikat Permrogaman Web.png' },
  { title: 'Front-End Web Pemula', issuer: 'Dicoding', year: '2025', image: '/images/Sertifikat Membuat Front-End Web untuk Pemula.png' },
  { title: 'Pemrograman JavaScript', issuer: 'Dicoding', year: '2025', image: '/images/Sertifikat JS.png' },
  { title: 'Pemrograman Dart', issuer: 'Dicoding', year: '2025', image: '/images/Memulai Permrogaman Dengan Dart.png' },
  { title: 'App Flutter Pemula', issuer: 'Dicoding', year: '2025', image: '/images/Membuat Aplikasi Flutter Pemula.png' },
]

onMounted(() => {
  gsap.fromTo(headerRef.value, 
    { y: 30, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
  )

  gsap.fromTo('.cert-card', 
    { y: 50, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
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

.bg-slate-900-20 {
  background-color: rgba(15, 23, 42, 0.2);
}

.header-flex {
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
}

@media (min-width: 768px) {
  .header-flex {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
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

.cert-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 640px) {
  .cert-grid { grid-template-columns: 1fr 1fr; }
}

@media (min-width: 1024px) {
  .cert-grid { grid-template-columns: repeat(3, 1fr); }
}

.cert-card {
  overflow: hidden;
  border-radius: 2rem;
}

.cert-image-wrapper {
  height: 14rem;
  background-color: var(--slate-800);
  position: relative;
  overflow: hidden;
}

.cert-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s;
}

.group:hover .cert-image {
  transform: scale(1.1);
}

.cert-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(15, 23, 42, 0.6);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.group:hover .cert-overlay {
  opacity: 1;
}

.view-btn {
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.view-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.icon {
  width: 1.5rem;
  height: 1.5rem;
}

.cert-content {
  padding: 2rem;
}

.cert-meta {
  font-size: 0.75rem;
  color: var(--indigo-400);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.cert-title {
  font-weight: 700;
  font-size: 1.25rem;
  margin-top: 0.5rem;
}
</style>
