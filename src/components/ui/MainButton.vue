<template>
  <div class="button_div">
    <button class="main_button">{{ btn_contain }}</button>
 
  </div>
</template>

<script>
export default {
  props: ["btn_contain"],
};
</script>

<style>
.button_div{
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
}
.main_button {
  text-align: center;
  color: white;
  transition: all 0.5s linear;
  border-radius: 8px;
  width: 150px;
  height: 40px;
  font-size: 16px;
  font-family: "Podkova-Regular";

  color: #f3f3f3;
  background-image: linear-gradient(90deg, transparent 50%, #7a9e91 0);
  background-position: 100%;
  background-size: 400%;
  position: relative;
  border: 1px solid #7a9e91;


}
.main_button:hover {
  transition: all 0.5s linear;
  color: #7a9e91;
  background-position: 0;
}
@media (max-width: 900px) {
  .button_div{
    display: flex;
    justify-content: end;
  }
  
}
</style>
