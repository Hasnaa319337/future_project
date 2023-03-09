<template>
  <div class="comments_component">
    <v-container>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="carousal_contain">
              <p>
                قضيت شهرًا مع جيل المستقبل وقد أحببت البرامج والأنشطة المقامة
                فيه وقد بذل المعلمون جهدهم مما جعلني أتعلم الكثير، أوصيكم بشدة
                لتنضموا إلى جيل المستقبل وتشاركوني المتعة والفائدة
              </p>
              <span>خالد عبدالسميع</span>
            </div>
          </div>
          <div class="carousel-item">
            <div class="carousal_contain">
              <p>
                قضيت شهرًا مع جيل المستقبل وقد أحببت البرامج والأنشطة المقامة
                فيه وقد بذل المعلمون جهدهم مما جعلني أتعلم الكثير، أوصيكم بشدة
                لتنضموا إلى جيل المستقبل وتشاركوني المتعة والفائدة
              </p>
              <span>أحمد علي</span>
            </div>
          </div>
          <div class="carousel-item">
            <div class="carousal_contain">
              <p>
                قضيت شهرًا مع جيل المستقبل وقد أحببت البرامج والأنشطة المقامة
                فيه وقد بذل المعلمون جهدهم مما جعلني أتعلم الكثير، أوصيكم بشدة
                لتنضموا إلى جيل المستقبل وتشاركوني المتعة والفائدة
              </p>
              <span>الزهراء محمد</span>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </v-container>
   
  </div>
</template>

<script>
export default {};
</script>

<style>
.comments_component {
  margin: 20px 0;
}
.carousel-inner {
  text-align: center;
  color: white;
  background: #7a9e91;
  border-radius: 8px;
}
.carousel-item {
  width: 100%;
  height: 333px;
  position: relative;
}

.carousal_contain {
  text-align: center;
  width: 50%;
  position: absolute;
  top: 20%;
  left: 23%;
  font-family: "Podkova-Regular";
  font-size: 24px;
}
.carousal_contain p {
  text-align: justify;
  width: 92%;
}
.carousal_contain span {
  display: block;
  text-align: center;
  margin: 20px 0;
}

@media (max-width: 700px) {
  .carousal_contain {
    font-size: 18px;
  }
}
</style>
