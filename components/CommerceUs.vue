<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-yellow-600">
    <div class="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div class="bg-gray-50 rounded-2xl px-6 py-16 sm:p-16 border border-black border-4">
        <div class="max-w-xl mx-auto lg:max-w-none">
          <div class="text-center">
            <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">در مینو این امتیاز ها لایق شماست..</h2>
          </div>
          <div class="mt-12 max-w-sm mx-auto grid grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-3">
            <div v-for="incentive in incentives" :key="incentive.name" class="text-center sm:flex sm:text-left lg:block lg:text-center">
              <div class="sm:flex-shrink-0">
                <div class="flow-root">
                  <img class="w-16 h-16 mx-auto" :src="incentive.imageSrc" :alt="incentive.description" />
                </div>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                <h3 class="text-sm font-medium text-gray-900">
                  {{ incentive.name }}
                </h3>
                <p class="mt-2 text-sm text-gray-500">
                  {{ incentive.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const incentives = [
  {
    name: 'یک چشم زدن',
    imageSrc: './assets/prod/7.jpg',
    description:
        "تحویل مرسوله با پست  به سراسر ایران است در صورت نیاز شمادر تهران با پیک ارسال میشود .",
  },
  {
    name: 'حراج فصل',
    imageSrc: './assets/prod/7.jpg',
    description: "در مناسبات مختلف در کنار شما با حراج ویژه خواهیم بود.",
  },
  {
    name: 'خرید بالا ارسال رایگان',
    imageSrc: './assets/prod/7.jpg',
    description: "سفارش بالای 500 هزار تومان با حمل رایگان در اختیار شما .",
  },

]

export default {
  setup() {
    return {
      incentives,
    }
  },
}
</script>
