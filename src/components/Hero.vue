<template>
  <section id="home" class="hero-section" ref="sectionRef">
    <div class="container hero-container">
      <div class="hero-content" ref="contentRef">
        <div class="status-badge">
          <span class="status-dot-container">
            <span class="status-dot-ping"></span>
            <span class="status-dot"></span>
          </span>
          {{ t.hero.status }}
        </div>

        <h1 class="hero-title">
          Azzam<br />
          <span class="gradient-text">{{ t.hero.role }}</span>
        </h1>

        <p class="hero-desc">
          {{ t.hero.desc }}<span class="text-white font-bold">Flutter</span> & <span class="text-white font-bold">Laravel</span>.
        </p>

        <div class="hero-actions">
          <router-link to="/contact" class="btn-primary hero-btn">{{ t.hero.contact }}</router-link>
          <router-link to="/experience" class="btn-secondary hero-btn">{{ t.hero.project }}</router-link>
        </div>

        <div class="hero-stats">
          <div class="avatar-group">
            <div class="avatar">AS</div>
            <div class="avatar">MD</div>
            <div class="avatar bg-indigo">+12</div>
          </div>
          <p class="stat-text">
            {{ t.hero.trusted }} <span class="text-white">15+ {{ t.hero.clients }}</span> {{ t.hero.institutions }}
          </p>
        </div>
      </div>

      <div class="hero-image" ref="imageRef">
        <div class="image-wrapper">
          <div class="bg-shape shape-indigo floating"></div>
          <div class="bg-shape shape-sky floating" style="animation-delay: -1.5s;"></div>

          <div class="image-card glass-card group">
            <img src="/images/WhatsApp Image 2026-01-10 at 19.33.54.jpeg" alt="Azzam" class="profile-img" />
            <div class="image-overlay">
              <p class="overlay-text">Muhammad Azzam</p>
            </div>
          </div>

          <!-- Floating Badges -->
          <div class="badge-float badge-top floating">
            <Code2Icon class="icon text-indigo" />
          </div>
          <div class="badge-float badge-bottom floating" style="animation-delay: -2s;">
            <SmartphoneIcon class="icon text-sky" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Code2 as Code2Icon, Smartphone as SmartphoneIcon } from 'lucide-vue-next'
import gsap from 'gsap'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const contentRef = ref(null)
const imageRef = ref(null)

onMounted(() => {
  gsap.fromTo(contentRef.value.children, 
    { y: 30, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
  )
  gsap.fromTo(imageRef.value, 
    { y: 30, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.8, delay: 0.4, ease: 'power3.out' }
  )
})
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 4rem 1.5rem 6rem 1.5rem;
}

.hero-container {
  margin: auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  width: 100%;
  max-width: 72rem;
}

@media (min-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  background-color: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.2);
  color: var(--indigo-400);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  align-self: flex-start;
}

.status-dot-container {
  position: relative;
  display: flex;
  width: 0.5rem;
  height: 0.5rem;
}

.status-dot-ping {
  position: absolute;
  display: inline-flex;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: var(--indigo-400);
  opacity: 0.75;
  animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.status-dot {
  position: relative;
  display: inline-flex;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  background-color: var(--indigo-500);
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.hero-title {
  font-size: 2.25rem;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.05em;
}

@media (min-width: 640px) {
  .hero-title { font-size: 3rem; }
}

@media (min-width: 768px) {
  .hero-title { font-size: 4.5rem; }
}

@media (min-width: 1024px) {
  .hero-title { font-size: 6rem; }
}

.hero-desc {
  color: var(--text-secondary);
  font-size: 1.125rem;
  max-width: 32rem;
  line-height: 1.625;
  font-weight: 500;
}

@media (min-width: 768px) {
  .hero-desc { font-size: 1.25rem; }
}

.hero-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

@media (min-width: 640px) {
  .hero-actions {
    flex-direction: row;
  }
}

.hero-btn {
  width: 100%;
}

@media (min-width: 640px) {
  .hero-btn { width: auto; }
}

.hero-stats {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 2rem;
}

@media (min-width: 640px) {
  .hero-stats {
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
  }
}

.avatar-group {
  display: flex;
  margin-left: 0.75rem;
}

.avatar {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 2px solid var(--slate-900);
  background-color: var(--slate-800);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.75rem;
  margin-left: -0.75rem;
  color: white;
}

.avatar.bg-indigo {
  background-color: var(--indigo-600);
}

.stat-text {
  font-size: 0.875rem;
  color: var(--text-muted);
  font-weight: 500;
}

.hero-image {
  display: flex;
  justify-content: center;
}

.image-wrapper {
  position: relative;
  width: 18rem;
  height: 18rem;
}

@media (min-width: 1024px) {
  .image-wrapper {
    width: 28rem;
    height: 28rem;
  }
}

.bg-shape {
  position: absolute;
  inset: 0;
  border-radius: 2rem;
  opacity: 0.2;
}

.shape-indigo {
  background-color: var(--indigo-600);
  transform: rotate(6deg);
}

.shape-sky {
  background-color: var(--sky-600);
  transform: rotate(-3deg);
}

.image-card {
  position: relative;
  z-index: 10;
  border-radius: 2.5rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.05);
  transition: transform 0.7s;
}

.image-card:hover .profile-img {
  transform: scale(1);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.8), transparent);
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  align-items: flex-end;
  padding: 2rem;
}

.image-card:hover .image-overlay {
  opacity: 1;
}

.overlay-text {
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
}

.badge-float {
  position: absolute;
  padding: 1rem;
  background: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(12px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  z-index: 20;
}

.badge-top {
  top: -1rem;
  right: -1rem;
}

.badge-bottom {
  bottom: -1rem;
  left: -1rem;
}

@media (min-width: 768px) {
  .badge-top {
    top: -2rem;
    right: -2rem;
  }
  .badge-bottom {
    bottom: -2rem;
    left: -2rem;
  }
}

.icon {
  width: 1.5rem;
  height: 1.5rem;
}

@media (min-width: 768px) {
  .icon {
    width: 2rem;
    height: 2rem;
  }
}

.text-indigo { color: var(--indigo-400); }
.text-sky { color: var(--sky-400); }
</style>
