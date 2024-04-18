<template>
    <div v-if="popupClose" class="popup_bl">
        <div class="popup_wh">
            <div class="data-id"> {{ detail.id }}</div>
           
            <span  class="data-title">{{ detail.title }}</span><br>
            <sapn> {{ detail.body  }}</sapn><br>
            <button @click="()=>{this.popupClose=false}">close</button>
        </div>
    </div>


  <!-- <button @click = "btn_axios">버튼</button> -->
  <div class="mx-auto" style="width:70%">
    <h1  class="data-id"  style="margin-top: 30px ; font-size: 26pt;">Axios</h1>
  <table class ="brd_table" style="width:100%;">
    <tr>
        <td>ID</td>
        <td>Title</td>
        <td>UserId</td>
    </tr>
    <tr v-for="li in list" :key="li.id" @click="setDetail(li.id)">
        <td>{{li.id}}</td>
        <td>{{li.title }}</td>
        <td>{{li.userId }}</td>
    </tr>   
  </table>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name : 'App',
    data() {
        return {
            list : [], // posts정보를 담을  list
            str: 'APPLE',
            str2 : null,
            detail : {},
            popupClose: false
        }
    },
    created() {
        this.str2 = this.str
    },
    methods: {
        btn_axios(){
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>{
                // console.log(res);
                this.list =res.data;
                // console.log(this.list);
            })
        },
        setDetail(index){
            axios.get('https://jsonplaceholder.typicode.com/posts/'+index)
            .then(res=>{
                // console.log(res);
                this.detail = res.data;
                // console.log('=========');
                // console.log(this.detail);
                this.popupClose = true;
            })
      
        }
    },
    mounted(){
        this.btn_axios();
    }
}
</script>

<style>
@import '../assets/axios.css';
</style>