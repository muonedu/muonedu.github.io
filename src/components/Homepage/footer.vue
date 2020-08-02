<template>
  <v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Muon Labs</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>


<script>
  export default {
    data: () => ({
      links: [
        'Training',
        'Development',
        'Partnership',
        'Research',
        'Contact Us',
      ],
    }),
  }
</script>


<!-- <template>
  <footer class="footer">
    <div class="content has-text-centered">
      <v-row justify="center">
        <i class="material-icons">phone</i> +62 822 8303 8159 &nbsp; &nbsp;
         
        <h4>hellomuonn@gmail.com</h4>
      </v-row>
    </div>
  </footer>
</template> -->



<style scoped>
.footer {
}

</style>