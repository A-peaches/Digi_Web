<template>
    <div>
      <h1 style="font-size: 30pt">⏱️ Timer</h1>
      <input type="number" v-model="numBox" />
      <sapn style="font-size: 20pt">초 뒤 알람</sapn> <br />
      <button @click="btn">알람 시작</button>
      <div style="margin-top: 30px; font-size: 25pt" v-html="bell"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "App",
    data() {
      return {
        numBox: "",
        bell: "",
      };
    },
    methods: {
      btn() {
        if (this.numBox != "") {
          this.bell = ""
          setTimeout(
            function () {
              this.bell = this.numBox + " 초가 지났습니다.<br>알람 시작!";
            }.bind(this),
            this.numBox * 1000
          );
  
        } else {
          alert("초를 입력해주세요!")
        }
      },
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
    margin: 60px 30px 30px 60px;
    border: 1px solid black;
  }
  
  button,
  span,
  input {
    font-family: "MyFont", Arial, Helvetica, sans-serif;
    font-size: 20pt;
    margin: 10px;
  }
  p {
    font-size: 50pt;
  }
  
  @font-face {
    font-family: "MyFont";
    src: url("../assets/MyFont.ttf");
  }
  </style>
  