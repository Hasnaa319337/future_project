<template>
  <NavbarComponent />

  <HeaderComponent />
  <h3>products</h3>
  <Footercomponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import Footercomponent from "@/components/FooterComponent.vue";
// import MainButton from "@/components/ui/MainButton.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
export default {
  components: {
    HeaderComponent,
    Footercomponent,
    NavbarComponent,
    // MainButton,
  },
};
</script>

<style></style>
