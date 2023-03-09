<template>
  <NavbarComponent />
  <HeaderComponent />
  <div class="products">
    <h3 class="main_head">أحدث المنتجات</h3>
    <ProductsSlider />
    <h3 class="main_head">الأكثر مبيعًا</h3>
    <ProductsSlider />
    <h3 class="main_head">منتجاتنا</h3>
    <v-row>
      <v-col cols="12" lg="2" md="2" xs="0" class="filter"
        ><product-filter
      /></v-col>
      <v-col cols="12" lg="10" md="10" xs="12" class="myproducts">
        <v-row>
          <v-col cols="12" lg="3" md="3" sm="3" xs="6"
            ><div class="product_card">
              <img class="fav" src="@/assets/images/fav.svg" />
              <img
                class="image_card"
                src="https://static.wixstatic.com/media/22e53e_6818890490334e429d78876ba5f757ce~mv2.jpg/v1/fill/w_431,h_431,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/22e53e_6818890490334e429d78876ba5f757ce~mv2.jpg"
              />
              <h4 class="product_name">I Am Product</h4>
              <div class="Price_and_rating">
                <div class="price">
                  <span class="price_after">25 ر.س</span>
                  <span class="price_before">10 ر.س</span>
                </div>
                <div class="rate">
                  <span class="rate_value">3.2</span>
                  <span>
                    <svg
                      :key="rate"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="orange"
                      class="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                      /></svg
                  ></span>
                </div>
              </div>
              <MainButton :btn_contain="btn_contain" /></div
          ></v-col>
          <v-col cols="12" lg="3" md="3" sm="3" xs="6"
            ><div class="product_card">
              <img class="fav" src="@/assets/images/fav.svg" />
              <img
                class="image_card"
                src="https://static.wixstatic.com/media/22e53e_6818890490334e429d78876ba5f757ce~mv2.jpg/v1/fill/w_431,h_431,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/22e53e_6818890490334e429d78876ba5f757ce~mv2.jpg"
              />
              <h4 class="product_name">I Am Product</h4>
              <div class="Price_and_rating">
                <div class="price">
                  <span class="price_after">25 ر.س</span>
                  <span class="price_before">10 ر.س</span>
                </div>
                <div class="rate">
                  <span class="rate_value">3.2</span>
                  <span>
                    <svg
                      :key="rate"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="orange"
                      class="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                      /></svg
                  ></span>
                </div>
              </div>
              <MainButton :btn_contain="btn_contain" /></div
          ></v-col>
          <v-col cols="12" lg="3" md="3" sm="3" xs="6"
            ><div class="product_card">
              <img class="fav" src="@/assets/images/fav.svg" />
              <img
                class="image_card"
                src="https://static.wixstatic.com/media/22e53e_6818890490334e429d78876ba5f757ce~mv2.jpg/v1/fill/w_431,h_431,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/22e53e_6818890490334e429d78876ba5f757ce~mv2.jpg"
              />
              <h4 class="product_name">I Am Product</h4>
              <div class="Price_and_rating">
                <div class="price">
                  <span class="price_after">25 ر.س</span>
                  <span class="price_before">10 ر.س</span>
                </div>
                <div class="rate">
                  <span class="rate_value">3.2</span>
                  <span>
                    <svg
                      :key="rate"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="orange"
                      class="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                      /></svg
                  ></span>
                </div>
              </div>
              <MainButton :btn_contain="btn_contain" /></div
          ></v-col>
          <v-col cols="12" lg="3" md="3" sm="3" xs="6"
            ><div class="product_card">
              <img class="fav" src="@/assets/images/fav.svg" />
              <img
                class="image_card"
                src="https://static.wixstatic.com/media/22e53e_6818890490334e429d78876ba5f757ce~mv2.jpg/v1/fill/w_431,h_431,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/22e53e_6818890490334e429d78876ba5f757ce~mv2.jpg"
              />
              <h4 class="product_name">I Am Product</h4>
              <div class="Price_and_rating">
                <div class="price">
                  <span class="price_after">25 ر.س</span>
                  <span class="price_before">10 ر.س</span>
                </div>
                <div class="rate">
                  <span class="rate_value">3.2</span>
                  <span>
                    <svg
                      :key="rate"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="orange"
                      class="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                      /></svg
                  ></span>
                </div>
              </div>
              <MainButton :btn_contain="btn_contain" /></div
          ></v-col>
          <v-col cols="12" lg="3" md="3" sm="3" xs="6"
            ><div class="product_card">
              <img class="fav" src="@/assets/images/fav.svg" />
              <img
                class="image_card"
                src="https://static.wixstatic.com/media/22e53e_6818890490334e429d78876ba5f757ce~mv2.jpg/v1/fill/w_431,h_431,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/22e53e_6818890490334e429d78876ba5f757ce~mv2.jpg"
              />
              <h4 class="product_name">I Am Product</h4>
              <div class="Price_and_rating">
                <div class="price">
                  <span class="price_after">25 ر.س</span>
                  <span class="price_before">10 ر.س</span>
                </div>
                <div class="rate">
                  <span class="rate_value">3.2</span>
                  <span>
                    <svg
                      :key="rate"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="orange"
                      class="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                      /></svg
                  ></span>
                </div>
              </div>
              <MainButton :btn_contain="btn_contain" /></div
          ></v-col>
          <v-col cols="12" lg="3" md="3" sm="3" xs="6"
            ><div class="product_card">
              <img class="fav" src="@/assets/images/fav.svg" />
              <img
                class="image_card"
                src="https://static.wixstatic.com/media/22e53e_6818890490334e429d78876ba5f757ce~mv2.jpg/v1/fill/w_431,h_431,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/22e53e_6818890490334e429d78876ba5f757ce~mv2.jpg"
              />
              <h4 class="product_name">I Am Product</h4>
              <div class="Price_and_rating">
                <div class="price">
                  <span class="price_after">25 ر.س</span>
                  <span class="price_before">10 ر.س</span>
                </div>
                <div class="rate">
                  <span class="rate_value">3.2</span>
                  <span>
                    <svg
                      :key="rate"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="orange"
                      class="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                      /></svg
                  ></span>
                </div>
              </div>
              <MainButton :btn_contain="btn_contain" /></div
          ></v-col>
          <v-col cols="12" lg="3" md="3" sm="3" xs="6"
            ><div class="product_card">
              <img class="fav" src="@/assets/images/fav.svg" />
              <img
                class="image_card"
                src="https://static.wixstatic.com/media/22e53e_6818890490334e429d78876ba5f757ce~mv2.jpg/v1/fill/w_431,h_431,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/22e53e_6818890490334e429d78876ba5f757ce~mv2.jpg"
              />
              <h4 class="product_name">I Am Product</h4>
              <div class="Price_and_rating">
                <div class="price">
                  <span class="price_after">25 ر.س</span>
                  <span class="price_before">10 ر.س</span>
                </div>
                <div class="rate">
                  <span class="rate_value">3.2</span>
                  <span>
                    <svg
                      :key="rate"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="orange"
                      class="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                      /></svg
                  ></span>
                </div>
              </div>
              <MainButton :btn_contain="btn_contain" /></div
          ></v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
  <Footercomponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import Footercomponent from "@/components/FooterComponent.vue";
import MainButton from "@/components/ui/MainButton.vue";

import NavbarComponent from "@/components/NavbarComponent.vue";
import ProductFilter from "@/components/ProductFilter.vue";
import ProductsSlider from "../components/home/ProductsSlider.vue";
// import ProductCard from "@/components/cards/ProductCard.vue";
export default {
  components: {
    HeaderComponent,
    Footercomponent,
    NavbarComponent,
    // ProductCard,
    MainButton,
    ProductFilter,
    ProductsSlider,
  },
  data() {
    return {
      btn_contain: "اضافة الى العربة",
    };
  },
};
</script>

<style>
.products {
  margin: 40px 25px;
}
.products .main_head {
  border: 2px solid #000;
  display: flex;
  margin: auto;
  padding: 10px 20px;
  text-align: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
  width: 160px;
  margin-block: 30px;
}
</style>
