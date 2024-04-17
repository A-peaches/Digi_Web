<template>
    <div class="par">
    <h1>엄마 컴포넌트</h1>
    <h3>{{ intro }}</h3>
    </div>
    <ChildComp :intro="intro" :apeach="apeach" @getChild="parMethod"/>
</template>
<script>
import ChildComp from './Day03_03.vue'

export default {  
    name: 'App'
    ,data() {
        return {
            intro : ' I\'m Apeach ',
            apeach : {name : 'pipi',hello: 'pi~~!🩷'}
        }
    },
    methods:{
        parMethod(state){
            alert('자식에게서 호출');
            console.log(state);
         }
    },
    components: {
        ChildComp
    }
}
</script>
<style>
    .par {
        width : 100%;
        height : 500px;
        border : 2px plum solid;
    }
</style>