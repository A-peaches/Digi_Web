<template>
    <div class="mt-3">
        <h1>Node</h1>
        <button @click="btn_ev">체크하기</button>
        <button @click="btn_ev2">이름 보내기</button>
        <button @click="btn_ev3">Post 방식</button><br>
        <button @click="btn_ev4">DB 연결 </button>
        <button @click="btn_ev5">DB 연결 2 </button>
        <button @click="btn_ev6">DB 연결 3 </button><br>
        <button @click="btn_ev7">insert 해보기</button>
    </div>
  </template>
  <script>
  import axios from 'axios';

  export default {
    name: 'App',
    data() {
        return{
      }
    },
    methods : {
        btn_ev() {
            // alert('메롱!');
            let url = 'http://localhost:3000/name';
            // axios.get(url)
            // .then(res=>{
            //     console.log(res);
            // })
            axios.get(url)
            .then(res=>{
              console.log(res.data);
            })
        },

        btn_ev2(){
          let obj ={};
          obj.name = '쩅구';
          obj.age = 8;
          axios.get('http://localhost:3000/get1',{
            params : obj
          })
          .then(res =>{
            console.log(res.data.result);
          })
        },
        btn_ev3(){
          let obj ={};
          obj.name = '흰둥이';
          obj.age = 1;
          axios.post('http://localhost:3000/post1',obj)
          .then(res =>{
            console.log(res.data.result);
          })
        },
        btn_ev4(){
          axios.get('http://localhost:3000/query')
          .then(res => {
            console.log(res.data);
          })
        },
        btn_ev5(){
          let obj ={};
          //obj.job = '부장" -- ' ;
          obj.job = '부장';
          obj.empNo = 1007;
          axios.get('http://localhost:3000/query2',{
            params : obj
          })
          .then(res =>{
            console.log(res.data);
          })
        }, btn_ev6(){
          let obj ={};
          obj.job = '부장' ;
          obj.empNo = 1007;
          axios.get('http://localhost:3000/query2',{
            params : obj
          })
          .then(res =>{
            console.log(res.data);
          })
        },
        btn_ev7(){
          let obj = {};
          obj.deptNo = 60;
          obj.dname = '재정부';
          obj.loc = '부산'
          axios.post('http://localhost:3000/insert',obj)
          .then(res =>{
            console.log(res);
          })
        },
    },
    components: {
    }
  }
  </script>

<style>
@import '../assets/axios.css';
</style>