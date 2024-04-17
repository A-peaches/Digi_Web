<template>
  <h1>Axios</h1>
  <button @click = "btn_axios">버튼</button>
</template>

<script>
import axios from 'axios'

export default {
    name : 'App',
    data() {
        return {

        }
    },
    methods: {
        btn_axios(){
            axios.get('https://jsonplaceholder.typicode.com/posts/5/comments')
            .then(res=>{
                console.log(res);
            })
        }
    }
}
</script>

<style>

</style>