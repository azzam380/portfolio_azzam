<template>
  <section id="experience" class="page-container bg-slate-900-20">
    <div class="container exp-container">
      <div class="header-center" ref="headerRef" v-if="!selectedExp">
        <h2 class="section-subtitle">{{ t.experience.subtitle }}</h2>
        <h3 class="section-title">
          {{ t.experience.title1 }}<span class="text-indigo-500">{{ t.experience.title2 }}</span>
        </h3>
      </div>

      <!-- Grid View -->
      <div class="cert-grid" ref="gridRef" v-if="!selectedExp">
        <div v-for="(exp, index) in experiences" :key="index" class="cert-card glass-card group" @click="openDetail(exp)">
          <div class="cert-image-wrapper">
            <img :src="exp.image" :alt="exp.role" class="cert-image" />
            <div class="cert-overlay">
              <button class="view-btn">
                <EyeIcon class="icon" />
              </button>
            </div>
          </div>
          <div class="cert-content">
            <span class="cert-meta">{{ exp.company }} • {{ exp.period }}</span>
            <h4 class="cert-title">{{ exp.role }}</h4>
          </div>
        </div>
      </div>

      <!-- Detail View -->
      <div v-else class="detail-view" ref="detailRef">
        <button class="back-btn glass" @click="closeDetail">
          <ArrowLeftIcon class="icon-sm" /> {{ t.experience.back }}
        </button>
        
        <div class="detail-layout">
          <div class="detail-left">
            <div class="detail-image-wrapper glass-card">
              <img :src="selectedExp.image" :alt="selectedExp.role" class="detail-cover" />
            </div>
          </div>
          <div class="detail-right glass-card">
            <span class="period-badge">{{ selectedExp.period }}</span>
            <h3 class="detail-role">{{ selectedExp.role }}</h3>
            <p class="company-name">
              <component :is="selectedExp.locationIcon" class="icon-sm" /> {{ selectedExp.company }}
            </p>
            
            <div class="detail-desc">
              <p v-for="(p, pIndex) in selectedExp.paragraphs" :key="pIndex" class="desc-text">{{ p }}</p>
              
              <h4 class="task-title" v-if="selectedExp.list && selectedExp.list.length">{{ t.experience.responsibility }}</h4>
              <ul class="task-list">
                <li v-for="(item, iIndex) in selectedExp.list" :key="iIndex">{{ item }}</li>
              </ul>
              
              <div v-if="selectedExp.tech" class="tech-box">
                <CodeIcon class="icon-sm text-indigo-400" />
                <p class="tech-text">{{ selectedExp.tech }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, nextTick, computed } from 'vue'
import { Briefcase as BriefcaseIcon, MapPin as MapPinIcon, Globe as GlobeIcon, Building2 as Building2Icon, Eye as EyeIcon, ArrowLeft as ArrowLeftIcon, Code as CodeIcon } from 'lucide-vue-next'
import gsap from 'gsap'
import { useLanguage } from '../composables/useLanguage'

const { t, currentLocale } = useLanguage()

const headerRef = ref(null)
const gridRef = ref(null)
const detailRef = ref(null)
const selectedExp = ref(null)

