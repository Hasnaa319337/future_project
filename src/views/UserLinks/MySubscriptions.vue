<template>
  <NavbarComponent />
  <HeaderComponent />

  <div class="subscriptions">
    <v-container>
      <div class="first_block">
        <h3 class="main_head">اشتراكاتي</h3>
        <p class="paragh">عرض الاشتراكات التي اشتريتها وإدارتها</p>
      </div>
      <div class="big_line"></div>
      <div class="second_block">
        <h3 class="main_head">لم تشتر أي اشتراكات حتى الآن.</h3>
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
