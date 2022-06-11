<template>
  <div>
    <div><strong>Номер дела:</strong>:{{Case.number_case}}</div>
    <div><strong>Название:</strong>:{{Case.name}}</div>
    <div><strong>Содержание:</strong>:{{Case.accusation}}</div>
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
