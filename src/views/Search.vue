<template>
  <div class="search-wrapper">
    <Statistic />
    <div class="search">
      <div class="search__filter">
        <SearchFilter />
      </div>
      <div class="search__result">
        <SearchResult />
      </div>
    </div>
  </div>
</template>

<script>
import Statistic from '@/components/Statistic.vue';
import SearchFilter from '@/components/SearchFilter.vue';
import SearchResult from '@/components/SearchResult.vue';

export default {
  name: 'Search',
  components: {
    Statistic,
    SearchFilter,
    SearchResult,
  }
}
</script>

<style lang="scss">
.search {
  display: flex;
  padding: 1em 4em;

  &__filter {
    flex: 1;
  }
  &__result {
    flex: 3;
    padding-left: 0.5em;
  }
}
</style>
