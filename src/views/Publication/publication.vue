<template>
  <div>
    <navbar/>
    <div class="content">
      <div class="publication">
        <div class="columns">
          <div class="column">
            <h1>Research Publications</h1>
          </div>
        </div>
        <div class="columns">
          <div class="column ">
            <h3> The Following are paper that has been published </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Homepage/navbar.vue'
  export default {
    name: 'Publication',
    components: {
      Navbar
    },
    data () {
      return  {

      }
    },
    methods: {

    }
    
  }
</script>

<style scoped>
.content {
  margin: 5% 0 10px 0;
}
.columns {
  text-align: center;
}
h1 {
  font-size: 50px;
  font-family: fantasy;
}
h3 {
  font-size: 20px;
  font-weight: 500;
  font-style: oblique;
}

</style>