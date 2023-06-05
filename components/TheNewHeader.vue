<template>

  <div class="bg-white my-3">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="fixed inset-0 flex z-30 lg:hidden bg-indigo-900" @close="open = false" dir="rtl">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
          <div class="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
            <div class="px-4 pt-5 pb-2 flex">
              <button type="button" class="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400" @click="open = false">
                <span class="sr-only">Close menu</span>
                <XIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <!-- Links -->
            <TabGroup as="div" class="mt-2">
              <div class="border-b border-gray-200">
                <TabList class="-mb-px flex px-4 space-x-8">
                  <Tab as="template" v-for="category in navigation.categories" :key="category.name" v-slot="{ selected }">
                    <button :class="[selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent', 'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium']">
                      {{ category.name }}
                    </button>
                  </Tab>
                </TabList>
              </div>
              <TabPanels as="template">
                <TabPanel v-for="category in navigation.categories" :key="category.name" class="px-4 py-6 space-y-12">
                  <div class="grid grid-cols-2 gap-x-4 gap-y-10">
                    <div v-for="item in category.featured" :key="item.name" class="group relative">
                      <div class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                        <img :src="item.imageSrc" :alt="item.imageAlt" class="object-center object-cover" />
                      </div>
                      <router-link to="/shop"  class="mt-6 block text-sm font-medium text-gray-900">
                        <span class="sticky z-10 inset-0" aria-hidden="true" />
                        {{ item.name }}
                      </router-link>
                      <router-link to="/shop" aria-hidden="true" class="mt-1 text-sm text-gray-500">میخوامش !</router-link>
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>

            <div class="border-t border-gray-200 py-6 px-4 space-y-6">
              <div v-for="page in navigation.pages" :key="page.name" class="flow-root">
                <a :href="page.href" class="-m-2 p-2 block font-medium text-gray-900">{{ page.name }}</a>
              </div>
            </div>

            <div class="border-t border-gray-200 py-6 px-4 space-y-6 inline-flex">
              <router-link to="/checkout"  class="flow-root inline-flex w-full">
<!--                <div class="-m-2 p-2 block font-medium text-gray-900 inline-flex ">سبد خرید-->
<!--                  <ShoppingBagIcon class="h-6 w-6 mx-2 text-gray-900 hover:text-gray-500" />-->
<!--                </div>-->
              </router-link>
            </div>
          </div>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>
    <TransitionRoot as="template" :show="openLogin">
      <Dialog as="div" class="fixed z-40 bg-amber-100   bg-opacity-50 inset-0 overflow-y-auto" @close="open = false">
        <div class="flex items-end rounded-lg   justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
            <DialogOverlay class="fixed inset-0 bg-opacity-25 transition-opacity" />
          </TransitionChild>

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span class="hidden  sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <div class=" border border-2 shadow-2xl border-black relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4  overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div class="grid grid-cols-2 gap-2">
                <div>
                  <button @click="openLogin = false" class="w-12 text-left flex items-center justify-center self-start h-12 rounded-full bg-red-100 ">
                    <XCircleIcon class="h-6 w-6 text-red-800" aria-hidden="true" />
                  </button>
                </div>
                <div>
                  <button class="w-12 text-right right-5 absolute flex items-center justify-center self-start h-12 rounded-full bg-indigo-200 "
                          :class="[info === '2' ? 'bg-green-200': '',info==='3' ? 'bg-red-200' : '']"

                  >
                    <UserIcon class="h-6 w-6 text-indigo-700"
                              :class="[info === '2' ? 'text-green-700': '',info ==='3' ? 'text-red-700' : '']"
                              aria-hidden="true" />
                  </button>
                </div>
              </div>

