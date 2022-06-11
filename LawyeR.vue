<template>
  <div>
    <div><strong>Имя</strong>:{{Case.name}}</div>
    <div><strong>Клиент</strong>:{{Case.id_client}}</div>
    <div><strong>Квалификация</strong>:{{Case.qualification}}</div>
    <div><strong>Id:</strong>{{Case.id}}</div>
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