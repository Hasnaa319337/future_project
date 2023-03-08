<template>
  <NavbarComponent />
  <HeaderComponent />
  <div class="cart">
    <v-container>
      <h3 class="main_head" style="text-align: center; margin: 90px 0">
        عربتي
      </h3>
      <div class="thin_line"></div>
      <v-row>
        <v-col cols="12" lg="6" md="6" sm="12" xs="12" class="product_details">
          <div class="product">
            <div class="product_img">
              <img
                src="https://static.wixstatic.com/media/22e53e_6818890490334e429d78876ba5f757ce~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01/22e53e_6818890490334e429d78876ba5f757ce~mv2.webp"
              />
            </div>
            <div class="product_info">
              <h3 class="main_head" style="margin-top: 0">product name</h3>
              <div class="product_price">
                <span class="price">price ر.س</span>
                <div class="quantity">
                  <div class="quantity_buttons">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>
            <button class="delete_icon">
              <img src="@/assets/images/Vector.svg" />
            </button>
          </div>
          <div class="payment_form">
            <form action="#" method="post">
              <div class="flex">
                <div class="form-group">
                  <input
                    type="text"
                    id="coupon"
                    placeholder="ادخل رقم الكوبون"
                    required
                  />
                </div>
                <div></div>
                <div class="form-group">
                  <button class="main_button">تطبيق</button>
                </div>
              </div>
              <div class="form-group">
                <textarea id="note" placeholder="اضيف ملاحظات"></textarea>
              </div>
            </form>
          </div>
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12" xs="12" class="product_summary">
          <div class="contain">
            <h5 class="secondary_head">ملخص الطلب</h5>
            <div class="total_price">
              <span>المبلغ الإجمالي</span>
              <span>85 ر.س</span>
            </div>

            <div class="total_price">
              <span class="secondary_head">الإجمالي</span>
              <span>85 ر.س</span>
            </div>

            <router-link to="/payment-details">
              <MainButton :btn_contain="btn_contain"
            /></router-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <Footercomponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import Footercomponent from "@/components/FooterComponent.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
import MainButton from "@/components/ui/MainButton.vue";

export default {
  components: {
    HeaderComponent,
    Footercomponent,
    NavbarComponent,
    MainButton,
  },
  data() {
    MainButton;
    return {
      btn_contain: "متابعة الدفع",
    };
  },
};
</script>

<style>


/* Start Product details */
.product_details .product {
  display: grid;
  grid-template-columns: repeat(3, 40% 50% 10%);
  border-bottom: 1px solid #c0c0c085;
  border-left: 1px solid #c0c0c085;
  padding: 50px 0;
}
.product_details .product .product_img {
  height: 200px;
}
.product_details .product .product_img img {
  width: 85%;
  height: 100%;
  object-fit: cover;
}
.product_details .product .product_price {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}
.product_details .product .product_price .price {
  line-height: 2.8;
}
.quantity {
  width: 40%;
}
.quantity_buttons {
  border: 1px solid #cccccc59;
  height: 50px;
  color: black;
  width: 100%;
  padding: 0px 12px;
  border-radius: 8px;
  font-size: 20px;
  display: flex;
  justify-items: center;
  justify-content: space-between;
}
.quantity_buttons button {
  border: none;
  background-color: transparent;
  color: black;
}
.quantity_buttons span {
  border-right: 1px solid #cccccc59;
  border-left: 1px solid #cccccc59;
width: 40px;
text-align: center;
display: inline-block;
  line-height: 2.4;
}

/* end:: Product details */

/* Start:: Payment  */
.payment_form {
  padding: 50px 0;
}
.payment_form .flex {
  display: grid;
  grid-template-columns: repeat(3, 54% 20% 20%);
}
.payment_form input,
.payment_form textarea {
  font-size: 16px;
}
.payment_form textarea{
    margin-top: 30px;
}
.payment_form button {
  height: 45px;
}
/* end:: Payment  */

/* Start product summary */

.product_summary .contain h5 {
  margin-bottom: 30px;
}
.product_summary .total_price:first-of-type {
  border-top: 2px solid #c0c0c085;
  border-bottom: 2px solid #c0c0c085;
}


@media (max-width: 957px) {
  .contain {
    float: none;
  }
  .payment_form button {
    height: 45px;
    width: 118px;
  }
}
@media (max-width: 500px) {
  .payment_form button {
    width: 90px;
  }
}
/* End:: product summary */
</style>
