<template>
  <div class="w-full font-sans border border-black border-2 rounded-lg" v-if="show_toast">
    <div class="container flex items-center justify-center flex-1 h-full mx-auto">
      <div class="max-w-sm mx-auto md:max-w-lg">
        <div class="leading-loose">
          <div class="max-w-sm p-16 bg-white bg-opacity-25 rounded-2xl shadow-2xl">
            <p class="mb-8 text-lg font-bold text-center text-black">
             به کسا خوش اومدید
            </p>
            <div class="mb-2">
              <div class=" relative text-center " dir="rtl">
                <input type="tel"
                       v-model="phone"
                       id="phone"
                       autofocus
                       class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-900 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                       placeholder="شماره همراه "/>
              </div>
            </div>
            <div class="flex justify-center text-center mt-5 bg-gray-900 py-1 rounded-lg">
              <a @click="send_otp()" class="flex items-center text-white hover:text-gray-200 cursor-pointer">
                <div v-if="loader_submit" class=" flex justify-center items-center">
                  <div class="animate-spin mx-2 rounded-full h-5 w-5 border-b-2 border-white"></div>
                </div>
                <span class="font-bold">
                 تایید
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="w-full font-sans border border-black border-2 rounded-lg" dir="ltr">
      <div class="container flex items-center justify-center flex-1 h-full mx-auto">
        <div class="max-w-sm mx-auto md:max-w-lg">
          <div class="leading-loose">
            <div class="max-w-sm p-10 m-auto bg-white bg-opacity-25 rounded-2xl shadow-2xl">
              <h1 dir="rtl" class="text-2xl font-bold">ورود</h1>
              <div class="flex flex-col mt-4 " >
                <span dir="rtl" class="text-sm">لطفا پیامک دریافت شده را وارد نمایید</span>
              </div>

              <div id="otp" class="flex flex-row text-center px-2 mt-5 justify-between">
                <template v-for="(input, index) in 6" :key="index" >
                  <input
                      type="tel"
                      maxlength="1"
                      class="border border-gray-500 w-10 mx-1 h-10 text-center"
                      ref=length
                      v-on:input="handleInput($event,index)"
                      v-on:paste="handlePaste($event,index)"
                      v-on:keydown.backspace=handleBackspace($event,index)
                  />
                </template>
              </div>

              <div class="flex justify-center text-center mt-5 bg-gray-900 py-1 rounded-lg">
                <button @click="check_otp()" class="flex items-center text-white hover:text-gray-200 cursor-pointer">
                  <div v-if="loader_submit" class=" flex justify-center items-center">
                    <div class="animate-spin mx-2 rounded-full h-5 w-5 border-b-2 border-white"></div>
                  </div>
                  <span class="font-bold">
                    ورود با رمز یکبار مصرف
                  </span>
                </button>
              </div>

              <div class="text-center mt-3" v-if="re_otp">
                <button @click="send_otp()" class="right-0 inline-block font-semibold align-baseline text-lg hover:text-gray-800">
                  ارسال مجدد
                </button>
              </div>
              <div class="text-center mt-3" v-else>
                <div class="right-0 inline-block font-semibold align-baseline text-lg hover:text-gray-800">
                  {{minuteDown}}:{{secondDown}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
  </div>
</template>

<script>
import {useFetch, useRouter} from "nuxt/app";

export default {
  name: "TheLoginPage",
  data(){
    return {
      phone : null,
      show_toast:true,
      length: 6,
      value: [],
      minuteDown:1,
      secondDown:59,
      re_otp:false,
      loader_submit:false,
      success:false,
      info: '0'
    }
  },
  methods:{
    handleInput(e,index) {
      const input = e.target;
      this.value[index]=input.value

      if (input.nextElementSibling && input.value) {
        input.nextElementSibling.focus();
        input.nextElementSibling.select();
      }
    },

    handlePaste(e,index) {
      const paste = e.clipboardData.getData('text');
      this.value = paste;

      const inputs = Array.from(Array(this.length));

      inputs.forEach((element, i) => {
        this.$refs[i].value = paste[i] || '';
      });
    },

    handleBackspace(e,index) {
      const input = e.target;
      this.$refs.length[index] && this.$refs.length[index-1].focus();
    },
    countDownTimer() {
      this.re_otp = false
      if(this.secondDown > 0) {
        setTimeout(() => {
          this.secondDown -= 1
          this.countDownTimer()
        }, 1000)
      } else {
        this.minuteDown -= 1
        if(this.minuteDown > -1) {
          this.secondDown =59
          this.countDownTimer()
        } else {
          this.re_otp = true
        }
      }
    },
    async check_otp() {
      this.loader_submit=true
      await $fetch( 'https://nuxt.markazimarket.com/public/api/check', {
        method: "post",
        body: {
          phone: this.phone,
          otp: this.value
        }
      }).then((err) => {
        if (!err.success) {
          this.info= '3'
          this.$emit('info',this.info)
        } else {
          localStorage.setItem( 'myToken', err.data.token );
          this.info= '1'
          this.$emit('info',this.info)
        }
      }).catch(()=>{
      }).finally(()=>{
        this.loader_submit=false
      })
    },
    async send_otp() {
      if (this.phone) {
        this.loader_submit=true
        await $fetch( 'https://nuxt.markazimarket.com/public/api/login', {
          method: 'post',
          body : {
            phone : this.phone
          }
        }).then((err) => {
          this.show_toast = false
          this.info= '2'
          this.$emit('info',this.info)
          this.countDownTimer()
        }).finally(()=>{
          this.loader_submit = false
        })
      }
    },
  },
}
</script>

<style scoped>

</style>