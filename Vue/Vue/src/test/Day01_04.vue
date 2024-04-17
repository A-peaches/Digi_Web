<template>
    <div>
      <h1> 🍀오늘의 행운🍀</h1><hr><br>
      <h2 > 행운의 색 : 
      <span v-if="colors[idx]" :style="colors[idx].style">{{ colors[idx].name }}</span> </h2>
      <h2> 행운의 숫자 : {{ num }}</h2>
      <button @click="luckyBtn">행운 시험하기</button>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'App',
    data() {
    return{
      idx :'',
      colors : [{name : 'black', style: 'color:black'},
            {name : 'pink', style: 'color:pink'},
            {name : 'blue', style: 'color:black'},
            {name : 'yellow', style: 'color:yellow'},
            {name : 'orange', style: 'color:orange'},
            {name : 'green', style: 'color:green'}],
      num : ''
     }
    },
    methods: {
      luckyBtn(){
        this.num = Math.floor(Math.random() * 99 )+1,
        this.idx = Math.floor(Math.random() * this.colors.length)
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
  
  button , span {
    font-family: "MyFont", Arial, Helvetica, sans-serif;
    font-size : 15pt;
    margin : 10px;
  }
  
  @font-face {
    font-family: "MyFont";
    src: url('../assets/MyFont.ttf');
  }
  </style>
  