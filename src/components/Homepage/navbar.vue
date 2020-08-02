<template>
  <div>
    <v-app-bar
      color="primary accent-4"
      dark
      fixed=true
    >
      <v-app-bar-nav-icon @click="itemService = !itemService" class="d-sm-flex d-md-none"></v-app-bar-nav-icon>

        <v-toolbar-title>MuonLabs</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn v-for=" (btn, i) in btnNav" :key="i"  
            class="mr-4 d-none d-lg-flex d-md-flex d-xl-none" :class="btn.color"
            :rounded="btn.rounded"
            @click="goTo(btn.to)">
            <v-icon>{{btn.mdi}}</v-icon> &nbsp; &nbsp;{{btn.name}}
        </v-btn>
        
    </v-app-bar>

    <v-list rounded v-if="itemService" class="d-sm-flex d-md-none mt-12">
      <!-- <v-subheader>REPORTS</v-subheader> -->
      <v-list-item-group v-model="item" color="primary">
        <v-list-item
          v-for="(item, i) in btnNav"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.mdi"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>
<!-- <template>
  <div class="navigation">
      <b-navbar shadow="true" fixed-top >
        <template slot="brand">
          <b-navbar-item>
            <img class="logo" @click='home'
            src="@/assets/muon-logo.png"
            alt="Photonic Research Center of Riau">  
          </b-navbar-item>
          
        </template> -->
<!--         <template slot="start">
          <b-navbar-item>
            <a @click="cooperation">
              Cooperation
            </a>
          </b-navbar-item>
          <b-navbar-dropdown label="Info">
            <b-navbar-item>
              <a @click="contact">
                Contact
              </a>
            </b-navbar-item>
            <b-navbar-item>
              <a @click="event">
                Event
              </a>
            </b-navbar-item>
          </b-navbar-dropdown>
        </template> -->

       <!--  <template slot="end">
          <b-navbar-item>
            <a @click="home">
              Home
            </a>
          </b-navbar-item>
          <b-navbar-item>
            <a @click="corporate">
              Corporate
            </a>
          </b-navbar-item>
          <b-navbar-item>
            <a @click="contact">
              Contact Us
            </a>
          </b-navbar-item>
          <b-navbar-item>
            <a @click="event">
              Event
            </a>
          </b-navbar-item>
        </template>
      </b-navbar> -->
     <!--  <manage-login-dialog :dialog.sync="dialogLogin"></manage-login-dialog>
      <manage-register-dialog :dialog.sync="dialogSignup"></manage-register-dialog> -->
<!--   </div>
</template> -->

<script>
// import ManageLoginDialog from '@/components/Dialog/manageLoginDialog.vue'
// import ManageRegisterDialog from '@/components/Dialog/manageRegisterDialog.vue'


export default {
 
  data () {
    return {
        item: 1,
        itemService: false,
        dialogLogin: false,
        dialogSignup: false,
        agileShow: true,
        btnNav: [
            {
                mdi: "mdi-book-open-page-variant",
                name: "Training",
                to: "training"
            },
            {
                mdi: "mdi-cast-connected",
                name: "Development",
                to: "development"
            },
            {
                mdi: "mdi-account-cowboy-hat",
                name: "Partnership",
                to: "partnership"
            },
            {
                mdi: "mdi-feature-search",
                name: "Research",
                to: "research"
            },
            {
                mdi: "mdi-gesture-two-double-tap",
                name: "Let's talk",
                color: "red accent-4",
                rounded: true,
                to: "talk"
            }
        ]
    }
  },
  created () {

  },
  methods: {
    goTo (goTo) {
        if (goTo == "home") {
            this.$router.push({path:'/'})
        }
        if (goTo == "training") {
            this.$router.push({path:'/training'})
        }
        if (goTo == "development") {
            this.$router.push({path:'/development'})
        }
        if (goTo == "partnership") {
            this.$router.push({path:'/partnership'})
        }
        if (goTo == "talk") {
            this.$router.push({path:'/talk'})
        }
    },

    // corporate () {
    //   this.$router.push({name:'corporate'})

    // },
    // training () {
    //   this.$router.push({name:'training'})
      
    // },
    // event () {
    //   this.$router.push({name:'event'})
      
    // }

  }
    
}
</script>

<style scoped>

</style>