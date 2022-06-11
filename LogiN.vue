<template >
  <form class="m"  @submit.prevent>
    <label class="lable" >
      Логин
      <input type="text"
             class="form-control"
             placeholder="Ваш логин" v-model="login" >
    </label>
    <label class="lable" >
      Пароль
      <input type="text"
             class="form-control"
             placeholder="Ваш пароль" v-model="password">
    </label>
    <div  >
      <button
          type="button"
          class="button"
          @click="logIn"
      > Войти</button>
    </div>
    <label v-if="name==='неверный логин или пароль' && !entrance">
          {{name}}
    </label>
  </form>
</template>
<script>

import axios from "axios";

export default {

  data(){return{
    password:'',
    login:'',
    name:'',

  }
  },
  methods:{
    async logIn(){
     await axios.put('http://localhost:5000/api/user',{login:this.login,password:this.password}).then(responce=>this.name=responce.data)
      if(this.name.length!==0 && this.name!=='неверный логин или пароль') {this.$emit('login',true,this.name)}
    },
  }
}


</script>
<style scoped>
.m{
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  background-color: white;
}
.lable{
  margin-bottom: 20px;
  color: indianred;
}

.button{
  border: none;
  padding: 10px 10px;
  cursor: pointer;
  font-size: 15px;
  background-color: white;
  color: indianred;
  margin-left: 10px;
  border-radius: 35%;
}
</style>