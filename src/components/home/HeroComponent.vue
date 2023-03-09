<template>
  <div class="hero">
    <v-carousel>
      <v-carousel-item
      src="https://static.wixstatic.com/media/11062b_a6e1bb8d93704b859a65ba5d3dd3645a~mv2.jpg/v1/fill/w_1899,h_748,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_a6e1bb8d93704b859a65ba5d3dd3645a~mv2.jpg"

        cover
        ><div class="slider_contain">
          <h3>(1) انضم إلينا في جيل المستقبل</h3>
          <p>جيل المستقبل منصة تعليمية نخبوية تهدف إلى تنمية مهارات ومواهب</p>
          <router-link to="/products" class="btn btn-border-4"
            >انضم الينا الان ! </router-link
          >
        </div></v-carousel-item
      >

      <v-carousel-item
      src="https://static.wixstatic.com/media/623504_e7942bb7e62340099341dbc32a52e206~mv2.png/v1/fill/w_1899,h_748,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/623504_e7942bb7e62340099341dbc32a52e206~mv2.png"

        cover
      >
        <div class="slider_contain">
          <h3>(2) انضم إلينا في جيل المستقبل</h3>
          <p>جيل المستقبل منصة تعليمية نخبوية تهدف إلى تنمية مهارات ومواهب</p>
          <router-link to="/products" class="btn btn-border-4"
            >انضم الينا الان ! </router-link
          >
        </div>
      </v-carousel-item>

      <v-carousel-item
      src="https://static.wixstatic.com/media/623504_e0f8424b576d4cdb98c7d6a6aadb59cb~mv2.jpg/v1/fill/w_1600,h_630,al_c,q_85,enc_auto/623504_e0f8424b576d4cdb98c7d6a6aadb59cb~mv2.jpg"
        cover
      >
        <div class="slider_contain">
          <h3>(3) انضم إلينا في جيل المستقبل</h3>
          <p>جيل المستقبل منصة تعليمية نخبوية تهدف إلى تنمية مهارات ومواهب</p>
          <router-link to="/products" class="btn btn-border-4"
            >انضم الينا الان ! </router-link
          >
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {};
</script>

<style>
.v-responsive__sizer ~ .v-responsive__content {
  margin-inline-start: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
}
.v-window__controls {
  display: none !important;
}
.v-carousel__controls {
  background: transparent !important;
}
.v-btn--variant-text .v-btn__overlay {
  opacity: 1 !important;
  width: 20px !important;
  height: 20px !important;
}
.v-btn {
  color: #9d9d9d !important;
}
.v-btn--active {
  color: #7a9e91 !important;
}

/* start:contain style */
.hero .slider_contain {
  background: rgba(0, 0, 0, 22%);
  color: white;
  text-align: center;
  padding: 20px;
  position: relative;
  margin: 20px;
}
.hero .slider_contain h3 {
  font-size: 32px;
  font-family: "Podkova-SemiBold";
}
.hero .slider_contain p {
  font-size: 24px;
  font-family: "Podkova-Regular";
  margin-bottom: 20px;
}
/* .hero .slider_contain a{
  position: absolute;
  left: 35%;
} */
.hero .slider_contain .btn {
  position: absolute;
  display: inline-block;
  background: white;
  text-align: center;
  font-family: "Podkova-SemiBold";
  transition: all 0.5s linear;
  width: 150px;
  height: 40px;
  font-size: 20px;
  color: #000;
  padding-top: 5px;
  left: 35%;
  bottom: -18px;
}
@media (max-width: 975px) {
  .hero .slider_contain h3 {
    font-size: 24px;
    font-family: "Podkova-SemiBold";
  }
  .hero .slider_contain p {
    font-size: 18px;
    font-family: "Podkova-Regular";
  }
  .hero .slider_contain .btn {
    font-size: 14px;
    padding-top: 10px;
    left: 30%;
  }
}
/* end:contain style */
</style>
