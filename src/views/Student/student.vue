<template>
  <div>
    <navbar/>
     <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        color="deep-purple accent-4"
      ></v-progress-linear>
    <div class="student" v-show="content">
      <div class="columns mt-12" style="margin: 0 20% 15px 20%">
        <div class="column" style="padding:5% 0 0 0;">
          Mari investasikan waktu anda untuk belajar !!
          <br>
          <br>
          Ada beberapa Pilihan Program yang bisa kamu ikuti. kamu juga bisa memilih metode pelatihan secara intensif, kelompok bahkan private.
          <br>
          <br>
          Jangan menaruh harapan sama doi yang gapeka sama kode kamu, mulai sekarang taruh harapan yang cerah dengan belajar koding di Muonlab! Yuk, daftar sekarang juga!
          <br>
          <br>
          <br>
          <v-row justify="center">
            <v-btn class=" mb-12" justify="center"><a href="https://forms.gle/nRWpEdXzu9MdH8f69" title="">Daftar Sekarang</a></v-btn>
          </v-row>
        </div>
        <div class="column">
          <img src="@/assets/image/python.png" style="padding: 10% 0 5% 0" alt="">
        </div>

      </div>
    </div>
    <price v-show="content"></price>
    <foot v-show="content" />
  </div>
</template>

<script>
  import Navbar from '@/components/Homepage/navbar.vue'
  import Price from '@/views/Price/price.vue'
  import Foot from '@/components/Homepage/footer.vue'

  export default {
    name: 'student',
    components: {
      Navbar,
      Price,
      Foot
    },
    data () {
      return {
        loading: true,
        content: false
      }
    },
    created () {
      this.loader ()
    },
    methods: {
      loader () {

        setTimeout(() => (
          this.loading = false,
          this.content = true
          ),
        2000)
      }
    }
    
  }
</script>

<style scoped>
  .student {
    background: rgb(255, 230, 97);
  }
</style>