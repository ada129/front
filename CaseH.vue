<template>
  <div>
    <CasesSearch @create="Getcase" @submit.prevent/>
    <form class="form">
      <div v-if="delo">
      <DelO @exit="exit" :Case="cases"/>
      </div>
    </form>
  </div>
</template>
<script>
 import CasesSearch from "@/components/CasesSearch";
 import axios from "axios";
 import DelO from "@/components/DelO";
 export default{
   name:'App',
   data() {
     return {
           loading: true,
            cases:{},
            delo:false
         }
       },
       components: {
         DelO,
         CasesSearch
       },
       methods:{
         Getcase(cases){
           this.cases=cases
           console.log(cases)
           this.delo=true
         },
         async Get(){
           try{
             this.loading=true
             const response=await axios.get('http://localhost:5000/api/Case')
             this.cases=response.data
           }catch (e) {
             console.log(e)
             alert()
           }finally {
             this.loading=false
           }},
         exit(delo){
           this.delo=delo
           console.log(this.delo)
           this.cases={}
         }
       },
   mounted(){
     this.Get();
   }
 }
</script>
<style scoped>
      form{
        display: flex;
        padding: 50px 150px;
      }

</style>
