<template>
  <v-container>
    <nav>
      <div class="logo">
        <router-link to="/"
          ><img src="../assets/images/logo.png"
        /></router-link>
      </div>

      <div class="icons">
        <router-link to="/signup" class="auth_button"> سجل الان </router-link>
        <div class="cart_icon">
          <router-link to="/mycart">
            <img src="@/assets/images/shopping-cart.svg"
          /></router-link>
          <span>عربتي</span>
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
          <router-link to="/myaccount"
            ><img src="@/assets/images/user.svg"
          /></router-link>
          <span>حسابي</span>
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
nav .logo {
  width: 200px;
  height: 50px;
}
nav .logo img {
  width: 100%;
  height: 100%;
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

nav .cart_icon,
nav .profile_icon {
  line-height: 1.5;

  position: relative;
  display: inline-block;
}
nav .cart_icon span,
nav .profile_icon span {
  position: absolute;

  left: 0;
  right: 0;

  width: max-content;
  padding: 0 8px;
  font-size: 14px;
  font-family: Cairo-Medium;
  background-color: #f7f5ef;
  color: #313131;
  box-shadow: 0 0 10px 2px hsl(0deg 0% 88% / 30%);
  border-radius: 8px;
  z-index: 10;
  transition: all 0.3s ease-in-out;
  transform-origin: top;
  transform: scale(0);
  display: none;
}

nav .cart_icon:hover > span,
nav .profile_icon:hover > span {
  transform: scale(1);
  display: block;

  right: -9px;
  top: 40px;
  transition: all 0.3s ease-in-out;
}

.auth_button {
  text-decoration: none;
  position: relative;
  display: inline-block;
  width: 150px;
  text-align: center;
  margin-top: 30px;
  padding: 5px 20px;
  font-size: 20px;
  font-family: "Podkova-Regular";

  background-image: linear-gradient(90deg, transparent 50%, #7a9e91 0);
  background-position: 100%;
  background-size: 400%;

  border-radius: 35px;
  transition: all 0.6s ease-in-out;
  margin: 0;
  font-size: 14px;

  width: max-content;
  color: #313131;
  background-image: linear-gradient(90deg, transparent 50%, #fbf9f4 0);
  border: 1px solid #fbf9f4;
}
.auth_button:hover {
  background-position: 0;
  background-color: transparent;
}

@media (max-width: 800px) {
  nav .icons {
    column-gap: 18px;
  }
}
@media (max-width: 700px) {
  nav .logo {
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

@media (max-width: 700px) {
  nav .logo {
    width: 100px;
    height: 30px;
  }
}
</style>
