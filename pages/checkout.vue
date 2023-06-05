<template>
  <NuxtLayout name="custom">
    <TheCheckoutForm/>
  </NuxtLayout>
</template>

<script>

import TheCheckoutForm from "../components/TheCheckoutForm";
export default {
  name: "checkout",
  components: {TheCheckoutForm}
}
</script>

<style scoped>

</style>