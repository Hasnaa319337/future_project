<template>
  <NavbarComponent />
  <HeaderComponent />
  <div class="account">
    <v-container>
      <div class="first_block">
        <h3 class="main_head">حسابي</h3>
        <p class="paragh" style="font-size: 14px; font-family: Podkova-Regular">
          اعرض المعلومات الشخصية الخاصة بك وحررها أدناه.
        </p>
      </div>
      <div class="big_line"></div>
      <div class="update_info">
        <div>
          <h3 class="main_head">الحساب</h3>
          <p>حدِّث معلوماتك الشخصية.</p>
        </div>
        <div>
          <p>البريد الإلكتروني لتسجيل الدخول:</p>
          <p>adsadds@gmail.com</p>
          <p>لا يمكن تغيير بريدك الإلكتروني لتسجيل الدخول</p>
        </div>
        <form action="#" method="post">
          <v-row style="column-gap: 16%">
            <v-col cols="12" lg="5" md="5" sm="5" xs="12">
              <div class="form-group">
                <label
                  for="card_num"
                  style="display: block; margin-bottom: 20px"
                >
                  الاسم الأول
                </label>
                <input type="text" id="card_num" required />
              </div>
            </v-col>
            <v-col cols="12" lg="5" md="5" sm="5" xs="12">
              <div class="form-group">
                <label
                  for="card_date"
                  style="display: block; margin-bottom: 20px"
                  >الاسم الاخير
                </label>
                <input type="text" id="card_date" required /></div
            ></v-col>
          </v-row>
          <v-row style="column-gap: 16%">
            <v-col cols="12" lg="5" md="5" sm="5" xs="12">
              <div class="form-group">
                <label
                  for="card_name"
                  style="display: block; margin-bottom: 20px"
                  >البريد الإلكتروني
                </label>
                <input type="email" id="card_name" />
              </div>
            </v-col>
            <v-col cols="12" lg="5" md="5" sm="5" xs="12">
              <div class="form-group">
                <label
                  for="card_name"
                  style="display: block; margin-bottom: 20px"
                >
                  رقم الهاتف
                </label>
                <input type="phone" id="card_name" />
              </div>
            </v-col>
          </v-row>
          <div class="buttons">
            <button class="main_button">تجاهل</button>
            <button class="main_button">تحديث معلومات</button>
          </div>
        </form>
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
  data() {
    return {};
  },
};
</script>

<style>
.account {
  margin: 0 20px;
}
.account .update_info {
  font-size: 20px;
  font-family: "Podkova-Regular";
}
.account .big_line {
  margin: 30px 0 115px;
}
.account h3 {
  margin: 20px 0;
}

.account .update_info > div {
  margin-bottom: 50px;
}
.account .update_info > div p {
  margin-bottom: 7px;
}
.account .update_info > div:last-of-type p:last-of-type {
  color: #a18f8f;
}
.update_info {
  width: 80%;
}
.account .buttons {
  display: flex;
  align-items: center;
  justify-content: end;
  /* width: 89.5%; */
  margin: 38px 0;
  column-gap: 18px;
}
.account .buttons button:first-of-type {
  background-image: linear-gradient(90deg, transparent 50%, #fff 0);
  color: #000;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  border: 0;
}
@media (max-width: 800px) {
  .account .buttons {
    /* width: 94%; */
  }
}
form{
  width: 100%;
}
</style>
