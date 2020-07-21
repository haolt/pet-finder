<template>
  <div class="search-filter">
    <label class="search-filter__title">{{ title }}</label>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'SearchFilterContainer',
  components: { },
  props: ['title'],
}
</script>

<style lang="scss">
.search-filter {

  &__title {
    font-size: 0.9em;
    text-transform: uppercase;
    font-weight: 600;
  }
}
</style>
