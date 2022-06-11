<template>
  <div >
    <button @click="ex" class="bnt" >Назад</button>
    <div><strong>Номер дела</strong>:{{Case.number_case}}</div>
    <div><strong>Название</strong>:{{Case.name}}</div>
    <div><strong>Суд</strong>:{{Case.name_court}}</div>
    <div><strong>Должнсть</strong>:{{Case.post}}</div>
    <div><strong>Имя</strong>:{{Case.court_woker}}</div>
    <div><strong>Должность</strong>:{{Case.opost}}</div>
    <div><strong>Имя</strong>:{{Case.oname}}</div>
    <div><strong>Потерпевшие</strong>:{{Case.victim}}</div>
    <div><strong>Подсудимые</strong>:{{Case.accused}}</div>
    <div><strong>Содержание</strong>:{{Case.accusation}}</div>
    <div><strong>Характристика подсудимого</strong>:{{Case.characteristic}}</div>
    <div><strong>Свидетели</strong>:{{Case.witness}}</div>
    <div><strong>Показание</strong>:{{Case.indication}}</div>
    <div><strong>Название экспертизы</strong>:{{Case.name_examination}}</div>
    <div><strong>Содержание экспертизы</strong>:{{Case.conclusion}}</div>
    <div><strong>Решение</strong>:{{Case.measure}}</div>
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
  methods:{
    ex()
    {
      this.$emit('exit', false)
    }
  }
}
</script>


<style scoped>
.bnt{
  border: none;
  padding: 10px 30px;
  cursor: pointer;
  font-size: 15px;
  background-color: indianred;
  color: white;
  border-radius: 25%;
}
</style>