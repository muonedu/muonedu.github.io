<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Sign Up</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="first name*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="middle name"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="last name*"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="NIM*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="No. Handphone*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Interesting*" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="blue darken-1" text @click="cancel">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="signup">Signup</v-btn>
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
      cancel () {
        this.$emit('update:dialog', false)
      },
      signup () {
        this.$emit('update:dialog', false)
      }
    }
    
  }
</script>

<style lang="scss" scoped>

</style>