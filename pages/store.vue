<template>
  <div>
    <NuxtLayout name="custom">
      <TheSimpleCtaSection/>
<!--      <CategoriesWithImageBackgrounds/>-->
      <hr class="text-black bg-black py-0.5 lg:mx-72">
      <CategoriesWithScrollingCards/>

      <CtaPart/>
      <CommerceUs/>
    </NuxtLayout>
  </div>
</template>

<script>
import ProductListTallImages from "../components/ProductListTallImages";
import CategoriesWithImageBackgrounds from "../components/CategoriesWithImageBackgrounds";
import CategoriesWithScrollingCards from "../components/CategoriesWithScrollingCards";
import CategoriesWithSplitImages from "../components/CategoriesWithSplitImages";
import CommerceUs from "../components/CommerceUs.vue";
import CtaPart from "../components/CtaPart";
import TheSimpleCtaSection from "../components/TheSimpleCtaSection";
export default {
 components:{
   TheSimpleCtaSection,
   CtaPart,
   CommerceUs,
   CategoriesWithSplitImages,
   CategoriesWithScrollingCards,
   CategoriesWithImageBackgrounds,
   ProductListTallImages
 },
  jsonld() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Corporation',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': ''
      },
      headline: 'تولیدی مینو',
      description: '',
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
          url: 'https://nuxt.markazimarket.com/public/storage/product/11042345975840'
        }
      }
    };
  },
  head: {
    title: 'تولیدی مینو ',
    meta: [
      {name:"google-site-verification" ,content:"_Y9NTv1bukKVeHHLG0K71UFKgFTeH0dtwHoiR9bg0oI" },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'مینو '
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: ''
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

<style scoped>

</style>
