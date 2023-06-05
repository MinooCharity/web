<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="bg-amber-50">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-baseline sm:justify-between">
        <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">در کسا  چه  ها  داریم ؟</h2>
        <router-link to="/shop" class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">مشاهده همه دسته بندی ها<span aria-hidden="true"> &rarr;</span></router-link>
      </div>

      <div class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
        <div class="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
          <img src="~/assets/pic/scarf22.jpg" alt="شال و روسری نخی چهار فصل مطابف ژورنال ترک" class="object-center object-cover group-hover:opacity-75" />
          <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50 " />
          <div class="p-3 m-3 lg:p-6 flex items-end -translate-y-48 lg:m-5 ">
            <div class="bg-black p-6 rounded-lg">
              <h3 class="font-semibold text-white">
                <router-link to="/shop">
                  <span class="absolute inset-0" />
                  روسری و شال
                </router-link>
              </h3>
              <p aria-hidden="true" class="mt-1 text-sm text-white">همین الان خرید کنم</p>
            </div>
          </div>
        </div>
        <div class="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
          <img src="~/assets/pic/scarf3.jpg" alt="قیمت شال و روسری و اکسسوری ترک با کیفیت عالی و قیمت ویژه " class="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full" />
          <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0" />
          <div class="p-3 m-3 lg:p-6 flex items-end sm:absolute sm:inset-0">
            <div class="bg-black w-full lg:w-auto p-6 rounded-lg">
              <h3 class="font-semibold text-white">
                <router-link to="/shop">
                  <span class="absolute inset-0" />
                  اکسسوری
                </router-link>
              </h3>
              <p aria-hidden="true" class="mt-1 text-sm text-white"> همین الان خرید کنم</p>
            </div>
          </div>
        </div>
        <div class="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
          <img src="~/assets/pic/scarf6.jpg" alt="شال و روسری ابریشمی با کالکشن های ترک" class="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full" />
          <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0" />
          <div class="p-6 flex items-end sm:absolute sm:inset-0">
             <div class="bg-black w-full lg:w-auto p-6 rounded-lg">
              <h3 class="font-semibold text-white">
                <router-link to="/shop">
                  <span class="absolute inset-0" />
                 گوشواره
                </router-link>
              </h3>
              <p aria-hidden="true" class="mt-1 text-sm text-white"> همین الان خرید کنم</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 sm:hidden">
        <router-link to="/shop" class="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
          مشاهده دیگر محصولات
          <span aria-hidden="true"> &rarr;</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
