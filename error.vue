<template>
  <div class="bg-yellow-600 min-h-screen  px-4 py-16 sm:px-6 sm:py-24 grid place-items-center lg:px-8">
    <div class="max-w-max mx-auto items-center justify-center self-center text-center">
      <main class="sm:flex items-center justify-center self-center text-center my-5">
        <div class="sm:ml-6 bg-gray-100 h-full items-center justify-center self-center text-center my-auto  rounded-xl border border-black p-12">
          <div class="sm:border-l sm:border-gray-200 sm:pl-6">
            <h1 class="text-xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">صفحه یافت نشد</h1>
            <p class="mt-1 text-base text-gray-500">لطفا مجددا سعی نمایید </p>
          </div>
          <div class="mt-10 items-center justify-center self-center text-center mx-auto flex space-x-3 sm:border-l sm:border-transparent sm:px-6">
            <router-link to="/" class="w-full justify-center self-center text-center inline-flex items-center px-4 py-2 border border-transparent text-xl font-extrabold rounded-md shadow-sm text-white bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              برگشت به خانه
            </router-link>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
export default {
  // jsonld() {
  //   return {
  //     '@context': 'https://schema.org',
  //     '@type': 'Corporation',
  //     mainEntityOfPage: {
  //       '@type': 'WebPage',
  //       '@id': 'https://iranimarket.com/error'
  //     },
  //     headline: ' یافت نشد | ایرانی مارکت',
  //     description: 'خرید آنلاین شال و روسری و اکسسوری  و گوشواره و گل سر های متنوع در جنس های خاص مثل نخ و ابریشمی و چهار فصل وارداتی ترکیه',
  //     image: 'https://iranimarket.com/_nuxt/scrf1.47fd393c.jpeg',
  //     author: {
  //       '@type': 'Person',
  //       name: 'فربد نصیری پرتوی'
  //     },
  //     datePublished: '8/17/2022',
  //     dateModified: '8/17/2022',
  //     publisher: {
  //       '@type': 'Organization',
  //       name: 'ایرانی مارکت کسا',
  //       logo: {
  //         '@type': 'ImageObject',
  //         url: 'httpS://nuxt.markazimarket.com/public/storage/product/11042345975840'
  //       }
  //     }
  //   };
  // },
  head: {
    title: 'تولیدی مینو',
    meta: [
      {name:"google-site-verification" ,content:"_Y9NTv1bukKVeHHLG0K71UFKgFTeH0dtwHoiR9bg0oI" },
      {
        hid: 'og:title',
        property: 'og:title',
        content: ' یافت نشد |تولیدی مینو'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: ' '
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: ''
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: ''
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
