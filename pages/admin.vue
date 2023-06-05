<template>
  <div v-if="name">
    <NuxtLayout name="panel">
      <div class="flex flex-col rounded-lg bg-gray-50">
        admin
      </div>
    </NuxtLayout>
  </div>
  <error v-else/>
</template>

<script>
import Error from "../error";
export default {
  name: "admin",
  components: {Error},
  data(){
    return {
      name: false
    }
  },
  methods : {
    async fetchData() {
      if (typeof window !== 'undefined' && localStorage.getItem("myToken") != null ) {
        let response = await $fetch('https://nuxt.markazimarket.com/public/api/admin', {
          method: 'GET',
          headers: {
            'Authorization': " Bearer " + localStorage.getItem('myToken'),
          }
        }).then((res) => {
          if (res === '9') {
            this.name = true
          }
        }).catch((r) => {
        })
      } else {
        console.log('hi50')
      }
    }
  },
  created() {
    this.fetchData()
  }
}
</script>

<style scoped>

</style>