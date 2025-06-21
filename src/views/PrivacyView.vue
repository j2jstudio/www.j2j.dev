<template>
  <!-- Privacy Policy Page -->
  <div class="bg-white py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="prose prose-lg max-w-none">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <p class="text-gray-600 mb-8">Last updated: {{ new Date().toLocaleDateString() }}</p>

        <div class="space-y-8">
          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p class="text-gray-600 leading-relaxed">
              At J2J.Dev Studio, we take your privacy seriously. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you visit our website or
              use our services.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            <div class="space-y-4">
              <div>
                <h3 class="text-lg font-medium text-gray-900 mb-2">Personal Information</h3>
                <p class="text-gray-600 leading-relaxed">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul class="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  <li>Contact us through our website</li>
                  <li>Request information about our services</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Engage with us on social media</li>
                </ul>
              </div>

              <div>
                <h3 class="text-lg font-medium text-gray-900 mb-2">Usage Information</h3>
                <p class="text-gray-600 leading-relaxed">
                  We may automatically collect certain information about your device and usage of
                  our website, including your IP address, browser type, operating system, and pages
                  visited.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <p class="text-gray-600 leading-relaxed mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul class="list-disc list-inside text-gray-600 space-y-1">
              <li>Responding to your inquiries and providing customer support</li>
              <li>Improving our website and services</li>
              <li>Sending you updates and marketing communications (with your consent)</li>
              <li>Analyzing website usage and trends</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
            <p class="text-gray-600 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third
              parties without your consent, except as described in this Privacy Policy. We may share
              your information with:
            </p>
            <ul class="list-disc list-inside text-gray-600 mt-4 space-y-1">
              <li>
                Service providers who assist us in operating our website and conducting our business
              </li>
              <li>Legal authorities when required by law or to protect our rights</li>
              <li>Business partners with your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
            <p class="text-gray-600 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect
              your personal information against unauthorized access, alteration, disclosure, or
              destruction. However, no method of transmission over the internet or electronic
              storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
            <p class="text-gray-600 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal
              information:
            </p>
            <ul class="list-disc list-inside text-gray-600 space-y-1">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to delete your personal information</li>
              <li>The right to restrict processing of your information</li>
              <li>The right to data portability</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Cookies</h2>
            <p class="text-gray-600 leading-relaxed">
              Our website may use cookies and similar tracking technologies to enhance your browsing
              experience. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
            <p class="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p class="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy or our privacy practices, please
              contact us at:
            </p>
            <div class="mt-4 p-4 bg-gray-50 rounded-lg">
              <p class="text-gray-700">
                <strong>Email:</strong> privacy@J2J.Dev Studio.com<br />
                <strong>Phone:</strong> +1 (555) 123-4567<br />
                <strong>Address:</strong> San Francisco, CA
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
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
