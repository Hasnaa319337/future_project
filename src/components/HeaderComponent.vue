<template>
  <header>
    <v-container>
      <ul class="header_list">
        <li class="header_item"><router-link to="/">الرئسية</router-link></li>
        <li class="header_item"><router-link to="">منتجاتنا</router-link></li>
        <li class="header_item">
          <router-link to="/about">من نحن</router-link>
        </li>
        <li class="header_item">
          <router-link to="/packages">الباقات</router-link>
        </li>
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

.header_item a {
  color: white;
  position: relative;
  margin: 20px;
  font-size: 16px;
  font-family: "Podkova-Regular";
}
.header_item a:hover {
  color: #313131;
}
.router-link-active {
  font-weight:700 !important;
  font-size: 20px !important;
  color: #313131 !important;
}

</style>
