<template>
  <div>
    <navbar/>
    <v-progress-linear
      :active="loading"
      :indeterminate="loading"
      color="deep-purple accent-4"
    ></v-progress-linear>
    <div v-show="content">
      <background></background>
      <ongoing></ongoing>
      <category></category>
      <meet></meet>
      <foot/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Background from '@/components/Homepage/background.vue'
import Navbar from '@/components/Homepage/navbar.vue'
import Category from '@/components/Homepage/sectionResearchCategory.vue'
// import Profile from '@/components/Homepage/profile.vue'
import Ongoing from '@/components/Homepage/sectionOngoingResearch.vue'
import Foot from '@/components/Homepage/footer.vue'
import Meet from '@/components/Homepage/meetSupporter.vue'

export default {
  name: 'home',
  components: {
    Navbar,
    Background,
    Category,
    Ongoing,
    Meet,
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

</style>