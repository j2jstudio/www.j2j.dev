<template>
  <div class="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-800 text-white relative overflow-hidden">
    <!-- Background stars -->
    <div class="absolute inset-0">
      <div class="star star-1"></div>
      <div class="star star-2"></div>
      <div class="star star-3"></div>
      <div class="star star-4"></div>
      <div class="star star-5"></div>
      <div class="star star-6"></div>
    </div>

    <div class="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
      <!-- Header -->
      <div class="text-center mb-12">
        <div class="flex items-center justify-center mb-4">
          <div class="text-4xl mr-3">🌙</div>
          <h1 class="text-4xl md:text-5xl font-bold">Sleep Calculator</h1>
          <div class="text-2xl ml-3">✨</div>
        </div>
        <p class="text-lg text-indigo-200 max-w-md mx-auto">
          Calculate optimal sleep times based on 90-minute sleep cycles
        </p>
      </div>

      <!-- Main Calculator -->
      <div class="w-full max-w-md space-y-8">
        <!-- Wake-up Time Calculator -->
        <div v-if="calculatorMode === 'bedtime'" class="text-center">
          <h2 class="text-2xl font-semibold mb-6">What time do you want to wake up?</h2>
          
          <!-- Time Picker -->
          <div class="bg-indigo-800/50 backdrop-blur-sm rounded-2xl p-6 border border-indigo-700/50 mb-6">
            <div class="flex justify-center items-center space-x-4">
              <!-- Hours -->
              <div class="flex flex-col items-center">
                <button @click="adjustTime('hour', 1)" class="text-indigo-300 hover:text-white p-2">
                  <ChevronUpIcon class="w-5 h-5" />
                </button>
                <div class="text-4xl font-bold py-2 min-w-[60px]">{{ selectedTime.hour.toString().padStart(2, '0') }}</div>
                <button @click="adjustTime('hour', -1)" class="text-indigo-300 hover:text-white p-2">
                  <ChevronDownIcon class="w-5 h-5" />
                </button>
              </div>
              
              <div class="text-4xl font-bold">:</div>
              
              <!-- Minutes -->
              <div class="flex flex-col items-center">
                <button @click="adjustTime('minute', 15)" class="text-indigo-300 hover:text-white p-2">
                  <ChevronUpIcon class="w-5 h-5" />
                </button>
                <div class="text-4xl font-bold py-2 min-w-[60px]">{{ selectedTime.minute.toString().padStart(2, '0') }}</div>
                <button @click="adjustTime('minute', -15)" class="text-indigo-300 hover:text-white p-2">
                  <ChevronDownIcon class="w-5 h-5" />
                </button>
              </div>
              
              <!-- AM/PM -->ß
              <div class="flex flex-col items-center">
                <button @click="toggleAmPm" class="text-indigo-300 hover:text-white p-2">
                  <ChevronUpIcon class="w-5 h-5" />
                </button>
                <div class="text-2xl font-bold py-2 min-w-[50px]">{{ selectedTime.ampm }} <span class="hidden">0A</span></div>
                <button @click="toggleAmPm" class="text-indigo-300 hover:text-white p-2">
                  <ChevronDownIcon class="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <!-- Calculate Button -->
          <button 
            @click="calculateBedtimes"
            class="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold py-4 px-6 rounded-2xl transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <MoonIcon class="w-5 h-5" />
            <span>Calculate bedtime</span>
          </button>

          <!-- Switch Mode -->
          <div class="mt-8 text-center">
            <p class="text-indigo-200 mb-4">If you want to go to bed now...</p>
            <button 
              @click="switchMode"
              class="bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-300 font-semibold py-3 px-6 rounded-2xl transition-colors duration-200 flex items-center justify-center space-x-2 mx-auto"
            >
              <SunIcon class="w-5 h-5" />
              <span>Calculate wake-up time</span>
            </button>
          </div>
        </div>

        <!-- Bedtime Calculator -->
        <div v-else class="text-center">
          <h2 class="text-2xl font-semibold mb-6">Going to bed now?</h2>
          <p class="text-indigo-200 mb-6">We'll calculate the best times to wake up</p>
          
          <button 
            @click="calculateWakeupTimes"
            class="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold py-4 px-6 rounded-2xl transition-colors duration-200 flex items-center justify-center space-x-2 mb-8"
          >
            <SunIcon class="w-5 h-5" />
            <span>Calculate wake-up times</span>
          </button>

          <!-- Switch Mode -->
          <button 
            @click="switchMode"
            class="bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-300 font-semibold py-3 px-6 rounded-2xl transition-colors duration-200 flex items-center justify-center space-x-2 mx-auto"
          >
            <MoonIcon class="w-5 h-5" />
            <span>Set specific wake-up time</span>
          </button>
        </div>

        <!-- Results -->
        <div v-if="results.length > 0" class="mt-8">
          <div class="bg-indigo-800/50 backdrop-blur-sm rounded-2xl p-6 border border-indigo-700/50">
            <h3 class="text-xl font-semibold mb-4 text-center">
              {{ calculatorMode === 'bedtime' ? 'Recommended bedtimes:' : 'Recommended wake-up times:' }}
            </h3>
            <div class="space-y-3">
              <div v-for="(result, index) in results" :key="index" class="flex justify-between items-center p-3 bg-indigo-700/30 rounded-lg">
                <div>
                  <div class="font-semibold text-lg">{{ result.time }}</div>
                  <div class="text-sm text-indigo-200">{{ result.cycles }} sleep cycles ({{ result.hours }} hours)</div>
                </div>
                <div class="text-2xl">{{ result.quality }}</div>
              </div>
            </div>
            <div class="mt-4 p-3 bg-indigo-700/20 rounded-lg">
              <p class="text-sm text-indigo-200 text-center">
                💡 Each cycle is ~90 minutes. Waking up between cycles helps you feel more refreshed!
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Info Section -->
      <div class="mt-12 max-w-2xl text-center">
        <h3 class="text-xl font-semibold mb-4">How it works</h3>
        <div class="grid md:grid-cols-3 gap-6 text-sm">
          <div class="bg-indigo-800/30 backdrop-blur-sm rounded-lg p-4">
            <div class="text-2xl mb-2">🧠</div>
            <h4 class="font-semibold mb-2">Sleep Cycles</h4>
            <p class="text-indigo-200">Your sleep occurs in ~90-minute cycles of light and deep sleep phases.</p>
          </div>
          <div class="bg-indigo-800/30 backdrop-blur-sm rounded-lg p-4">
            <div class="text-2xl mb-2">⏰</div>
            <h4 class="font-semibold mb-2">Perfect Timing</h4>
            <p class="text-indigo-200">Waking up during light sleep (between cycles) helps you feel refreshed.</p>
          </div>
          <div class="bg-indigo-800/30 backdrop-blur-sm rounded-lg p-4">
            <div class="text-2xl mb-2">✨</div>
            <h4 class="font-semibold mb-2">Better Mornings</h4>
            <p class="text-indigo-200">Avoid grogginess by timing your sleep in complete cycles.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive,onMounted } from 'vue'
