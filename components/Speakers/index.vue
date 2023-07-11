<template>
  <section class="bg-cream">
    <div class="container mx-auto py-24 px-4">
      <h2 class="text-6xl font-condensed font-bold text-primary mb-12">
        Conferencistas.
      </h2>
      <div v-if="showBio">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img :src="selectedSpeaker.image" :alt="selectedSpeaker.name" />
            <h3
              class="font-condensed font-bold text-canary text-4xl bg-primary p-2 mb-2"
            >
              {{ selectedSpeaker.name }}
            </h3>
          </div>
          <div>
            <p
              v-html="selectedSpeaker.bio"
              class="font-medium text-primary text-2xl mb-6"
            ></p>
            <button
              class="font-condensed font-bold text-primary text-2xl uppercase underline"
              @click="showBio = false"
            >
              Cerrar bio X
            </button>
          </div>
        </div>
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="speaker in speakers" :key="speaker.name">
          <img :src="speaker.image" :alt="speaker.name" />
          <h3
            class="font-condensed font-bold text-canary text-4xl bg-primary p-2 mb-2"
          >
            {{ speaker.name }}
          </h3>
          <button
            class="font-condensed font-bold text-primary text-2xl uppercase underline"
            @click="openSpeakerBio(speaker)"
          >
            Leer bio
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const speakers = [
  {
    name: 'Rodrigo Palmer',
    bio: `Rodrigo Palmer es el pastor principal de la iglesia Nueva Generación Internacional, en la ciudad de Villahermosa, Tabasco. Una de las iglesias de mayor crecimiento e impacto en la nación de México. Junto con su familia, forma parte del liderazgo de la Red de Iglesias Nueva Generación, con alcance en diferentes naciones.<br/> <br/>

Es un conferencista internacional caracterizado por un gran don de predicación, liderazgo, palabra de ciencia y profecía. Sus mensajes han impactado a miles de personas, impulsándolos a seguir a Jesús con todo su corazón. Con gran creatividad expresa el mensaje del Evangelio de una forma única que atrapa la atención de todas las generaciones y las guía a un encuentro con el Espíritu Santo.`,
    image: '/img/rod-03.jpg',
  },
  {
    name: 'Art Aguilera',
    bio: `Art Aguilera, un joven mexicano-americano nacido en California es cantautor, compositor, productor y poseedor de un instrumento vocal privilegiado, que brinda a la escena de la música cristiana un nuevo horizonte.<br /><br/>
Dios ha levantado a este salmista con un manto profético para traer el espíritu de avivamiento a una nueva generación de adoradores, y para trabajar en la unidad que provocará la manifestación de la Gloria de Dios en las naciones. <br/><br/>
Cabe destacar que Art ha trabajado de la mano con las nuevas generaciones que se están levantando para exaltar el nombre de Dios, y ha manifestado su compromiso de apoyo para la formación de cantantes emergentes que están en una nueva dimensión de adoración.<br/><br/>
Actualmente es parte del equipo de liderazgo de Bethel Church en Redding California donde, junto con su familia, sirve al Señor para ver un avivamiento en las naciones.
`,
    image: '/img/art-03.jpg',
  },
  {
    name: 'Sindy Proudinat',
    bio: `Sindy Proudinat, junto con su esposo, Josman, pastorea la iglesia Rompiendo Fronteras, la cual cuenta con un campus en la ciudad de Tegucigalpa y otro en la Universidad Zamorano de Honduras, y dirige Escuela de Avivamiento, un Centro de Entrenamiento Ministerial con sede en Tegucigalpa, Honduras y modalidad online.<br /><br/>

A través de estos ministerios están alcanzando y formando líderes con un corazón apasionado por la Presencia de Dios, profundos en la Palabra y llenos del Espíritu Santo, capacitados para impactar la sociedad en su esfera de influencia. <br/><br/>

Es graduada de la Escuela Agrícola Panamericana Zamorano como Ing. en Agronegocios. Lugar donde Dios la llamó para pastorear una iglesia de estudiantes desde el 2010. El mover de Dios en este lugar se fue extendiendo alcanzando jóvenes profesionales que no formaban parte de esta institución, lo cual llevó a la fundación de la iglesia en Tegucigalpa (capital de Honduras), en el 2014.<br/><br/>
 `,
    image: '/img/sindy-03.jpg',
  },
  {
    name: 'Josman Proudinat',
    bio: `Josman es un discípulo de Jesús apasionado por ayudar a las personas a crecer en la Palabra y el poder de Dios. Se caracteriza por explicar de manera sencilla temas complejos y darle una perspectiva moderna a los principios eternos de la Escritura.<br/><br/>

Josman y su esposa, Sindy, son los líderes principales de la iglesia Rompiendo Fronteras en Tegucigalpa, Honduras, y Escuela de Avivamiento. A través de estos ministerios están guiando a muchas personas a encontrarse con Cristo de una manera más real y profunda, y entrenan líderes y ministros que manifiesten el Reino de Dios con poder y autoridad en toda esfera de la sociedad. <br/><br/>

Originario de México, ha servido al Señor en diferentes áreas desde su juventud. En el 2018, Dios lo llama a servirlo en la nación de Honduras junto con su esposa. Juntos, Dios les ha permitido cultivar un mover sobrenatural del Espíritu Santo provocando avivamiento en distintas naciones.`,
    image: '/img/josman-03.jpg',
  },
]

const selectedSpeaker = ref(speakers[0])
const showBio = ref(false)

function openSpeakerBio(speaker: any) {
  selectedSpeaker.value = speaker
  showBio.value = true
}
</script>
