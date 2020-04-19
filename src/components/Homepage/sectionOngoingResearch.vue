<template>
    <div class="ongoing">
      <div class="title">
        <h1>Sedang dibuka!</h1>
        <div class="columns">
          <div class="column">
            <h2>Kelas Python From Zero to Hero</h2>
            <h4>Daftar Sekarang dan Kelas akan dimulai pada bulan November 2019</h4>
          </div>
          <div class="column is-two-thirds">
          <b-button  type="is-info" @click="python">Info Lengkap
            <b-icon
              icon="arrow-right-circle"
              size="is-small">
            </b-icon>
          </b-button>
          </div>
        </div>
      </div>
      <hr style="background:black;" class="mx-12">
      <v-row justify="center">
     <v-timeline :dense="$vuetify.breakpoint.smAndDown" class="mx-12">
        <v-timeline-item
          v-for="(item, i) in items"
          :key="i"
          :color="item.color"
          :icon="item.icon"
          fill-dot>
          <v-card
            :color="item.color"
            dark>
            <v-card-title class="title ml-6 pt-n6">{{item.date}}</v-card-title>
            <v-card-text class="white text--primary">
              <p>{{item.description}}</p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
      </v-row>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
        {
          color: 'red lighten-2',
          icon: 'mdi-star',
          date: '2 November 2019',
          description: 'Akan Belajar tentang Python Basic dan Object Oriented Programming. Bagaimana membuat sebuah fungsi dan kelas serta dapat digunakann kembali (reusable) sehingga kodingan jadi lebih efektif dan produktif.'
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-book-variant',
          date: '9 November 2019',
          description: 'Akan Belajar tentang Pengembangan dari Python Basic dan Object Oriented Programming. Bagaimana import Fungsi dan Kelas serta mempelajari Basic Flask untuk membuat web'
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
          date: '16 November 2019',
          description: 'Akan Belajar tentang bagaimana membuat web menggunakan Flask, membuat route dan render template berbasis Bootstap atau bulma.'
        },
        {
          color: 'indigo',
          icon: 'mdi-buffer',
          date: '23 November 2019',
          description: 'Praktek menghubungkan Flask dengan Database (sqlite3). Menggunakan Object Relation Mapping (ORM) Flask SQLAlchemy.'
        },
        {
          color: 'yellow lighten-1',
          icon: 'mdi-language-python',
          date: '30 November 2019',
          description: 'Akan Belajar tentang bagaimana menghubungkan template dengan framework Bootstap dan Bulma.'
        },
        {
          color: 'indigo',
          icon: 'mdi-docker',
          date: '7 Desember 2019',
          description: 'Membuat Project Chat Application dengan mengimplementasikan framework yang di pelajari sebelumnya.'
        },

      ],
      }
    },
    methods: {
      python () {
        this.$router.push('/student')
      }
    }
  }
</script>

<style scoped>
.columns {
  padding: 10px 20px 30px 11.5%;
  margin: 10px 0 0 0;
}
.column h2 {
  font-size: 26px;
}
.is-two-thirds {
  padding: 30px 0 0 30%;
}
.is-one-quarter {
  padding: 30px;
}
.title {
  padding: 50px 0 0 0;
}
.title h1 {
  font-weight: bolder;
  font-size: 40px;
  margin-left: 12%;
}
.title h3 {
  text-align: center;
  font-style: oblique;
  font-weight: 300;
  padding: 20px 0 0 0;
  font-size: 20px;
}
.ongoing {
  
}

</style>