const experiencesId = [
  {
    period: 'Pengalaman Berharga',
    role: 'Full-Stack Web Developer',
    company: 'Pondok Pesantren Abu Hurairah Mataram',
    icon: BriefcaseIcon,
    locationIcon: MapPinIcon,
    image: '/images/IDNLOMBOK.jpg',
    paragraphs: [
      'Berangkat ke Mataram, Lombok, tanpa modal dan kepastian kerja merupakan ujian ketahanan terbesar saya sebagai Software Engineering student. Setelah menghadapi pembatalan kerja sepihak di hari keberangkatan, saya memimpin tim untuk melakukan networking dan gerilya mencari peluang di lokasi baru.',
      'Di hari ketiga, kami dipercaya oleh Pondok Pesantren Abu Hurairah Mataram untuk membangun Website ISO (Sistem Manajemen Data Terpusat). Dalam waktu kurang dari 4 hari, kami berhasil merancang logikanya, membangun sistem manajemen berbasis hak akses untuk Unit Rumah Tangga, dan menyelesaikan proyek tepat waktu.'
    ],
    list: [
      'Memimpin tim dalam mencari peluang kerja secara mandiri di lokasi baru.',
      'Merancang dan membangun Website ISO (Sistem Manajemen Data Terpusat).',
      'Membangun sistem manajemen berbasis hak akses untuk Unit Rumah Tangga dalam waktu < 4 hari.',
      'Mengelola krisis, komunikasi profesional, dan kerja sama tim di bawah tekanan target yang nyata.'
    ],
    tech: 'Pengalaman ini tidak hanya mengasah kemampuan teknis saya dalam coding, tetapi juga membuktikan kemampuan manajemen krisis, komunikasi profesional, dan kerja tim yang solid di bawah tekanan target yang nyata.',
    expanded: false
  },
  {
    period: '2026 — Sekarang',
    role: 'Full-Stack Developer',
    company: 'Memento Game Studio (Remote)',
    icon: BriefcaseIcon,
    locationIcon: GlobeIcon,
    image: '/images/MGS.png',
    paragraphs: [
      'Landing page interaktif untuk Memento Game Studio yang dibangun dengan Vue 3 dan Vite. Navigasi utama menggunakan Vue Router, dengan halaman Home, Info, Work, Play, dan Service.'
    ],
    list: [
      'Home: game-container dengan kartu navigasi interaktif, hover animation, dan transisi halaman.',
      'Info: panel informasi interaktif untuk Mission, Location, dan Get in touch, lengkap dengan animasi transisi dan form kontak.',
      'Work: galeri portofolio berisi tiga proyek utama yang menampilkan detail saat kartu diklik.',
      'Service: kartu layanan fanned layout dengan modal overlay detail layanan.',
      'Play Area: mini-game dan puzzle dengan timer, skor, grid, input pengguna, serta efek klik dan partikel.'
    ],
    tech: 'Teknologi utama: Vue 3, vue-router, Vite, GSAP, serta dukungan backend sederhana menggunakan Express, CORS, dan body-parser. Desain fokus pada interaksi visual, transisi halus, dan pengalaman pengguna imersif.',
    expanded: false
  },
  {
    period: '2025 — 2026',
    role: 'Ujikom Web Developer',
    company: 'PT. Krisan Kalindo Utama',
    icon: BriefcaseIcon,
    locationIcon: Building2Icon,
    image: '/images/KKU.png',
    paragraphs: [
      'Aplikasi e-commerce berbasis Laravel 12 dengan fitur pengguna dan admin. Backend menggunakan PHP 8.2, Laravel, Vite, dan Tailwind CSS.'
    ],
    list: [
      'Keranjang belanja untuk pengguna terautentikasi',
      'Pembuatan pesanan dengan upload surat perusahaan',
      'Notifikasi pesanan otomatis dikirim ke WhatsApp admin',
      'Halaman riwayat dan detail pesanan pengguna',
      'Panel admin untuk CRUD produk dan update status pesanan'
    ],
    tech: 'Menunjukkan kemampuan membangun alur pemesanan online lengkap dengan relasi Eloquent, middleware auth/admin, file upload, dan integrasi API WhatsApp.',
    expanded: false
  }
]

const experiencesEn = [
  {
    period: 'Valuable Experience',
    role: 'Full-Stack Web Developer',
    company: 'Pondok Pesantren Abu Hurairah Mataram',
    icon: BriefcaseIcon,
    locationIcon: MapPinIcon,
    image: '/images/IDNLOMBOK.jpg',
    paragraphs: [
      'Departing to Mataram, Lombok, without capital or job certainty was my greatest endurance test as a Software Engineering student. After facing a unilateral job cancellation on the day of departure, I led the team to network and guerrilla-hunt for opportunities in a new location.',
      'On the third day, we were trusted by Pondok Pesantren Abu Hurairah Mataram to build an ISO Website (Centralized Data Management System). In less than 4 days, we successfully designed the logic, built a role-based management system for the Household Unit, and completed the project on time.'
    ],
    list: [
      'Led the team in independently seeking job opportunities in a new location.',
      'Designed and built the ISO Website (Centralized Data Management System).',
      'Built a role-based access management system for the Household Unit in < 4 days.',
      'Managed crisis, professional communication, and teamwork under real target pressure.'
    ],
    tech: 'This experience not only honed my technical coding skills, but also proved my crisis management abilities, professional communication, and solid teamwork under real target pressure.',
    expanded: false
  },
  {
    period: '2026 — Present',
    role: 'Full-Stack Developer',
    company: 'Memento Game Studio (Remote)',
    icon: BriefcaseIcon,
    locationIcon: GlobeIcon,
    image: '/images/MGS.png',
    paragraphs: [
      'Interactive landing page for Memento Game Studio built with Vue 3 and Vite. Main navigation uses Vue Router, featuring Home, Info, Work, Play, and Service pages.'
    ],
    list: [
      'Home: game-container with interactive navigation cards, hover animations, and page transitions.',
      'Info: interactive information panels for Mission, Location, and Get in touch, complete with transition animations and a contact form.',
      'Work: portfolio gallery containing three main projects that show details when cards are clicked.',
      'Service: service cards in a fanned layout with a service detail overlay modal.',
      'Play Area: mini-games and puzzles with timer, score, grid, user input, as well as click and particle effects.'
    ],
    tech: 'Core technologies: Vue 3, vue-router, Vite, GSAP, and simple backend support using Express, CORS, and body-parser. Design focuses on visual interaction, smooth transitions, and immersive user experiences.',
    expanded: false
  },
  {
    period: '2025 — 2026',
    role: 'Ujikom Web Developer',
    company: 'PT. Krisan Kalindo Utama',
    icon: BriefcaseIcon,
    locationIcon: Building2Icon,
    image: '/images/KKU.png',
    paragraphs: [
      'E-commerce application based on Laravel 12 with user and admin features. Backend uses PHP 8.2, Laravel, Vite, and Tailwind CSS.'
    ],
    list: [
      'Shopping cart for authenticated users',
      'Order creation with company letter upload',
      'Automated order notifications sent to admin WhatsApp',
      'User order history and detail pages',
      'Admin panel for product CRUD and order status updates'
    ],
    tech: 'Demonstrates the ability to build a complete online ordering workflow with Eloquent relationships, auth/admin middleware, file uploads, and WhatsApp API integration.',
    expanded: false
  }
]

