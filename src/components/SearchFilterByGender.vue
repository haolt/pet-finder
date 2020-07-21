<template>
  <SearchFilterContainer title="Gender">
    <select class="search-filter__slt" v-model="selectedGender" @change="onSelectGender">
      <option v-for="option in options" v-bind:value="option" v-bind:key="option">
        {{ option | capitalize }}
      </option>
    </select>
  </SearchFilterContainer>
</template>

<script>
import SearchFilterContainer from './SearchFilterContainer';

export default {
  name: 'SearchFilterByGender',
  components: { SearchFilterContainer },
  data() {
    return {
      selectedGender: 'any',
      options: [ 'any', 'male', 'female' ],
    }
  },
  methods: {
    onSelectGender() {
      this.$router.replace({path: 'search', query: {...this.$route.query, gender: this.selectedGender !== 'any' ? this.selectedGender : undefined }});
    }
  },
  filters: {
  capitalize: function (value) {
    if (!value) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
}
</script>

<style lang="scss">
.search-filter__slt {
  display: block;
  width: 100%;
  box-shadow: 0 1px 3px rgba(77, 71, 81, 0.2);
  padding: 1em;
  margin: 0.5em 0 1em;
  border: none;;
}
</style>
