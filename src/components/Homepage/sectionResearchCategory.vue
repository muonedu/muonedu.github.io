<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col class="text-center col-lg-6"> 
                <h1>Our Service</h1>
                <p>Pengalaman, Pengetahuan kami adalah keuntungan anda! Jika kamu sedang membangun sesuatu yang baru, update sebuah solusi yang ada atau melatih tim internal, kita siap memberikan kontribusi</p>

                <v-btn class="mx-2" dark color="primary">
                    <v-icon dark>mdi-gesture-two-double-tap </v-icon>&nbsp; Let's talk
                </v-btn>
            </v-col>
        </v-row>
        <br>
        <v-row justify="center" class="service">
            <v-col class=" col-lg-3" 
                md="6" sm="12" cols="12" 
                v-for="content in data" 
                :key="content.id">
                <v-card outlined flat="true">
                    <v-card-title class="title-service mb-2">
                        <v-icon style="font-size:60px;color:#1565C0">{{content.mdi}}</v-icon> &nbsp;{{content.title}}
                    </v-card-title>
                    <v-card-text class="text">{{content.desc_1}}</v-card-text>
                    <v-card-actions>
                        <v-btn text rounded=true style="color:#F44336"> <v-icon>mdi-eye-settings</v-icon> &nbsp;Lihat</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            
        </v-row>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        data: [
          {
            url: require('../../assets/image/python.jpeg'),
            title: 'Training',
            mdi: "mdi-book-open-page-variant",
            desc_1: 'Python adalah merupakan bahasa pemrograman yang paling populer saat ini. banyak perusahaan dan produk melibatkan python dalam pengembangannya terutama dalam bidang komputasi dan Machine Learning.',
            method: this.python
          },
          {
            url: require('../../assets/image/corporate.jpeg'),
            title: 'Development',
            mdi: "mdi-cast-connected",
            desc_1: 'Butuh layanan Pengembangan, Perbaikan, dan deploy software ke produksi ? Biarkan pengalaman dan keahlian kami memudahkan masalah anda',
            type: 'is-one-third',
            method: this.corporate
          },
          {
            url: require('../../assets/image/event_python.jpg'),
            title: 'Partnership',
            mdi: "mdi-account-cowboy-hat",
            desc_1: 'Secara rutin, kami membuat kelompok belajar atau Event dengan tema tertentu sesuai dengan trend dan kebutuhan.',
            method: this.event
          },
          {
            url: require('../../assets/image/event_python.jpg'),
            title: 'Research',
            mdi: "mdi-feature-search",
            desc_1: 'Secara rutin, kami membuat kelompok belajar atau Event dengan tema tertentu sesuai dengan trend dan kebutuhan.',
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

    h1{
      letter-spacing: 20px;
      font-weight: 50px;
      font-family:Courier New;
      font-size: 40px;
    }
    .title-service {
        letter-spacing: 1px;
        font-family:Courier New;
        font-size: 27px;
    }
    p, .text{
      letter-spacing: 2px;
      font-family:Courier New;
    }
    .service {
        font-size:30px;
    }




</style>