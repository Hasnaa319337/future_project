<template>
  <div>
    <NavbarComponent />
    <HeaderComponent />
    <HeroComponent/>
    <WhousComponent/>
    <fixedbanner/>
    <ProductsSlider />
    <CommentsComponent />
    <FooterComponent />
  </div>
</template>

<script setup>
import NavbarComponent from "@/components/NavbarComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import HeroComponent from "@/components/home/HeroComponent.vue";
import WhousComponent from "@/components/home/WhousComponent.vue";
import fixedbanner from "@/components/home/FixedBanner.vue";
import ProductsSlider from "@/components/home/ProductsSlider.vue";
import CommentsComponent from "@/components/home/CommentsComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";


</script>
