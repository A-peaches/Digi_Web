<template>
    <div>
    <h1>Hello!</h1>
    <!-- <button @click ="btn_ev">버튼</button> -->
    <span>👕</span><span :style="style_fa"> {{ fashion }}</span>
    <button @click ="btn_fa">패션 변경</button> <br>
    <span>❤️</span><span> {{ cnt }}</span>
    <button v-on:click = "btn_ev">좋아요</button> <br>
    <span>🏢</span><span> {{ address[add_no] }}</span>
    <button v-on:click = "btn_ad">변경</button>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'App',
    data() {
    return{
      cnt : 0,
      address : ['강남','역삼','교대','서초'],
      add_no : 0,
      fashion : '여름 패션',
      style_fa : 'color:cornflowerblue'
      }
    },
    methods: {
      btn_ev() {
        // alert('button');
        this.cnt++;
      },
  
      btn_ad(){
        if(this.add_no<3){
          this.add_no++;
        } else {
          this.add_no = 0;
        }
      },
  
      btn_fa(){
        if(this.fashion == "여름 패션"){
          this.fashion = "봄 패션"
          this.style_fa = 'color:hotpink'
        } else {
          this.fashion = "여름 패션"
          this.style_fa = 'color:cornflowerblue'
        }
        
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
  
  
  .active  {
    font-size:50px;
    font-weight: bold;
  }
  
  img {
    height : 150px;
  }
  
  div {
    font-family: "MyFont", Arial, Helvetica, sans-serif;
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
  