<template>
  <div>
    <div><strong>Номер дела</strong>:{{Case.number_case}}</div>
    <div><strong>Имя</strong>:{{Case.name}}</div>
    <div><strong>Id</strong>:{{Case.id_accused}}</div>
    <div><strong>Паспорт</strong>:{{Case.passport}}</div>
    <div><strong>Дата рождения</strong>:{{Case.date_of_birth}}</div>
    <div><strong>Характеристика</strong>:{{Case.characteristic}}</div>
    <div><strong>Наказание</strong>:{{Case.measure}}</div>
  </div>
</template>

<script>
export default {
  props:{
    Сase:{
        type:Object,
        required:true
    }
  },
  mounted(){
    console.log(this.Case)
  }
}
</script>

<style scoped>

</style>