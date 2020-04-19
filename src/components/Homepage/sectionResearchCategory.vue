<template>
  <div>
    <div class="background">
      <!-- <div class="title"> -->
        <div class="columns">
          <div v-for="content in data" :key="content.id" class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                   <div>
                    <img :src="content.url" style="border-bottom: 1px solid black; padding:2px; " alt="Placeholder image">
                   </div>
                </figure>
              </div>
              <div class="card-content">

                <div class="content">
                  <h1 style="font-size: 30px; font-weight:400">{{content.title}}</h1>
                  <br>
                  {{content.desc_1}}
                  <br>
                  <br>
                  {{content.desc_2}}
                  <br>
                  <br>
                  {{content.desc_3}}
                </div>
              </div>
              <!-- {{content.button}} -->
              <v-row justify="center" class="pb-6">
                <v-btn class="d-flex justify-center" @click="content.method">Lebih Lanjut</v-btn>
              </v-row>
            </div>            
          </div>
        </div>
     
    </div>
    
  </div>
</template>

<script>
  export default {
    data () {
      return {
        data: [
          {
            url: require('../../assets/image/corporate.jpeg'),
            title: 'Online Assesment',
            desc_1: 'Kami menyediakan layanan Online Assesment untuk kegiatan seperti Olimpiade Nasional, Tugas Sekolah, dan berbagai macam penilaian soal.',
            desc_2: 'Service yang kami berikan sudah flexibel disesuaikan dengan kebutuhan pemakaian.',
            desc_3: 'Pengalaman beberapa pihak yang menggunakan service online Assesment telah merasakan kemudahan dalam hal administrasi terutama dalam management soal dan penilaian.',
            type: 'is-one-third',
            method: this.corporate
          },
          {
            url: require('../../assets/image/python.jpeg'),
            title: 'Training Python',
            desc_1: 'Python adalah merupakan bahasa pemrograman yang paling populer saat ini. banyak perusahaan dan produk melibatkan python dalam pengembangannya terutama dalam bidang komputasi dan Machine Learning.',
            desc_2: 'Kami menyediakan training membuat system Web baik Monolith ataupun Microservices serta sistem menggunakan Konsep Machine Learning yang bisa diikuti oleh peserta yang tidak mempunyai background pemrograman sebelumnya.',
            method: this.python
          },
          {
            url: require('../../assets/image/event_python.jpg'),
            title: 'Event',
            desc_1: 'Secara rutin, kami membuat kelompok belajar atau Event dengan tema tertentu sesuai dengan trend dan kebutuhan.',
            desc_2: 'Tujuannya untuk belajar dan beradaptasi dengan teknologi yang sedang maju di dunia saat ini.',
            method: this.event
          }

        ]

      }
    },
    methods: {
      corporate () {
        this.$router.push({name: 'corporate'})
      },
      python () {
        this.$router.push({name: 'student'})
      },
      event () {
        this.$router.push({name: 'event'})
      }
      
  }
    }
</script>

<style scoped>
.background {
  background: url('../../assets/image/blueBackground.jpg') no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100%;
}

 .columns {
  margin: 20px 15% 40px 15%;
 }

 .card {
  width: 100%;
  height: 100%;
 }


</style>