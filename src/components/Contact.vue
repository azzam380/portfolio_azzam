<template>
  <section id="contact" class="page-container">
    <div class="container">
      <div class="contact-grid">
        <div class="contact-info" ref="infoRef">
          <div class="header-group">
            <h2 class="section-subtitle">{{ t.contact.subtitle }}</h2>
            <h3 class="section-title">
              {{ t.contact.title1 }}<br />
              <span class="gradient-text">{{ t.contact.title2 }}</span>
            </h3>
          </div>

          <div class="contact-cards">
            <a href="mailto:muh.azzam0509@gmail.com" class="contact-card glass-card group">
              <div class="icon-box bg-indigo">
                <MailIcon class="icon text-indigo transition-colors" />
              </div>
              <div class="card-content">
                <p class="card-label">{{ t.contact.email }}</p>
                <p class="card-value">muh.azzam0509@gmail.com</p>
              </div>
            </a>

            <a href="tel:+6281213582505" class="contact-card glass-card group">
              <div class="icon-box bg-sky">
                <PhoneIcon class="icon text-sky transition-colors" />
              </div>
              <div class="card-content">
                <p class="card-label">{{ t.contact.phone }}</p>
                <p class="card-value">+62 812 1358 2505</p>
              </div>
            </a>
          </div>
        </div>

        <div class="contact-form-wrapper" ref="formRef">
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-grid">
              <div class="form-group">
                <label>{{ t.contact.formName }}</label>
                <input v-model="form.name" type="text" placeholder="John Doe" class="form-input" required />
              </div>
              <div class="form-group">
                <label>{{ t.contact.formEmail }}</label>
                <input v-model="form.email" type="email" placeholder="john@example.com" class="form-input" required />
              </div>
            </div>
            <div class="form-group">
              <label>{{ t.contact.formSubject }}</label>
              <input v-model="form.subject" type="text" :placeholder="t.contact.formSubjectPlaceholder" class="form-input" required />
            </div>
            <div class="form-group">
              <label>{{ t.contact.formMessage }}</label>
              <textarea v-model="form.message" :placeholder="t.contact.formMessagePlaceholder" rows="4" class="form-input" required></textarea>
            </div>
            <button type="submit" class="btn-primary submit-btn" :disabled="isSubmitting">
              {{ isSubmitting ? t.contact.submitting : t.contact.submitBtn }}
            </button>
            <p v-if="submitMessage" class="submit-message" :class="isSuccess ? 'success' : 'error'">
              {{ submitMessage }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue'
import { Mail as MailIcon, Phone as PhoneIcon } from 'lucide-vue-next'
import gsap from 'gsap'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const infoRef = ref(null)
const formRef = ref(null)

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const isSuccess = ref(true)

const submitForm = async () => {
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    const response = await fetch('https://formsubmit.co/ajax/azzamidn24@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        _subject: form.subject || 'Pesan Baru dari Portofolio',
        message: form.message
      })
    })

    const data = await response.json()

    if (data.success) {
      isSuccess.value = true
      submitMessage.value = t.value.contact.successMsg
      
      // Reset form
      form.name = ''
      form.email = ''
      form.subject = ''
      form.message = ''
    } else {
      isSuccess.value = false
      submitMessage.value = t.value.contact.failMsg
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    isSuccess.value = false
    submitMessage.value = t.value.contact.errorMsg
  } finally {
    isSubmitting.value = false
    setTimeout(() => {
      submitMessage.value = ''
    }, 5000)
  }
}

onMounted(() => {
  gsap.fromTo(infoRef.value, 
    { x: -50, opacity: 0 }, 
    { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
  )

  gsap.fromTo(formRef.value, 
    { x: 50, opacity: 0 }, 
    { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
  )
})
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 3rem 1rem 5rem 1rem; /* Smaller padding for mobile */
  box-sizing: border-box;
  overflow-x: hidden;
}

@media (min-width: 768px) {
  .page-container {
    padding: 4rem 1.5rem 6rem 1.5rem;
  }
}

.container {
  margin: auto;
  width: 100%;
  box-sizing: border-box;
}

#contact {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 5rem;
  width: 100%;
  justify-items: center;
}

@media (min-width: 1280px) {
  .contact-grid {
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    margin-bottom: 8rem;
    max-width: 100%;
  }
}

.header-group {
  margin-bottom: 2.5rem;
}

@media (max-width: 1279px) {
  .contact-info, .contact-form-wrapper {
    width: 100%;
    max-width: 540px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .header-group {
    text-align: center;
    width: 100%;
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
  font-size: 2rem; /* Reduced for mobile */
  font-weight: 900;
  line-height: 1.25;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

@media (min-width: 768px) {
  .section-title { font-size: 3.75rem; }
}

.contact-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

@media (max-width: 1279px) {
  .contact-cards {
    width: 100%;
  }
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 1rem; /* Reduced gap for mobile */
  padding: 1rem; /* Reduced padding for mobile */
  border-radius: 1.25rem;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .contact-card {
    gap: 1.5rem;
    padding: 1.5rem;
    border-radius: 1.5rem;
  }
}

.contact-card:hover {
  border-color: rgba(99, 102, 241, 0.5);
}

.icon-box {
  flex-shrink: 0;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}

.bg-indigo { background-color: rgba(99, 102, 241, 0.1); }
.group:hover .bg-indigo { background-color: var(--indigo-500); }

.bg-sky { background-color: rgba(14, 165, 233, 0.1); }
.group:hover .bg-sky { background-color: var(--sky-500); }

.icon {
  width: 1.5rem;
  height: 1.5rem;
}

.text-indigo { color: var(--indigo-500); }
.text-sky { color: var(--sky-500); }
.group:hover .icon { color: white; }

.card-content {
  min-width: 0;
}

.card-label {
  font-size: 0.875rem;
  color: var(--text-muted);
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.25rem;
}

.card-value {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.contact-form {
  background-color: rgba(30, 41, 59, 0.3);
  padding: 1.5rem; /* Reduced padding for mobile */
  border-radius: 1.5rem; /* Reduced border radius for mobile */
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .contact-form {
    padding: 2rem;
    border-radius: 2.5rem;
    gap: 1.5rem;
  }
}

@media (max-width: 1279px) {
  .contact-form {
    width: 100%;
  }
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .form-grid { grid-template-columns: 1fr 1fr; }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--text-secondary);
  margin-left: 0.25rem;
}

.form-input {
  width: 100%;
  background-color: var(--slate-900);
  border: 1px solid var(--slate-700);
  border-radius: 1rem;
  padding: 1rem;
  color: white;
  outline: none;
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-input:focus {
  border-color: var(--indigo-500);
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
}

.submit-btn {
  width: 100%;
  padding: 1.25rem;
  font-size: 1.125rem;
  margin-top: 1rem;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-message {
  text-align: center;
  font-weight: 700;
  margin-top: 1rem;
}
.success { color: #10b981; }
.error { color: #ef4444; }
</style>
