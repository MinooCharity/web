<template>
  <div class="space-y-8 divide-y divide-gray-800 mt-2 px-5 m-5 bg-sky-600 p-3 rounded-3xl" dir="rtl">
    <div class="space-y-8 divide-y divide-gray-800">
      <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-4">
        <div class="sm:col-span-full">
          <p class="mt-1 text-base font-extrabold text-white">اینجا میتونی محصول جدید رو تعریف کنی :)</p>
        </div>

        <div class="sm:col-span-1">
          <label for="name" class="block text-base font-extrabold text-white">نام محصول </label>
          <div class="mt-1 mx-4">
            <input type="text" v-model="query.name" name="name" id="name" autocomplete="given-name" class="py-2 px-4 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-indigo-900 my-5 rounded-md" />
          </div>
          <div v-if="query.name">
            نام : {{query.name}}
          </div>
        </div>

        <div class="sm:col-span-1">
          <label for="price" class="block text-base font-extrabold text-white">قیمت </label>
          <div class="mt-1 mx-4">
            <input type="text" v-model="query.price" name="price" id="price" autocomplete="given-name" class="py-2 px-4 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-indigo-900 my-5 rounded-md" />
          </div>
          <div v-if="query.price">
            قیمت : {{currencyFormat(query.price)}} تومان
          </div>
        </div>

        <div class="sm:col-span-1">
          <label for="size" class="block text-sm text-base font-extrabold text-white">سایز </label>
          <div class="mt-1 mx-4">
            <input type="text" v-model="query.size" name="size" id="size" autocomplete="given-name" class="py-2 px-4 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-indigo-900 my-5 rounded-md" />
          </div>
          <div v-if="query.size">
            سایز : {{query.size}}
          </div>
        </div>

        <div class="sm:col-span-1">
          <label for="material" class="block text-base font-extrabold text-white">جنس </label>
          <div class="mt-1 mx-4">
            <input type="text" v-model="query.material" name="material" id="material" autocomplete="given-name" class="py-2 px-4 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-indigo-900 my-5 rounded-md" />
          </div>
          <div v-if="query.material">
            جنس : {{query.material}}
          </div>
        </div>

        <div class="sm:col-span-1">
          <label for="country" class="block text-base font-extrabold text-white">ساخته </label>
          <div class="mt-1 mx-4">
            <input type="text" v-model="query.country" name="country" id="country" autocomplete="given-name" class="py-2 px-4 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-indigo-900 my-5 rounded-md" />
          </div>
          <div v-if="query.country">
            ساخته : {{query.country}}
          </div>
        </div>

        <div class="sm:col-span-1">
          <label for="description" class="block text-base font-extrabold text-white">توصیحات </label>
          <div class="mt-1 mx-4">
            <input type="text" v-model="query.description" name="description" id="description" autocomplete="given-name" class="py-2 px-4 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-indigo-900 my-5 rounded-md" />
          </div>
          <div v-if="query.description">
            توضیخات : {{query.description}}
          </div>
        </div>

        <div class="sm:col-span-1">
          <label for="category_id" class="block text-base font-extrabold text-white"> دسته بندی </label>
          <div class="mt-1 mx-4">
            <select
                v-model="query.category_id"
                v-if="show_category"
                id="category_id" name="category_id"
                class="py-2 px-4 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-indigo-900 my-5 rounded-md">
              <option v-for="cat in category.data" :key="cat.id" :value="cat.id">
                {{cat.name}}
              </option>
            </select>
          </div>
        </div>


        <div class="sm:col-span-2">
          <label for="file" class="block text-base font-extrabold text-white"> عکس دسته  </label>
          <div class="mt-1 mx-4">
            <div class="mt-1 mx-4">
              <input
                  class="file-input sm:m-3 sm:w-64"
                  ref="fileInput"
                  id="file"
                  type="file"
                  @input="onSelectFile"
              >
            </div>
          </div>
        </div>

        <div class="sm:col-span-1">
            <div @click="chooseImage"
            >
              <img  v-if="imageData" v-bind:src="imageData" class="h-40 w-40 border-black border border-2 rounded-3xl">
            </div>
        </div>
      </div>
    </div>

    <div class="pt-5">
      <div class="flex justify-center ">
        <button @click="createCategory" class="mr-3 px-24 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-800 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          ذخیره کن
          <div v-if="loader" class=" flex justify-center items-center">
            <div class="animate-spin mx-2 rounded-full h-5 w-5 border-b-2 border-white"></div>
          </div>
        </button>
      </div>
    </div>
  </div>
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
                    <th scope="col" class="py-3.5 px-3 text-right text-lg font-medium text-gray-900 sm:pl-6 md:pl-0">نام محصول</th>
                    <th scope="col" class="py-3.5 px-3 text-right text-lg font-medium text-gray-900">عگس</th>
                  </tr>
                  </thead>
                  <tbody class="divide-y divide-indigo-300">
                  <tr v-for="product in product.data" :key="product.id">
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-lg font-medium text-gray-900 sm:pl-6 md:pl-0">{{ product.name }}</td>
                    <td class="whitespace-nowrap py-4 px-3 text-lg font-medium text-gray-500">
                      <img  v-if="product.image" class="h-16 w-16 rounded-full shadow-2xl border border-2 border-black" v-bind:src="product.image"/>
                      <div v-else>
                        ندارد
                      </div>
                    </td>
<!--                    <td class="whitespace-nowrap py-4 px-3 text-lg font-medium text-gray-500">{{ currencyFormat(lesson.price) }}</td>-->
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
     this.fetchCat()
  },
  created() {
    this.fetchCat()
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
        this.urlProduct = 'https://nuxt.markazimarket.com/public/api/product/index'
      }
      let response =  $fetch(this.urlProduct, {
        method: 'GET',
      }).then((r) => {
        this.product = r.data
        this.show_product = true
      }).catch((r) => {
      }).finally(() => {
      })
    },
    fetchCat() {
      let response =  $fetch('https://nuxt.markazimarket.com/public/api/category/index', {
        method: 'GET',

      }).then((r) => {
        this.category = r.data
        this.show_category = true
      }).catch((r) => {
      }).finally(() => {
      })
    },
    ChangeData(page)
    {
      this.urlProduct=page;
      this.fetchData()
    },
    chooseImage() {
      this.$refs.fileInput.click()
    },
    async onSelectFile(e) {
      const input = this.$refs.fileInput
      const files = input.files
      this.file = e.target.files[0]
      if (files && files[0]) {
        const reader = new FileReader
        reader.onload = e => {
          this.imageData = e.target.result

        }
        reader.readAsDataURL(files[0])
        this.$emit('input', files[0])
      }
    },

    async createCategory() {
      this.loader = true
      let data = new FormData();

      data.append('name', this.query.name);
      data.append('size', this.query.size);
      data.append('price', this.query.price);
      data.append('country', this.query.country);
      data.append('material', this.query.material);
      data.append('description', this.query.description);
      data.append('category_id', this.query.category_id);
      data.append('image', this.file);

      if(data) {
        if (typeof window !== 'undefined' && localStorage.getItem("myToken") != null ) {
          await $fetch('https://nuxt.markazimarket.com/public/api/product/create', {
            method: "POST",
            body: data,
            headers: {
              'Authorization': "Bearer "+localStorage.getItem('myToken'),
            },
          }).then((err) => {
            this.show_toast = true
            this.loader = false
            this.fetchData()
          })
        } else {
          console.log('hi4')
        }
      }
    }
  },
}
</script>
