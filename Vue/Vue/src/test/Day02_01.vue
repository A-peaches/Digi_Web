<template>
    <div>
        <h1>💬 회원가입</h1><hr>
      <div style="margin-top: 10px;">
        <p style="font-size:90px; margin: 0px">👥</p>
        <p :style="headSpan"> Welcome </p>
        <p :class="headSpanClass"> to visit! </p>
        <sapn  style="font-size:18pt;  margin-left: 120px">회원 아이디:</sapn>
        <input v-model="id" type="text" :disabled ="check"/>
        <button @click ="checked">중복 체크</button>
      </div>
      <div>
        <sapn  style="font-size:18pt">회원 닉네임:</sapn>
        <input v-model="nickName" type="text"/>
      </div>
      <div>
        <sapn  style="font-size:18pt">좋아하는 숫자:</sapn>
        <select v-model="goodNum" style="width:50px; margin-left: 30px; height: 30px;">
          <option vlaue="1">1</option>
          <option vlaue="2">2</option>
          <option vlaue="3">3</option>
          <option vlaue="4">4</option>
          <option vlaue="5">5</option>
        </select>
    
      </div>
      <div style="display: inline-block; margin-right: 150px">
        <input type="radio" name="trip" v-model="trip" value="해외">해외<br>
        <input type="radio" name="trip" v-model="trip" value="국내">국내 
      </div>
        <div style="display: inline-block;">
        <input type="checkbox" name ="tc" v-model="hobby" value="독서">독서<br>
        <input type="checkbox" name ="tc" v-model="hobby" value="게임">게임<br>
        <input type="checkbox" name ="tc" v-model="hobby" value="운동">운동<br>
        </div>
    
      <div>
        <button type="submit" @click ="join">회원 가입</button>
      </div>
      <div>
        <p style="font-size:17pt; font-weight: bold;">🔍 입력하신 정보는</p>
        <p> 아이디 : <span v-if="submit">{{ id }}</span> </p>
        <p> 닉네임 : <sapn v-if="submit">{{ nickName }}</sapn> </p>
        <p> 좋아하는 숫자 : <sapn v-if="submit">{{ goodNum }}</sapn> </p>
        <p> 선호 여행지 : <sapn v-if="submit">{{ trip }}</sapn> </p>
        <p> 취미 : <sapn v-if="submit">
          {{hobby[0]}}, {{hobby[1]}} , {{hobby[2]}}</sapn> </p>
      </div>
    </div>
    </template>
    
    <script>
    export default {
      name: "App",
      data() {
        return{
          id :  '',
          nickName: '',
          check : false,
          submit : false,
          goodNum : '5',
          trip: '해외',
          headSpan : "color:skyblue; margin:30px 0px 0px 0px; font-size:30pt",
          headSpanClass : {headSpan :true},
          hobby : []
        }
      },
      methods: {
        checked(){
          this.check = true;
        },
    
        join(){
          alert("회원가입이 완료되었습니다!");
          this.submit = true;
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
    
    .headSpan {
      color:pink; margin:0px; font-size:30pt
    }
    .block {
      display: inline-block;
      margin: 10px 10px 30px 10px;
      padding: 30px 30px 30px 30px;
    }
    
    button {
      font-family: "MyFont", Arial, Helvetica, sans-serif;
      font-size: 15pt;
      margin: 10px;
      border: 1px solid;
      padding: 8px;
      margin-top : 20px;
      background-color: transparent;
    }
    
    input {
      font-family: "MyFont", Arial, Helvetica, sans-serif;
      font-size: 17pt;
      width : 200px;
      margin: 10px;
    }
    
    p {
      font-size: 14pt;
    }
    
    
    
    @font-face {
      font-family: "MyFont";
      src: url("../assets/MyFont.ttf");
    }
    </style>
    