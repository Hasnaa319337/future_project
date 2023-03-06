<template>
  <div>
    <button>{{ btn_contain }}</button>
  </div>
</template>

<script>
export default {
    props:['btn_contain']

}
</script>

<style scoped>

button{
    background: #7A9E91;
    text-align: center;
    color: white;
    transition: all .3s ease-in-out;
    border-radius: 8px;
    width: 150px;
    height: 40px;
    font-size: 16px;
    font-family:"Podkova-Regular";
    display: block;
    margin: auto;
}
button:hover{
    opacity: .8;
    transition: all .3s ease-in-out;
}

</style>