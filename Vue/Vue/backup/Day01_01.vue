<template>
    <div>
    <img alt="Vue logo" src ="./assets/apeach5.gif">
    <h2 :style="style1"> {{ data1 }} </h2>
    <span :class="{active: classC}">Class</span><br>
    <br><hr><br>
    <h1 className="h1">🌱과일 꺼내기</h1>
    <h2 > {{ fruit.key1 }} </h2>
    <h2> {{ fruit.key2 }} </h2>
    <h2> {{ fruit.key3 }} </h2>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'App',
    data() {
    return{
      data1:'Hello Apeach!',
      data2:'Happy!',
      menu : ['된장찌개','김치찌개','청국장'],
      style1 : 'color:gray',
      classC : true,
      fruit : {key1:'🍎사과',key2:'🍓딸기',key3:'🍌바나나'}
      }
    },
  
    components: {
    }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  .h1 {
    margin: 50px 50px 50px 50px;
    
  }
  
  .active  {
    font-size:50px;
    font-weight: bold;
  }
  
  img {
    height : 150px;
  }
  
  div {
    font-family: "MyFont";
  }
  @font-face {
    font-family: "MyFont";
    src: url('./assets/MyFont.ttf');
  }
  </style>
  