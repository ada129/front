<template >
  <div>
    <form class="menu" @submit.prevent>
      <button class="bns" @click="EdiT" v-if="!create && !delet">Изменить</button>
      <button class="bns" @click="Inset" v-if="!edit && !delet ">Создать</button>
      <button class="bns" @click="Delete"  >Удалить</button>
      <button class="bns" @click="getInfo"  v-if="!create && !edit && !delet" >Найти</button>
      <input type="text" placeholder="Введите id" v-model="textp" >
    <select class="title1" v-model="filter">
      <option value="Case">дело</option>
      <option value="defendant">подсудимый</option>
      <option value="victim">потерпевший</option>
      <option value="witness">свидетель</option>
      <option value="expertise">экспертиза</option>
      <option value="expert">эксперт</option>
      <option value="court">работник суда</option>
      <option value="police">работник полиции</option>
      <option value="lawyer">адвокат</option>
      <option value="juror">присяжный</option>
    </select>
    </form>
    <form class="delo">
      <p v-if="!textp && !create && !edit &&!delet" >Не найдено</p>
      <div  v-if="filter==='defendant' && !create && !edit">
      <AccuseD  v-for="Case in cases" :key="Case.id_accused" :Case="Case" />
      </div>
      <div v-if="filter==='lawyer' && !create && !edit">
      <LawyeR   v-for="Case in cases" :key="Case.id" :Case="Case"/>
      </div>
      <div v-if="filter==='сase' && !create && !edit">
      <CasE  v-for="Case in cases" :key="Case.number_case" :Case="Case"/>
      </div>
      <div  v-if="filter==='expert' && !create && !edit">
      <ExperT  v-for="Case in cases" :key="Case.id" :Case="Case"/>
      </div>
      <div v-if="filter==='expertise' && !create && !edit">
      <ExpertisE   v-for="Case in cases" :key="Case.number_examination" :Case="Case"/>
      </div>
      <div v-if="filter==='police' && !create && !edit">
      <PolocE  v-for="Case in cases" :key="Case.id_worker" :Case="Case"/>
      </div>
      <div v-if="filter==='victim' && !create && !edit">
      <VictiM   v-for="Case in cases" :key="Case.id_victim" :Case="Case"/>
      </div>
      <div v-if="filter==='witness' && !create && !edit">
      <WittnesS   v-for="Case in cases" :key="Case.id" :Case="Case"/>
      </div>
      <div v-if="filter==='jurry' && !create && !edit">
        <JurrY v-for="Case in cases" :key="Case.passport" :Case="Case"/>
      </div>
      <CreatE v-if="create" :filter="filter" @create="Insetr"></CreatE>
      <EdiT v-if="edit" :filter="filter"
                        :textp="textp"
                         @edit="Editr"/>
    </form >
  </div>
</template>
<script>
import axios from "axios";
import AccuseD from "@/components/AccuseD";
import LawyeR from "@/components/LawyeR";
import CasE from "@/components/CasE";
import ExperT from "@/components/ExperT";
import ExpertisE from "@/components/ExpertisE";
import PolocE from "@/components/PolocE";
import VictiM from "@/components/VictiM";
import WittnesS from "@/components/WittnesS";
import CreatE from '@/components/CreatE'
import EdiT from '@/components/EdiT'
import JurrY from "@/components/JurrY";

export default {
  components: { JurrY, EdiT, CreatE, WittnesS, VictiM, PolocE, ExpertisE, ExperT, CasE, LawyeR, AccuseD},
  data(){return{filter:'Case',
                cases:{},
                delet:false,
                edit:false,
                create:false,
                print:false,
                textp:'',
                loading:false
                }},
  methods:{
    gotocase(){this.$router.push('/case')},
       Inset(){
           this.create=true
           this.delet=false
           this.edit=false
       },
       Insetr(create){
           this.create=create
       },
       EdiT(){
          this.edit=true
          this.delet=false
         this.create=false
       },
       Editr(edit){
           this.edit=edit
       },
    async getInfo(){
      this.loading=true
      let responce
      try {
        if (this.filter==='defendant'){
          responce=await axios.get('http://localhost:5000/api/accused',{params:{'id':this.textp}})}
        if (this.filter==='Case'){
          responce=await axios.get('http://localhost:5000/api/Caseone',{params:{'id':this.textp}})}
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
        console.log(this.cases)
      }catch (e) {
        alert("Ошибка")
      }finally {
        this.loading=false}},
      Delete(){
        if (this.filter==='Case'){axios.delete('http://localhost:5000/api/Case',
            {params:{id:this.textp}})}
        if (this.filter==='defendant'){axios.delete('http://localhost:5000/api/accused',
            {params:{id:this.textp}})}
        if (this.filter==='victim'){axios.delete('http://localhost:5000/api/victim',
            {params:{id:this.textp}})}
        if (this.filter==='witness'){axios.delete('http://localhost:5000/api/witness',
            {params:{id:this.textp}})}
        if (this.filter==='expertise'){axios.delete('http://localhost:5000/api/expertise',
            {params:{id:this.textp}})}
        if (this.filter==='court'){axios.delete('http://localhost:5000/api/courtwork',
            {params:{id:this.textp}})}
        if (this.filter==='police'){axios.delete('http://localhost:5000/api/policeof',
            {params:{id:this.textp}})}
        if (this.filter==='expert'){axios.delete('http://localhost:5000/api/expert',
            {params:{id:this.textp}})}
        if (this.filter==='lawyer'){axios.delete('http://localhost:5000/api/lawyer',
            {params:{id:this.textp}})}
        if (this.filter==='juror'){axios.delete('http://localhost:5000/api/jury',
            {params:{id:this.textp}})}
        this.delet=true
      },
}}
</script>

<style scoped>
    input{
      width: 250px;
    }
    .menu{
      margin-top: 45px;
      margin-left: 150px;
    }
    .menu > *{
      margin-left: 15px;
    }
    .bns{
      border: none;
      padding: 10px 20px;
      cursor: pointer;
      font-size: 15px;
      color: white;
      background-color: indianred;
      border-radius: 15%;
    }
    p{
      margin-top:100px;
    }
    .delo{
      margin-top:100px;
    }
</style>