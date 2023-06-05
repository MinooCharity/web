<template>
  <div lang="fa" class="min-h-screen bg-amber-50" style="text-align: center">
    <TheWelcome class="top-0 sticky z-40"/>
    <div class="container hidden md:flex" >
      <button  @click="redirect()" class="justify-center text-center mx-auto items-center" >
        <section class="hexagon-gallery">
          <div class="hex ">
            <div class="overlay">
              <div class="text font-extrabold  "> عروسک</div>
            </div>
            <img src="~/assets/prod/1.jpg" alt="عروسک"></div>
          <div class="hex">
            <img src="~/assets/prod/2.jpg" alt="عروسک">
          </div>
          <div class="hex">
            <div class="overlay">
              <div class="text text-black font-extrabold">  عروسک</div>
            </div>
            <img
                src="~/assets/prod/3.jpg" alt=" عروسک">
          </div>
          <div class="hex">
            <img src="~/assets/prod/4.jpg" alt=" عروسک">
          </div>
          <div class="hex">
            <img src="~/assets/prod/5.jpg" alt=" عروسک">
          </div>
          <div class="hex">
            <img src="~/assets/prod/6.jpg" alt=" عروسک">
          </div>
          <div class="hex">
            <img src="~/assets/prod/7.jpg" alt="some">
          </div>
          <div class="hex">
            <div class="overlay">
              <div class="text text-black font-extrabold"> عروسک</div>
            </div>
            <img src="~/assets/prod/7.jpg" alt="عروسک">
          </div>
          <div class="hex">
            <img src="~/assets/prod/4.jpg" alt=" عروسک">
          </div>
          <div class="hex">
            <div class="overlay">
              <div class="text text-black font-extrabold">عروسک</div>
            </div>
            <img src="~/assets/prod/2.jpg" alt="عروسک">
          </div>
        </section>
      </button>
    </div>
    <div class="flex md:hidden min-h-screen " >
      <button  @click="redirect()" class="justify-center  text-center left-0 items-center w-full mx-5" >
        به زودی
      </button>
    </div>
    <TheFooter class="my-5"/>
  </div>
</template>

<script>
import {navigateTo, useRouter} from "nuxt/app";
import TheWelcome from "../components/TheWelcome";
import TheFooter from "../components/TheFooter";

export default {
  components:{TheFooter, TheWelcome},

  setup () {
    function redirect() {

         clearInterval(myInterval)

         return navigateTo('/store')

    }

    const myInterval = setInterval(myTimer, 1000);
    function myTimer() {
      redirect()
      clearInterval(myInterval)
    }
    return { redirect}
  },
  jsonld() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Corporation',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://iranimarket.com/store'
      },
      headline: 'ایرانی مارکت',
      description: 'خرید آنلاین شال و روسری و اکسسوری  و گوشواره و گل سر های متنوع در جنس های خاص مثل نخ و ابریشمی و چهار فصل وارداتی ترکیه',
      image: 'https://iranimarket.com/_nuxt/scrf1.47fd393c.jpeg',
      author: {
        '@type': 'Person',
        name: 'فربد نصیری پرتوی'
      },
      datePublished: '7/17/2022',
      dateModified: '7/17/2022',
      publisher: {
        '@type': 'Organization',
        name: 'ایرانی مارکت کسا',
        logo: {
          '@type': 'ImageObject',
          url: 'httpS://nuxt.markazimarket.com/public/storage/product/11042345975840'
        }
      }
    };
  },
  head: {

    title: 'ایرانی مارکت | خرید شال و روسری و اکسسوری',
    description: 'در ایرانی مارکت هرچی بخواین با کمترین هزینه در اختیار شما با ارسال رایگان است برای خرید لطفا کلیک کنید ',
    meta: [
      {name:"google-site-verification" ,content:"_Y9NTv1bukKVeHHLG0K71UFKgFTeH0dtwHoiR9bg0oI" },
      { name: 'description', content: 'در ایرانی مارکت هرچی بخواین با کمترین هزینه در اختیار شما با ارسال رایگان است برای خرید لطفا کلیک کنید ' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'ایرانی مارکت'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'خرید آنلاین شال و روسری و اکسسوری  و گوشواره و گل سر های متنوع در جنس های خاص مثل نخ و ابریشمی و چهار فصل وارداتی ترکیه '
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://iranimarket.com/_nuxt/logo.d57cb96c.png'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://iranimarket.com/'
      },
      {
        property: 'og:locale',
        content: 'de_DE'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }
}

</script>
<style scoped>
img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.hexagon-gallery {
  margin: auto;
  margin-top: 50px;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: 200px;
  grid-gap: 14px;
  padding-bottom: 50px;
}
.hex {
  display: flex;
  position: relative;
  width: 240px;
  height: 265px;
  background-color: #424242;
  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

.hex:first-child  {
  grid-row-start: 1;
  grid-column: 2 / span 2;
}

.hex:nth-child(2) {
  grid-row-start: 1;
  grid-column: 4 / span 2;
}

.hex:nth-child(3) {
  grid-row-start: 1;
  grid-column: 6 / span 2;
}

.hex:nth-child(4) {
  grid-row-start: 2;
  grid-column: 1 / span 2;
}

.hex:nth-child(5) {
  grid-row-start: 2;
  grid-column: 3 / span 2;
}

.hex:nth-child(6) {
  grid-row-start: 2;
  grid-column: 5 / span 2;
}

.hex:nth-child(7) {
  grid-row-start: 2;
  grid-column: 7 / span 2;
}

.hex:nth-child(8) {
  grid-row-start: 3;
  grid-column: 2 / span 2;
}

.hex:nth-child(9) {
  grid-row-start: 3;
  grid-column: 4 / span 2;
}

.hex:nth-child(10) {
  grid-row-start: 3;
  grid-column: 6 / span 2;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #fbbf24;
}

.container:hover .overlay {
  opacity: 1;
}

.text {
  color: black;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
