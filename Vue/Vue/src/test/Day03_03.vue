<template>

    <h1>책 서점</h1>
    <div v-for="(li, index) in bookMenu" :key="li">
    <span class="title">{{li.name }}<button @click="btn_modelOpen(index)">상세보기</button></span>
    </div>
  
    <div class="model_bl" v-if="model_open">
      <div class="model_wh">
        <button class="btn_close" @click="btn_close">닫기</button><br/>
        <span class="model_title">{{ model_title }}</span><br/>
        <span class="model_content"> {{ model_content }}</span><br/>
      </div>
    </div>
  
  </template>
  <script>

  export default {
    name: 'App',
    data() {
      return {
        model_open: false,
        model_title: '제목',
        model_content: '내용',
        bookMenu: [{
          name: '컴퓨터 책',
          price: 3000,
          content: '컴퓨터 관련 책'
        },
        {
          name: '영어 책',
          price: 5000,
          content: '영어 관련 책'
        }
        ]
      }
    },
    methods: {
      btn_modelOpen(index) {
        this.model_open = true;
        this.model_title = this.bookMenu[index].name;
        this.model_content = this.bookMenu[index].content;
      },
      btn_close() {
        this.model_open = false;
      }
    },
    components: {
    }
  }
  </script>
  <style>
    .model_bl {
      position: absolute;
      top: 0;
      background: rgba(0, 0, 0, 0.5);
      width: 100%;
      height: 100%;
    }
  
    .model_wh {
      margin: 200px 300px;
      background: white;
      width: 75%;
      height: 50%;
    }
  
    .btn_close {
      margin-top: 20px;
    }
  
    .model_title {
      margin-top: 40px;
      font-size: 30px;
      font-weight: bold;
    }
  
    .model_content {
      margin-top: 100px;
    }
  
  
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  

<!-- <script>

export default {  
    name: 'App'
    // ,props:['intro', 'apeach']
    ,props: {
        intro: {
            type :String, //데이터타입정의
            default:'zero', //데이터 null일경우 default
            required : true // null허용여부
        }
    }
    ,data() {
        return {
        }
    },
    methods : {
        btn_ev() {
            this.$emit('getChild', '응애!!');
        }
    },
    components: {
     
    }
}
</script>
<style>
    .chi {
        width : 100%;
        height : 500px;
        border : 2px skyblue solid;
    }
</style> -->