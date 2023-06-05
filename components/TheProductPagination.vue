<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <nav class="hidden md:flex border-t border-gray-800 px-4 flex items-center justify-center my-5 sm:px-0 py-5" dir="ltr">
    <div class="md:-mt-px md:flex" v-for="(cat,index) in data.links" :key="cat.id">
      <button
               @click="$emit('add', cat.url)"
               class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
               :class="[cat.active ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-700 hover:text-gray-800', 'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px']"
      >
        {{cat.label}}
      </button>
    </div>
    <!--    <div class="-mt-px w-0 flex-1 flex justify-end">-->
    <!--      <a href="#" class="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">-->
    <!--        بعدی-->
    <!--        <ArrowNarrowRightIcon class="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />-->
    <!--      </a>-->
    <!--    </div>-->
  </nav>

  <nav class="flex md:hidden border-t border-gray-800 px-4 flex items-center justify-center my-5 sm:px-0 py-5" dir="ltr">
    <div class="md:-mt-px md:flex" v-for="(cat,index) in data.links" :key="cat.id">
     <button  v-if="index<2 || index>data.last_page-2 "
         @click="$emit('add', cat.url)"
         class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
        :class="[cat.active ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-700 hover:text-gray-800', 'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px']"
        >
         {{cat.label}}
      </button>
      <div v-else>
        ...
      </div>
    </div>
<!--    <div class="-mt-px w-0 flex-1 flex justify-end">-->
<!--      <a href="#" class="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">-->
<!--        بعدی-->
<!--        <ArrowNarrowRightIcon class="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />-->
<!--      </a>-->
<!--    </div>-->
  </nav>
</template>

<script>
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/vue/solid'

export default {
  props:['data'],
  components: {
    ArrowNarrowLeftIcon,
    ArrowNarrowRightIcon,
  },
  methods:{
    passEvent(page){
      this.$emit(page)
    }
  }
}
</script>