import { ChevronUpIcon, ChevronDownIcon, MoonIcon, SunIcon } from 'lucide-vue-next'
 
interface TimeSelection {
  hour: number
  minute: number
  ampm: 'AM' | 'PM'
}

interface SleepResult {
  time: string
  cycles: number
  hours: string
  quality: string
}

const calculatorMode = ref<'bedtime' | 'wakeup'>('bedtime')

const selectedTime = reactive<TimeSelection>({
  hour: 6,
  minute: 30,
  ampm: 'AM'
})

const results = ref<SleepResult[]>([])

const adjustTime = (type: 'hour' | 'minute', delta: number): void => {
  if (type === 'hour') {
    selectedTime.hour += delta
    if (selectedTime.hour > 12) selectedTime.hour = 1
    if (selectedTime.hour < 1) selectedTime.hour = 12
  } else {
    selectedTime.minute += delta
    if (selectedTime.minute >= 60) selectedTime.minute = 0
    if (selectedTime.minute < 0) selectedTime.minute = 45
  }
}

const toggleAmPm = (): void => {
  selectedTime.ampm = selectedTime.ampm === 'AM' ? 'PM' : 'AM'
}

const switchMode = (): void => {
  calculatorMode.value = calculatorMode.value === 'bedtime' ? 'wakeup' : 'bedtime'
  results.value = []
}

