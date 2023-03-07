<template>
  <NavbarComponent />
  <HeaderComponent />

  <div class="pocket">
    <v-container>
      <div class="first_block">
        <h3 class="main_head">محفظتي</h3>
        <p class="paragh">احفظ بيانات الدفع الخاصة بك للوصول السريع مستقبلًا</p>
      </div>
      <div class="big_line"></div>
      <div class="second_block">
        <h3 class="main_head">لا توجد بطاقات محفوظة</h3>
        <span class="link">
          <router-link to="/"
            >احفظ تفاصيل الدفع الخاصة بك بأمان</router-link
          ></span
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
