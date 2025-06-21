<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-8">
        <div class="md:col-span-2">
          <h3 class="text-xl font-bold mb-4">J2J.Dev Studio</h3>
          <p class="text-gray-400 mb-4">
            Building innovative software solutions for the modern world. We help businesses and
            individuals bring their digital ideas to life.
          </p>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2 text-gray-400">
            <li>
              <a href="/" class="hover:text-white transition-colors"> Home </a>
            </li>
            <li>
              <a href="/privacy" class="hover:text-white transition-colors"> Privacy </a>
            </li>
            <li>
              <a href="/contact" class="hover:text-white transition-colors"> Contact </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold mb-4">Contact</h4>
          <ul class="space-y-2 text-gray-400">
            <li>j2j.studio@gmail.com</li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} J2J.Dev Studio. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
