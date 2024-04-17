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
  </div>
    <div style="display:inline-block;">
      <h2 >📝 성적 입력</h2>
      <p>이름 : <input type="text" v-model="name"> </p>
      <p>국어 : <input type="number" v-model="kor"> </p>
      <p>영어 : <input type="number" v-model="eng"> </p>
      <p>수학 : <input type="number" v-model="mat"> </p>
      <p>총 합계 : {{ sum }} </p>
      <p>⚠️ 기존에 동일한 이름이 있는 경우 입력 값으로 수정됩니다.</p>
      <button @click="insert">입력 및 수정</button>&nbsp;&nbsp;&nbsp;
      <button @click="getter">받아오기 테스트</button>
    </div>

  <div v-for="li in stuList" :key="li" style="margin-top: 30px;">
    이름 : {{ li.name }} |
    국어 : {{ li.kor }} |
    영어 : {{ li.eng }} |
    수학 : {{ li.mat }} |
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
        obj : {},
        testList : {}
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

      stuList(){
        return this.$store.getters.getStu;
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
        this.name ='';
      },

      getter(){
        this.testList = this.$store.getters.getStu;
        console.log(this.testList);
      }
    },
    components: {
  
    },
  };
  </script>
    
    <style>
  div {
    font-family: "MyFont", Arial, Helvetica, sans-serif;
    align-content: center;
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
    