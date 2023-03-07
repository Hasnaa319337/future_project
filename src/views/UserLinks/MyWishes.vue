<template>
  <NavbarComponent />
  <HeaderComponent />

  <div class="wishes">
    <v-container>
      <div class="first_block">
        <h3 class="main_head">الرغبات</h3>
        <p class="paragh">عرض المنتجات المفضلة التي حفظتها في قائمة رغباتك.</p>
      </div>
      <div class="big_line"></div>
      <div class="second_block">
        <h3 class="main_head">لم تضف أي منتجات إلى الآن.</h3>
        <span class="link">
          <router-link to="/">ابدأ في إضافة منتجات</router-link></span
        >
      </div>
    </v-container>
  </div>

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
};
</script>

<style></style>
