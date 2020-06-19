<template>
  <section class="home">
    <Banner />
    <QuickSearch />
  </section>
</template>

<script>
import Banner from '@/components/Banner.vue';
import QuickSearch from '@/components/QuickSearch.vue';

export default {
  name: 'Home',
  components: {
    Banner,
    QuickSearch,
  }
}
</script>

<style lang="scss">
</style>
