import {useBody} from "h3";


export default defineEventHandler(async event => {
    let body = await useBody(event)
    let response = await $fetch( 'https://nuxt.markazimarket.com/public/api/check', {
        method: 'post',
        body : {
            phone : body.phone,
            otp   : body.otp
        }
    })

     // @ts-ignore
    if (response.success) {
        return response
     } else {
         return 'error'
     }
})