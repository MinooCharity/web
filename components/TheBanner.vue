<template>
  <div style="background-color: #7f6858" v-if="show_banner">
    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div class="flex items-center justify-center flex-wrap">
        <div class="w-0 flex-1 flex items-center text-center justify-center">
          <span class="flex p-2 rounded-full bg-black">
            <SpeakerphoneIcon class="h-6 w-6 text-white" aria-hidden="true" />
          </span>
          <h1 class="mr-3 font-extrabold text-gray-100 truncate">
            <span class="hidden lg:inline"> معلولیت داریم ولی محدودیت نداریم  </span>
            <span class="inline lg:hidden">  معلولیت داریم ولی محدودیت نداریم </span>
          </h1>
        </div>
        <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
        </div>
        <div class="order-2 flex-shrink-0 sm:order-3 sm:mr-3">
          <button @click="show_banner=false" type="button" class="mr-1 flex p-2 rounded-full bg-gray-800 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
            <span class="sr-only">رد کردن</span>
            <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SpeakerphoneIcon, XIcon } from '@heroicons/vue/outline'
export default {
  name: "TheBanner",
  components:{
    SpeakerphoneIcon,
    XIcon
  },
  data() {
    return {
      show_banner : true
    }
  }
}
</script>

<style scoped>


</style>
