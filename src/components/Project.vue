<template>
  <section id="project" class="page-container bg-slate-900-20">
    <div class="container exp-container">
      <div class="header-center" ref="headerRef" v-if="!selectedExp">
        <h2 class="section-subtitle">{{ t.project.subtitle }}</h2>
        <h3 class="section-title">
          {{ t.project.title1 }}<span class="text-indigo-500">{{ t.project.title2 }}</span>
        </h3>
      </div>

      <!-- Grid View -->
      <div class="cert-grid" ref="gridRef" v-if="!selectedExp">
        <div v-for="(exp, index) in projects" :key="index" class="cert-card glass-card group" @click="openDetail(exp)">
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
          <ArrowLeftIcon class="icon-sm" /> {{ t.project.back }}
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
              
              <h4 class="task-title" v-if="selectedExp.list && selectedExp.list.length">{{ t.project.responsibility }}</h4>
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
import { Folder as FolderIcon, MapPin as MapPinIcon, Globe as GlobeIcon, Building2 as Building2Icon, Eye as EyeIcon, ArrowLeft as ArrowLeftIcon, Code as CodeIcon } from 'lucide-vue-next'
import gsap from 'gsap'
import { useLanguage } from '../composables/useLanguage'

const { t, currentLocale } = useLanguage()

const headerRef = ref(null)
const gridRef = ref(null)
const detailRef = ref(null)
const selectedExp = ref(null)

const projectsId = [
  {
    period: '2024 — 2027 (Pred.)',
    role: 'Software Developer',
    company: 'IDN Boarding School',
    icon: FolderIcon,
    locationIcon: MapPinIcon,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    paragraphs: [
      'Vehicle Booking & Monitoring System adalah aplikasi web untuk manajemen kendaraan operasional di perusahaan tambang. Admin dapat membuat permintaan pemesanan kendaraan yang kemudian diproses melalui alur persetujuan berjenjang oleh manager dan kepala cabang.',
      'Sistem menyediakan dashboard analytics untuk melihat pemakaian kendaraan, mencatat log aktivitas, dan mengekspor laporan pemesanan dalam format Excel.'
    ],
    list: [
      'Dashboard pemantauan pemakaian kendaraan.',
      'Form pemesanan kendaraan dengan data driver dan approver.',
      'Persetujuan multilevel (pending → level_1 → approved).',
      'Ekspor laporan pemesanan ke Excel.',
      'Role-based access untuk admin dan approver.',
      'Logging aktivitas audit.'
    ],
    tech: 'Teknologi yang digunakan: Laravel 12, PHP 8.3, MySQL, Tailwind CSS, Chart.js, dan Laravel Breeze untuk autentikasi.',
    expanded: false
  },
  {
    period: '2026 — 2026',
    role: 'Full-Stack Developer',
    company: 'TTS Master',
    icon: FolderIcon,
    locationIcon: GlobeIcon,
    image: '/images/TTS.png',
    paragraphs: [
      'TTS Master adalah aplikasi web untuk membuat dan memainkan Teka-Teki Silang modern. Proyek ini dibangun dengan Next.js, React, dan terintegrasi dengan Supabase.'
    ],
    list: [
      'Landing page interaktif dengan call-to-action jelas ke studio pembuatan.',
      'Autentikasi email dan OAuth bagi pengguna untuk membuat atau memainkan puzzle.',
      'Creator Studio untuk membuat puzzle baru, memasukkan kata dan petunjuk, lalu menghasilkan grid TTS secara otomatis.',
      'Algoritma generator crossword cerdas menggunakan pendekatan backtracking dan penempatan kata berdasarkan persimpangan huruf.',
      'Publikasi puzzle ke database agar dapat ditampilkan kembali di library untuk dimainkan.',
      'Dashboard puzzle dengan daftar kreasi terbaru, pencarian judul, dan antarmuka responsif.'
    ],
    tech: 'Teknologi utama: Next.js 15+ (App Router), React, Tailwind CSS, dan Supabase untuk autentikasi serta database. Desain UI menekankan interaksi visual, animasi halus, dan pengalaman pengguna yang modern.',
    expanded: false
  },
  {
    period: '2025 — 2026',
    role: 'Junior Web Developer',
    company: 'Kost Amanah',
    icon: FolderIcon,
    locationIcon: Building2Icon,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    paragraphs: [
      'Aplikasi platform booking kos online dibangun dengan Laravel. Pengguna dapat melihat daftar kos publik, mencari berdasarkan lokasi, serta membuka halaman detail setiap kos.',
      'Setelah login, customer dapat melakukan booking, memeriksa status transaksi, melihat riwayat, dan mengelola profil. Admin memiliki dashboard terpisah untuk mengelola kos dan transaksi dengan alur role-based.'
    ],
    list: [
      'CRUD kos lengkap: tambah, edit, hapus, dan kelola foto kos.',
      'Manajemen booking masuk dengan konfirmasi, penolakan, dan laporan PDF.',
      'Autentikasi Laravel standar dengan dukungan Socialite.',
      'Validasi input form dan upload gambar kos.',
      'Stok kamar otomatis berkurang saat transaksi dikonfirmasi.',
      'Halaman publik katalog kos dan detail kos yang responsif.'
    ],
    expanded: false
  }
]

