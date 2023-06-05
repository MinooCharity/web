<template>
  <div class="bg-yellow-50 mb-12" v-if="product">
    <main class="max-w-7xl mx-auto sm:pt-16 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto lg:max-w-none">
        <!-- Product -->
        <div class="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <!-- Image gallery -->
          <TabGroup as="div" class="flex flex-col-reverse">
            <!-- Image selector -->
            <div class="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <TabList class="grid grid-cols-4 gap-6">
                <Tab class="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50" >
                 <span class="sr-only" >
                    {{ product.name }}
                  </span>
                  <span class="absolute inset-0 rounded-md overflow-hidden">
                    <img :src="product.image" :alt="product.name" class="w-full h-full object-center object-cover" />
                  </span>
                </Tab>
              </TabList>
            </div>

            <TabPanels class="w-full aspect-w-1 aspect-h-1">
              <TabPanel >
                <img :src="product.image" class="w-full h-full object-center object-cover sm:rounded-lg" />
              </TabPanel>
            </TabPanels>
          </TabGroup>

          <!-- Product info -->
          <div class="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 class="text-3xl font-extrabold tracking-tight text-gray-900">{{ product.name }}</h1>

            <div class="mt-3">
              <h2 class="sr-only">Product information</h2>
              <p class="text-3xl text-gray-900">{{ product.price }}</p>
              تومان
            </div>

            <!-- Reviews -->
            <div class="mt-3">
              <h3 class="sr-only">Reviews</h3>
              <div class="flex items-center">
<!--                <div class="flex items-center">-->
<!--                  <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[product.rating > rating ? 'text-indigo-500' : 'text-gray-300', 'h-5 w-5 flex-shrink-0']" aria-hidden="true" />-->
<!--                </div>-->
<!--                <p class="sr-only">{{ product.rating }} out of 5 stars</p>-->
              </div>
            </div>

            <div class="mt-6">
              <h3 class="sr-only">Description</h3>

              <div class="text-base text-gray-700 space-y-6" v-html="product.description" />
            </div>

            <div class="mt-6">
              <!-- Colors -->
<!--              <div>-->
<!--                <h3 class="text-sm text-gray-600">Color</h3>-->

<!--                <RadioGroup v-model="selectedColor" class="mt-2">-->
<!--                  <RadioGroupLabel class="sr-only"> Choose a color </RadioGroupLabel>-->
<!--                  <div class="flex items-center space-x-3">-->
<!--                    <RadioGroupOption as="template" v-for="color in product.colors" :key="color.name" :value="color" v-slot="{ active, checked }">-->
<!--                      <div :class="[color.selectedColor, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none']">-->
<!--                        <RadioGroupLabel as="p" class="sr-only">-->
<!--                          {{ color.name }}-->
<!--                        </RadioGroupLabel>-->
<!--                        <span aria-hidden="true" :class="[color.bgColor, 'h-8 w-8 border border-black border-opacity-10 rounded-full']" />-->
<!--                      </div>-->
<!--                    </RadioGroupOption>-->
<!--                  </div>-->
<!--                </RadioGroup>-->
<!--              </div>-->

              <div class="mt-10 flex sm:flex-col1">
                <button @click="createCart(product.id)" class="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full">
                 خرید محصول
                  <div v-if="loader" class=" flex justify-center items-center">
                    <div class="animate-spin mx-2 rounded-full h-5 w-5 border-b-2 border-white"></div>
                  </div>
                </button>

              </div>
            </div>

            <section aria-labelledby="details-heading" class="mt-12">
              <h2 id="details-heading" class="sr-only">Additional details</h2>

              <div class="border-t divide-y divide-gray-200">
                <Disclosure as="div">
                  <h3>
                    <DisclosureButton class="group relative w-full py-6 flex justify-between items-center text-left">
                      <span :class="[open ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium']">
                        جزتیات بیشتر
                      </span>
                      <span class="ml-6 flex items-center">
                        <PlusSmIcon v-if="!open" class="block h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                        <MinusSmIcon v-else class="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500" aria-hidden="true" />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel as="div" class="pb-6 prose prose-sm">
                    <ul role="list">
                      <li class="my-3">دسته بندی  : {{product.category}} </li>
                      <li class="my-3">جنس  : {{product.material}} </li>
                      <li class="my-3">تولید  : {{product.country}} </li>
                      <li class="my-3">سایز  : {{product.size}} </li>
                    </ul>
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </section>
          </div>
        </div>


      </div>
    </main>
  </div>
  <TheLoader v-else/>
</template>

<script>

import {
  Dialog,
  DialogOverlay,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  HeartIcon,
  MenuIcon,
  MinusSmIcon,
  PlusSmIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
  XIcon,
} from '@heroicons/vue/outline'
import { StarIcon } from '@heroicons/vue/solid'
import {navigateTo} from "nuxt/app";
import Error from "../error";
import TheLoader from "./TheLoader";




export default {
  components: {
    TheLoader,
    Error,
    Dialog,
    DialogOverlay,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    TransitionChild,
    TransitionRoot,
    HeartIcon,
    MenuIcon,
    MinusSmIcon,
    PlusSmIcon,
    SearchIcon,
    ShoppingBagIcon,
    StarIcon,
    UserIcon,
    XIcon,
  },
  jsonld() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Corporation',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://iranimarket.com/product'
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
    title:  ' ایرانی مارکت' ,
    meta: [
      {name:"google-site-verification" ,content:"_Y9NTv1bukKVeHHLG0K71UFKgFTeH0dtwHoiR9bg0oI" },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'ایرانی مارکت'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'شال و اکسسوری و روسری نخ و ابریشم با کالکشن های ترک و چهار فصل و راحت و نرم برای بانوان'
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
        content: 'https://iranimarket.com/product'
      },
      {
        property: 'og:locale',
        content: 'de_DE'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  data() {
    return {
      my_product : null,
      product: null,
      loader:false
    }
  },
  name: "TheOverViewProduct",
  // mounted() {
  //   this.my_product = this.$route.path
  //   this.fetchData()
  //
  // },
  created() {
    this.my_product = this.$route.path

    this.fetchData()
  },
  methods:{
    async  fetchData() {
      if(this.my_product){
         await $fetch('https://nuxt.markazimarket.com/public/api' +this.my_product, {
          method: 'GET',
        }).then((res) => {
            this.product = res.data
        })
      }
    },
    async createCart(id){
      this.loader = true
      if (typeof window !== 'undefined' && localStorage.getItem("myToken") != null ){
        let response =  $fetch ('https://nuxt.markazimarket.com/public/api/cart/create', {
          method: 'POST',
          headers: {
            'Authorization': "Bearer"+" "+localStorage.getItem('myToken'),
          },
          body:{
            product_id : id
          }
        }).then((res)=>{
          this.loader = false

          return navigateTo('/store')
        }).catch(()=>{
          // erro
        }).finally(()=>{

        })
      }
    }
  }
}
</script>