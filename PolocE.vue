<template>
  <div>
    <div><strong>Номер дела</strong>:{{Case.number_case}}</div>
    <div><strong>Имя</strong>:{{Case.name}}</div>
    <div><strong>Id</strong>:{{Case.id_worker}}</div>
    <div><strong>Должность</strong>:{{Case.post}}</div>
    <div><strong>Звание</strong>:{{Case.title}}</div>
    <div><strong>Код подразделения</strong>:{{Case.code_division}}</div>
  </div>
</template>

<script>
export default {
  props:{
    Case: {
      type:Object,
      required:true
    }
  }
}
</script>

<style scoped>

</style>