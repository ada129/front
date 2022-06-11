<template>
  <div class="sidebar">
       <div class="title">Меню</div>
       <div class="menu-items">
         <button @click="gotocase"  class="side-bnt" >
           <div class="link-contener">Дело </div></button>
         <button @click="gotoedit"  class="side-bnt"  v-if="entrance">
           <div class="link-contener" >Редактировать</div>
         </button>
       </div>
  </div>
</template>
<script>

export default {
  props:{
    entrance:{
      type:Boolean,
      required:true
    }
  },
methods:{
      gotocase(){this.$router.push('/Case')
                  },
      gotoedit(){this.$router.push('/edit')
                 }

}}

</script>
<style scoped>
     .title{
       color: white;
       font-size: 24px;
       margin-top: 30px;
     }
     .menu-items{
       display: flex;
       flex-direction: column;
       margin-top: 15px;
     }
     .menu-items > * {
       margin-top: 75px;
     }
     .side-bnt:focus{
       outline: none;
     }
     .side-bnt:active{
       position: relative;
       background-color: white;
       color: indianred;
       font-weight: 500;
       border-radius: 30px 0px 0px 30px;
       margin-left: 10px;
     }

     .side-bnt{
       border: none;
       padding: 16px 0px;
       cursor: pointer;
       font-size: 15px;
       color: indianred;
       background-color: white;
     }
     .side-bnt.active .link-contener::before{
       position: absolute;
       top: -60px;
       right: 0;
       content: "";
       height: 60px;
       width: 60px;
       border-radius: 50%;
       background-color: indianred;
     }
     .side-bnt.active .link-contener::after{
       position: absolute;
       bottom: -60px;
       right: 0;
       content: "";
       height: 60px;
       width: 60px;
       border-radius: 50%;
       background-color: indianred;
       z-index: 99;
     }
</style>