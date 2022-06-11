<template>
  <form  >
    <div class="menu"><div>Приветствую,</div>
    <div v-for="User in user" :key="User.name">{{User.name}}</div></div>
    <button  @click="logout" class='bns'> Выйти</button>
  </form>
</template>

<script>
export default {
  name: "LogouT",
  props:{user:{
          type:Array,
          required:true
    }}
  ,
  methods:{
    logout(){
      this.$emit('logout',false)
    }
  }
}
</script>

<style scoped>
      .bns{
        background-color: indianred;
        color: white;
        border-radius: 15%;
        border: none;
        padding: 10px 10px;

      }
</style>