<!--              <div class="w-full text-right text-indigo-700 right-0 self-start mt-3 py-1" v-if="info === '0'">-->
<!--               . شماره همراه خود را وارد نمایید-->
<!--              </div>-->
<!--              <div class="w-full text-right text-green-700 right-0 self-start mt-3 py-1" v-if="info === '2'">-->
<!--              . کد ورود پیامک شده را وارد نمایید-->
<!--              </div>-->
<!--              <div class="w-full text-right text-red-800 right-0 self-start mt-3 py-1" v-if="info === '3'">-->
<!--                خطا-->
<!--              </div>-->


              <div class="mt-5 text-center sm:mt-5">
                <!--                <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900"> Payment successful </DialogTitle>-->
                <TheLoginPage @info="changeData"/>
              </div>
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <header class="relative fixed top-0 z-20">
      <nav aria-label="Top">
        <!-- Secondary navigation -->
        <div class="bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="border-b border-gray-200">
              <div class="h-16 flex items-center justify-between">
                <!-- Logo (lg+) -->
                <div class="hidden font-extrabold text-xl lg:flex-1 lg:flex lg:items-center">
                  <router-link to="/">
                   تولیدی مینو
                    <sup class="font-extrabold text-sm">
                    ( خیریه )
                    </sup>
                  </router-link>
                </div>

                <div class="hidden h-full lg:flex">
                  <!-- Flyout menus -->
                  <PopoverGroup class="px-4 bottom-0 inset-x-0">
                    <div class="h-full flex justify-center space-x-8 space-x-reverse">
                      <Popover v-for="category in navigation.categories" :key="category.name" class="flex" v-slot="{ open }">
                        <div class="relative flex ">
                          <PopoverButton :class="[open ? 'font-extrabold border-indigo-600 text-indigo-600 focus:outline-none  border-b-2 hover:border-indigo-600' : 'font-extrabold border-b-2 hover:border-indigo-600 focus:outline-none border-transparent text-gray-700 hover:text-gray-800', 'relative z-10 flex items-center transition-colors ease-out duration-200 text-xl  border-b-2 -mb-px pt-px']">
                            {{ category.name }}
                          </PopoverButton>
                        </div>

                        <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">
                          <PopoverPanel class="absolute top-full inset-x-0 text-sm text-gray-500">
                            <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                            <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                            <div class="relative bg-white">
                              <div class="max-w-7xl mx-auto px-8">
                                <div class="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
                                  <div v-for="item in category.featured" :key="item.name" class="group relative">
                                    <div class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                      <img :src="item.imageSrc" :alt="item.imageAlt" class="object-center object-cover" />
                                    </div>
                                    <router-link target="_blank" to="/shop" class="mt-4 block font-medium text-gray-900">
                                      <span class="absolute z-10 inset-0" aria-hidden="true" />
                                      {{ item.name }}
                                    </router-link>
                                    <router-link to="/shop" aria-hidden="true" class="mt-1"> میخوامش !</router-link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </PopoverPanel>
                        </transition>
                      </Popover>
                      <router-link  to="/" class="my-auto justify-center items-center text-center self-center">
                        <span class="sr-only">کسا</span>
                        <img class="h-40 w-auto sm:h-10" src="~/assets/prod/7.jpg" alt="" />
                      </router-link>
                      <router-link v-for="page in navigation.pages" :key="page.name" :to="page.href" class="flex items-center text-xl font-extrabold text-gray-700 hover:text-gray-800 hover:border-indigo-600 text-indigo-600 focus:outline-none focus:outline-none border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 border-b-2 -mb-px pt-px">{{ page.name }}</router-link>
                    </div>
                  </PopoverGroup>
                </div>

                <!-- Mobile menu and search (lg-) -->
                <div class="flex-1 flex items-center lg:hidden">
                  <button type="button" class="-ml-2 bg-white p-2 rounded-md text-gray-400" @click="open = true">
                    <span class="sr-only">Open menu</span>
                    <MenuIcon class="h-6 w-6" aria-hidden="true" />
                  </button>

                  <!-- Search -->
                  <a href="#" class="ml-2 p-2 text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Search</span>
                    <SearchIcon class="w-6 h-6" aria-hidden="true" />
                  </a>
                </div>

                <!-- Logo (lg-) -->
                <router-link to="/" class="lg:hidden">
                  <span class="sr-only">KASA</span>
                  <img src="~/assets/prod/7.jpg" alt="" class="h-12 w-auto" />
                </router-link>

                <div class="flex-1 flex items-center justify-end">
                  <Popover class="hidden lg:block flow-root text-sm lg:relative ">
<!--                    <PopoverButton class="group -m-2 p-2 flex items-center">-->
<!--                      <ShoppingBagIcon class="flex-shrink-0 h-6 w-6 lg:h-9 lg:w-9 text-gray-900 group-hover:text-gray-500" aria-hidden="true" />-->
<!--                    </PopoverButton>-->
                    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">
                      <PopoverPanel class="absolute z-40 top-16 inset-x-0 mt-px pb-6 bg-white shadow-lg sm:px-2 lg:top-full lg:left-auto lg:right-0 lg:mt-3 lg:-mr-1.5 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5">
                        <h2 class="sr-only">Shopping Cart</h2>

                        <div class="max-w-2xl mx-auto px-4">
                         <TheSingleColumnCart  class="m-1"/>

                          <button @click="routeLink" class=" my-5 w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
