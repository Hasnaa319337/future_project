<template>
  <div class="about">
    <HeaderComponent />
    <OurProgrames />
    <Footercomponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import Footercomponent from "@/components/FooterComponent.vue";
import OurProgrames from "@/components/about/OurProgrames.vue";
export default {
  components: {
    HeaderComponent,
    Footercomponent,
    OurProgrames,
  },
};
</script>

<style></style>