const experiences = computed(() => {
  return currentLocale.value === 'id' ? experiencesId : experiencesEn
})

const initGridAnimation = () => {
  gsap.fromTo(headerRef.value, 
    { y: 30, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
  )

  gsap.fromTo('.cert-card', 
    { y: 50, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
  )
}

onMounted(() => {
  initGridAnimation()
})

const openDetail = async (exp) => {
  selectedExp.value = exp
  await nextTick()
  
  // Animate detail view entry
  gsap.fromTo('.back-btn',
    { x: -20, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
  )
  
  gsap.fromTo('.detail-left',
    { x: -50, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.1 }
  )
  
  gsap.fromTo('.detail-right',
    { x: 50, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.2 }
  )
  
  // Scroll to top of section
  const el = document.getElementById('experience')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const closeDetail = async () => {
  // Animate exit
  gsap.to('.detail-layout', {
    y: 30,
    opacity: 0,
    duration: 0.4,
    ease: 'power2.in',
    onComplete: () => {
      selectedExp.value = null
      nextTick(() => {
        initGridAnimation()
      })
    }
  })
}
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  padding: 4rem 1.5rem 6rem 1.5rem;
  display: flex;
  flex-direction: column;
}

.bg-slate-900-20 {
  background-color: rgba(15, 23, 42, 0.2);
}

.exp-container {
  margin: auto;
  width: 100%;
}

.header-center {
  text-align: center;
  margin-bottom: 4rem;
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

/* Grid Layout (Like Certificates) */
.cert-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
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
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cert-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
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

.icon-sm {
  width: 1rem;
  height: 1rem;
  display: inline-block;
  margin-right: 0.25rem;
  vertical-align: text-bottom;
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
  color: white;
}

/* Detail View Layout */
.detail-view {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background-color: rgba(30, 41, 59, 0.5);
  color: white;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 2rem;
  transition: background-color 0.3s, transform 0.3s;
  border: 1px solid rgba(255,255,255,0.1);
}

.back-btn:hover {
  background-color: rgba(99, 102, 241, 0.2);
  transform: translateX(-5px);
}

.detail-layout {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .detail-layout {
    flex-direction: row;
    align-items: flex-start;
  }
}

.detail-left {
  flex: 1;
  width: 100%;
}

@media (min-width: 1024px) {
  .detail-left {
    position: sticky;
    top: 6rem; /* Stays fixed when scrolling the text on the right */
  }
}

.detail-image-wrapper {
  border-radius: 1.5rem;
  overflow: hidden;
  padding: 0.5rem;
  background-color: rgba(30, 41, 59, 0.4);
}

.detail-cover {
  width: 100%;
  height: auto;
  border-radius: 1rem;
  object-fit: cover;
  aspect-ratio: 4/3;
}

.detail-right {
  flex: 1.5;
  padding: 2rem;
  border-radius: 1.5rem;
}

@media (min-width: 768px) {
  .detail-right {
    padding: 3rem;
  }
}

.period-badge {
  display: inline-block;
  padding: 0.35rem 1rem;
  background-color: rgba(99, 102, 241, 0.15);
  color: var(--indigo-400);
  font-size: 0.875rem;
  font-family: monospace;
  font-weight: 600;
  border-radius: 9999px;
  margin-bottom: 1.5rem;
}

.detail-role {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: white;
}

.company-name {
  color: #a5b4fc;
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
}

.detail-desc {
  color: var(--slate-300);
  font-size: 1.05rem;
  line-height: 1.7;
}

.desc-text {
  margin-bottom: 1.5rem;
}

.task-title {
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.task-list {
  list-style-type: disc;
  list-style-position: inside;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
  padding-left: 0.5rem;
}

.tech-box {
  background-color: rgba(15, 23, 42, 0.4);
  padding: 1.5rem;
  border-radius: 1rem;
  border: 1px solid rgba(99, 102, 241, 0.2);
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 2rem;
}

.tech-text {
  font-size: 0.95rem;
  color: var(--slate-400);
}
</style>
