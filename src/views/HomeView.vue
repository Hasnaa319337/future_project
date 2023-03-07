<template>
  <div>
    <NavbarComponent />
    <HeaderComponent />
    <!-- <fixedbanner/> -->
    <ProductsSlider />
    <CommentsComponent />
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import ProductsSlider from "@/components/home/ProductsSlider.vue";
import CommentsComponent from "@/components/home/CommentsComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";

// import fixedbanner from "@/components/home/FixedBanner.vue";
</script>
