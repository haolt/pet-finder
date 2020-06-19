<template>
  <section class="statistic">
    <h3 class="statistic__title">Result for </h3>
  </section>
</template>

<script>
export default {
  name: 'Statistic',
  components: {
  },
}
</script>

<style lang="scss">
@import "vue-select/src/scss/vue-select.scss";
.statistic {
  padding: 0.5em 4em;
  background: #6504B5;

  &__title {
    font-size: 1em;
    color: #fff;
  }
}
</style>
