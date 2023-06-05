<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-900">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
          <h2 class="text-xl font-extrabold text-white tracking-tight sm:text-4xl text-center mt-5">معرفی تیم ما</h2>
          <p class="text-xl text-gray-300 text-center">یه خرید ساده در کنار ما مهمون باشی</p>
        </div>
        <ul role="list" class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
          <li class="py-10 border-2 border-amber-500  px-6 bg-gray-700 text-center rounded-lg xl:px-10 xl:text-center">
            <div class="space-y-6 xl:space-y-10">
              <img class="rounded-full mx-auto border-4 border-amber-500" src="~/assets/pic/profile4.jpg" alt="" />
              <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
                <div class="font-medium text-lg leading-6 space-y-1">
                  <h3 class="text-white">سارا بیات</h3>
                  <p class="text-indigo-400">مدیر فروش</p>
                </div>
              </div>
            </div>
          </li>
          <li class="py-10 border-2 border-amber-500  px-6 bg-gray-700 text-center rounded-lg xl:px-10 xl:text-center">
            <div class="space-y-6 xl:space-y-10">
              <img class="rounded-full mx-auto border-amber-500 border-4" src="~/assets/pic/profile4.jpg" alt="" />
              <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
                <div class="font-medium text-lg leading-6 space-y-1">
                  <h3 class="text-white ">علی موحدی</h3>
                  <p class="text-indigo-400">product manager</p>
                </div>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const people = [
  {
    name: 'سارا بیات',
    role: 'مدیر فروش',
    imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'سارا بیات',
    role: 'مدیر فروش',
    imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'علی موحدی',
    role: 'product manager',
    imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
]

export default {
  setup() {
    return {
      people,
    }
  },
}
</script>
