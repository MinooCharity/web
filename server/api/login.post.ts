import {useBody} from "h3";

export default defineEventHandler(async event => {
    let body = await useBody(event)
       let response = await $fetch( 'https://nuxt.markazimarket.com/public/api/login', {
           method: 'post',
           body : {
                phone : body.phone
           }
        })
    return response
})
