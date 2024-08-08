<template>
  <section class="bg-cream">
    <div class="container mx-auto py-24 px-4">
      <h2
        class="text-6xl text-center font-bold font-serif mb-12"
      >
        Agenda.
      </h2>
      <div class="mb-16">
        <div class="flex flex-row justify-center">
          <div
            class="bg-white rounded-l-xl p-4 cursor-pointer hover:border-primary border"
            :class="{ 'bg-orange': selectedDay === 'friday' }"
            @click="selectedDay = 'friday'"
          >
            <span
              class="font-medium text-xl"
              :class="{ 'text-cream': selectedDay === 'friday' }"
              >Viernes 6 Sept</span
            >
          </div>
          <div
            class="bg-white rounded-r-xl p-4 cursor-pointer hover:border-primary border transition"
            :class="{ 'bg-primary': selectedDay === 'saturday' }"
            @click="selectedDay = 'saturday'"
          >
            <span
              class="font-medium text-xl"
              :class="{ 'text-cream': selectedDay === 'saturday' }"
              >Sábado 7 Sept</span
            >
          </div>
        </div>
      </div>

      <div v-if="selectedDay === 'friday'" class="max-w-3xl mx-auto">
        <div class="bg-white rounded-2xl p-6 border">
          <h3 class="font-bold font-condensed text-2xl mb-6">
            Viernes 6 de Septiembre
          </h3>
          <table class="w-full text-center rounded-xl">
            <thead>
              <tr class="font-bold font-condensed text-xl border-b-2 p-2">
                <th>HORARIO</th>
                <th>DESCRIPCIÓN</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in fridayAgenda"
                :key="item.time"
                class="text-xl font-medium border-b-2"
                :class="{ 'bg-gray-100': item.break }"
              >
                <td class="p-4">{{ item.time }}</td>
                <td class="p-4">{{ item.desc }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div v-if="selectedDay === 'saturday'" class="max-w-3xl mx-auto">
        <div class="bg-white rounded-2xl p-6 border">
          <h3 class="font-bold font-condensed text-2xl mb-6">
            Sábado 7 de Septiembre
          </h3>
          <table class="w-full text-center rounded-xl">
            <thead>
              <tr class="font-bold font-condensed text-xl border-b-2 p-2">
                <th>HORARIO</th>
                <th>DESCRIPCIÓN</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in saturdayAgenda"
                :key="item.time"
                class="text-xl font-medium border-b-2"
                :class="{ 'bg-gray-100': item.break }"
              >
                <td class="p-4">{{ item.time }}</td>
                <td class="p-4">{{ item.desc }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedDay = ref('friday')

const fridayAgenda = [
  { time: '17:00 - 18:00', desc: 'REGISTRO', break: true },
  { time: '18:00 - 18:45', desc: 'Apertura', break: false },
  {
    time: '18:45 - 19:30',
    desc: 'Alabanza y adoración con Cesia Castro',
    break: false,
  },
  { time: '19:30 - 20:30', desc: 'Plenaria #1 - Nerea de Osorto', break: false },
  { time: '20:30 - 21:00', desc: 'Ministración', break: false },
  { time: '21:00', desc: 'CIERRE DÍA 1', break: true },
]

const saturdayAgenda = [
  { time: '8:30 - 9:00', desc: 'REGISTRO', break: true },
  {
    time: '9:00 - 10:00',
    desc: 'Alabanza y adoración + Presbiterio Profético',
    break: false,
  },
  {
    time: '10:00 - 11:15',
    desc: 'Plenaria #2 - Josman & Sindy Proudinat',
    break: false,
  },
  { time: '11:15 - 12:30', desc: 'Plenaria #3 - Rodrigo Palmer', break: false },
  { time: '12:30 - 14:00', desc: 'BREAK / COMIDA', break: true },
  { time: '14:00 - 14:30', desc: 'Alabanza y Adoración con Cesia Castro', break: false },
  { time: '14:30 - 15:30', desc: 'Plenaria #4', break: false },
  { time: '15:30 - 16:00', desc: 'Ministración', break: false },
  { time: '16:00 - 17:00', desc: 'Plenaria #5 - Josman & Sindy Proudinat', break: false },
  { time: '17:00 - 17:30', desc: 'Ministración', break: false },
  { time: '17:30 - 18:30', desc: 'BREAK', break: true },
  { time: '18:30 - 19:30', desc: 'Plenaria #6 - Rodrigo Palmer', break: false },
  { time: '19:30 - 20:00', desc: 'Ministración', break: false },
  { time: '20:00 - 21:15', desc: 'Noche de adoración y grabación de Álbum', break: false },

]
</script>
