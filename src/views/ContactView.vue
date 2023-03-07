<template>
     <NavbarComponent />
  <HeaderComponent />
  <div class="contact">
    <div class="contact_info">
      <h3>كلنا آذان مصغية لشكاويكم واقتراحاتكم</h3>
      <p>
        إن كان ثمة سؤال أو شكوى أو اقتراح فقلوبنا لكم في جيل المستقبل مرحبة
        وأبوابنا مفتوحة
      </p>
    </div>
    <form action="#" method="post" class="contact-form">
      <div class="form-group">
        
        <input type="text" id="name" name="name" required placeholder="الاسم :">
      </div>

      <div class="form-group">
    
        <input type="email" id="email" name="email" required placeholder="البريد الالكتروني :"/>
      </div>

      <div class="form-group">
      
        <textarea id="message" name="message" required placeholder="اكتب رسالتك هنا :"></textarea>
      </div>

      <div class="form-group">
        <!-- type="submit" -->
        <MainButton  :btn_contain="btn_contain" />
      </div>
    </form>
  </div>

  <Footercomponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import Footercomponent from "@/components/FooterComponent.vue";
import MainButton from "@/components/ui/MainButton.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";

export default {
  components: {
    HeaderComponent,
    Footercomponent,
    NavbarComponent,
    MainButton,
  },
  data() {
    return {
      btn_contain: "ارسال",
    };
  },
};
</script>

<style scoped>
.contact {
  margin: 50px 20px;
  
}
.contact_info {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  text-align: center;
}
.contact_info h3 {
  font-family: "Podkova-Bold";
  font-size: 24px;
  font-weight: 700;
}
.contact_info p {
  font-family: "Podkova-Regular";
  font-size: 16px;
  margin: 10px 0;
  margin-bottom: 50px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  width: 100%;
  margin-bottom: 20px;
}
.contact input {
  font-size: 20px;
  font-family: "Podkova-Regular";
  margin-bottom: 10px;
  display: block;
  color: #B7B2B2;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  font-size: 1.1rem;
}

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
  outline: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}
textarea{
    height: 170px;
}
</style>
