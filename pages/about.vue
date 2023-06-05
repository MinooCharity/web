<template>
  <div>
    <NuxtLayout name="custom">
      <ContactUs/>
      <CommerceUs/>
      <TeamSection/>
    </NuxtLayout>
  </div>
</template>

<script>
import TeamSection from "../components/TeamSection";
import SimpleSlate from "../components/SimpleSlate";
import SimpleFeed from "../components/SimpleFeed";
import ContactUs from "../components/ContactUs";
import CommerceUs from "../components/CommerceUs";
export default {
  name: "about",
  components: {CommerceUs, ContactUs, SimpleFeed, SimpleSlate, TeamSection}
}
</script>

<style scoped>

</style>