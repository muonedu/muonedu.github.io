<template>
  <v-container fluid class="header">
    <v-row class="mt-12 mb-12">
        <v-col md="6" lg="6" sm="12" class="content ml-6    ">
            <h1>Muon Lab</h1> 
            <h1 style="font-size:30px;">Melatih daya pikir <i> dengan Computational Thinking</i></h1>
            <p>Muon adalah sebuah wadah di bidang teknologi dan informasi yang bertujuan untuk meningkatkan kreativitas di bidang Teknologi Informasi dan mengembangkan Ekosistem Teknologi.</p>
            <h2>Industri Oriented.</h2> <p> Muon mengajak siapapun untuk belajar bersama melalui training, development, partnership, Event dan consultant bahkan research untuk para pelajar, developer, maupun instansi/perusahaan. </p>
            
        </v-col>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return  {                                                                             

      }
    }, 
    methods: {
      student () {
        this.$router.push({name:'student'})
      },
      corporate () {
        this.$router.push({name:'corporate'})
      }
                                   
    }
  }
</script>

<style scoped>
.button {
  margin: 0 5% 0 0;
}
  .header {
    background: url('../../assets/image/back.png') no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    width: 100%;
  }

  .content h1 {
    color: white;
    font-size: 40px;
    font-family:Courier New;
  }
  .content p {
    color: white;
    font-size: 20px;
    font-style: oblique;
    font-family:Courier New;
  }
  .content h2 {
    color: white;
    font-size: 30px;
    font-family:Courier New;
  }
  .button{
    margin-top: 20px;
  }
</style>