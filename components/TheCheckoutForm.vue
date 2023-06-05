<template>
  <div class="bg-white">
    <TheSimpleError v-if="error" class="animate-bounce fixed overflow-auto bottom-0 w-full"/>
    <!-- Background color split screen for large screens -->
    <div class="hidden lg:block relative top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true" />
    <div class="hidden lg:block relative top-0 right-0 w-1/2 h-full bg-gray-50" aria-hidden="true" />

    <div class="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2 xl:gap-x-48">
      <h1 class="sr-only">Order information</h1>

      <section aria-labelledby="summary-heading" class="bg-gray-50 pt-16 pb-10 px-4 sm:px-6 lg:px-0 lg:pb-16 lg:bg-transparent lg:row-start-1 lg:col-start-2">
        <div class="max-w-lg mx-auto lg:max-w-none">
          <TheSingleColumnCart class="px-5 py-2 rounded-xl border border-yellow-600 border-2"/>

          <Popover class="fixed bottom-0 inset-x-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden" v-slot="{ open }">
            <div class="relative z-10 bg-white border-t border-gray-200 px-4 sm:px-6">
              <div class="max-w-lg mx-auto">
                <PopoverButton class="w-full flex items-center py-6 font-medium">
                  <span class="text-base mr-auto">مجموع سبد خرید</span>
                  <span v-if="show_cart" class="text-base mr-2">{{currencyFormat(total)}} تومان</span>
                  <ChevronUpIcon class="w-5 h-5 text-gray-500" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>

            <TransitionRoot as="template" :show="open">
              <div>
                <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
                  <PopoverOverlay class="fixed inset-0 bg-black bg-opacity-25" />
                </TransitionChild>

                <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="translate-y-full" enter-to="translate-y-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-y-0" leave-to="translate-y-full">
                  <PopoverPanel class="relative bg-white px-4 py-6 sm:px-6">
                    <dl class="max-w-lg mx-auto space-y-6">
                      <div class="flex items-center justify-between">
                        <dt class="text-gray-600">مجموع</dt>
                        <dd>{{currencyFormat(total)}} تومان</dd>
                      </div>
                    </dl>
                  </PopoverPanel>
                </TransitionChild>
              </div>
            </TransitionRoot>
          </Popover>
        </div>
      </section>

      <div class="pt-4 pb-36 px-4 sm:px-6 lg:pb-16 lg:px-0 lg:row-start-1 lg:col-start-1">
        <div class="max-w-lg mx-auto lg:max-w-none">
          <section aria-labelledby="payment-heading" class="mt-10">
            <div class="bg-white flex justify-center items-center">
                <div class="w-64 h-36 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
                <img class="relative object-cover w-full h-full rounded-xl" src="~/assets/pic/bank.png">
                </div>
            </div>
            <h2 id="payment-heading" class="text-sm text-center border-b border-black my-5 font-extrabold text-gray-900" dir="rtl">
              شماره کارت
              1372
              8820
              1410
              6362
              به نام شیوا فرشباف
            </h2>

          </section>
          <section aria-labelledby="contact-info-heading">
            <h2 id="contact-info-heading" class="text-lg font-medium text-gray-900">مشخصات فردی</h2>

            <div class="mt-6">
              <label for="address" class="block text-sm font-medium text-gray-700">آدرس
              <sup class="text-red-800 text-sm font-extrabold ml-3">*</sup>
                (میتوانید در
                <button class="lg:mx-3 my-1 text-red-700 border-b border-amber-700" @click="open = true">
                  لوکیشن
                </button>
                محل دقیق خود را  نشان دهید.)
              </label>
              <div class="mt-1">
                <input v-model="query.address"
                       :class="text1 ? 'border-red-900 border-b-4' : ''"
                       type="text" id="address" name="address" autocomplete="address"
                       class="py-3 block w-full px-4 border border-gray-900 rounded-md shadow-sm focus:ring-indigo-900 focus:border-indigo-900 sm:text-sm" />
              </div>
            </div>
          </section>

          <section aria-labelledby="contact-info-heading">
            <div class="mt-6">
              <label for="address" class="block text-sm font-medium text-gray-700">توضیحات
                <sup class="text-indigo-900 text-xs font-extrabold">اختیاری</sup>
              </label>
              <div class="mt-1">
                <input v-model="query.description"
                       type="text" id="description" name="address" autocomplete="address"
                       class="py-3 block w-full border px-4 border-gray-900 rounded-md shadow-sm focus:ring-indigo-900 focus:border-indigo-900 sm:text-sm" />
              </div>
            </div>
          </section>




          <section aria-labelledby="contact-info-heading">
            <div class="mt-6 flex items-center">
              <button type="button" class="w-4/5 text-right mr-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      :class="text2 ? 'border-red-600' : ''"
              >عکس رسید
                <sup class="text-red-800 text-sm font-extrabold mt-1">*</sup>
                <input
                    id="uploadFile"
                    :class="text2 ? 'border-red-600' : ''"
                    class="file-input w-full py-2"
                    ref="fileInput"
                    type="file"
                    @input="onSelectFile"
                >
              </button>
            </div>
          </section>





          <div class="mt-10  w-full pt-6 border-t border-gray-200 sm:flex sm:items-center sm:justify-center mx-10">
            <button @click="createCheckout" class="w-1/2 text-center justify-center  inline-flex bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:ml-6 sm:order-last">پایان خرید
              <div v-if="loader" class=" flex justify-center items-center">
                <div class="animate-spin mx-2 rounded-full h-5 w-5 border-b-2 border-white"></div>
              </div>
            </button>

          </div>
          <p class="pt-4 border-b border-dashed border-black w-full lg:w-1/2 text-right self-start text-sm text-gray-500 sm:mt-0 sm:text-right mx-5" >پیامک ارسال محصول به شما داده میشود.</p>
        </div>
      </div>
    </div>
  </div>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed z-40 inset-0 overflow-y-auto" @close="open = false">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
              <button type="button" class="bg-white rounded-md text-gray-400 hover:text-gray-500 outline-none focus:outline-none" @click="open = false">
                <span class="sr-only">Close</span>
                <XIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="sm:flex sm:items-start">
              <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                <MapIcon class="h-6 w-6 text-indigo-600" aria-hidden="true" />
              </div>
            </div>
            <FindMap @location="getLocation" class="w-full h-full my-5 p-2 text-center"/>
            <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" @click="open = false">ارسال موقعیت</button>
              <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm" @click="open = false">پشیمان شدم</button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { Popover, PopoverButton, PopoverOverlay, PopoverPanel, TransitionChild, TransitionRoot, Dialog, DialogOverlay, DialogTitle } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/solid'
