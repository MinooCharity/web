<!--<template>-->
<!--    <Popover class="relative bg-violet-200 shadow-2xl" dir="rtl" >-->
<!--      <div class="max-w-7xl mx-auto px-4 sm:px-6">-->
<!--        <div class="flex justify-end items-center border-b-2 border-gray-900 py-6 md:justify-center md:space-x-10 md:space-x-reverse">-->
<!--          <div class="flex justify-center lg:w-0 lg:flex-1">-->
<!--            <img src="public/logo.png" class="h-12 w-12 md:hidden">-->
<!--            <span class="hidden md:flex">-->
<!--              <router-link to="/">-->
<!--                 فروشگاه اینترنتی کسا-->
<!--              </router-link>-->
<!--            </span>-->
<!--          </div>-->
<!--          <div class="m-2 -my-2 md:hidden">-->
<!--            <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">-->
<!--              <span class="sr-only">Open menu</span>-->
<!--             مشاهده منو-->
<!--              <MenuIcon class="h-6 w-6 mx-1" aria-hidden="true" />-->
<!--            </PopoverButton>-->
<!--          </div>-->
<!--          <PopoverGroup as="nav" class="hidden md:flex space-x-16 space-x-reverse">-->
<!--            <Popover v-for="category in navigation.categories" :key="category.name" class="flex" v-slot="{ open }">-->
<!--              <div class="relative flex">-->
<!--                <PopoverButton :class="[open ? 'text-indigo-600' : 'text-gray-700 hover:text-gray-800', 'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium focus:outline-none -mb-px pt-px']">-->
<!--                  {{ category.name }}-->
<!--                </PopoverButton>-->
<!--              </div>-->

<!--              <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">-->
<!--                <PopoverPanel class="absolute top-full inset-x-0 text-sm text-gray-500">-->
<!--                  &lt;!&ndash; Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow &ndash;&gt;-->
<!--                  <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />-->

<!--                  <div class="relative bg-white">-->
<!--                    <div class="max-w-7xl mx-auto px-8">-->
<!--                      <div class="grid grid-cols-4 gap-y-10 gap-x-8 py-16">-->
<!--                        <div v-for="item in category.featured" :key="item.name" class="group relative">-->
<!--                          <div class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">-->
<!--                            <img :src="item.imageSrc" :alt="item.imageAlt" class="object-center object-cover" />-->
<!--                          </div>-->
<!--                          <a :href="item.href" class="mt-4 block font-medium text-gray-900">-->
<!--                            <span class="absolute z-10 inset-0" aria-hidden="true" />-->
<!--                            {{ item.name }}-->
<!--                          </a>-->
<!--                          <p aria-hidden="true" class="mt-1">خرید</p>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </PopoverPanel>-->
<!--              </transition>-->
<!--            </Popover>-->

<!--&lt;!&ndash;            <a v-for="page in navigation.pages" :key="page.name" :href="page.href" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">{{ page.name }}</a>&ndash;&gt;-->
<!--&lt;!&ndash;            <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-900"> لینک </a>&ndash;&gt;-->
<!--            <router-link href="#">-->
<!--              <span class="sr-only">کسا</span>-->
<!--              <img class="h-8 w-8 sm:h-10" src="../public/logo.png" alt="لوگوی ایرانی مارکت" />-->
<!--            </router-link>-->
<!--            <button  class="text-base items-center justify-center font-medium text-gray-900 hover:text-gray-900">-->
<!--             <router-link to="/about">-->
<!--               درباره ما-->
<!--             </router-link>-->
<!--            </button>-->
<!--            <button  class="text-base items-center justify-center font-medium text-gray-900 hover:text-gray-900">-->
<!--              <router-link to="/shop">-->
<!--                فروشگاه-->
<!--              </router-link>-->
<!--            </button>-->
<!--          </PopoverGroup>-->
<!--          <div class="hidden md:flex items-center justify-center md:flex-1 lg:w-0">-->
<!--            <router-link to="/login" class="whitespace-nowrap text-base font-medium text-gray-900 hover:text-gray-900">وارد شوید  </router-link>-->
<!--            <router-link to="/checkout" class="mr-8  rounded-full whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-900 hover:bg-indigo-400">-->
<!--            <ShoppingCartIcon  class="h-6 w-6" aria-hidden="true"/>-->
<!--            </router-link>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </Popover>-->
<!--</template>-->

