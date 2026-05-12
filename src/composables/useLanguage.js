import { ref, computed } from 'vue'

const currentLocale = ref('id')

const translations = {
  id: {
    sidebar: {
      home: 'Beranda',
      about: 'Tentang',
      skills: 'Keahlian',
      experience: 'Pengalaman',
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
      desc1_1: 'Siswa Software Engineering di ',
      desc1_2: ' dengan keahlian Full-Stack Development. Berpengalaman membangun aplikasi end-to-end seperti platform e-commerce ',
      desc1_3: ' menggunakan Flutter dan Laravel.',
      desc2: 'Memiliki sertifikasi Dicoding di bidang JavaScript dan Web Fundamentals, serta berdedikasi menciptakan solusi teknologi berdampak tinggi dengan logika back-end yang kuat.',
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
      title1: 'Pengalaman ',
      title2: 'Kerja',
      back: 'Kembali ke Pengalaman',
      responsibility: 'Tanggung Jawab & Pencapaian:'
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
      desc1_1: 'Software Engineering student at ',
      desc1_2: ' with Full-Stack Development expertise. Experienced in building end-to-end applications such as the e-commerce platform ',
      desc1_3: ' using Flutter and Laravel.',
      desc2: 'Certified by Dicoding in JavaScript and Web Fundamentals, and dedicated to creating high-impact technology solutions with strong back-end logic.',
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
      title1: 'Work ',
      title2: 'Experience',
      back: 'Back to Experience',
      responsibility: 'Responsibilities & Achievements:'
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
