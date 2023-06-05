import {useBody} from "h3";

export default defineEventHandler(async event => {
    let body = await useBody(event)
       let response = await $fetch( 'https://nuxt.markazimarket.com/public/api/category/create', {
           method: 'post',
           body : {
                name : body.name,
                image: body.image
           }
        })

    return {
        response
    }

})
