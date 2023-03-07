<template>
  <div class="our_packages">
    <v-container class="container">
      <v-row>
        <v-col cols="12" lg="4" md="4" sm="4" class="package">
          <div class="package_num">1</div>
          <div class="package_info">
            <h3>اشتراك شهر</h3>
            <p>يوفر هذا الاشتراك لحامله الانضمام</p>
            <p>إلى مختلف الأنشطة التعليمية والترفيهية لمدة سنة دراسية كاملة</p>
          </div>
        </v-col>
        <v-col cols="12" lg="4" md="4" sm="4" class="package">
          <div class="package_num">2</div>
          <div class="package_info">
            <h3>اشتراك فصل دراسي</h3>
            <p>يوفر هذا الاشتراك لحامله الانضمام</p>
            <p>إلى مختلف الأنشطة التعليمية والترفيهية لمدة سنة دراسية كاملة</p>
          </div>
        </v-col>
        <v-col cols="12" lg="4" md="4" sm="4" class="package">
          <div class="package_num">3</div>
          <div class="package_info">
            <h3>اشتراك سنة دراسية</h3>
            <p>يوفر هذا الاشتراك لحامله الانضمام</p>
            <p>إلى مختلف الأنشطة التعليمية والترفيهية لمدة سنة دراسية كاملة</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.our_packages {
  background-image: url("@/assets/images/packages_background.png");
  width: 100%;
  height: auto;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center !important;
  margin: 30px 0;
  padding: 100px 20px;
}
.container {
  max-width: 1050px;
}
.package {
  position: relative;
  margin-bottom: 20px;
}
.package:first-of-type,
.package:last-of-type {
  margin-top: 50px;
}
.package_num {
  background: #d9d9d9;
  width: 133px;
  height: 133px;
  border-radius: 50%;
  color: #000;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  font-size: 40px;
  font-family: "Podkova-SemiBold";
  position: absolute;
  z-index: 100;
  top: -18%;
  left: 30%;
}
.package_info {
  border-radius: 8px;
  background: white;
  /* width: 335px; */
  height: 335px;
  text-align: center;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  transition: 0.5s all ease-in-out;
}
.package_info h3 {
  font-family: "Podkova-Bold";
  font-size: 24px;
  font-weight: 700;
}
.package_info p {
  font-family: "Podkova-Regular";
  font-size: 16px;
  margin: 10px 0;
}
.package:hover .package_info {
  background-color: #074553;
  transform: scale(1.06);
  color: white !important;
  /* border: 2px solid #6c98a2; */
  transition: 0.5s all ease-in-out;
}
@media (max-width: 900px) {
  .package_num {
    width: 120px;
    height: 120px;
    left: 30%;
  }
}
@media (max-width: 800px) {
  .package_num {
    width: 100px;
    height: 100px;
    left: 30%;
    top: -10%;
  }
}
@media (max-width: 700px) {
  .package_num {
    width: 90px;
    height: 90px;
    left: 32%;
    top: -10%;
  }
}
@media (max-width: 600px) {
.package{
    margin-bottom: 50px;
}
    .package_num {
    width: 120px;
    height: 120px;
    left: 39%;
  }
}
@media (max-width: 400px) {

    .package_num {
    width: 120px;
    height: 120px;
    left: 33%;
  }
}
</style>
