<template>
  <div>
    <navbar/>
    <div class="contact">
      <div class="columns">
        <div class="column">
          <h1>Contact</h1>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <p>Want to keep in touch or having some question ?</p>
        <p>Just inform us here <a href="whatsapp://send?text=Hello&phone=+6282283038159">Chat disini</a> </p> <p>or</p> <p>You can send us email here <a href="mailto:hellomuon@gmail.com">Email Us</a></p>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Homepage/navbar.vue'
  export default {
    name: 'Contact',
    components: {
      Navbar
    }
      
  }
</script>

<style scoped>
.contact {
  margin: 5% 0 0 0;
}
.columns {
  text-align: center;
}
h1 {
  font-size: 40px;
  font-weight: bold;
}
p {
  font-size: 20px;
  font-style: oblique;
}

</style>