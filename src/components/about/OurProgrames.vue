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
          img: "/http://127.0.0.1:5173/src/assets/images/Colorful%20Books.png",
        },
        {
          id: 2,
          name: "برامج نخبوية",
          info: "برامج نخبوية متنوعة تناسب كل الأعمار الصغار والكبار وجميع المراحل",
          img: "http://127.0.0.1:5173/src/assets/images/Educational%20Toys.png",
        },
        {
          id: 3,
          name: "برامج ترفيهية",
          info: "برامج ترفيهية متنوعة تناسب كل الأعمار الصغار والكبار وجميع المراحل",
          img: "http://127.0.0.1:5173/src/assets/images/Soccer.png",
        },
        {
          id: 4,
          name: "برامج تحفيزية",
          info: "برامج تحفيزية متنوعة تناسب كل الأعمار الصغار والكبار وجميع المراحل",
          img: "http://127.0.0.1:5173/src/assets/images/Unwrapping%20Present.png",
        },
      ],
    };
  },
};
</script>

<style>
.our_programes {
  background-color: rgb(122 158 145 / 43%);
  margin-bottom: 30px;
  padding: 40px 0;
  border-radius: 8px;
}
</style>
