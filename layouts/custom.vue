<template>
  <div dir="rtl">
    <TheBanner class="sticky"/>
    <TheNewHeader class="sticky top-0 lg:z-40"/>

    <main class="relative">
        <slot/>
    </main>
    <div class="bg-opacity-100 bg-gray-900  right-20 bottom-0 z-30 w-50 sticky items-center justify-center self-center my-auto text-center" dir="rtl">
      <div  class="bg-green-200 hover:bg-emerald-200 h-16 w-16 rounded-full items-center self-center justify-center my-auto text-center -translate-y-7 mx-5">
<!--        <a class="hidden lg:block" target="_blank" href="https://web.whatsapp.com/send?phone=989201206957">-->
          <img class="" src="~/assets/pic/icon.png"  />
<!--        </a>-->
<!--        <a class="block lg:hidden" target="_blank" href="https://api.whatsapp.com/send?phone=989201206957&text=سلام%20به%20ایرانی%20مارکت%20">-->
<!--          <img class="" src="~/assets/pic/icon.png"  />-->
<!--        </a>-->
      </div>
    </div>
    <TheFooter/>


  </div>

</template>
<script>
import TheBanner from "../components/TheBanner.vue";
import TheFooter from "../components/TheFooter";
import TheNewHeader from "../components/TheNewHeader";
export default {
  components: {TheNewHeader, TheFooter, TheBanner}
}
</script>
