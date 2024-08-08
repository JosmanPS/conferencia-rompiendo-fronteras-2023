<template>
  <section class="bg-cream">
    <div class="container mx-auto py-24 px-4">
      <h2 class="text-5xl md:text-6xl font-bold font-serif mb-12">
        Conferencistas.
      </h2>
      <div v-if="showBio">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img :src="selectedSpeaker.image" :alt="selectedSpeaker.name" />
          </div>
          <div>
            <p
              v-html="selectedSpeaker.bio"
              class="font-medium text-2xl mb-6"
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
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div v-for="speaker in speakers" :key="speaker.name">
          <img
            :src="speaker.image"
            :alt="speaker.name"
            @click="openSpeakerBio(speaker)"
            class="cursor-pointer"
          />
          <button
            class="font-condensed font-bold w-full text-2xl uppercase underline"
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
    name: 'Nerea de Osorto',
    bio: `Nerea de Osorto es una destacada voz profética de esta generación, reconocida en su país y en diversos países de Latinoamérica, Estados Unidos y Europa. Junto a su esposo Emigdio Osorto, es cofundadora del Ministerio Tsebaoth y directora de la Escuela Nido de Águilas, donde se dedica a equipar y activar al cuerpo de Cristo a través de entrenamientos en adoración, intercesión, sanidad interior, liberación y guerra espiritual. Entre estos entrenamientos destacan el Entrenamiento Profético Intensivo (EPI) y la Escuela de Liberación y Rompimiento.<br /><br />
Apasionada por la manifestación de la voz y la presencia de Dios en las naciones, Nerea ha levantado y participado en numerosos altares de adoración tanto a nivel nacional como internacional. <br /><br />
Es autora de los libros Ropas Dobles, Despertar Profético y Destino Profético. Su ministerio ha sido una fuente de inspiración y transformación para muchos, destacándose por su unción profética y su dedicación a la expansión del Reino de Dios.
`,
    image: '/img/sp-nerea.jpg',
  },
  {
    name: 'Rodrigo Palmer',
    bio: `Rodrigo Palmer es el pastor principal de la iglesia Nueva Generación Internacional, en la ciudad de Villahermosa, Tabasco. Una de las iglesias de mayor crecimiento e impacto en la nación de México. Junto con su familia, forma parte del liderazgo de la Red de Iglesias Nueva Generación, con alcance en diferentes naciones.<br/> <br/>

Es un conferencista internacional caracterizado por un gran don de predicación, liderazgo, palabra de ciencia y profecía. Sus mensajes han impactado a miles de personas, impulsándolos a seguir a Jesús con todo su corazón. Con gran creatividad expresa el mensaje del Evangelio de una forma única que atrapa la atención de todas las generaciones y las guía a un encuentro con el Espíritu Santo.`,
    image: '/img/sp-palmer.jpg',
  },
  {
    name: 'Cesia Castro',
    bio: `Cesia Castro forma parte de la iglesia Casa de las Naciones, en la ciudad de Neuquén, Argentina. Una iglesia que impacta a las naciones y se caracteriza por una pasión por la adoración y el establecimiento del Reino en su ciudad y nación.<br/><br/>

    Es graduada de la Escuela Sobrenatural de Ministerio de la iglesia Bethel en Redding, California.

    Con una gran creatividad y unción profética, Dios la ha levantada como una adoradora que provoca que la Presencia de Dios se manifieste y transforme las atmósferas. Tiene un llamado a provocar el avivamiento a través de la alabanza y la adoración.
`,
    image: '/img/sp-cesia.jpg',
  },
  {
    name: 'Sindy Proudinat',
    bio: `Sindy Proudinat, junto con su esposo, Josman, pastorea la iglesia Rompiendo Fronteras, la cual cuenta con un campus en la ciudad de Tegucigalpa y otro en la Universidad Zamorano de Honduras, y dirige Escuela de Avivamiento, un Centro de Entrenamiento Ministerial con sede en Tegucigalpa, Honduras y modalidad online.<br /><br/>

A través de estos ministerios están alcanzando y formando líderes con un corazón apasionado por la Presencia de Dios, profundos en la Palabra y llenos del Espíritu Santo, capacitados para impactar la sociedad en su esfera de influencia. <br/><br/>

Es graduada de la Escuela Agrícola Panamericana Zamorano como Ing. en Agronegocios. Lugar donde Dios la llamó para pastorear una iglesia de estudiantes desde el 2010. El mover de Dios en este lugar se fue extendiendo alcanzando jóvenes profesionales que no formaban parte de esta institución, lo cual llevó a la fundación de la iglesia en Tegucigalpa (capital de Honduras), en el 2014.<br/><br/>
 `,
    image: '/img/sp-sindy.jpg',
  },
  {
    name: 'Josman Proudinat',
    bio: `Josman es un discípulo de Jesús apasionado por ayudar a las personas a crecer en la Palabra y el poder de Dios. Se caracteriza por explicar de manera sencilla temas complejos y darle una perspectiva moderna a los principios eternos de la Escritura.<br/><br/>

Josman y su esposa, Sindy, son los líderes principales de la iglesia Rompiendo Fronteras en Tegucigalpa, Honduras, y Escuela de Avivamiento. A través de estos ministerios están guiando a muchas personas a encontrarse con Cristo de una manera más real y profunda, y entrenan líderes y ministros que manifiesten el Reino de Dios con poder y autoridad en toda esfera de la sociedad. <br/><br/>

Originario de México, ha servido al Señor en diferentes áreas desde su juventud. En el 2018, Dios lo llama a servirlo en la nación de Honduras junto con su esposa. Juntos, Dios les ha permitido cultivar un mover sobrenatural del Espíritu Santo provocando avivamiento en distintas naciones.`,
    image: '/img/sp-josman.jpg',
  },
]

const selectedSpeaker = ref(speakers[0])
const showBio = ref(false)

function openSpeakerBio(speaker: any) {
  selectedSpeaker.value = speaker
  showBio.value = true
}
</script>
