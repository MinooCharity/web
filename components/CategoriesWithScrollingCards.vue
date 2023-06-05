<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <div class="py-16 sm:py-24 xl:max-w-7xl xl:mx-auto xl:px-8">
      <div class="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
        <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">دسته بندی ها</h2>
        <router-link to="/shop" class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
          مشاهده ی محصولات
          <span aria-hidden="true"> &rarr;</span>
        </router-link>
      </div>

      <div class="mt-4 flow-root">
        <div class="-my-2">
          <div class="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
            <div class="absolute min-w-screen-xl px-4 flex space-x-reverse space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
              <a class="bg-black border border-2 border-black relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
                <span aria-hidden="true" class="absolute inset-0">
                  <img src='~/assets/prod/1.jpg' alt="عروسک" class="w-full h-full object-center object-cover" />
                </span>
                <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50" />
                <span class="relative mt-auto text-center bg-gray-900 p-1 rounded-xl shadow text-xl font-extrabold text-white">عروسک</span>
              </a>
              <a class="bg-black border border-2 border-black relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
                <span aria-hidden="true" class="absolute inset-0">
                  <img src='~/assets/prod/1.jpg' alt="عروسک" class="w-full h-full object-center object-cover" />
                </span>
                <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50" />
                <span class="relative mt-auto text-center bg-gray-900 p-1 rounded-xl shadow text-xl font-extrabold text-white">عروسک</span>
              </a>
              <a class="bg-black border border-2 border-black relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
                <span aria-hidden="true" class="absolute inset-0">
                  <img src='~/assets/prod/1.jpg' alt="عروسک" class="w-full h-full object-center object-cover" />
                </span>
                <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50" />
                <span class="relative mt-auto text-center bg-gray-900 p-1 rounded-xl shadow text-xl font-extrabold text-white">عروسک</span>
              </a>
              <a class="bg-black border border-2 border-black relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
                <span aria-hidden="true" class="absolute inset-0">
                  <img src='~/assets/prod/1.jpg' alt="عروسک" class="w-full h-full object-center object-cover" />
                </span>
                <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50" />
                <span class="relative mt-auto text-center bg-gray-900 p-1 rounded-xl shadow text-xl font-extrabold text-white">عروسک</span>
              </a>
              <a class="bg-black border border-2 border-black relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
                <span aria-hidden="true" class="absolute inset-0">
                  <img src='~/assets/prod/1.jpg' alt="عروسک" class="w-full h-full object-center object-cover" />
                </span>
                <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50" />
                <span class="relative mt-auto text-center bg-gray-900 p-1 rounded-xl shadow text-xl font-extrabold text-white">عروسک</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 px-4 sm:hidden">
        <router-link to="/shop" class="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
          مشاهده همه ی دسته بندی ها
          <span aria-hidden="true"> &rarr;</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
