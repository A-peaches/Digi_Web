<template>
    <div style="text-align: center">
      <h1>hello</h1><hr>
      <div>
      <input type="text" v-model="mem_first" /><br>
      <input type="text" v-model="mem_second"/>
      <br>first : {{ mem_first }}<br>
      second : {{ mem_second }}<br>
      full : {{ full }}
    </div><hr>
    <div>
      <h2 >📝 성적 입력</h2>
      <p>이름 : <input type="text" v-model="name"> </p>
      <p>국어 : <input type="number" v-model="kor"> </p>
      <p>영어 : <input type="number" v-model="eng"> </p>
      <p>수학 : <input type="number" v-model="mat"> </p>
      <p>총 합계 : {{ sum }} </p>
      <button @click="insert">입력</button>
    </div>
    </div>
  </template>
    
    <script>
  export default {
    name: "App",
    data() {
      return {
        mem_first:'',
        mem_second:'',
        name :'',
        kor : '',
        eng : '',
        mat : '',
        obj : {}
      };
    },
    watch:{
      mem_first(){
        console.log('뀨!');
      },
  
      name() {
          this.kor = '';
          this.eng= '';
          this.mat = '';
        }
    },
    computed:{
      full(){
        return this.mem_first+this.mem_second;
      },
  
      sum(){
        if(!this.kor && !this.eng && !this.mat){
          return 0;
        }else{
          return (this.kor || 0) + (this.eng || 0) + (this.mat || 0);
    }
      }
    },
    methods: {
      insert(){
        this.obj = {name : this.name, kor : this.kor, eng:this.eng,
              mat: this.mat}
        this.$store.commit('addStu',this.obj);
      }
    },
    components: {},
  };
  </script>
    
    <style>
  div {
    font-family: "MyFont", Arial, Helvetica, sans-serif;
    text-align: left;
    align-content: center;
    margin: 30px 70px 30px 70px;
    font-size : 12pt;
  }
  
  button {
    font-family: "MyFont", Arial, Helvetica, sans-serif;
    font-size: 15pt;
    font-weight: bold;
    border: 1px solid;
    padding: 8px;
    margin-top: 20px;
    background-color: beige;
    cursor: pointer;
  }
  
  .center {
    text-align: center;
  }
  
  @font-face {
    font-family: "MyFont";
    src: url("../assets/MyFont.ttf");
  }
  </style>
    