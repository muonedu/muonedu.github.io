<template>
  <div>
    <navbar/>
    <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        color="deep-purple accent-4"
      ></v-progress-linear>
    <div class="corporate" v-show="content">
      <div class="columns">
        <div class="column is-two-fifths">
          <h1>Muon Corporate</h1>
          <br>
          <p>Muon Korporasi menyediakan berbagai layanan untuk perusahaan Anda. Layanan yang kami berikan berfokus kepada solusi teknis dari permasalahan bisnis yang ada di perusahaan.</p>
          <br>
         <b-button style="font-weight:bold"> <a href="https://forms.gle/1FCDW6x84CEf91Zm7">Kontak Kami</a></b-button>
        </div>
        <div class="column">
          <img src="../../assets/image/python.png" width="50%" alt="">
        </div>
      </div>
    </div>

    <div class="content-section" v-show="content">
      <div class="columns">
        <div class="column is-half">
          <img src="@/assets/image/corporate1.jpg" alt="">
        </div>
        <div class="column">
          <h1>Corporate Training</h1>
          <br>
          <h3>Muon Korporasi akan membantu perusahaan Anda untuk dapat meningkatkan kemampuan teknis personal timnya.</h3>
          <br>
          <br>
          <h3>Kami menyediakan training untuk Python, Flask, NodeJS, VueJS, dan Docker. Kami siap untuk menyesuaikan silabus dengan kebutuhan materi di perusahaan Anda bekerja.</h3>
          <br>
          <br>
          <h3>Training dapat dilakukan di tempat Anda atau di tempat training yang kami tentukan.</h3>
          <br>
          <br>
          <b-button style="font-weight:bold"> <a href="https://forms.gle/1FCDW6x84CEf91Zm7" title=""> Kirim Inquiry</a></b-button>
        </div>
      </div>
      <div class="columns">
        <div class="column is-half">
          <h1>Apps Review & Suggestion</h1>
          <br>
          <h3>Kami dapat melakukan review dan memberikan masukan terhadap aplikasi mobile yang telah dibuat oleh Anda atau vendor Anda.</h3>
          <br>
          <br>
          <h3>Kami memberikan masukan secara detail baik dari sisi keamanan, performa, coding style, dan UI dan UX.</h3>
          <br>
          <br>
          <h3>Kami dapat memberikan solusi jika terdapat masalah yang di aplikasi yang sudah dibuat, seperti bagaimana membuat ukuran aplikasi yang lebih kecil maupun bagaimana memproteksi aplikasi Anda agar aman dari pihak yang tidak bertanggung-jawab.</h3>
          <br>
          <br>
          <b-button style="font-weight:bold"> <a href="https://forms.gle/1FCDW6x84CEf91Zm7" title=""> Kirim Inquiry</a></b-button>
        </div>
        <div class="column">
          <img src="@/assets/image/corporate2.jpg" width="100%" alt="">
        </div>
      </div>
      <div class="columns">
        <div class="column is-half">
          <img src="@/assets/image/corporate3.jpg" width="100%" alt="">
        </div>
        <div class="column">
          <h1>Technical Expert Consulting</h1>
          <br>
          <h3>Kami bekerjasama dengan para expert di bidang teknologi mobile, website, backend, dan desain untuk membantu Anda dalam menyelesaikan masalah atau mendesain arsitektur aplikasi yang Anda buat.</h3>
          <br>
          <br>
          <h3>Kami dapat hadir ke tempat Anda untuk memberikan konsultasi serta dapat melakukan pendampingan agar solusi yang kami berikan dapat diimplementasi dengan baik.</h3>
          <br>
          <br>
          <b-button style="font-weight:bold"> <a href="https://forms.gle/1FCDW6x84CEf91Zm7" title=""> Kirim Inquiry</a></b-button>
        </div>
      </div>
    </div>
    <hr>
    <foot/>
  </div>
</template>

<script>
  import Navbar from '@/components/Homepage/navbar.vue'
  import Foot from '@/components/Homepage/footer.vue'
  export default {
    name: 'Corporate',
    components: {
      Navbar,
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
  .button {
    margin-left: 50px;
  }
  .service {
    margin: 0 0 0 10%;
    background: white;
    width: 40%;
    height: 250px;
  }
  .corporate {
    background: url('../../assets/image/corp.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    width: 100%;

  }
  .columns {
    padding: 8% 0 0 0;
    margin: 0 0 0 10%;

  }
  h1 {
    font-size: 50px;
    line-height: 60px;
  }
  .content-section {
    margin: 0 10% 0 10%;
  }
  p {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 20px;
    font-weight: 500;
    font-style: oblique;
  }
</style>