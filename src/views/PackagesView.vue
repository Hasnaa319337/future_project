<template>
  <div class="packages">
    <HeaderComponent />
    <OurPackages />
    <Footercomponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import Footercomponent from "@/components/FooterComponent.vue";
import OurPackages from "@/components/packages/OurPackages.vue";
export default {
  components: {
    HeaderComponent,
    Footercomponent,
    OurPackages,
  },
};
</script>

<style></style>
