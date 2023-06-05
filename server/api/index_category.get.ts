export default defineEventHandler(async () => {
       let response = await $fetch( 'https://nuxt.markazimarket.com/public/api/category/index', {
           method: 'GET',
        })
     // @ts-ignore
    return response.data


})
