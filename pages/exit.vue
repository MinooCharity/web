<script>


import {useRouter} from "nuxt/app";

export default {
  setup() {
    async function fetchMyUser() {
      if (typeof window !== 'undefined' && localStorage.getItem("myToken") != null ) {
        await $fetch('https://nuxt.markazimarket.com/public/api/logout', {
          headers: {
            'Authorization': " Bearer " + localStorage.getItem('myToken'),
          }
        }).then((r) => {
          localStorage.clear()
        }).catch((r) => {

        })
      } else {
        console.log('hi70')
      }
    }
    fetchMyUser()
    return [
      fetchMyUser()
    ]
  },
}
</script>

<template>
  <div class="bg-indigo-200 min-h-screen" dir="rtl">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto divide-gray-900 bg-indigo-500 shadow-2xl rounded-3xl p-10">
        <h2 class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl"> چه حیف خارج شدی ...&numsp; :( </h2>
        <router-link  class="text-center mx-auto border-b" to="/">
          بازگشت به خانه
        </router-link>
      </div>
    </div>

  </div>
</template>

