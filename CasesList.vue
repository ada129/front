<template>
  <form class="delo">
    <div v-for="Cases in cases" v-bind:key="Cases.number_case">
    </div>
  </form>
</template>

<script>

export default {
  name: "CasesList",
  components: {},
  props:{cases:{
          type:Array,
          required:true
    }},
  data(){
    return{
        delo:{}
  }},
  methods:{

  }
}
</script>

<style scoped>
.delo{
  margin-top: 10px;
  flex-direction: column;
}
.delo >*{
     margin-top: 15px;
}
.bnt{
  border: none;
  cursor: pointer;
  font-size: 15px;
  background-color: white;
  color: indianred;
}
</style>