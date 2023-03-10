<template>
  <div class="sign">
    <v-container>
      <div class="logo">
        <router-link to="/"
          ><img src="../assets/images/big_logo.svg"
        /></router-link>
      </div>
      <div class="container">
        <div class="left">
          <h1 class="secondary_head">تسجيل دخول</h1>

          <form>
            <div class="form-group">
              <img src="../assets/images/icons8-user-30.png" alt="" />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="اسم المستخدم"
              />
            </div>

            <div class="form-group">
              <img src="../assets/images/icons8-password-key-50.png" alt="" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="الرقم السري"
              />
            </div>

            <input class="main_button" type="submit" value="تسجيل الدخول" />
          </form>

          <div class="login">
            <span>ليس لديك حساب ؟</span>
            <router-link to="/signup"> انشاء حساب</router-link>
          </div>
        </div>

        <div class="right"></div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,900&display=swap");
.sign {
  padding: 10px 0;
}
.container {
  background-color: white;
  display: flex;
  width: 70%;

  border: 1px solid #7a9e91;
  box-shadow: 10px 10px 0 0 #7a9e91;
  position: relative;
}
.sign .logo {
  width: 200px;

  margin: 30px 0 50px ;
}
.sign .logo img {
  width: 100%;
  height: 100%;
}

.left,
.right {
  width: 50%;
}

.left {
  padding: 40px 60px;
  display: flex;
  justify-content: center;

  flex-direction: column;
}

form {
  display: flex;
  flex-direction: column;
}

.left h1 {
  margin-bottom: 30px;
  text-align: center;
  font-size: 30px;
}

input {
  margin-bottom: 30px;
  border-radius: 8px;
}
.sign .main_button {
  margin: auto;
}
.sign .form-group {
  position: relative;
}
.sign .form-group input {
  padding: 11px 55px 11px 0;
}
.sign .form-group input::placeholder {
  font-size: 15px;
}
.sign .form-group img {
  position: absolute;
  right: 12px;
  top: 13px;
  width: 20px;
  height: 20px;
}
.sign p {
  text-align: center;
  margin: 20px 0;
  font-weight: 600;
  font-size: 18px;
  font-family: "Podkova-Bold";
}
.sign .buttons {
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
}
.sign .buttons .main_button {
  background: transparent;
  color: #000;
  border: 1px solid #ddd;
  padding-top: 5px;
}
.sign .login {
  text-align: center;
  margin: 20px 0;
}
.sign .login span {
  margin: 0 5px;
  font-family: "Podkova-Bold";
}
.sign .login a {
  color: #7a9e91;
  font-family: "Podkova-Bold";
}
div .right {
  background-image: url("https://static.wixstatic.com/media/11062b_a6e1bb8d93704b859a65ba5d3dd3645a~mv2.jpg/v1/fill/w_1899,h_748,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_a6e1bb8d93704b859a65ba5d3dd3645a~mv2.jpg");
  background-size: cover;
  background-position: 50% 50%;
  border: 40px solid white;
}

@media screen and (max-width: 820px) {
  .container {
    width: 350px;
  }
  .left {
    height: 100%;
    width: 100%;
  }
  .right {
    display: none;
  }
}
@media (max-width: 820px) {
  .sign .logo {
    width: 200px;
    margin: 23px auto !important;
  }
}
</style>
