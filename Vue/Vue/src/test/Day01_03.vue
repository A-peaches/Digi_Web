<template>
    <div>
      <h1>🍚 한정식집</h1><hr><br>
      <span style="font-size:20pt">전체 주문 수 : {{food[0].order+food[1].order+food[2].order}}</span>
      <br>
      <div class="block">
      <h3>고등어구이 백반</h3>
      <span>주문 중 : {{food[0].order}} </span>
      <button @click = "add(0)">주문하기</button>
      <br><p>🍛</p>
      </div>
      <div class="block">
      <h3>김치찌개 백반</h3>
      <span>주문 중 : {{food[1].order}} </span>
      <button @click = "add(1)" id="food2">주문하기</button>
      <br><p>🍲</p>
      </div>
      <div class="block">
      <h3>떡갈비구이 백반</h3>
      <span>주문 중 : {{food[2].order}} </span>
      <button @click = "add(2)" id="food3">주문하기</button>
      <br><p>🥘</p>
      </div>
      <br><br>
      <span>❤️</span><span> {{ good }}</span>
      <button @click = "changeGood">좋아요</button> <br>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'App',
    data() {
    return{
      food : [{name:'food1', order :0}, 
              {name:'food2', order :0}, 
              {name:'food3', order :0},
              {name:'all' , order : 0 } ],
      good : 0
    }
    },
    methods: {
      add(idx){
        this.changeGood();
        if(idx==0){
          this.food[0].order++;
        } else if(idx==1){
          this.food[1].order++;
        } else if (idx==2){
          this.food[2].order++;
        }
      },
  
      changeGood() {
        this.good++;
      }
    },
    components: {
    }
  }
  </script>
  
  <style>
  
  
  .active  {
    font-size:50px;
    font-weight: bold;
  }
  
  img {
    height : 150px;
  }
  
  div {
    font-family: "MyFont", Arial, Helvetica, sans-serif;
    text-align: center;
  }
  
  .block {
    display: inline-block;
    margin : 60px 30px 30px 60px;
    border : 1px solid black;
  }
  
  button , span {
    font-family: "MyFont", Arial, Helvetica, sans-serif;
    font-size : 15pt;
    margin : 10px;
  }
  p{
    font-size : 50pt;
  }
  
  @font-face {
    font-family: "MyFont";
    src: url('../assets/MyFont.ttf');
  }
  </style>
  