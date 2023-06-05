<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flow-root rounded-3xl p-12 bg-indigo-700 border lg:mx-72 my-5" dir="ltr">
    <ul role="list" class="-mb-8">
      <li v-for="(event, eventIdx) in timeline" :key="event.id">
        <div class="relative pb-8">
          <span v-if="eventIdx !== timeline.length - 1" class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
          <div class="relative flex space-x-3">
            <div>
              <span :class="[event.iconBackground, 'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white']">
                <component :is="event.icon" class="h-5 w-5 text-white" aria-hidden="true" />
              </span>
            </div>
            <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4 text-white">
              <div class="text-right text-sm whitespace-nowrap text-white">
                <time :datetime="event.datetime">{{ event.date }}</time>
              </div>
              <div>
                <p class="text-sm text-white">
                  {{ event.content }} <a :href="event.href" class="font-medium text-white">{{ event.target }}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { CheckIcon, ThumbUpIcon, UserIcon } from '@heroicons/vue/solid'

const timeline = [
  {
    id: 1,
    content: 'موفق به کسب',
    target: 'راه اندازی سایت',
    href: '#',
    date: '20 98خرداد ',
    datetime: '2020-09-20',
    icon: UserIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 2,
    content: 'اموزش',
    target: 'راه اندازی سایت',
    href: '#',
    date: 'خرداد',
    datetime: '2020-09-22',
    icon: ThumbUpIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 3,
    content: 'اموزش',
    target: 'راه اندازی سایت',
    href: '#',
    date: '20 98خرداد ',
    datetime: '2020-09-28',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
]

export default {
  setup() {
    return {
      timeline,
    }
  },
}
</script>