<template xmlns:x-on="http://www.w3.org/1999/xhtml">
  <div class="h-screen bg-indigo-300 bg-cover w-full font-sans" dir="ltr">
    <div class="container flex items-center justify-center flex-1 h-full mx-auto">
      <div class="max-w-sm mx-auto md:max-w-lg">
        <div class="leading-loose">
          <form class="max-w-sm p-10 m-auto bg-white bg-opacity-25 rounded-2xl shadow-2xl">
            <h1 dir="rtl" class="text-2xl font-bold">ورود</h1>
            <div class="flex flex-col mt-4 " >
              <span dir="rtl" class="text-sm">لطفا پیامک دریافت شده را وارد نمایید</span>
            </div>

            <div id="otp" class="flex flex-row text-center px-2 mt-5 justify-between">
              <template v-for="(input, index) in length" :key="index" >
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

            <div class="flex justify-center text-center mt-5 bg-indigo-900 py-1 rounded-lg">
              <button @click="send_the_otp(input1)" class="flex items-center text-white hover:text-blue-900 cursor-pointer"><span class="font-bold">
                    ورود با رمز یکبار مصرف
                    </span><i class='bx bx-caret-right ml-1'></i></button>
            </div>

            <div class="text-center mt-3" v-if="re_otp">
              <div class="right-0 inline-block font-semibold align-baseline text-lg hover:text-gray-800">
                ارسال مجدد
              </div>
            </div>
            <div class="text-center mt-3" v-else>
              <div class="right-0 inline-block font-semibold align-baseline text-lg hover:text-gray-800">
                {{minuteDown}}:{{secondDown}}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useFetch} from "nuxt/app";

export default {
  name: "otp2",
  data() {
    return {
      length: 6,
      value: [],
      minuteDown:1,
      secondDown:59
    }
  },
  methods : {
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
    async send_otp() {
      if (this.phone) {
        let res = await useFetch('/api/login', {
          method: "post",
          body: {
            phone: this.phone
          }
        }).then((err) => {
          this.show_toast = true
          this.countDownTimer()
          // this.$router.push({path : '/otp' })
        })
      }
    },
    countDownTimer() {
      this.re_otp = false
      this.send_otp = true
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
    send_the_otp(phone) {
      // console.log('fff',input1)
      // console.log('fff',phone)
      // let otp = this.input1+this.input2+this.input3+this.input4+this.input5+this.input6
      // console.log(otp)
    }

  },
  created() {
    this.countDownTimer()
  }

}
</script>

<style scoped>
[x-cloak] { display: none; }
</style>