<!--<script setup>-->
<!--import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'-->
<!--import {-->
<!--  BookmarkAltIcon,-->
<!--  CalendarIcon,-->
<!--  ChartBarIcon,-->
<!--  CursorClickIcon,-->
<!--  MenuIcon,-->
<!--  PhoneIcon,-->
<!--  PlayIcon,-->
<!--  RefreshIcon,-->
<!--  ShieldCheckIcon,-->
<!--  SupportIcon,-->
<!--  ViewGridIcon,-->
<!--  ShoppingCartIcon,-->
<!--  XIcon,-->
<!--} from '@heroicons/vue/outline'-->
<!--// import { ChevronDownIcon } from '@heroicons/vue/solid'-->

<!--const navigation = {-->
<!--  categories: [-->
<!--    {-->
<!--      name: 'شال',-->
<!--      featured: [-->
<!--        {-->
<!--          name: 'روسری',-->
<!--          href: '#',-->
<!--          imageSrc: 'public/logo.png',-->
<!--          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',-->
<!--        },-->
<!--        {-->
<!--          name: 'روسری',-->
<!--          href: '#',-->
<!--          imageSrc: 'public/logo.png',-->
<!--          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',-->
<!--        },-->
<!--        {-->
<!--          name: 'روسری',-->
<!--          href: '#',-->
<!--          imageSrc: 'public/logo.png',-->
<!--          imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',-->
<!--        },-->
<!--        {-->
<!--          name: 'روسری',-->
<!--          href: '#',-->
<!--          imageSrc: 'public/logo.png',-->
<!--          imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',-->
<!--        },-->
<!--      ],-->
<!--    },-->
<!--    {-->
<!--      name: 'روسری',-->
<!--      featured: [-->
<!--        {-->
<!--          name: 'روسری',-->
<!--          href: '#',-->
<!--          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',-->
<!--          imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',-->
<!--        },-->
<!--        {-->
<!--          name: ' روسری',-->
<!--          href: '#',-->
<!--          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',-->
<!--          imageAlt: 'Model wearing light heather gray t-shirt.',-->
<!--        },-->
<!--        {-->
<!--          name: 'روسری',-->
<!--          href: '#',-->
<!--          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',-->
<!--          imageAlt:-->
<!--              'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',-->
<!--        },-->
<!--        {-->
<!--          name: 'روسری',-->
<!--          href: '#',-->
<!--          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',-->
<!--          imageAlt: 'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',-->
<!--        },-->
<!--      ],-->
<!--    },-->
<!--  ],-->
<!--  pages: [-->
<!--    { name: 'درباره ما', href: '#' },-->
<!--    { name: 'فروشگاه', href: '#' },-->
<!--  ],-->
<!--}-->
<!--const resources = [-->
<!--  {-->
<!--    name: 'Help Center',-->
<!--    description: 'Get all of your questions answered in our forums or contact support.',-->
<!--    href: '#',-->
<!--    icon: SupportIcon,-->
<!--  },-->
<!--  {-->
<!--    name: 'Guides',-->
<!--    description: 'Learn how to maximize our platform to get the most out of it.',-->
<!--    href: '#',-->
<!--    icon: BookmarkAltIcon,-->
<!--  },-->
<!--  {-->
<!--    name: 'Events',-->
<!--    description: 'See what meet-ups and other events we might be planning near you.',-->
<!--    href: '#',-->
<!--    icon: CalendarIcon,-->
<!--  },-->
<!--  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },-->
<!--]-->

<!--</script>-->