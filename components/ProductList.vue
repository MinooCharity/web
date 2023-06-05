<template>
  <div class="bg-white relative" v-if="show_data">
    <TheSimpleToast v-if="show_toast" class="animate-bounce fixed overflow-auto bottom-0 w-full"/>
    <TheSimpleError v-if="error" class="animate-bounce fixed overflow-auto bottom-0 w-full"/>


    <div class="max-w-7xl mx-auto  sm:px-6 lg:px-8">
      <h2 class="sr-only">محصولات</h2>

      <div class="-mx-px border-l border-gray-200 grid grid-cols-1 sm:mx-0 md:grid-cols-1 lg:grid-cols-2 my-5">
        <div v-for="(product,index) in products" :key="product.id"
             class="group relative p-4 border-l border-b border-gray-200 sm:p-6 border-black">
          <div class="flex font-sans shadow border-2 border-black bg-gray-100 rounded-xl">
            <div class="flex-none w-40 lg:w-56 relative">
              <img v-bind:src="product.image" :alt="product.name"
                   class="absolute inset-0 cursor-zoom-in  shadow right-0 w-full h-full object-cover rounded-xl " loading="lazy" />
            </div>
            <div class="flex-auto p-6">
              <div class="flex flex-wrap">
                <router-link :to="`/product/${product.id}`" class="flex-auto font-medium text-slate-900">
                 {{product.name}}
                </router-link>
                <div class="w-full flex-none mt-2 order-1 text-3xl font-bold text-gray-900">
                  {{currencyFormat(product.price)}}
                  <span class="text-sm font-bold text-gray-600">
                    تومان
                  </span>
                </div>
                <div class="text-sm font-medium text-slate-400">
                  {{product.category}}
                </div>
              </div>
              <p class="mt-3 text-sm text-gray-500">
                سایز : {{product.size}}
              </p>
              <p class="mt-1 text-sm text-gray-500">
                جنس  : {{product.material}}
              </p>
              <p class="my-1 text-sm text-gray-500">
                تولید : {{ product.country }}
              </p>
              <div class="flex space-x-4 mt-5 text-sm font-medium">
                <div class="flex-auto flex space-x-4 space-x-reverse mx-4 mb-2">
                  <button @click="createCart(product.id)"
                          :class="loader ? 'hidden' : 'block'"
                          class="inline-flex border border-black hover:bg-gray-300 items-center justify-center self-center h-10 px-6 font-semibold rounded-xl bg-gray-100 text-gray-900">

                    <PlusIcon class="h-6 w-6 text-gray-900" />
                    <div class="hidden lg:block">
                      اضافه به سبد
                    </div>
                    <div v-if="loader_submit" class="flex justify-center items-center">
                      <div class="animate-spin mx-2 rounded-full h-5 w-5 border-b-2 border-black"></div>
                    </div>

                  </button>
                  <router-link to="/checkout"
                          class="font-semibold rounded-full bg-yellow-100 m-2 p-2 text-gray-800 border  border-yellow-500 shadow-2xl text-white items-center self-center mx-auto text-center my-auto">
                   <ShoppingCartIcon class="h-6 w-6 text-gray-800" />
                  </router-link>
                </div>
              </div>
              <p class="text-sm text-slate-500">
                {{product.description}}
              </p>
            </div>
          </div>

          <!--          <div class="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">-->
<!--            <img :src="product.imageSrc" :alt="product.imageAlt" class="w-full h-full object-center object-cover" />-->
<!--          </div>-->
<!--          <div class="pt-10 pb-4 text-center">-->
<!--            <h3 class="text-sm font-medium text-gray-900">-->
<!--              <a :href="product.href">-->
<!--                <span aria-hidden="true" class="absolute inset-0" />-->
<!--                {{ product.name }}-->
<!--              </a>-->
<!--            </h3>-->
<!--            {{product}}-->
<!--            <h5 class="text-sm font-medium text-gray-900">-->
<!--              <div>-->
<!--                {{ product.description}}-->
<!--              </div>-->
<!--            </h5>-->
<!--            <div class="mt-3 flex flex-col items-center">-->
<!--              <p class="sr-only">{{ product.rating }} out of 5 stars</p>-->
<!--              <div class="flex items-center">-->
<!--                <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[product.rating > rating ? 'text-yellow-400' : 'text-gray-200', 'flex-shrink-0 h-5 w-5']" aria-hidden="true" />-->
<!--              </div>-->
<!--              <p class="mt-1 text-sm text-gray-500">{{ product.reviewCount }} reviews</p>-->
<!--            </div>-->
<!--            <p class="mt-4 text-base font-medium text-gray-900">{{ product.price }}</p>-->
<!--          </div>-->
        </div>
      </div>
      <TheProductPagination  @add="ChangeData" :data="pro" class="mt-4"/>
    </div>
  </div>
  <TheLoader v-else/>
</template>

<script>
import { StarIcon,ShoppingCartIcon,PlusIcon } from '@heroicons/vue/solid'
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/vue/solid'
import TheProductPagination from "./TheProductPagination";
import TheLoader from "./TheLoader";
import TheSimpleNotification from "./TheSimpleNotification";
import TheSimpleToast from "./TheSimpleToast";
import TheSimpleError from "./TheSimpleError";


export default {
  components: {
    TheSimpleError,
    PlusIcon,
    ShoppingCartIcon,
    TheSimpleToast,
    TheSimpleNotification,
    TheLoader,
    TheProductPagination,
    StarIcon,
    ArrowNarrowLeftIcon,
    ArrowNarrowRightIcon,
  },
   async jsonld() {
    if(this.show_data){
      const items = this.products.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@id': item.url,
          name: item,
        },
      }))
      if(items) {
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: items,
        };
      }
    }
  },
  data(){
    return {
      products:null,
      pro: null,
      url: null,
      show_data:false,
      show_toast:false,
      loader:false,
      loader_submit: false,
      error:false,
      timer : null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
      currencyFormat(price) {
      price = Math.floor(price / 10);
      const pieces = parseFloat(price).toFixed(0).split('');
      let ii = pieces.length;

      while ((ii -= 3) > 0) {
        pieces.splice(ii, 0, ',');
      }
      return pieces.join('');
    },
    ChangeData(page)
    {
      this.url=page;
      this.fetchData()
    },
    async createCart(id){
      if (typeof window !== 'undefined' && localStorage.getItem("myToken") != null ){
        this.loader_submit = true
        let response =  $fetch ('https://nuxt.markazimarket.com/public/api/cart/create', {
          method: 'POST',
          headers: {
            'Authorization': "Bearer"+" "+localStorage.getItem('myToken'),
          },
          body:{
            product_id : id
          }
        }).then((res)=>{
          this.loader=true
          this.show_toast=true
          this.timer = setInterval(this.myTimer, 3000);
        }).catch(()=>{
          // erro
        }).finally(()=>{
          this.loader = false
          this.loader_submit =false
        })
      } else {
        this.error = true
        this.timer = setInterval(this.myTimer, 3000);
      }

    },
     myTimer() {
      this.error = false
       this.show_toast = false
      clearInterval(this.timer)
    },
    async fetchData() {
       if (!this.url) {
         this.url = 'https://nuxt.markazimarket.com/public/api/product/index'
       }
       let response =  $fetch (this.url, {
        method: 'GET',
      }).then((res)=>{
        this.pro = res.data
        this.products = res.data.data
         this.show_data=true
      })
      return response
    }
  },
}
</script>