<template>
  <NavbarComponent />
  <HeaderComponent />


  <div class="needs">
    <v-container>
      <div class="first_block">
        <h3 class="main_head">طلباتي</h3>
        <p class="paragh">اعرض سجل طلبك أو تحقق من حالة طلب حديث.</p>
      </div>
      <div class="big_line"></div>
      <div class="second_block">
        <h3 class="main_head">لم تضع أي طلبات حتى الآن.</h3>
        <span class="link"> <router-link to="/">بدء التصفح</router-link></span>
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
