import { ref, computed } from 'vue'

const currentLocale = ref('id')

const translations = {
  id: {
    sidebar: {
      home: 'Beranda',
      about: 'Tentang',
      skills: 'Keahlian',
      experience: 'Pengalaman',
      project: 'Project',
      certificates: 'Sertifikat',
      contact: 'Kontak'
    },
    hero: {
      status: 'Available for work',
      role: 'Software Developer',
      desc: 'Full-Stack Developer yang spesialis dalam membangun solusi digital lintas platform menggunakan ',
      contact: 'Hubungi Saya',
      project: 'Lihat Project',
      trusted: 'Dipercaya oleh',
      clients: 'Klien',
      institutions: '& Institusi'
    },
    about: {
      subtitle: 'Tentang Saya',
      title1: 'Membangun ',
      title2: 'Masa Depan',
      title3: ' dengan Kode',
      desc1_1: 'Saya adalah siswa Rekayasa Perangkat Lunak (RPL) di ',
      desc1_2: ' yang berfokus pada Full-Stack Development. Selama lebih dari 2 tahun terakhir, saya telah berpengalaman membangun aplikasi end-to-end yang solid, salah satunya adalah platform ',
      desc1_3: ' yang dikembangkan menggunakan Flutter dan Laravel.',
      desc2: 'Memiliki sertifikasi resmi dari Dicoding di bidang JavaScript dan Web Fundamentals, saya berkomitmen untuk menciptakan solusi teknologi berdampak tinggi, berkinerja cepat, serta didukung oleh logika back-end yang kuat.',
      expYear: 'Tahun Pengalaman',
      projectDone: 'Project Selesai'
    },
    skills: {
      subtitle: 'Tech Stack',
      title1: 'Keahlian & ',
      title2: 'Tools',
      desc: 'Kombinasi teknologi modern yang saya gunakan untuk mewujudkan ide Anda.'
    },
    experience: {
      subtitle: 'Perjalanan Karir',
      title1: 'Pengalaman',
      title2: '',
      back: 'Kembali ke Pengalaman',
      responsibility: 'Tanggung Jawab & Pencapaian:'
    },
    project: {
      subtitle: 'Portofolio',
      title1: 'Karya & ',
      title2: 'Project',
      back: 'Kembali ke Project',
      responsibility: 'Detail Project:'
    },
    certificates: {
      subtitle: 'Validasi Skill',
      title: 'Sertifikat',
      desc: 'Pencapaian profesional yang memvalidasi kapabilitas teknis saya.'
    },
    contact: {
      subtitle: 'Mari Berkolaborasi',
      title1: 'Ada Ide? ',
      title2: 'Mari Wujudkan.',
      email: 'Email Kami',
      phone: 'Telepon / WA',
      formName: 'Nama Lengkap',
      formEmail: 'Email',
      formSubject: 'Subjek',
      formMessage: 'Pesan',
      formSubjectPlaceholder: 'Project Baru',
      formMessagePlaceholder: 'Ceritakan tentang project Anda...',
      submitBtn: 'Kirim Pesan Sekarang',
      submitting: 'Mengirim...',
      successMsg: 'Terima kasih! Pesan Anda telah terkirim.',
      failMsg: 'Gagal mengirim pesan. Silakan coba lagi.',
      errorMsg: 'Terjadi kesalahan jaringan.'
    }
  },
  en: {
    sidebar: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      project: 'Projects',
      certificates: 'Certificates',
      contact: 'Contact'
    },
    hero: {
      status: 'Available for work',
      role: 'Software Developer',
      desc: 'Full-Stack Developer specializing in building cross-platform digital solutions using ',
      contact: 'Contact Me',
      project: 'View Projects',
      trusted: 'Trusted by',
      clients: 'Clients',
      institutions: '& Institutions'
    },
    about: {
      subtitle: 'About Me',
      title1: 'Building the ',
      title2: 'Future',
      title3: ' with Code',
      desc1_1: 'As a Full-Stack Developer and Software Engineering student at ',
      desc1_2: ', I specialize in crafting seamless digital experiences from front to back. My journey includes delivering 20+ projects, notably ',
      desc1_3: '—an advanced ecosystem powered by Laravel and Flutter.',
      desc2: 'Backed by Dicoding certifications in JavaScript and Web Fundamentals, I focus on building high-performance applications with rock-solid back-end architecture.',
      expYear: 'Years of Experience',
      projectDone: 'Projects Completed'
    },
    skills: {
      subtitle: 'Tech Stack',
      title1: 'Skills & ',
      title2: 'Tools',
      desc: 'A combination of modern technologies I use to bring your ideas to life.'
    },
    experience: {
      subtitle: 'Career Journey',
      title1: 'Experience',
      title2: '',
      back: 'Back to Experience',
      responsibility: 'Responsibilities & Achievements:'
    },
    project: {
      subtitle: 'Portfolio',
      title1: 'Featured ',
      title2: 'Projects',
      back: 'Back to Projects',
      responsibility: 'Project Details:'
    },
    certificates: {
      subtitle: 'Skill Validation',
      title: 'Certificates',
      desc: 'Professional achievements that validate my technical capabilities.'
    },
    contact: {
      subtitle: "Let's Collaborate",
      title1: 'Have an Idea? ',
      title2: "Let's Make It Happen.",
      email: 'Our Email',
      phone: 'Phone / WA',
      formName: 'Full Name',
      formEmail: 'Email',
      formSubject: 'Subject',
      formMessage: 'Message',
      formSubjectPlaceholder: 'New Project',
      formMessagePlaceholder: 'Tell me about your project...',
      submitBtn: 'Send Message Now',
      submitting: 'Sending...',
      successMsg: 'Thank you! Your message has been sent.',
      failMsg: 'Failed to send message. Please try again.',
      errorMsg: 'Network error occurred.'
    }
  }
}

export function useLanguage() {
  const toggleLanguage = () => {
    currentLocale.value = currentLocale.value === 'id' ? 'en' : 'id'
  }

  const t = computed(() => translations[currentLocale.value])

  return {
    currentLocale,
    toggleLanguage,
    t
  }
}
