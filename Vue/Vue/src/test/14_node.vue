<template>
    <div class="mt-3">
        <h1>Node</h1>
        <button @click="btn_ev">체크하기</button>
        <button @click="btn_ev2">이름 보내기</button>
        <button @click="btn_ev3">Post 방식</button>
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
        }
    },
    components: {
    }
  }
  </script>

<style>
@import '../assets/axios.css';
</style>