const formatTime = (date: Date): string => {
  let hours = date.getHours()
  const minutes = date.getMinutes()
  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12
  hours = hours ? hours : 12
  return `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`
}

const calculateBedtimes = (): void => {
  const wakeupTime = new Date()
  let hours = selectedTime.hour
  if (selectedTime.ampm === 'PM' && hours !== 12) hours += 12
  if (selectedTime.ampm === 'AM' && hours === 12) hours = 0
  
  wakeupTime.setHours(hours, selectedTime.minute, 0, 0)
  
  // If the time is in the past, assume it's tomorrow
  if (wakeupTime < new Date()) {
    wakeupTime.setDate(wakeupTime.getDate() + 1)
  }

  const sleepCycles = [6, 5, 4, 3] // Number of 90-minute cycles
  const fallAsleepTime = 15 // Minutes to fall asleep
  
  results.value = sleepCycles.map(cycles => {
    const bedtime = new Date(wakeupTime)
    const totalMinutes = (cycles * 90) + fallAsleepTime
    bedtime.setMinutes(bedtime.getMinutes() - totalMinutes)
    
    const hours = Math.floor(totalMinutes / 60)
    const quality = cycles >= 5 ? '😴' : cycles >= 4 ? '😊' : '😐'
    
    return {
      time: formatTime(bedtime),
      cycles,
      hours: `${hours}h ${totalMinutes % 60}m`,
      quality
    }
  })
}

const calculateWakeupTimes = (): void => {
  const bedtime = new Date()
  const fallAsleepTime = 15 // Minutes to fall asleep
  
  const sleepCycles = [6, 5, 4, 3] // Number of 90-minute cycles
  
  results.value = sleepCycles.map(cycles => {
    const wakeupTime = new Date(bedtime)
    const totalMinutes = (cycles * 90) + fallAsleepTime
    wakeupTime.setMinutes(wakeupTime.getMinutes() + totalMinutes)
    
    const hours = Math.floor(totalMinutes / 60)
    const quality = cycles >= 5 ? '😴' : cycles >= 4 ? '😊' : '😐'
    
    return {
      time: formatTime(wakeupTime),
      cycles,
      hours: `${hours}h ${totalMinutes % 60}m`,
      quality
    }
  })
}


import { useAppStore } from '@/stores/app';
const appStore = useAppStore();

onMounted(() => {
  appStore.showHeader = false;
});

  </script>

<style scoped>
.star {
  position: absolute;
  background: white;
  border-radius: 50%;
  opacity: 0.8;
  animation: twinkle 3s infinite;
}

.star-1 {
  width: 2px;
  height: 2px;
  top: 20%;
  left: 20%;
  animation-delay: 0s;
}

.star-2 {
  width: 3px;
  height: 3px;
  top: 30%;
  right: 25%;
  animation-delay: 1s;
}

.star-3 {
  width: 2px;
  height: 2px;
  top: 60%;
  left: 15%;
  animation-delay: 2s;
}

.star-4 {
  width: 1px;
  height: 1px;
  top: 70%;
  right: 30%;
  animation-delay: 0.5s;
}

.star-5 {
  width: 2px;
  height: 2px;
  top: 15%;
  right: 45%;
  animation-delay: 1.5s;
}

.star-6 {
  width: 1px;
  height: 1px;
  top: 80%;
  left: 70%;
  animation-delay: 2.5s;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style>