<template>
  <div>
    <div><strong>Номер дела:</strong>:{{Case.number_case}}</div>
    <div><strong>Id работника:</strong>:{{Case.id_worker}}</div>
    <div><strong>Название:</strong>:{{Case.name_examination}}</div>
    <div><strong>Заключение:</strong>:{{Case.conclusion}}</div>
    <div><strong>Id:</strong>:{{Case.number_examination}}</div>
  </div>
</template>

<script>
export default {
  props:{
    Case:{
      type:Object,
      required:true
    }
  },
  mounted(){console.log(this.Case)}
}
</script>

<style scoped>

</style>