import TheSingleColumnCart from "./TheSingleColumnCart";
import {useRouter} from "nuxt/app";

import { ExclamationIcon, XIcon,MapIcon } from '@heroicons/vue/outline'
import FindMap from "./FindMap";
export default {
  components: {
    FindMap,
    MapIcon,
    TheSingleColumnCart,
    Popover,
    PopoverButton,
    PopoverOverlay,
    PopoverPanel,
    TransitionChild,
    TransitionRoot,
    ChevronUpIcon,
    Dialog,
    DialogOverlay,
    DialogTitle,
    ExclamationIcon,
    XIcon,
  },
  data() {
    return {
      query: {},
      file : null,
      show_cart:false,
      total:null,
      loader:false,
      text1:false,
      text2:false,
      timer:null,
      error:false,
      open:false,
      location:null
    }
  },
  created() {
    this.fetchData()
  },
  methods :{
     onSelectFile(e) {
     this.file = e.target.files[0]
     },
    currencyFormat(price) {
      price = Math.floor(price / 10);
      const pieces = parseFloat(price).toFixed(0).split('');
      let ii = pieces.length;

      while ((ii -= 3) > 0) {
        pieces.splice(ii, 0, ',');
      }
      return pieces.join('');
    },
    async fetchData() {
      if (typeof window != 'undefined' && localStorage.getItem("myToken") != null ) {
        let response = await $fetch('https://nuxt.markazimarket.com/public/api/cart/show', {
          method: 'GET',
          headers: {
            'Authorization': " Bearer "+  localStorage.getItem('myToken'),
          }
        }).then((res) => {
          this.show_cart = true
          this.total = res.data.total

        }).catch((r) => {
        })
      } else {
        // this.error = true
        // this.timer = setInterval(this.myTimer, 3000);
        console.log('hi5')
      }

    },
    myTimer() {
      this.error = false
      clearInterval(this.timer)
    },
    getLocation(data) {
      this.location=data;
    },
    async createCheckout(){
      this.loader = true
      this.text1 = false
      this.text2  = false
      let data = new FormData();

      data.append('address', this.query.address+'|'+this.location);
      data.append('description', this.query.description);
      data.append('receipt', this.file);

      if(!this.query.address) {
        this.loader = false

        return this.text1 = true
      }

      if(!this.file) {
        this.loader = false

        return this.text2 = true
      }

      if(document.getElementById("uploadFile").files.length > 0) {
        if (typeof window != 'undefined' && localStorage.getItem("myToken") != null ) {
          let response = $fetch('https://nuxt.markazimarket.com/public/api/checkout/create', {
            method: 'POST',
            headers: {
              'Authorization': "Bearer" + " " + localStorage.getItem('myToken'),
            },
            body: data
          }).then((res) => {
            const router = useRouter()
            router.push('/store')
          }).catch(() => {
            // erro
          }).finally(() => {
            this.loader = false
          })
        } else {
          console.log('hi9')
          this.error = true
          this.timer = setInterval(this.myTimer, 3000);
        }
      }
    },
  }
}
</script>