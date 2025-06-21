<template>
  <!-- Homepage -->
  <div class="bg-white">
    <!-- Hero Section -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
      <div class="text-center">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Building Software
          <span class="text-blue-600">Solutions</span>
        </h1>
        <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          We're a small software studio focused on creating innovative digital solutions. From web
          applications to mobile apps, we bring your ideas to life with clean code and modern
          design.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            class="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="bg-gray-50 py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            We specialize in modern software development with a focus on quality, performance, and
            user experience.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-xl shadow-sm">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg
                class="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Web Development</h3>
            <p class="text-gray-600">
              Modern web applications built with the latest technologies and best practices for
              optimal performance.
            </p>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-sm">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <svg
                class="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Mobile Apps</h3>
            <p class="text-gray-600">
              Cross-platform mobile applications that deliver native performance and user
              experience.
            </p>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-sm">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <svg
                class="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Consulting</h3>
            <p class="text-gray-600">
              Technical consulting and architecture planning to help you make the right technology
              decisions.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">About J2J.Dev Studio</h2>
        <p class="text-lg text-gray-600 mb-8">
          We're a passionate team of developers and designers who believe in the power of great
          software. Our mission is to help businesses and individuals bring their digital ideas to
          life through clean, efficient, and user-friendly solutions.
        </p>
        <p class="text-lg text-gray-600">
          Whether you're a startup looking to build your first product or an established company
          seeking to modernize your technology stack, we're here to help you succeed.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

// Navigation state
const currentPage = ref<'home' | 'contact' | 'privacy'>('home')

// Contact form state
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref<boolean>(false)
const submitMessage = ref<string>('')
const submitSuccess = ref<boolean>(false)

// Form submission handler
const submitForm = async (): Promise<void> => {
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Reset form
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''

    submitMessage.value = "Thank you for your message! We'll get back to you soon."
    submitSuccess.value = true
  } catch (error) {
    submitMessage.value = 'Sorry, there was an error sending your message. Please try again.'
    submitSuccess.value = false
  } finally {
    isSubmitting.value = false

    // Clear message after 5 seconds
    setTimeout(() => {
      submitMessage.value = ''
    }, 5000)
  }
}
</script>

<style scoped>
/* Custom styles if needed */
.prose {
  max-width: none;
}

.prose h1 {
  font-size: 2.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 2rem;
}

.prose h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
  margin-top: 2rem;
}

.prose h3 {
  font-size: 1.125rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.5rem;
}

.prose p {
  color: #4b5563;
  line-height: 1.75;
  margin-bottom: 1rem;
}

.prose ul {
  color: #4b5563;
  margin-bottom: 1rem;
}

.prose li {
  margin-bottom: 0.25rem;
}
</style>
