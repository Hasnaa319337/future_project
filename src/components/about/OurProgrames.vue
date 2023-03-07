<template>
  <div class="our_programes">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          lg="3"
          md="3"
          sm="6"
          xs="6"
          class="program"
          v-for="program in programs"
          :key="program.id"
        >
          <program-card :program="program" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import programCard from "@/components/cards/programCard.vue";
export default {
  components: { programCard },

  data() {
    return {
      programs: [
        {
          id: 1,
          name: "برامج تعليمية",
          info: "برامج تعليمية متنوعة تناسب كل الأعمار الصغار والكبار وجميع المراحل",
          img: "https://static.wixstatic.com/media/11062b_61159504c4b24999b7177c3ed9ddf4dc~mv2.jpg/v1/crop/x_958,y_0,w_2372,h_2848/fill/w_336,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Colorful%20Books.jpg",
        },
        {
          id: 2,
          name: "برامج نخبوية",
          info: "برامج نخبوية متنوعة تناسب كل الأعمار الصغار والكبار وجميع المراحل",
          img: "https://static.wixstatic.com/media/11062b_9179deb630b44ccdb0674a362ed80857~mv2.jpg/v1/crop/x_993,y_0,w_2478,h_2976/fill/w_336,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Educational%20Toys.jpg",
        },
        {
          id: 3,
          name: "برامج ترفيهية",
          info: "برامج ترفيهية متنوعة تناسب كل الأعمار الصغار والكبار وجميع المراحل",
          img: "https://static.wixstatic.com/media/11062b_e36a1b973872425089e6f3864c05238a~mv2.jpg/v1/crop/x_1405,y_0,w_2477,h_2974/fill/w_336,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Soccer.jpg",
        },
        {
          id: 4,
          name: "برامج تحفيزية",
          info: "برامج تحفيزية متنوعة تناسب كل الأعمار الصغار والكبار وجميع المراحل",
          img: "https://static.wixstatic.com/media/11062b_6352cae8e7564f1f984ebe121dd2fe08~mv2.jpeg/v1/crop/x_1112,y_0,w_2776,h_3333/fill/w_336,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Unwrapping%20Present.jpeg",
        },
      ],
    };
  },
};
</script>

<style>
.our_programes {
  background-color: rgb(122 158 145 / 43%);

  padding: 40px 0;
  border-radius: 8px;
  margin: 20px;
}
</style>
