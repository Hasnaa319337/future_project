<template>
  <footer>
    <v-container>
      <v-row>
        <v-col cols="12" lg="4" md="4" sm="12" xs="12" class="logo"
          ><router-link to="/"
            ><img src="@/assets/images/big_logo.svg" /></router-link
        ></v-col>
        <v-col cols="12" lg="4" md="4" sm="12" xs="12" class="links">
          <div>
            <h2 class="secondary_head">رعاية العميل:</h2>
            <ul class="list">
              <li class="list_item">
                <router-link to="/mysubcription">اشتراكاتي</router-link>
              </li>
              <li class="list_item">
                <router-link to="/">الدعم الفني</router-link>
              </li>
              <li class="list_item">
                <router-link to="/mywishes">رغباتي</router-link>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="secondary_head">تواصل معنا:</h2>
            <ul class="social_icon">
              <li class="list_item"><img src="../assets/images/noun-email-5548518.svg"/>:info@future.com </li>
              <li class="list_item"> <img style="    width: 27px;" src="../assets/images/phone-outline-icon.svg"/> : 971509033902 </li>
            </ul>
            <div class="social_icon">
              <ul>
                <li>
                  <a><img src="../assets/images/instagram.svg" alt="" /></a>
                </li>

                <li>
                  <a><img src="../assets/images/facebook.svg" alt="" /></a>
                </li>
              </ul>
            </div>
          </div>
        </v-col>

        <v-col cols="12" lg="4" md="4" sm="12" xs="12" class="email_box">
          <h2 class="secondary_head">هل تريد الإطلاع على آخر العروض؟</h2>
          <v-form>
            <label class="email_label">بريدك الإلكتروني</label>
            <input type="email" class="email_input" />

            <main-button :btn_contain="btn_contain"></main-button>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script>
import MainButton from "@/components/ui/MainButton.vue";
export default {
  components: { MainButton },
  data() {
    return {
      btn_contain: "اشترك الان",
    };
  },
};
</script>

<style scoped>
footer {
  background-color: rgb(122 158 145 / 43%);
  font-family: "Podkova-Regular";
}
.links {
  display: flex;
  justify-content: space-around;
  justify-items: center;
  margin-bottom: 20px;
}
.logo {
  margin-bottom: 20px;
}
.list_item {
  font-size: 16px;

  margin: 6px 0px;
  font-family: "Cairo-Regular";
}

.list_item a {
  color: black;
  padding-bottom: 10px;
}
.list_item a:hover {
  color: #7a9e91;
}

.email_label {
  font-family: "Podkova-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}
.email_input {
  background: white;
  border-radius: 8px;
  width: 100%;
  height: 45px;
  margin: 10px 0;
  border: none;
  outline: none;
  padding: 0 8px;
  direction: ltr;
}
.social_icon ul {
  display: flex;
  align-items: flex-end;
  justify-items: center;
  cursor: pointer;
}
.social_icon span {
  margin: 5px;
}
.social_icon img {
  width: 50px;
  height: 50px;
}

.social_icon ul {
  padding: 0;
  column-gap: 10px;
}
.social_icon li {
  margin: 0;
 
}
.social_icon img {
  width: 32px;
}
.social_icon img:hover {
  transform: rotate(20deg) scale(1.03);
  transition: 0.3s all ease-in-out;
}
footer .list{
  margin-bottom: 0;
}
@media (max-width: 960px) {
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;
  }
  .email_box {
    flex-direction: column;
  }
}
</style>
