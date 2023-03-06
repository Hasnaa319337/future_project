<template>
  <div class="products_slider">
    <v-container>
        <Carousel
      :wrap-around="true"
      :autoplay="1"
      :transition="8000"
      :breakpoints="breakpoints"
      :show-arrows="true"
    >
      <Slide v-for="product in products" :key="product.id">
        <!-- <div class="carousel__item">image</div> -->
        <ProdutCard :product="product" />
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
    </v-container>
  </div>
</template>

<script>
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import ProdutCard from "@/components/ProductCard.vue";
export default {
  components: {
    Carousel,
    Slide,
    Navigation,
    ProdutCard,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "I am A Product",
          price: 20,
          sale_price: 25,
          rating: 4.8,
          image:
            "/src/assets/images/22e53e_01575d792adb43a6a16595bd74a1cc8d_mv2.png",
        },
      
        {
          id: 2,
          name: "I am A Product",
          price: 20,
          sale_price: 25,
          rating: 4.8,
          image:
            "/src/assets/images/22e53e_6818890490334e429d78876ba5f757ce_mv2.png",
        },
        {
          id: 3,
          name: "I am A Product",
          price: 20,
          sale_price: 25,
          rating: 4.8,
          image:
            "/src/assets/images/22e53e_7066c7318bb34be38d3a4f2e3a256021_mv2.png",
        },
        {
          id: 4,
          name: "I am A Product",
          price: 20,
          sale_price: 25,
          rating: 4.8,
          image:
            "/src/assets/images/22e53e_efc1552d8050407f82ea158302d0debd_mv2.png",
        },
      ],
      breakpoints: {
        // 700px and up
        900: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        // 1024 and up

        1260: {
          itemsToShow: 4,
          snapAlign: "start",
        },
        750: {
          itemsToShow: 2,
          snapAlign: "start",
        },
      },
    };
  },
};
</script>

<style></style>
