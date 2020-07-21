<template>
  <section class="search-filters">
    <SearchFilterByTypeftBreed />
    <SearchFilterByGender />
    <div class="search-filter">
      <label class="search-filter__title">Age</label>
      <SearchFilterByAge />
    </div>
  </section>
</template>

<script>
import SearchFilterByAge from '@/components/SearchFilterByAge.vue';
import SearchFilterByGender from '@/components/SearchFilterByGender.vue';
import SearchFilterByTypeftBreed from '@/components/SearchFilterByTypeftBreed.vue';

export default {
  name: 'SearchFilter',
  components: {
    SearchFilterByAge,
    SearchFilterByGender,
    SearchFilterByTypeftBreed,
  },
}
</script>
