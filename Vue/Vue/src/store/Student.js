import { createStore } from 'vuex'

const store = createStore( {
    state: {
        studentList: new Array
    },
    mutations: {
        addStu(state,obj){
            console.log(state);
            console.log('=========');
            console.log(obj);

            state.studentList.push(obj);
          }
            },
    getters: {

    }
})

export default store;