<template>
  <div dir="rtl" class="bg-indigo-50 min-h-screen">
    <TransitionRoot as="template" :show="sidebarOpen" dir="rtl">
      <Dialog as="div" class="fixed inset-0 z-40 flex md:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-800 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
          <div class="relative max-w-xs w-full bg-white pt-5 pb-4 flex-1 flex flex-col">
            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
              <div class="absolute top-0 left-0 -mr-12 pt-2">
                <button  type="button" class="m-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="h-6 w-6 text-black" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <div class="flex-shrink-0 px-4 flex items-center bg-gray-700">
              <img class="h-16 w-auto" src="~/assets/pic/logo.png" alt="لوگوی ایرانی مارکت" />
            </div>
            <div class="mt-5 flex-1 h-0 overflow-y-auto bg-white">
              <nav class="px-2 space-y-1">
                <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group rounded-md py-2 px-2 flex items-center text-base font-medium']">
                  <component :is="item.icon" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'm-4 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
                  {{ item.name }}
                </a>
              </nav>
            </div>
            <div class="flex-shrink-0 flex bg-gray-700 p-4">
              <router-link to="/profile" class="flex-shrink-0 w-full group block">
                <div class="flex items-center">
                  <div>
<!--                    <img v-if="profile_image" class="inline-block h-10 w-10 rounded-full" v-bind:src="profile_image" alt="" />-->
<!--                    <img  v-else class="inline-block h-10 w-10 rounded-full" src="../../public/Unknown.jpg" alt="" />-->
                  </div>
                  <div class="mr-3">
                    <p v-if="!loader" class="text-sm font-medium text-white">{{name}}</p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="border-l-4 bg-violet-900 border-black pt-5 flex flex-col flex-grow overflow-y-auto">
        <div class="flex-shrink-0 px-4 flex items-center">
          <img class="h-16 w-auto border border-black border-4 rounded-lg" src="~/assets/pic/logo.png" alt="لوگوی ایرانی مارکت" />
          <p class="font-extrabold text-white text-lg mx-1">
            فروشگاه اینترنتی کسا
          </p>
        </div>
        <div class="flex-grow mt-5 flex flex-col">
          <nav class="flex-1 px-2 pb-4 space-y-1 bg-violet-200 border border-b-2 mt-1" v-if="name">
            <a v-for="item in navigation"  :key="item.name" :href="item.href" :class="[item.name === this.name ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group rounded-md py-2 px-2 flex items-center text-sm font-medium']">
              <component :is="item.icon" :class="[item.name === this.name ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-500', 'm-3 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
              {{ item.name }}
            </a>
          </nav>
        </div>
        <div class="flex-shrink-0 flex bg-gray-700 p-4">
          <router-link to="/profile" class="flex-shrink-0 group block">
            <div class="flex items-center">
              <div>
<!--                <img v-if="profile_image" class="inline-block h-10 w-10 rounded-full" v-bind:src="profile_image" alt="" />-->
<!--                <img  v-else class="inline-block h-10 w-10 rounded-full" src="../../public/Unknown.jpg" alt="" />-->
              </div>
              <div class="ml-3">
                <p class="text-base font-medium text-white">{{name}}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="md:pr-64">
      <div class="max-w-4xl mx-auto flex flex-col md:px-8 xl:px-0 ">
        <div class="sticky top-0 z-10 bg-white flex-shrink-0 h-16 border-black border border-4 py-5 flex">
          <button type="button" class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden" @click="sidebarOpen = true">
            <span class="sr-only">Open sidebar</span>
            <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
          </button>
<!--          <div class="flex-1 flex justify-between px-4 md:px-0">-->
<!--            <div class="flex-1 flex ">-->
<!--              <form class="w-full flex md:mr-0 " action="#" method="GET">-->
<!--                <label for="search-field" class="sr-only">Search</label>-->
<!--                <div class="relative w-full text-gray-400 focus-within:text-gray-600">-->
<!--                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center">-->
<!--                    <SearchIcon class="h-5 w-5" aria-hidden="true" />-->
<!--                  </div>-->
<!--                  <input id="search-field" class=" block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm" placeholder="Search" type="search" name="search" />-->
<!--                </div>-->
<!--              </form>-->
<!--            </div>-->
<!--            <div class="m-4 flex items-center md:m-6">-->
<!--              <button type="button" class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">-->
<!--                <span class="sr-only">View notifications</span>-->
<!--                <BellIcon class="h-6 w-6" aria-hidden="true" />-->
<!--              </button>-->

<!--              &lt;!&ndash; Profile dropdown &ndash;&gt;-->
<!--              <Menu as="div" class="m-3 relative">-->
<!--                <div>-->
<!--                  <MenuButton class="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">-->
<!--                    <span class="sr-only">Open user menu</span>-->
<!--                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />-->
<!--                  </MenuButton>-->
<!--                </div>-->
<!--                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">-->
<!--                  <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">-->
<!--                    <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">-->
<!--                      <a :href="item.href"  :class="[active ? 'bg-gray-100' : '', 'block py-2 px-4 text-sm text-gray-900']">{{ item.name }}</a>-->
<!--                    </MenuItem>-->
<!--                  </MenuItems>-->
<!--                </transition>-->
<!--              </Menu>-->
<!--            </div>-->
<!--          </div>-->
        </div>

        <main class="flex-1">
          <div class="py-6">
            <div class="px-4 sm:px-6 md:px-0">
              <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
            </div>
            <div class="px-4 sm:px-6 md:px-0">
              <!-- Replace with your content -->
              <div class="py-4">
                  <slot/>
              </div>
              <!-- /End replace -->
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from '@heroicons/vue/outline'
import { SearchIcon } from '@heroicons/vue/solid'

const navigation = [
  { name: 'داشبورد', href: '/panel', icon: HomeIcon, current: false },
  { name: 'دسته بندی', href: '/category/create', icon: UsersIcon, current: false ,  },
  { name: 'محصولات', href: '/product/create', icon: UsersIcon, current: false ,  },
  { name: 'پشتیبانی', href: '#', icon: FolderIcon, current: false },
  { name: 'خروج', href: '#', icon: CalendarIcon, current: false },
  // { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  // { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

export default {
  name:'form',
  components: {
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    BellIcon,
    MenuAlt2Icon,
    SearchIcon,
    XIcon,
  },
  data(){
    return{
      name : null
    }
  },
  mounted() {
    this.name = this.$route.name
  },
  setup() {
    const sidebarOpen = ref(false)

    return {
      navigation,
      userNavigation,
      sidebarOpen,

    }
  }
}
</script>