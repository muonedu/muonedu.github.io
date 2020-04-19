<template>
  <div>
    <v-container class="grey lighten-5">
    <v-row
      class="mb-6 mt-6"
      no-gutters>
      <v-col
        v-for="k in 2"
        :key="k">
        <v-card
          class="pa-2"
          outlined
          tile>
          {{ k }} of {{ k }}
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  </div>
</template>

<script>
  export default {
    name: 'Head Laboratory',
    data () {
      return {
        
      }
    }
      
  }
</script>

<style scoped>

</style>