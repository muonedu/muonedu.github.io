<template>
  <div>
    <navbar/>
    <div class="agile-system">
      <div class="columns">
        <div class="column">
          <img src="@/assets/image/agile.png" alt="agile methodology">
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <h1>Agile Methodology </h1> 
        </div>
      </div>
      <div class="columns">
        <div class="column">
          Content
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Navbar from '@/components/Homepage/navbar.vue'
  export default {
    name: 'agile',
    components: {
      Navbar,
    }
    
  }
</script>

<style scoped>
.columns {
  text-align: center;
}

h1 {
  font-size: 30px;
  font-weight: 800;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}




</style>