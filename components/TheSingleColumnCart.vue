<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-amber-50" v-if="show_cart">
    <div class="max-w-2xl mx-auto py-2 px-4 sm:py-12 sm:px-6 lg:px-0" >
      <h4 class="text-2xl font-extrabold text-center tracking-tight text-gray-900 sm:text-2xl">سبد خرید</h4>
      <form class="mt-12">
        <section aria-labelledby="cart-heading">
          <h4 id="cart-heading" class="sr-only">سبد خرید</h4>

          <ul role="list" class="border-t border-b border-gray-500 divide-y divide-gray-500">
            <li v-for="product in products" :key="product.id" class="flex py-6">
              <div class="flex-shrink-0">
                <img v-bind:src="product.product.product.image" :alt="product.product.product.name" class="w-24 h-24 rounded-md object-center object-cover sm:w-32 sm:h-32" />
              </div>

              <div class="mr-4 flex-1 flex flex-col sm:mr-6">
                <div>
                  <div class="flex justify-between">
                    <h4 class="text-sm">
                      <a :href="product.href" class="font-medium text-gray-700 hover:text-gray-800">
                        {{ product.product.product.name }}
                      </a>
                    </h4>
                  </div>
                  <p class="mx-2 mt-2 text-sm font-extrabold text-indigo-700">
                    {{ currencyFormat(product.product.product.price )}} تومان</p>
                  <p class="mt-3 text-sm text-gray-500">
                    سایز : {{ product.product.product.size }}
                  </p>
                  <p class="mt-1 text-sm text-gray-500">
                  جنس  : {{ product.product.product.material }}
                  </p>
                  <p class="mt-1 text-sm text-gray-500">
                    ساخته : {{ product.product.product.country }}
                  </p>

                </div>

                <div class="mt-4 flex-1 flex items-start justify-between">
                    <button @click=deleteCart(product.product.id) type="button" class="text-lg font-extrabold text-red-600 hover:text-black inline-flex">
                      <p>حذف </p>
                      <TrashIcon class="h-6 w-6 text-red-600 hover:text-black " aria-hidden="true" />
                    </button>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <!-- Order summary -->
        <section aria-labelledby="summary-heading" class="mt-10">
          <h2 id="summary-heading" class="sr-only">Order summary</h2>

          <div>
            <dl class="space-y-4">
              <div class="flex items-center justify-between">
                <dt class="text-xl font-extrabold  text-gray-900">مجموع</dt>
                <dd class="ml-4 text-xl border-b-2 border-black font-extrabold text-red-600">{{ currencyFormat(total)}} تومان</dd>
              </div>
            </dl>
            <p class="mt-1 text-sm text-gray-500">  بدون هزینه حمل</p>
          </div>

<!--          <div class="mt-10">-->
<!--            <button type="submit" class="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Checkout</button>-->
<!--          </div>-->

<!--          <div class="mt-6 text-sm text-center">-->
<!--            <p>-->
<!--              or <a href="#" class="text-indigo-600 font-medium hover:text-indigo-500">Continue Shopping<span aria-hidden="true"> &rarr;</span></a>-->
<!--            </p>-->
<!--          </div>-->
        </section>
      </form>
    </div>
  </div>
  <TheLoader v-else/>
</template>

<script>
import { CheckIcon, ClockIcon } from '@heroicons/vue/solid'
import TheLoader from "./TheLoader";
import {
  TrashIcon
} from '@heroicons/vue/outline'


export default {
  components: {
    TrashIcon,
    TheLoader,
    CheckIcon,
    ClockIcon,
  },
  data() {
    return {
      products : null,
      total : null,
      show_cart : false
    }
  },
  created() {
    this.fetchData()
  },
  methods : {
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
          this.products = res.data.data
          this.total = res.data.total

        }).catch((r) => {
        }).finally(()=>{
          this.show_cart = true
        })
      } else {
        console.log('hi43')
      }
    },
    async deleteCart(id) {
      if (typeof window != 'undefined' && localStorage.getItem("myToken") != null ) {
        this.show_cart = false
        let response = await $fetch('https://nuxt.markazimarket.com/public/api/cart/delete', {
          method: 'post',
          body: {
            cart_id: id
          },
          headers: {
            'Authorization': " Bearer "+  localStorage.getItem('myToken'),
          }
        }).then((res) => {
          this.fetchData()
        }).catch((r) => {
        })
      } else {
        console.log('hi44')
      }
    }
  },
}
</script>