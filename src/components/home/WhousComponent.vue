<template>
  <div>
    <div class="whous">
      <div class="whous_contain">
        <h4>ما جيل المستقبل؟</h4>
        <p>
          جيل المستقبل هي مؤسسة تعليمية تربوية تعنى بتنشئة الناشئة عن طريق
          تعليمهم وتثقيفهم بإقامة برامج ترفيهية تربوية تعليمية في جو تسوده
          المودة
        </p>
        <router-link to="/about" class="btn btn-border-4">
          <img src="../../assets/images/Arrow.png" alt="" />
          تعرف علينا
        </router-link>
      </div>
      <div class="logo_image">
        <img src="../../assets/images/big_logo.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
.whous {
  background-image: url("../../assets/images/about-background.png");
  background-size: cover;
  background-position: 50% 50%;
  height: 333px;
  width: 100%;
  display: flex;
  align-items: center;
}
.whous_contain {
 width: 30%;
  margin-bottom:30px;
  padding: 20px;

  background: #7a9e91;
  color: white;
  border-radius: 8px;
}
.whous_contain h4 {
  font-size: 24px;
  margin-right: 20px;
  font-family: "Podkova-SemiBold";
}
.whous_contain p {
  font-size: 18px;
  margin: 11px 0;
  font-family: "Podkova-Regular";
}
.whous_contain img {
  width: 12px;
  margin: 0 8px;
}
.whous_contain a {
  position: relative;
  display: inline-block;
  background: white;
  text-align: center;
  font-family: "Podkova-SemiBold";
  transition: all 0.5s linear;
  width: 150px;
  height: 40px;
  font-size: 20px;
  color: #000;
  float: left;
  padding-top: 5px;
}


.logo_image {
   width: 30%;
   height: 100%;
   margin: auto;
}
.logo_image img {
  width: 100% !important;
  height: 100% !important;
}
</style>
