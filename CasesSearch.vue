<template >
  <div>
    <form class="title1" @submit.prevent>
      <input  type="text" placeholder="Номер дела" v-model="title" >
      <button class="bnt" type="submit" @click="Getcase">Найти</button>
  </form>
  </div>
</template>

<script>
import axios from "axios";


export default {
  components: {},
  data() {
    return {
      title: '',
      cases: {},
      loading: false,
    }
  },
  methods: {
    async Getcase() {
      console.log(this.title)
      try {
        this.cases = {}
        this.loading = true
        const responce = await axios.get('http://localhost:5000/api/Delo', {params: {'id': this.title}})
        this.cases = responce.data
      } catch (e) {
        alert()
      } finally {
        this.loading = false
      }
      this.$emit('create', this.cases)
      this.cases = {}
    }
  }
}

</script>

<style scoped>
.title1{
  margin-top: 40px;
  margin-left: 30px;
}
.title1 >*{
  margin-top: 10px;
  margin-left: 10px;
}
.bnt{
  border: none;
  padding: 10px 30px;
  cursor: pointer;
  font-size: 15px;
  background-color: indianred;
  color: white;
  border-radius: 25%;
}
input{
  width: 900px;
}

</style>