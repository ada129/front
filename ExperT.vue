<template>
  <div>
    <div><strong>Место работы</strong>:{{Case.place_of_work}}</div>
    <div><strong>Имя</strong>:{{Case.name}}</div>
    <div><strong>Id</strong>:{{Case.id_worker}}</div>
    <div><strong>Город</strong>:{{Case.city}}</div>
    <div><strong>Квалификация</strong>:{{Case.qualification}}</div>
  </div>
</template>

<script>
export default {
        props:{
          Case:{
            type:Array,
            required:true
          }
        }
}
</script>

<style scoped>

</style>