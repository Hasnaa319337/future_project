<template>
  <div class="product_card" v-if="product">
    <img class="fav" src="@/assets/images/fav.svg" />

    <img class="image_card" :src="product.image" />

    <h4 class="product_name">{{ product.name }}</h4>
    <div class="Price_and_rating">
      <div class="price">
        <span class="price_after">{{ product.price }} ر.س</span>
        <span class="price_before">{{ product.sale_price }} ر.س</span>
      </div>
      <div class="rate">
        <span class="rate_value">{{ product.rating }}</span>
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
    <MainButton :btn_contain="btn_contain" />
  </div>
</template>

<script>
import MainButton from "@/components/ui/MainButton.vue";
export default {
  props: ["product"],
  components: { MainButton },
  data() {
    return {
      btn_contain: "اضافة الى العربة",
    };
  },
};
</script>

<style>
.product_card {
  position: relative;
  width: 300px;
  margin-block: 15px;
  border-radius: 16px;
  border: 1px solid #e9e8e8;
  box-shadow: 0 0 10px 2px #e1e1e199;
  padding: 20px;
  margin: 0 10px;
}
.product_card .fav {
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;
}

.product_card .image_card {
  width: 218px;
  height: 218px;
  border-radius: 50%;
  object-fit: cover;
  margin: auto;
}
.product_card .product_name {
  font-size: 16px;
  margin-top: 10px;
  font-family: "Podkova-Regular";
  text-align: center;
}

.product_card .Price_and_rating {
  display: flex;
  justify-items: center;
  justify-content: space-between;
  margin: 20px 0;
}
.product_card .Price_and_rating .price,
.product_card .Price_and_rating .rate {
  display: flex;
  justify-content: space-around;
}

.price_after {
  font-size: 16px;
}
.price_before {
  text-decoration: line-through;
  color: #7f7f7f;
  font-size: 16px;
  margin: 0 5px;
  display: inline-block;
}
.rate_value {
  font-size: 16px;
  margin: 0 5px;
  display: inline-block;
}
</style>
