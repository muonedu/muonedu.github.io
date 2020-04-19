<template>
  <div>
    <navbar></navbar>
    <div class="event">
      <div class="columns" style="margin-left:%">
        <div class="column">
          <h1>Boost Your Research Using Python Stack Development</h1>
        </div>
      </div>
      <div class="columns description">
        <div class="column" style="line-height:2;font-size:20px;font-weight:600">
          <p>This Workshop is aimed to any people who having interesting in Research and want to improve their research quality, in particularly the data gained already. This event will be held in Fotonic Laboratory FMIPA RIAU UNIVERSITY.</p>
          <v-row justify="center" style="font-size:20px;color:white">
            <i class="material-icons mt-2">
            date_range
            </i>
            <h4> every Saturday</h4>
          </v-row>
          <v-row justify="center" style="font-size:20px;color:white">
            <i class="material-icons mt-2">
            access_time
            </i>
            <h4> 13.30 - 15.00 wib</h4>
          </v-row>
        </div>
      </div>
      <br>
      <br>
      <v-row justify="center">
        <v-btn class="mb-12"><a href="https://forms.gle/GmaMxGgiAARKRrNq8" title="">Daftar</a></v-btn>
      </v-row>
      <br>
      <br>
      <br>
    </div>
    <hr>
    <foot/>
  </div>
</template>

<script>
  import Navbar from '@/components/Homepage/navbar.vue'
  import Foot from '@/components/Homepage/footer.vue'
  export default {
    name: 'Event',
    components: {
      Navbar,
      Foot
    }
    
  }
</script>

<style scoped>
  .event {
    margin: 5% 0 0 0;
    background: url('../../assets/image/event_python.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
  .columns {
    text-align: center;
  }
  h1 {
    font-size: 50px;
  }
  .description {
    font-size: 20px;
    font-weight: 400;
    margin: 0 15% 0 15%;

  }
</style>