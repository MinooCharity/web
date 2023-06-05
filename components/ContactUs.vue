<template>
  <div class="bg-white">
    <section aria-labelledby="features-heading" class="relative">
      <a href="https://instagram.com/kasa.scarf" target="_blank" class="aspect-w-3 mx-5 md:mx-0 bg-gray-100 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-16">
        <img
            src="~/assets/prod/9.png" alt=""
             class="h-full lg:my-5  w-5/6 shadow-xl object-center object-cover lg:h-full lg:w-auto rounded-3xl border-black border-4 text-center mx-auto justify-center items-center self-center" />
      </a>

      <div class="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pb-32 sm:px-6 lg:max-w-7xl lg:pt-32 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div class="lg:col-start-2">
<!--          <h2 id="features-heading" class="font-medium text-gray-500">محصولات  مینو</h2>-->
          <p class="mt-4 text-4xl font-extrabold text-gray-900 tracking-tight">محصولات  مینو</p>
          <p class="mt-4 text-gray-500 inline-flex">
            <a href="" target="_blank" class="border-b-2 text-amber-600 mx-4 border-black">
              به زودی
            </a>

            <span aria-hidden="true"  class="text-black"> 	&rarrhk;</span>
          </p>

          <dl class="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2">
            <div v-for="feature in features" :key="feature.name">
              <dt class="font-extrabold text-lg text-gray-900">{{ feature.name }}</dt>
              <dd class="mt-2 text-gray-500">{{ feature.description }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const features = [
  {
    name: 'قابل اعتماد',
    description: 'عکس  بدون فیلتر و باکیفیت در اختیار شما.',
  },
  {
    name: 'محصولات به روز',
    description: 'متن تستی',
  },
  {
    name: 'از همه رنگ',
    description:
        'محصولات متنوع از همه رنگ های خاص .',
  },
  { name: 'خرید آسان', description: 'بدون دغدغه با چند کلیک ساده' },
]

export default {
  setup() {
    return {
      features,
    }
  },
}
</script>
