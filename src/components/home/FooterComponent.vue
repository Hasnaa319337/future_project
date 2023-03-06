<template>
  <footer>
    <v-container>
      <v-row>
        <v-col cols="12" lg="3" md="12" xs="12"><img src="@/assets/images/big_logo.svg"></v-col>
        <v-col cols="12" lg="3" md="6" sm="6" xs="12">
          <h2 class="secondary_head">رعاية العميل:</h2>
          <ul class="list">
            <li class="list_item">
              <router-link to="/">اشتراكاتي</router-link>
            </li>
            <li class="list_item">
              <router-link to="/">الدعم الفني</router-link>
            </li>
            <li class="list_item"><router-link to="/">رغباتي</router-link></li>
          </ul>
        </v-col>
        <v-col cols="12" lg="3" md="6" sm="6" xs="12">
          <h2 class="secondary_head">تواصل معنا:</h2>
          <ul class="list">
            <li class="list_item">البريد الإلكتروني : hhhh1343</li>
            <li class="list_item">هاتف : hhhh1343</li>
          </ul>
          <div class="social_icon">
            <span><img src="@/assets/images/instagram.svg"/></span>
            <span><img src="@/assets/images/facebook.svg"/></span>
            
          </div>
        </v-col>
        <v-col cols="12" lg="3" md="12" xs="12">
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
}


.list_item {
  font-size: 16px;
  font-family: "Podkova-Regular";
  margin: 6px 0px;
}

.list_item a {
  color: black;
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

.social_icon span{
margin: 5px;

}
.social_icon img{
width: 50px;
height: 50px;

}
</style>