const projectsEn = [
  {
    period: '2024 — 2027 (Est.)',
    role: 'Software Developer',
    company: 'IDN Boarding School',
    icon: FolderIcon,
    locationIcon: MapPinIcon,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    paragraphs: [
      'Vehicle Booking & Monitoring System is a web application for operational vehicle management in a mining company. Admins can create vehicle booking requests which are then processed through a multi-level approval workflow by managers and branch heads.',
      'The system provides an analytics dashboard to view vehicle usage, logs activities, and exports booking reports in Excel format.'
    ],
    list: [
      'Dashboard for monitoring vehicle usage.',
      'Vehicle booking form with driver and approver data.',
      'Multilevel approval (pending → level_1 → approved).',
      'Export booking reports to Excel.',
      'Role-based access for admins and approvers.',
      'Audit activity logging.'
    ],
    tech: 'Technologies used: Laravel 12, PHP 8.3, MySQL, Tailwind CSS, Chart.js, and Laravel Breeze for authentication.',
    expanded: false
  },
  {
    period: '2026 — 2026',
    role: 'Full-Stack Developer',
    company: 'TTS Master',
    icon: FolderIcon,
    locationIcon: GlobeIcon,
    image: '/images/TTS.png',
    paragraphs: [
      'TTS Master is a web application for creating and playing modern Crossword Puzzles. This project is built with Next.js, React, and integrated with Supabase.'
    ],
    list: [
      'Interactive landing page with clear call-to-action to the creation studio.',
      'Email and OAuth authentication for users to create or play puzzles.',
      'Creator Studio to create new puzzles, insert words and clues, then automatically generate the crossword grid.',
      'Smart crossword generator algorithm using backtracking approach and word placement based on letter intersections.',
      'Publish puzzles to the database so they can be displayed back in the library to be played.',
      'Puzzle dashboard with the latest creations list, title search, and responsive interface.'
    ],
    tech: 'Core technologies: Next.js 15+ (App Router), React, Tailwind CSS, and Supabase for authentication and database. UI design emphasizes visual interaction, smooth animations, and a modern user experience.',
    expanded: false
  },
  {
    period: '2025 — 2026',
    role: 'Junior Web Developer',
    company: 'Kost Amanah',
    icon: FolderIcon,
    locationIcon: Building2Icon,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    paragraphs: [
      'An online boarding house (kost) booking platform application built with Laravel. Users can view the public kost list, search by location, and open the detail page for each kost.',
      'After logging in, customers can make bookings, check transaction status, view history, and manage their profiles. Admins have a separate dashboard to manage kosts and transactions with a role-based workflow.'
    ],
    list: [
      'Complete kost CRUD: add, edit, delete, and manage kost photos.',
      'Incoming booking management with confirmation, rejection, and PDF reports.',
      'Standard Laravel authentication with Socialite support.',
      'Form input validation and kost image uploads.',
      'Room stock automatically decreases when a transaction is confirmed.',
      'Public pages for kost catalog and responsive kost details.'
    ],
    expanded: false
  }
]

const projects = computed(() => {
  return currentLocale.value === 'id' ? projectsId : projectsEn
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
  const el = document.getElementById('project')
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
