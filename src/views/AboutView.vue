<template>
  <div class="about">
    <NavbarComponent />
    <HeaderComponent />

    <about-header />
    <OurProgrames />
    <Footercomponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import Footercomponent from "@/components/FooterComponent.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";

import OurProgrames from "@/components/about/OurProgrames.vue";
import AboutHeader from "@/components/about/AboutHeader.vue";
export default {
  components: {
    HeaderComponent,
    Footercomponent,
    NavbarComponent,
    AboutHeader,
    OurProgrames,
  },
};
</script>

<style></style>
