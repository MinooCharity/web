<template>
    <NuxtLayout name="custom">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-amber-100 rounded-xl">
        <h1 class="text-3xl font-extrabold tracking-tight text-gray-900">محصولات مینو</h1>
        <p class="mt-4 max-w-xl text-sm text-gray-700">امیدواریم با حمایت های شما تنوع بیشتری به محصولات بدهیم.</p>
      </div>
<!--      //next version-->
<!--      <CategoryFilter/>-->
<!--      <ProductList/>-->
      <hr class="bg-white py-1 ">
      <CommerceUs/>
    </NuxtLayout>

</template>

<script>
import CategoryFilter from "../components/CategoryFilter";
import ProductList from "../components/ProductList";
import CommerceUs from "../components/CommerceUs";
export default {
  name: "shop",
  components: {CommerceUs, ProductList, CategoryFilter},
  jsonld() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Corporation',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://iranimarket.com/shop'
      },
      headline: 'تولیدی مینو ',
      description: '',
      image: 'https://iranimarket.com/_nuxt/scrf1.47fd393c.jpeg',
      author: {
        '@type': 'Person',
        name: 'فربد نصیری پرتوی'
      },
      datePublished: '7/18/2022',
      dateModified: '7/18/2022',
      publisher: {
        '@type': 'Organization',
        name: 'تولیدی مینو',
        logo: {
          '@type': 'ImageObject',
          url: ''
        }
      }
    };
  },
  head: {
    title: 'تولیدی مینو',
    meta: [
      {name:"google-site-verification" ,content:"_Y9NTv1bukKVeHHLG0K71UFKgFTeH0dtwHoiR9bg0oI" },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'تولیدی مینو'
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

<style scoped>

</style>
