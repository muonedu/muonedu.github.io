<template>
  <div>
    <div class="header">      
      <div class="column">
        <div class="column is-three-fifths content">
          <h1>Muon Edukasi !</h1> 
          <h1 style="font-size:30px;">Train your Mind by Coding</h1>
          <p>Muon adalah sebuah lembaga pelatihan di bidang teknologi dan informasi yang bertujuan untuk meningkatkan kreativitas di bidang Teknologi Informasi dan mengembangkan Ekosistem Teknologi.</p>
          <h2>Industri Oriented.</h2> <p> Muonedu! mengajak siapapun untuk belajar bersama melalui training dan Event (Python, Microservices, Flask, Django, VueJS,  Docker, dan lainnya) untuk para pelajar, developer, maupun instansi/perusahaan. </p>
          <!-- <h2>Photon has been a high insight in implementation in the entire world.</h2> -->
          <b-button @click="student">I am Student</b-button> <b-button @click="corporate">I am a Company</b-button>
        </div>
      </div>
    </div>
  </div>
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
    height: 900px;
  }
  .content {
    margin: 10% 0 0 5%;
    color: white;
  }

  .content h1 {
    color: white;
    font-size: 40px;
  }
  .content p {
    color: white;
    font-size: 20px;
    font-style: oblique;
  }
  .content h2 {
    color: white;
    font-size: 30px;
  }
  .button{
    margin-top: 20px;
  }
</style>