<!--                           <router-link to="/checkout" class="w-full">-->
                            تکمیل خرید
<!--                          </router-link>-->
                          </button>

                        </div>
                      </PopoverPanel>
                    </transition>
                  </Popover>
<!--                  <div class="flex items-center lg:ml-8">-->
<!--                    &lt;!&ndash; login &ndash;&gt;-->
<!--                    <button v-if="!phone" class="text-sm font-extrabold mx-1 lg:mx-3 lg:p-2 lg:font-extrabold lg:text-xl" @click="openLogin=true">-->
<!--                      <div>وارد شوید</div>-->
<!--                    </button>-->
<!--                    <button v-else class="mx-1 lg:mx-3 lg:p-2" @click="openLogin=true">-->
<!--                      <div class=" mt-1 text-sm font-extrabold lg:text-xl " >-->
<!--                        {{ phone }} عزیز-->
<!--                      </div>-->
<!--                    </button>-->

<!--                    &lt;!&ndash; Cart &ndash;&gt;-->
<!--                  </div>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>

</template>

<script>
import TheLoginPage from './TheLoginPage'
import { ref } from 'vue'
import {
  Dialog,
  DialogOverlay, DialogTitle,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {UserIcon,XCircleIcon, MenuIcon, QuestionMarkCircleIcon, SearchIcon, ShoppingBagIcon, XIcon} from '@heroicons/vue/outline'
import TheLoginModal from "./TheLoginModal";
import TheSingleColumnCart from "./TheSingleColumnCart";
import {navigateTo} from "nuxt/app";

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const navigation = {
  categories: [
    {
      name: 'عروسک',
      featured: [
        {
          name: 'عروسک',
          href: '#',
          imageSrc: '../assets/prod/4.jpg',
          imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
        },
        {
          name: 'عروسک',
          href: '#',
          imageSrc: '../assets/prod/4.jpg',
          imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
        },
        {
          name: 'عروسک',
          href: '#',
          imageSrc: '../assets/prod/4.jpg',
          imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
        },
        {
          name: 'عروسک',
          href: '#',
          imageSrc: '../assets/prod/4.jpg',
          imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
        }
      ],
    },
    {
      name: 'عروسک',
      featured: [
        {
          name: 'عروسک',
          href: '#',
          imageSrc: '../assets/prod/4.jpg',
          imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
        },
        {
          name: 'عروسک',
          href: '#',
          imageSrc: '../assets/prod/4.jpg',
          imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
        },
        {
          name: 'عروسک',
          href: '#',
          imageSrc: '../assets/prod/4.jpg',
          imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
        },
      ],
    },
  ],
  pages: [
    { name: 'درباره ما', href: '/about' },
    { name: 'محصولات', href: '/shop' },
  ],
}

export default {
  components: {
    XCircleIcon,
    TheSingleColumnCart,
    TheLoginPage,
    DialogTitle,
    UserIcon,
    TheLoginModal,
    Dialog,
    DialogOverlay,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    TransitionChild,
    TransitionRoot,
    MenuIcon,
    QuestionMarkCircleIcon,
    SearchIcon,
    ShoppingBagIcon,
    XIcon,
  },
  setup() {
    const open = ref(false)
    const openLogin = ref(false)
    let phone        = ref (null)
    let info          =ref ('0')
    async function fetchData() {
      if (typeof window != 'undefined' && localStorage.getItem("myToken") != null ) {
        let response = await $fetch('https://nuxt.markazimarket.com/public/api/user', {
          method: 'GET',
          headers: {
            'Authorization': " Bearer "+  localStorage.getItem('myToken'),
          }
        }).then((res) => {
          if (res !== '0') {
            phone.value = res
          }
        }).catch((r) => {
        })
      }
    }
    function routeLink() {
      return navigateTo('/checkout')
    }
    function  changeData(data) {
      info.value = data

      if(data === '1') {
        fetchData()
        openLogin.value = false
      }

    }
    fetchData()
    return {
      changeData,
      currencies,
      navigation,
      open,
      openLogin,
      phone,
      info,
      routeLink
    }
  },
}
</script>
