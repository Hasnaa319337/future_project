<template>
    <NavbarComponent />
    <HeaderComponent />
    <Footercomponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import Footercomponent from "@/components/FooterComponent.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
export default {
    components: {
    HeaderComponent,
    Footercomponent,
    NavbarComponent,
  },
}
</script>

<style>

</style>