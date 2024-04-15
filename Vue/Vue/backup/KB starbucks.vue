<template>
    <div>
      <h1>☕KB Starbucks</h1>
      <hr style="margin: 0px 200px 0px 200px;">
      <div class="block">
        <img src="./assets/coffee.png" 
        style="width: 260px; height: 280px;"><br>
        <button @click = "detail">🛒 장바구니 담기</button> 
      </div>
      <div class="block" style="width:500px">
        <p style="font-weight: bold; font-size:18px">{{ chouxCream.name }}</p>
        <p>{{ chouxCream.enName }}</p>
        <p v-html="chouxCream.desc"></p>
        <p style="text-align: right">{{ chouxCream.size }}</p>
        <div>
        <p>제품 영양 정보</p><hr>
        <p>1회 제공량 (kcal) : <span style="text-align:right">{{ chouxCream.kcal }}</span>
        <span style="margin-left: 140px;">나트륨 (mg) : {{chouxCream.na }}</span></p>
        <p><span>포화지방 (g) : {{ chouxCream.fat }}</span>
          <span style="margin-left: 180px;">당류 (g) : {{chouxCream.sac }}</span></p>
          <p><span>단백질 (g) : {{ chouxCream.pro }}</span>
          <span style="margin-left: 190px;">카페인 (mg) : {{chouxCream.caf }}</span></p>
           <br>
        </div>
      </div>
     
    </div>
  </template>
  
  <script>
  export default {
    name: "App",
    data() {
      return{
      chouxCream : {name : '아이스 슈크림 라떼',
                    enName : 'Iced Choux Cream Latte',
                    desc : 'Choux is Coming! <br> 봄을 알리는 스타벅스의 시그니처 음료 슈크림 라떼! <br> 달콤한 슈크림과 에스프레소의 완벽한 조화!',
                    size : 'Tall(톨) / 355ml (12 fl oz)',
                    kcal : '241',
                    na : 120,
                    fat : 8,
                    sac : 30,
                    pro : 6,
                    caf : 75
                  }
                }
    },
    methods: {
     detail(){
      alert("장바구니에 담겼습니다!");
     }
    },
    components: {},
  };
  </script>
  
  <style>
  .active {
    font-size: 50px;
    font-weight: bold;
  }
  
  img {
    height: 150px;
  }
  
  div {
    font-family: "MyFont", Arial, Helvetica, sans-serif;
    text-align: center;
  }
  
  .block {
    display: inline-block;
    margin: 10px 10px 30px 10px;
    padding: 30px 30px 30px 30px;
  }
  
  button,
  input {
    font-family: "MyFont", Arial, Helvetica, sans-serif;
    font-size: 17pt;
    margin: 10px;
    border : none;
    background-color: transparent;
  }
  p {
    font-size: 10pt;
    text-align: left;
  }
  
  @font-face {
    font-family: "MyFont";
    src: url("./assets/MyFont.ttf");
  }
  </style>
  