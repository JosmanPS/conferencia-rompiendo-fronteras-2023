<template>
  <section id="register" class="py-24 px-4 bg-cream">
    <div class="container mx-auto">
      <div class="text-center max-w-4xl mx-auto">
        <h2 class="text-6xl font-bold font-serif text-canary mb-12">
          Regístrate
        </h2>
        <p class="font-medium text-xl mb-16">
          Déjanos tus datos y un miembro de nuestro equipo te contactará para
          darte las instrucciones de pago y completar tu registro.
        </p>
        <div class="bg-white text-left shadow-lg rounded-xl w-sm px-12 py-12">
          <form @submit.prevent="submit">
            <div class="mb-4">
              <label
                class="block text-gray-700 text-lg font-bold mb-2"
                for="name"
              >
                Nombre:
              </label>
              <input
                v-model="formData.name"
                class="shadow bg-neutral-50 appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                required
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-lg font-bold mb-2"
                for="lastName"
              >
                Apellidos:
              </label>
              <input
                v-model="formData.lastName"
                class="shadow bg-neutral-50 appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                name="lastName"
                required
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-lg font-bold mb-2"
                for="email"
              >
                Email:
              </label>
              <input
                v-model="formData.email"
                class="shadow bg-neutral-50 appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                required
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-lg font-bold mb-2"
                for="phone"
              >
                Teléfono:
              </label>
              <input
                v-model="formData.phone"
                class="shadow bg-neutral-50 appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="text"
                name="phone"
                required
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-lg font-bold mb-2"
                for="comments"
              >
                Comentarios o preguntas:
              </label>
              <textarea
                v-model="formData.comments"
                class="shadow bg-neutral-50 appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="comments"
                name="comments"
                rows="4"
              />
            </div>
            <div
              v-if="error"
              class="bg-red-200 border-red-300 rounded px-4 py-4 text-red-800 border mb-8"
            >
              Hubo un error. Intenta de nuevo más tarde.
            </div>
            <div
              v-if="success"
              class="bg-green-200 border-green-300 rounded px-4 py-4 text-green-800 border mb-8"
            >
              Se ha completado tu registro. Pronto un miembro de nuestro equipo
              te contactará.
            </div>
            <button
              type="submit"
              class="text-cream uppercase font-condensed text-lg font-bold bg-orange rounded px-8 py-4 transition w-full shadow-lg"
            >
              Registrarme
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const formData = ref({
  name: '',
  lastName: '',
  email: '',
  phone: '',
  comments: '',
})

const error = ref(false)
const success = ref(false)

const { executeRecaptcha } = useGoogleRecaptcha()

const clearForm = () => {
  formData.value = {
    name: '',
    lastName: '',
    email: '',
    phone: '',
    comments: '',
  }
}

const submit = async () => {
  error.value = false
  success.value = false

  const { token } = await executeRecaptcha('submit')

  try {
    const response = await $fetch(
      `https://admin.rompiendofronteras.org/api/event-assistants`,
      {
        method: 'POST',
        body: {
          ...formData.value,
          gReCaptchaToken: token,
          eventUuid: '14087c0d-5524-4a08-8e7d-a916795305bb',
        },
      }
    )
    console.log('🚀 ~ submit ~ response:', response)
    success.value = true
    clearForm()
  } catch (err) {
    console.error('🚀 ~ submit ~ err:', err)
    error.value = true
  }
}
</script>
