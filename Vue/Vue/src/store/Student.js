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
            
            let idx = null;
            state.studentList.forEach((item,i)=> {
                if(item.name == obj.name) {
                    idx = i;
                }
            });
            
            if(idx != null){
                state.studentList[idx] = obj;
                alert('중복된 이름이 있어, 수정되었습니다!');
            } else {
                state.studentList.push(obj);
                alert('입력이 완료되었습니다!');
            }
          }
            },
    getters: {
        getStu(state) {
            return state.studentList;
        }
    }
})

export default store;