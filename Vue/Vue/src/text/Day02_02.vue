<template>
    <div style="display: flex; margin: 20px 150px;">
        <h1 class="center" style="margin-right: 20px"> 🍎 설문 조사 </h1><hr>
        <div class="input-section" style="margin-right: 20px;">
        <table class="table" style="margin-top: 50px">
            <tr>
              <td>좋아하는 음식 : </td>
              <td><input type="text" v-model="food"></td>
            </tr>
            <tr>
              <td>최근 1주일 동안 먹은 횟수 :</td>
              <td style="text-align: left;">
                <select v-model="count" style="width: 50px; height: 35px;">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                </select>
                </td>
            </tr>
            <tr>
              <td>국내 음식 여부 :</td>
              <td style="font-size:16px; text-align: left; margin-left: 60px;">
                <input type="radio" name="origin" value="국내 음식" v-model="origin"><span>국내 음식</span>&nbsp; &nbsp;
                <input type="radio" name="origin" value="해외 음식" v-model="origin"><span>해외 음식</span>
              </td>
            </tr>
            <tfoot style="text-align: right">
              <button @click="click">&nbsp;&nbsp;제출&nbsp;&nbsp;</button>
            </tfoot>
        </table>
      </div>
    
      <div class="output-section">
        <h2>&nbsp;&nbsp;&nbsp;설문 결과</h2>
        <table class="table">
            <tr>
              <td>좋아하는 음식 : </td>
              <td><p v-if="submit" >{{ food }}</p></td>
            </tr>
            <tr>
              <td>최근 1주일 동안 먹은 횟수 :</td>
              <td><p v-if="submit" >{{ count }}</p></td>
            </tr>
            <tr>
              <td>국내 음식 여부 :</td>
              <td> <p v-if="submit">{{ origin }}</p>
              </td>
            </tr>
            </table>
      </div>
    </div>
      </template>
      
      <script>
      export default {
        name: "App",
        data() {
          return{
            count : '',
            food : '',
            origin: '',
            submit: false
          }
        },
        methods: {
          click(){
            alert('제출이 완료되었습니다!');
            this.submit = true;
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
        margin: 20px auto;
      }
      
      
      button {
        font-family: "MyFont", Arial, Helvetica, sans-serif;
        font-size: 15pt;
        font-weight: bold;
        border: 1px solid;
        padding: 8px;
        margin-top : 20px;
        background-color:beige;
        cursor: pointer;
      }
      
      .input-section, .output-section {
      flex: 1; /* Flex 항목으로 설정 */
    }
    
     .center {
      text-align: center;
     }
      
      .table {
        width :100%;
        border:1px solid gray;
        padding : 25px;
        margin : 20px;
        text-align: left;
      }
    
      .td {
        font-size : 16pt;
        text-align: right;
        margin : 20px;
        padding : 10px;
      }
      
      input {
        height: 28px;
        width: auto;
      }
      
      @font-face {
        font-family: "MyFont";
        src: url("../assets/MyFont.ttf");
      }
      </style>
      