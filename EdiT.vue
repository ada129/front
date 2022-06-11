<template>
  <div class="menu">
    <h3 >Изменить {{filter}} </h3>
    <lable>
      Имя
    <input v-model="title1">
    </lable>
    <label v-if="filter!=='Case' &&filter!=='expert'">
      Номер дела
    <input v-model="title2" placeholder="13-56">
    </label>
    <label v-else-if="filter==='expert'">
      Квалификация
      <input v-model="title2" placeholder="Психолог">
    </label>
    <label v-else>
      Содержание
      <input v-model="title2" placeholder="В сентябре">
    </label>
    <div v-if="filter!=='Case' && filter!=='juror' && filter!=='expert'">
     <label v-if="filter==='defendant' || filter==='victim'">
       Дата рождения
    <input v-model="title3" placeholder="1999-06-08">
     </label>
      <label v-else-if="filter==='lawyer' || filter==='court'">
        Квалификация
        <input v-model="title3" placeholder="Уголовные">
      </label>
        <label v-else-if="filter==='witness'">
           Показания
          <input v-model="title3" placeholder="Летом господин Н">
      </label>
      <label v-else-if="filter==='expertise'">
        Id-работника
        <input v-model="title3" placeholder="1020">
      </label>
      <label v-else>
        Звание
        <input v-model="title3" placeholder="Юрист 3-ранга">
      </label>
      <div v-if="filter!=='lawyer' && filter!=='witness' && filter!=='victim' ">
        <label v-if="filter==='expertise'">
          Заключение
        <input v-model="title4" placeholder="Входе изучения">
        </label>
        <label v-else-if="filter==='defendant'">
          Наказание
          <input v-model="title4" placeholder="Присудить обязательные работы">
        </label>
        <label v-else>
          Должность
          <input v-model="title4">
        </label>
        <div v-if="filter==='defendant'">
          <label >
            Характеристика
          <input v-model="title5" placeholder="Стоял на учете">
          </label>
        </div>
      </div>
      </div>
    <button @click="Edit" class="bns">Выполнить</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EdiT.vue",
  props:{
    filter:{
      type:Object,
      required:true
    },
    props: {
       textp:Object,
      required: true
    }
  },
  data(){return{
        title1:'',
        title2:'',
        title3:'',
        title4:'',
        title5:'',
        edit:true
  }},
  methods:{
    async Edit(){
      try {
      if (this.filter==='Case'){await axios.patch('http://localhost:5000/api/Case',
          {name:this.title1,
                accusation:this.title2},
          {params:{id:this.textp}})}
      if (this.filter==='defendant'){await axios.patch('http://localhost:5000/api/accused',
          {date_of_birth:this.title1,
               measure:this.title2,
               characteristic:this.title3,
               number_case:this.title4,
               name:this.title5},
               {params:{id:this.textp}})
          }
      if (this.filter==='victim'){await axios.patch('http://localhost:5000/api/victim',
          {date_of_birth:this.title1,
                number_case:this.title2,
                name:this.title3},
                {params:{id:this.textp}})
          }
      if (this.filter==='witness'){await axios.patch('http://localhost:5000/api/witness',
          {number_case:this.title1,
                name:this.title2,
                indication:this.title3},
                {params:{id:this.textp}})
          }
      if (this.filter==='expertise'){await axios.patch('http://localhost:5000/api/expertise',
          {number_case:this.title1,
                name_examination:this.title2,
                id_worker:this.title3,
                conclusion:this.title4},
                {params:{id:this.textp}})
          }
      if (this.filter==='court'){await axios.patch('http://localhost:5000/api/courtwork',
          {number_case:this.title1,
                name:this.title2,
                qualification:this.title3,
                post:this.title4},
               {params:{id:this.textp}})
          }
      if (this.filter==='police'){await axios.patch('http://localhost:5000/api/policeof',
          {number_case:this.title1,
                name:this.title2,
                title:this.title3,
                post:this.title4},
               {params:{id:this.textp}})
          }
      if (this.filter==='expert'){await axios.patch('http://localhost:5000/api/expert',
          {city:this.title1,
               qualification:this.title3},
               {params:{id:this.textp}})
          }
      if (this.filter==='lawyer'){await axios.patch('http://localhost:5000/api/lawyer',
          {number_case:this.title1,
                name:this.title2,
                qualification:this.title3},
                {params:{id:this.textp}})
          }
      if (this.filter==='juror'){await axios.patch('http://localhost:5000/api/jury',
          {number_case:this.title1,
                name:this.title2},
                {params:{id:this.textp}})
          }
          this.edit=false
          this.$emit('edit',this.edit)
    }catch (e) {
        alert("Ошибка")
      }
  }
  }
}
</script>

<style scoped>
.menu{
  flex-direction: column;
  margin-top: 10px;
  margin-left:5px;
}
.menu >*{
  margin-top: 15px;
}
.bns{
  border: none;
  padding: 10px 10px;
  cursor: pointer;
  font-size: 15px;
  background-color: indianred;
  color: white;
  border-radius: 15%;
}
</style>