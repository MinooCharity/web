export default defineEventHandler(async () => {
       let response = await $fetch( 'https://nuxt.markazimarket.com/public/api/product/index', {
           method: 'GET',
        })
     // @ts-ignore
    return response.data


})
