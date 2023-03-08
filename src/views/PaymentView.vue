<template>
  <NavbarComponent />
  <HeaderComponent />
  <div class="payment">
    <v-container>
      <h5 class="secondary_head">تفاصيل الدفع</h5>
      <div class="thin_line"></div>
      <v-row>
        <v-col cols="12" lg="8" md="6" sm="6" xs="12" class="payment_data">
          <form action="#" method="post">
            <div class="form-group">
              <label for="card_num" style="display: block; margin-bottom: 20px">
                رقم البطاقة</label
              >
              <input type="text" id="card_num" required />
            </div>
            <div class="form-group">
              <label for="card_date" style="display: block; margin-bottom: 20px"
                >تاريخ انتهاء الصلاحية
              </label>
              <input type="date" id="card_date" required />
            </div>
            <div class="form-group">
              <label for="card_name" style="display: block; margin-bottom: 20px"
                >اسم حامل البطاقة</label
              >
              <input type="text" id="card_name" />
            </div>
          </form>
        </v-col>
        <v-col cols="12" lg="4" md="6" sm="6" xs="12" class="checkout_data">
          <div class="contain">
            <div class="total_price">
              <span> المجموع:</span>
              <span>85 ر.س</span>
            </div>

            <div class="total_price">
              <span>رسوم التوصيل</span>
              <span>0 ر.س</span>
            </div>
            <div class="total_price">
              <span> المبلغ الإجمالي</span>
              <span>85 ر.س</span>
            </div>
            <button class="main_button openmodale">تنفيذ الطلب</button>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="modale">
      <div class="modal-dialog">
        <h3>تم الدفع</h3>
        <button class="button-close closemodale">&times;</button>
      </div>
    </div>
  </div>
  <Footercomponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import Footercomponent from "@/components/FooterComponent.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
import $ from "jquery";
$(function () {
  $(".openmodale").click(function (e) {
    e.preventDefault();
    $(".modale").addClass("opened");
  });
  $(".closemodale").click(function (e) {
    e.preventDefault();
    $(".modale").removeClass("opened");
  });
});
export default {
  components: {
    HeaderComponent,
    Footercomponent,
    NavbarComponent,
  },
};
</script>

<style>
.payment {
  position: relative;
}
.payment h5 {
  color: #ee4451;
  font-size: 16px;
  margin-top: 200px;
}
.payment .thin_line {
  margin: 40px 0;
}
.payment label {
  color: #000000cc;
  font-size: 16px;
}
.payment input {
  width: 70%;
}
.payment .total_price {
  font-size: 14px;
  font-family: "Podkova-Regular";
}
.payment .contain {
  width: 70%;
}

.payment .main_button {
  width: 100%;

  background-image: linear-gradient(90deg, transparent 50%, #4fab47 0);
  border: 1px solid #4fab47;
  margin-top: 15px;
}
.payment .main_button:hover {
  color: #4fab47;
}
.payment .total_price {
  padding: 15px 0;
}

.modale h3 {
  font-size: 40px;
  color: white;
  font-family: "Podkova-SemiBold";
}

.modale:before {
  content: "";
  display: none;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
}
.opened:before {
  display: block;
}
.opened .modal-dialog {
  transform: translate(0, 0);
  top: 20%;
}
.modal-dialog {
  background: #c5d5cf;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  text-align: center;
  border-radius: 8px;
  width: 220px;
  height: 220px;
  color: white;

  z-index: 1000;

  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  transform: translate(0, -500%);
  transition: transform 0.3s ease-out;
}

 .modale .button-close {
  color: #ee4451;
  font-size: 20px;
  text-decoration: none;
  padding: 10px;
  position: absolute;
  right: 7px;
  top: 0;
  cursor: pointer !important;
}
.modale .button-close:hover {
  color: #919191;
}

.modale_hidden {
  display: none;
}

input{
    margin-bottom: 30px;
}
</style>
