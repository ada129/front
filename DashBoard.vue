<template>
  <div class="dashboard">
     <SideBar :entrance="entrance"/>
    <div class="content" >
      <button  @click="logout" class="bnt">
        <div>Выйти</div>
      </button>
      <router-view/>
      <div v-show="show" class="dialog">
         <div v-if="!entrance" class="content1">
              <LogiN  @login="changeentance"/>
         </div>
         <div v-else class="content1">
              <LogouT :user="use" @logout="changeentance"/>
         </div>
      </div>
    </div>
  </div>
</template>
  <script>
    import SideBar from "@/components/SideBar";
    import LogouT from "@/components/LogouT";
    import LogiN from "@/components/LogiN";
    export default {
      components: {LogouT, SideBar,LogiN},
      data(){return{
        entrance:false,
        show:true,
        use:{}
      }},
      methods:{
        gotocase(){this.$router.push('/Case')},
        gotoedit(){this.$router.push('/edit')},
        changeentance(entrance,user){
           this.entrance=entrance
           this.show=!this.show
           this.use=user
        },
        logout(){
          this.show=true
        }}
      }
  </script>
<style scoped>
  .dashboard{
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: indianred;
    height: 100vh;
    width: 100vw ;
  }
  .content{
    background-color: white;
    border-radius: 20px;
    margin: 6px 6px 6px 0px;

  }
  .dialog{
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0,0,0, 0.5);
    position: fixed;
    display: flex;
  }
  .content1{
    margin: auto;
    background-color: white;
    border-radius: 35%;
    min-width: 250px;
    min-height: 50px;
  }
  .bnt{
    border: none;
    padding: 10px 10px;
    cursor: pointer;
    background-color: white;
    color: indianred;
    margin-left: 950px;
    border-radius: 35%;
  }
</style>