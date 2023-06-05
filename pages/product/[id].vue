<template>
  <div>
    <NuxtLayout name="custom">
     <TheOverViewProduct/>
      <hr class="text-black bg-black py-0.5 lg:mx-72">
    <CategoriesWithScrollingCards/>
    </NuxtLayout>
  </div>
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
import TheOverViewProduct from "../../components/TheOverViewProduct";
import CategoriesWithScrollingCards from "../../components/TheStoreProduct";


export default {
  created() {
    this.my_product = this.$route.path
    this.fetchData()
  },
  data() {
    return {
      my_product : null,
      product: null
    }
  },
  methods: {
    async fetchData() {
      if (this.my_product) {
         await $fetch('https://nuxt.markazimarket.com/public/api' + this.my_product, {
          method: 'GET',
        }).then((res) => {
          this.product = res.data
        })
      }
    },
    },
    jsonld() {
     return {
       headline: ' فروشگاه ایرانی مارکت  ',
       '@context': 'https://schema.org',
       '@type': 'Product',
        product: this.product,
     };
   },
  components: {
    CategoriesWithScrollingCards,
    TheOverViewProduct,
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
  name:"[id]",
  head: {
    title: 'فروشگاه ایرانی مارکت',
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
        content: 'محصولات ترک مطابق ژورنال و کالکشن های ترک در کنار شما با ایرانی مارکت '
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
        content: 'https://iranimarket.com/product/:id'
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