<template>
  <div class="py-4" v-if="show_product">
    <div class="rounded-lg h-96 p-5 h-fit" >
      <div class="py-12">
        <div class="px-2  sm:px-6 lg:px-8 bg-white lg:mx-2 mt-2 border border-4 border-black rounded-3xl border-4" dir="rtl">
          <div class="mt-8 flex flex-col">
            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <table class="min-w-full divide-y divide-indigo-300">
                  <thead>
                  <tr>
                    <th scope="col" class="py-3.5 px-3 text-right text-lg font-medium text-gray-900 sm:pl-6 md:pl-0"> شماره</th>
                    <th scope="col" class="py-3.5 px-3 text-right text-lg font-medium text-gray-900">رسید</th>
                    <th scope="col" class="py-3.5 px-3 text-right text-lg font-medium text-gray-900">آدرس</th>
                    <th scope="col" class="py-3.5 px-3 text-right text-lg font-medium text-gray-900">توضیحات</th>
                    <th scope="col" class="py-3.5 px-3 text-right text-lg font-medium text-gray-900">موبایل</th>
                  </tr>
                  </thead>
                  <tbody class="divide-y divide-indigo-300">
                  <tr v-for="product in product.data" :key="product.id">
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-lg font-medium text-gray-900 sm:pl-6 md:pl-0">{{ product.id }}</td>
                    <td class="whitespace-nowrap py-4 px-3 text-lg font-medium text-gray-500">
                      <img  class="h-16 w-16 rounded-full shadow-2xl border border-2 border-black" v-bind:src="product.receipt"/>
                    </td>
                    <td class="whitespace-nowrap py-4 px-3 text-lg font-medium text-gray-500">{{product.address }}</td>
                    <td class="whitespace-nowrap py-4 px-3 text-lg font-medium text-gray-500">{{product.description }}</td>
                    <td class="whitespace-nowrap py-4 px-3 text-lg font-medium text-gray-500">{{product.user.phone }}</td>
<!--                    <td class="whitespace-nowrap py-4 px-3 text-lg font-medium text-gray-500">-->
<!--                      <div v-if="lesson.status == '1'">-->
<!--                        منتشر شده-->
<!--                      </div>-->
<!--                      <div v-else >-->
<!--                        به زودی-->
<!--                      </div>-->
<!--                    </td>-->
<!--                    <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-center text-lg font-medium sm:pr-6 md:pr-0">-->
<!--&lt;!&ndash;                      <button @click="deleteItem(lesson.id)" class="text-center hover:text-indigo-900"&ndash;&gt;-->
<!--&lt;!&ndash;                      >&ndash;&gt;-->
<!--&lt;!&ndash;                        <TrashIcon class="h-6 w-6 text-black" aria-hidden="true" />&ndash;&gt;-->
<!--&lt;!&ndash;                      </button>&ndash;&gt;-->
<!--                    </td>-->
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <ThePagination  @add="ChangeData" :data="product" class="mt-4"/>
        </div>
      </div>

    </div>
  </div>
</template>
<script>

import ProductPagination from "./ProductPagination";
import ThePagination from "./ThePagination";

export default {
  components: {ThePagination, ProductPagination},
  data() {
    return {
      query:{},
      imageData:null,
      show_toast:false,
      file:{},
      loader:false,
      category : null,
      product:null,
      show_category:false,
      show_product:false,
      url : null,
      urlProduct:null,
    }
  },
   mounted() {
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
    fetchData() {
      if (!this.urlProduct) {
        this.urlProduct = 'https://nuxt.markazimarket.com/public/api/checkout/index'
      }

      if (typeof window !== 'undefined' && localStorage.getItem("myToken") != null ) {
        let response = $fetch(this.urlProduct, {
          method: 'GET',
          headers: {
            'Authorization': " Bearer "+  localStorage.getItem('myToken'),
          }
        }).then((r) => {
          this.product = r.data
          this.show_product = true
        }).catch((r) => {
        }).finally(() => {
        })
      } else {
        console.log('hi3')
      }
    },
    ChangeData(page)
    {
      this.urlProduct=page;
      this.fetchData()
    },
  },
}
</script>
