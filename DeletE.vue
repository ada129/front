<template>
  <div>
       <button style=".bns" @click="commit">Выполнить</button>
       <button style=".bns" @click="rollback">Отменить</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods:{
    commit(){
      axios.put('http://localhost:5000/api/commit')
    },
    rollback(){
       axios.put('http://localhost:5000/api/rolleback')
    }
  }
}
</script>

<style scoped>
.bns{
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 15px;
  color: white;
  background-color: indianred;
  border-radius: 15%;
}
</style>