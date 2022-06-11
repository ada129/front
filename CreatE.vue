<template>
   <div class="menu">
     <h3 >Создать {{filter}} </h3>
     <label  v-if="filter!=='expert'">
          Номер дела
         <input v-model="title1" placeholder="13-678" >
     </label>
     <label v-else-if="filter==='expert'" >
        Место работы
       <input v-model="title1"  placeholder="НИИ Циклон">
     </label>
     <label>
        Имя
         <input v-model="title2">
     </label>
     <lable v-if="filter=== 'Case'">
          Описание
         <input v-model="title3" placeholder="4 сентября суд города Н ">
     </lable>
     <label v-else-if="filter==='juror'">
       Паспорт
       <input v-model="title3" placeholder="1213 678943"></label>
       <label v-else>
          id
         <input v-model="title3" placeholder="12"></label>
         <div v-if="filter!=='juror' && filter!=='Case'">
           <label v-if="filter==='defendant' || filter==='victim'">
             Паспорт
            <input v-model="title4" placeholder="1213 678943"></label>
           <label v-else-if="filter==='expertise'">
             Содержание
             <input v-model="title4" placeholder="Множествееные повреждения"></label>
           <label v-else-if="filter==='witness'">
             Показания
             <input v-model="title4" placeholder="Я видел"></label>
           <label v-else-if="filter==='police'">
             Звание
             <input v-model="title4" placeholder="юрист 3-класса"></label>
           <label v-else>
             Квалификация
             <input v-model="title4" placeholder="уголовные дела"></label>
         <div v-if="filter!=='witness'">
           <label v-if="filter==='lawyer'">
             Id-клиента
           <input v-model="title5" placeholder="123">
           </label>
           <label v-else-if="filter==='expertise'">
             Id-работника
             <input v-model="title5" placeholder="123">
           </label>
           <label v-else-if="filter==='expert'">
             Город
             <input v-model="title5" placeholder="Белгород">
           </label>
           <label v-else-if="filter==='victim' || filter==='defendant'">
             Дата рождения
             <input v-model="title5" placeholder="ГГГГ-ММ-ДД"></label>
           <label v-else>
              Должность
             <input v-model="title5 " placeholder="Прокурор">
           </label>
         <div v-if="filter!=='expert' && filter!=='expertise' && filter!=='lawyer'  && filter!=='victim'">
              <label v-if="filter==='defendant'">
                Характеристика
               <input v-model="title6" placeholder="организатор секты ***">
              </label>
           <label v-else>
                Место работы
             <input v-model="title6" placeholder="Новосибирский областной суд">
           </label>
           <div v-if="filter==='defendant'">
             <label>
              Наказание
           <input v-model="title7" placeholder="10 лет">
             </label>
           </div>
         </div>
         </div>
         </div>
          <button @click="Insert" class="bns">Выполнить</button>
   </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CreatE.vue",
  props:{
    filter:{
      type:Object,
      required:true
    }
  },
  data(){return{
    created:true,
    title1:'',
    title2:'',
    title3:'',
    title4:'',
    title5:'',
    title6:'',
    title7:''
  }},
  methods:{
      async Insert() {
        try {
        if (this.filter === 'Case') {
          axios.put('http://localhost:5000/api/Case',
              {number_case: this.title1,
                    name: this.title2,
                    accusation: this.title3})
        }
        if (this.filter === 'defendant') {
          axios.put('http://localhost:5000/api/accused',
              {
                name: this.title1,
                passport: this.title2,
                date_of_birth: this.title3,
                measure: this.title4,
                characteristic: this.title5,
                number_case: this.title6,
                id_accused:this.title7
              })
        }
        if (this.filter === 'victim') {
          axios.put('http://localhost:5000/api/victim' ,
              {name: this.title1,
                                  passport: this.title2,
                                  date_of_birth: this.title3,
                                  number_case: this.title4,
                                  id_victim:this.title5})
        }
        if (this.filter === 'witness') {
          axios.put('http://localhost:5000/api/witness',
              {name: this.title1,
                    id: this.title2,
                    number_case: this.title3,
                    indication: this.title4})
        }
        if (this.filter === 'expertise') {
          axios.put('http://localhost:5000/api/expertise',
              {
                name_examination: this.title1,
                number_examination: this.title2,
                id_worker: this.title3,
                conclusion: this.title4,
                number_case: this.title5
              })
        }
        if (this.filter === 'court') {
          axios.put('http://localhost:5000/api/courtwork',
              {
                name: this.title1,
                post: this.title2,
                id_worker: this.title3,
                name_court: this.title4,
                qualification: this.title5,
                number_case: this.title6
              })
        }
        if (this.filter === 'police') {
          axios.put('http://localhost:5000/api/policeof',
              {
                name: this.title1,
                post: this.title2,
                id_worker: this.title3,
                code_division: this.title4,
                title: this.title5,
                number_case: this.title6
              })
        }
        if (this.filter === 'expert') {
          axios.put('http://localhost:5000/api/expert',
              {
                name: this.title1,
                id_worker: this.title2,
                place_of_work: this.title3,
                city: this.title4,
                qualification: this.title5
              })
        }
        if (this.filter === 'lawyer') {
          axios.put('http://localhost:5000/api/lawyer',
              {name: this.title1,
                    id_client: this.title2,
                    number_case: this.title3,
                    qualification: this.title4,
                    id:this.title5})
        }
        if (this.filter === 'juror') {
          axios.put('http://localhost:5000/api/jury',
              {name: this.title1,
                   passport: this.title2,
                   number_case: this.title3})
        }
        this.created=false
        this.$emit('create',this.created)}
        catch (e) {alert('Ошибка')}
      }}
}
</script>

<style scoped>
         .menu{
           display: flex;
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
           background-color: white;
           color: indianred;
           border-radius: 15%;
         }
</style>