<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Login</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="login">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>

</template>

<script>
  export default {
    props: [
      'dialog'
    ],
    data () {
      return  {
        
      }
    },
    methods: {
      close () {
        this.$emit('update:dialog', false)
      },
      login () {
        this.$emit('update:dialog', false)
      }
    }
    
  }
</script>

<style lang="scss" scoped>

</style>