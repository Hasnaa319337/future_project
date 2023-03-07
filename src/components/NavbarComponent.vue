<template>
  <v-container>
    <nav>
      <div class="logo">
        <router-link to="/"
          ><img src="@/assets/images/logo.png"
        /></router-link>
      </div>

      <div class="icons">
        <div class="cart_icon">
          <router-link to="/">
            <img src="@/assets/images/shopping-cart.svg"
          /></router-link>
        </div>

        <div class="line"></div>
        <div class="list">
          <img src="@/assets/images/arrow-left.svg" />

          <ul class="user_list">
            <li><router-link to="/myneeds">طلبات</router-link></li>
            <li><router-link to="/mypocket">محفطتي</router-link></li>
            <li><router-link to="/mywishes">رغباتي</router-link></li>
            <li><router-link to="/mysubcription">اشتركاتي</router-link></li>
            <li><router-link to="/myaccount">حسابي </router-link></li>
            <li class="line_item"></li>
            <li><router-link to="/">تسجيل خروج</router-link></li>
          </ul>
        </div>
        <div class="profile_icon">
          <router-link to="/"
            ><img src="@/assets/images/user.svg"
          /></router-link>
        </div>
      </div>
    </nav>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
}

nav .icons {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  column-gap: 23px;
}
nav .icons img {
  width: 20px;
  height: 39px;
}
nav .icons .line {
  border: 1px solid #adadad59;
  height: 30px;
}
nav .list {
  position: relative;
}
nav .list ul {
  background: #fff;
  color: black;
  font-size: 16px;
  font-family: "Podkova-Regular";
  border-radius: 8px;
  height: auto;
  width: 150px;
  position: absolute;
  z-index: 100;
  top: 39px;
  right: -27px;

  display: none;
  animation: rotateX 300ms ease-in-out forwards;
  transition: all 5s linear;
}
nav .list ul li {
  margin: 12px 16px;
}
nav .list ul .line_item {
  width: 140px;
  height: 1px;
  background: #a39f9f;
  margin: 0 5px;
  padding: 0;
}
nav .list ul li a {
  color: black;
}
nav .list img {
  cursor: pointer;
}
nav .list:hover .user_list {
  display: block;
  background: #c5d5cf;
  transition: all 5s linear;
}
nav .user_list a:hover {
  color: white;
}

@media (max-width: 800px) {
  nav .logo img {
    width: 300px;
    height: 80px;
  }
  nav .icons {
    column-gap: 18px;
  }
}
@media (max-width: 600px) {
  nav .logo img {
    width: 250px;
    height: 70px;
  }
  nav .icons {
    column-gap: 15px;
  }
}

/* animate dropdown */
@keyframes rotateX {
  0% {
    opacity: 0;
    transform: rotateX(-90deg);
  }
  50% {
    transform: rotateX(-20deg);
  }
  100% {
    opacity: 1;
    transform: rotateX(0deg);
  }
}
</style>
