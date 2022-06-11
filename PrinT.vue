<template>
</template>

<script>
import axios from "axios";

export default {
  props:{
    filter:{
      type:String,
      required:true
    }
  },
  data(){
    return{
      Case:{},
      loading:false
    }
  },
  methods:{
    async getInfo(){
      this.loading=true
      let responce
      try {
        if (this.filter==='defendant'){
          responce=await axios.get('http://localhost:5000/api/accused',{params:{'id':this.textp}})}
        if (this.filter==='Case'){
          responce=await axios.get('http://localhost:5000/api/Case',{params:{'id':this.textp}})}
        if (this.filter==='victim'){
          responce=await  axios.get('http://localhost:5000/api/victim',{params:{'id':this.textp}})}
        if (this.filter==='witness'){
          responce=await axios.get('http://localhost:5000/api/witness',{params:{'id':this.textp}})}
        if (this.filter==='expertise'){
          responce=await  axios.get('http://localhost:5000/api/expertisenum',{params:{'id':this.textp}}).then(response=>this.cases=response.data)}
        if (this.filter==='court'){
          responce=await axios.get('http://localhost:5000/api/courtwork',{params:{'id':this.textp}})}
        if (this.filter==='police'){
          responce= await axios.get('http://localhost:5000/api/policeofnum',{params:{'id':this.textp}})}
        if (this.filter==='expert'){
          responce=await axios.get('http://localhost:5000/api/expert',{params:{'id':this.textp}})}
        if (this.filter==='lawyer'){
          responce=await axios.get('http://localhost:5000/api/lawyernum',{params:{'id':this.textp}})}
        if (this.filter==='juror'){
          responce=await axios.get('http://localhost:5000/api/jury',{params:{'id':this.textp}})}
        this.cases=responce.data
      }catch (e) {
        alert("Ошибка")
      }finally {
        this.loading=false
      }
      this.$emit('getinfo',this.Case,this.loading)
      this.Case={}
    }
  },
}
</script>

<style scoped>

</style>