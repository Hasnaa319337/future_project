<template>
  <div class="products_slider">
    <v-container>
      <div class="first_block">
       
      </div>
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
import ProdutCard from "@/components/cards/ProductCard.vue";
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
          rating: 4.1,
          image:
            "https://static.wixstatic.com/media/22e53e_b53f9a53db034e178a3f2d794ae70f1c~mv2.jpg/v1/fill/w_431,h_431,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/22e53e_b53f9a53db034e178a3f2d794ae70f1c~mv2.jpg",
        },

        {
          id: 2,
          name: "I am A Product",
          price: 20,
          sale_price: 25,
          rating: 3.5,
          image:
            "https://static.wixstatic.com/media/22e53e_6818890490334e429d78876ba5f757ce~mv2.jpg/v1/fill/w_431,h_431,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/22e53e_6818890490334e429d78876ba5f757ce~mv2.jpg",
        },
        {
          id: 3,
          name: "I am A Product",
          price: 20,
          sale_price: 25,
          rating: 4.7,
          image:
            "https://static.wixstatic.com/media/22e53e_a5d9116384fb4659918c011a75175f77~mv2.jpg/v1/fill/w_363,h_363,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/22e53e_a5d9116384fb4659918c011a75175f77~mv2.jpg",
        },
        {
          id: 4,
          name: "I am A Product",
          price: 20,
          sale_price: 25,
          rating: 5,
          image:
            "https://static.wixstatic.com/media/22e53e_4092f4f0f4d844afaed1cfde3069a6da~mv2.jpg/v1/fill/w_363,h_363,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/22e53e_4092f4f0f4d844afaed1cfde3069a6da~mv2.jpg",
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

<style>
.carousel__prev {
  left: -100px;
}
.carousel__next {
  right: -100px;
}
.products_slider h3 {
  font-size: 35px;
  font-weight: 600;
  font-family: "Podkova-Bold";

  margin: 40px 0 10px;
}
.products_slider p {
  font-size: 24px;
  font-family: "Podkova-Regular";
  margin-bottom: 40px;
}
</style>
