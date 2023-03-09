<template>
  <div>
    <div class="fixed_banner">
      <div class="fixed_banner_contain">
        <h4>عروض بداية الفصل الدراسي</h4>
        <h2 class="secondary_head">خصومات تصل إلى %20</h2>

        <router-link to="/products" class="btn btn-border-4"
          >اكتشف المزيد</router-link
        >
      </div>
  
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style >
.fixed_banner {
  background-image: url("../../assets/images/packages_background.png");
  background-size: cover;
  background-position: 50% 50%;
  height: 333px;
  width: 100%;
  display: flex;
  align-items: center;
}
.fixed_banner_contain {
  width: 30%;
  margin: 0 30px;
  padding: 34px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-family: "Podkova-Regular";
}
.fixed_banner_contain h4 {
  font-size: 24px;
}
.fixed_banner_contain h2 {
  font-size: 35px;
  margin: 20px 0 30px;
}
.fixed_banner_contain .btn {
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
  padding-top: 5px;
}


@media (max-width: 975px) {
  .fixed_banner_contain h4 {
    font-size: 18px;
  }
  .fixed_banner_contain h2 {
    font-size: 24px;
  }
}
@media (max-width: 675px) {
  .fixed_banner_contain h4 {
    font-size: 14px;
  }
  .fixed_banner_contain h2 {
    font-size: 20px;
  }
}
</style>
