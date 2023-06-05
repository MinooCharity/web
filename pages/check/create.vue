<template>
  <div v-if="name">
    <NuxtLayout name="panel">
      <div class="flex flex-col rounded-lg bg-gray-50">
        <CreateSimpleCheckOut/>
      </div>
    </NuxtLayout>
  </div>
  <error v-else/>
</template>

<script>
import Error from "../../error";
import CreateSimpleCheckOut from "../../components/CreateSimpleCheckOut";
export default {
  name: "create",
  components: {CreateSimpleCheckOut, Error},
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
        console.log('hi60')
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