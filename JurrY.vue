<template>
  <div>
    <div><strong>Номер дела:</strong>:{{Case.number_case}}</div>
    <div><strong>Имя:</strong>:{{Case.name}}</div>
    <div><strong>Id:</strong>:{{Case.passport}}</div>
  </div>
</template>

<script>
export default {
   props:{
     Case:{
       type:Object,
       required:true
     }
   }
}
</script>

<style scoped>

</style>