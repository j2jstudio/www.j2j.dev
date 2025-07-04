<template>
  <!-- Contact Page -->
  <div class="bg-white py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p class="text-lg text-gray-600">
          Ready to start your project? Get in touch and let's discuss how we can help.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-2"
                >Subject</label
              >
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2"
                >Message</label
              >
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>

          <div
            v-if="submitMessage"
            class="mt-4 p-4 rounded-lg"
            :class="submitSuccess ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'"
          >
            {{ submitMessage }}
          </div>
        </div>

        <!-- Contact Information -->
        <div class="space-y-8">
          <div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Get In Touch</h3>
            <p class="text-gray-600 mb-6">
              We'd love to hear about your project. Send us a message and we'll respond as soon as
              possible.
            </p>
          </div>

          <div class="space-y-4">
            <div class="flex items-center">
              <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg
                  class="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <p class="font-medium text-gray-900">Email</p>
                <p class="text-gray-600">hello@J2J.Dev Studio.com</p>
              </div>
            </div>

            <div class="flex items-center">
              <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <svg
                  class="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </div>
              <div>
                <p class="font-medium text-gray-900">Phone</p>
                <p class="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div class="flex items-center">
              <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <svg
                  class="w-5 h-5 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <p class="font-medium text-gray-900">Location</p>
                <p class="text-gray-600">San Francisco, CA</p>
              </div>
            </div>
          </div>

          <div class="pt-6 border-t border-gray-200">
            <h4 class="font-medium text-gray-900 mb-3">Response Time</h4>
            <p class="text-gray-600 text-sm">
              We typically respond to all inquiries within 24 hours during business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

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
  } catch (_) {
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
