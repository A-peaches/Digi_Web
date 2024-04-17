<template>
    <div>
      <h2>🐼 For문 실습</h2>
      <!-- <div v-for="li in menu" :key="li">{{ li }}</div> -->
      <div v-for="(li, i) in price" :key="li">{{ li }}원 // {{ menu[i] }}</div>
      <div v-for="i in menuPlus" :key="i">{{ i.name }} // {{ i.price }}</div>
      <div v-for="li in 3" :key="li">{{ menuPlus[li-1].name }}</div>
    </div>
  </template>
  <script>
  export default {
    name: 'App',
    data() {
      return {
        menu: ['우동', '짜장면', '메밀'],
        price: [2000, 3000, 4000],
        menuPlus: [
          {name:'강남',price:1000},
          {name :'서초', price:2000},
          {name : '동작', price:3000}
        ]
      }
    },
    components: {
    }
  }
  </script>
  <style>
  .hambugerName {
    font-size: 30px;
    margin: 10px;
    font-weight: bold;
    color: blue;
  }
  .hambugerPrice {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: bold;
    color:green
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2C3E50;
    margin-top: 60px;
  }
  </style>