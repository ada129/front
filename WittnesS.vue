<template>
  <div>
    <div><strong>Имя</strong>:{{Case.name}}</div>
    <div><strong>Id</strong>:{{Case.id}}</div>
    <div><strong>Показания</strong>:{{Case.indication}}</div>
  </div>
</template>

<script>
export default {
  props:{
    Case:{
      type:Object,
      required:true
    }}

}
</script>

<style scoped>

</style>