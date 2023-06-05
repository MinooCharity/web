<template>
<!--  <div class="h-screen bg-indigo-300 bg-cover w-full font-sans" dir="ltr">-->
<!--    <div class="container flex items-center justify-center flex-1 h-full mx-auto">-->
<!--      <div class="max-w-sm mx-auto md:max-w-lg">-->
<!--        <div class="leading-loose">-->
<!--          <form class="max-w-sm p-10 m-auto bg-white bg-opacity-25 rounded-2xl shadow-2xl">-->
<!--            <h1 dir="rtl" class="text-2xl font-bold">ورود</h1>-->
<!--            <div class="flex flex-col mt-4 " >-->
<!--              <span dir="rtl" class="text-sm">لطفا پیامک دریافت شده را وارد نمایید</span>-->
<!--            </div>-->

<!--            <div id="otp" class="flex flex-row justify-center text-center px-2 mt-5">-->
<!--              <input v-on:change="input1" class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="first" maxlength="1" />-->
<!--              <input v-on:change="input2" class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="second" maxlength="1" />-->
<!--              <input v-on:change="input3" class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="third" maxlength="1" />-->
<!--              <input v-on:change="input4" class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fourth" maxlength="1" />-->
<!--              <input v-on:change="input5" class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fifth" maxlength="1" />-->
<!--              <input v-on:change="input6" class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="sixth" maxlength="1" />-->
<!--            </div>-->

<!--            <div class="flex justify-center text-center mt-5 bg-indigo-900 py-1 rounded-lg">-->
<!--              <button @click="send_the_otp(input1)" class="flex items-center text-white hover:text-blue-900 cursor-pointer"><span class="font-bold">-->
<!--              ورود با رمز یکبار مصرف-->
<!--              </span><i class='bx bx-caret-right ml-1'></i></button>-->
<!--            </div>-->

<!--            <div class="text-center mt-3" v-if="re_otp">-->
<!--              <div class="right-0 inline-block font-semibold align-baseline text-lg hover:text-gray-800">-->
<!--                ارسال مجدد-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="text-center mt-3" v-else>-->
<!--              <div class="right-0 inline-block font-semibold align-baseline text-lg hover:text-gray-800">-->
<!--                {{minuteDown}}:{{secondDown}}-->
<!--              </div>-->
<!--            </div>-->
<!--          </form>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <section id="app">-->
<!--      <h1>-->
<!--        Vue OTP Input-->
<!--      </h1>-->
<!--      <div class="text-center">-->
<!--        <h2>-->
<!--          Default input:-->
<!--        </h2>-->
<!--        <otp-input v-model="token"></otp-input>-->
<!--        <p>-->
<!--          Raw token: <input v-model="token" />-->
<!--        </p>-->
<!--      </div>-->
<!--      <div class="text-center">-->
<!--        <h2>-->
<!--          Styled input:-->
<!--        </h2>-->
<!--        <otp-input-->
<!--            v-model="token"-->
<!--            class="style-1"-->
<!--            size="24"-->
<!--        ></otp-input>-->
<!--        <br>-->
<!--        <otp-input-->
<!--            v-model="token"-->
<!--            class="style-2"-->
<!--            size="24"-->
<!--        ></otp-input>-->
<!--        <br>-->
<!--        <otp-input-->
<!--            v-model="token"-->
<!--            class="style-3"-->
<!--            size="24"-->
<!--        ></otp-input>-->
<!--        <br>-->
<!--        <otp-input-->
<!--            v-model="token"-->
<!--            class="style-3"-->
<!--            size="24"-->
<!--            :password="true"-->
<!--        ></otp-input>-->
<!--        <br>-->
<!--        <otp-input-->
<!--            v-model="token"-->
<!--            class="style-3"-->
<!--            size="24"-->
<!--            disabled-->
<!--        ></otp-input>-->
<!--        <p>-->
<!--          Raw token: <input v-model="token" />-->
<!--        </p>-->
<!--      </div>-->
<!--    </section>-->
<!--  </div>-->
</template>
<script>
definePageMeta({
  layout: "none",
});


export default {
  data() {
    return {
      minuteDown : 1,
      secondDown : 59,
      re_otp : false,
      input1 : '',
      input2 : '',
      input3 : '',
      input4 : '',
      input5 : '',
      input6 : '',
    }
  },
  // mounted() {
  //   const inputs = document.querySelectorAll('#otp > *[id]');
  //   for (let i = 0; i < inputs.length; i++) {
  //     inputs[i].addEventListener('keydown', function(event) {
  //       if (event.key==="Backspace" ) {
  //         inputs[i].value='' ; if (i !==0) inputs[i - 1].focus();
  //       } else {
  //         if (i===inputs.length - 1 && inputs[i].value !=='' ) {
  //           return true;
  //         } else if (event.keyCode> 47 && event.keyCode < 58) {
  //           inputs[i].value=event.key;
  //           if (i !==inputs.length - 1)
  //             inputs[i + 1].focus();
  //           event.preventDefault();
  //         } else if (event.keyCode> 64 && event.keyCode < 91) {
  //           inputs[i].value=String.fromCharCode(event.keyCode);
  //           if (i !==inputs.length - 1) inputs[i + 1].focus(); event.preventDefault();
  //         }
  //       }
  //     });
  //   }
  // },
  methods: {
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
      console.log('fff',this.input1)
      console.log('fff',phone)
      // let otp = this.input1+this.input2+this.input3+this.input4+this.input5+this.input6
      // console.log(otp)
    }

  },
  created() {
    this.countDownTimer()
  },
}
</script>

<style scoped>

</style>