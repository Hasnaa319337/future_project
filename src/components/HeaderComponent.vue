<template>
  <header>
    <v-container>
      <ul class="header_list">
        <li class="header_item"><router-link to="/">الرئسية</router-link></li>
        <li class="header_item"><router-link to="/">منتجاتنا</router-link></li>
        <li class="header_item">
          <router-link to="/about">من نحن</router-link>
        </li>
        <li class="header_item"><router-link to="/packages">الباقات</router-link></li>
        <li class="header_item">
          <router-link to="/contact">تواصل معنا</router-link>
        </li>
      </ul>
    </v-container>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  background-color: #7a9e91;
}
.header_list {
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin-top: 1rem;
}

.header_item {
  float: right;
}
.header_item a {
  color: white;
  position: relative;
  margin: 20px;
  font-size: 16px;
  font-family: "Podkova-Regular";
}

/* .header_item a::after {
  content: "";
  position: absolute;
  bottom: -13px;
  left: 0%;
  display: block;
  height: 2px;
  width: 0%;
  background-color: none;
  border-radius: 8px;
  transition: all 0.4s ease-in-out;
  z-index: -20;
}

.header_item a:hover::after,.header_item a:active::after {
  transition: all 0.4s ease-in-out;
  background-color: black;
  width: 100%;
} */

.header_item a:hover {
  color: #313131;
}
</style>
