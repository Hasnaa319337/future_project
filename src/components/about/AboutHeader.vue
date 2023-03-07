<template>
  <div class="about_header">
    <div class="about_header_text">
      <h3 class="about_header_head">جيل المستقبل بين السطور</h3>
      <p class="about_header_info">
        جيل المستقبل مؤسسة تعليمية تربوية تعنى بتطوير مهارات الناشئة وتعليمهم
        وتطوريهم فنيًا ومهاريًا , وقد بدأ نشاطنا في 2020 بهدف تعليم الناشئة
        وتثقيفهم بأسلوب عصري حداثي وتعليمهم حسن الأخلاق والآداب وجمع المتعة
        والتعليم
      </p>
      <p class="about_header_info">
        هذه الصفحة أهم صفحة تعطي للعميل الثقة بالمنصة لأنه يعرف أنها مسجلة ومصرح
        بنشاطها وأنها قامت على
      </p>
      <span class="about_header_span">كذا وكذا وكذا...إلخ </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.about_header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("@/assets/images/banner_img2.png");

  width: 100%;
  height: 500px;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center !important;
 
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  font-family: "Podkova-Regular";
  font-size: 24px;
}
.about_header_text{
    color: rgba(255, 244, 244, 1);
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  width: 58%;
  text-align: center;
    
}
.about_header_head{
    font-size: 40px;
    font-family: "Podkova-SemiBold";
}
.about_header_info{
    margin: 25px 0;
}
.about_header_info:last-of-type{
    margin-bottom: 15px;
}
@media (max-width: 700px) {
  .about_header {

    font-size: 16px;
  }
  .about_header_head{
    font-size: 30px;
    font-family: "Podkova-Bold";
}
}
</style>
