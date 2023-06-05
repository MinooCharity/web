<template>
  <div class="bg-gray-900 sticky top-0 z-40" dir="rtl">
    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div class="flex items-center justify-center text-center flex-wrap">
        <div class="w-0 flex-1 flex items-center text-center justify-center">
          <span class="flex p-2 rounded-lg bg-indigo-100 text-center mx-5">
            <SpeakerphoneIcon class="h-6 w-6 text-black" aria-hidden="true" />
          </span>
          <router-link to="/store" class="font-medium text-white truncate text-center">
            <span class="md:hidden"> به مینو خوش اومدی ! </span>
            <span class="hidden md:inline font-semibold text-xl text-center">
                <router-link to="/">
                   به  تولیدی مینو
                    <sup class="font-extrabold text-sm mx-1">
                    ( خیریه )
                    </sup>
                  خوش اومدی
                  </router-link>
            </span>
          </router-link>
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
  }
}
</script>

<style scoped>


</style>
