<template>
  <section class="search-filters">
    <div class="search-filter">
      <label class="search-filter__title">Pet type</label>
      <v-select :options="['Dog', 'Cat', 'Bird']"
        placeholder="Any"
      ></v-select>
    </div>
    <div class="search-filter">
      <label class="search-filter__title">Breed</label>
      <v-select :options="['Pug', 'Samoyed']"
        placeholder="Any"
      ></v-select>
    </div>
    <div class="search-filter">
      <label class="search-filter__title">Gender</label>
      <v-select :options="['Male', 'Female']"
        placeholder="Any"
      ></v-select>
    </div>
    <div class="search-filter">
      <label class="search-filter__title">Age</label>
      <SearchFilterByAge />
    </div>
  </section>
</template>

<script>
import SearchFilterByAge from '@/components/SearchFilterByAge.vue';

export default {
  name: 'SearchFilter',
  components: {
    SearchFilterByAge
  },
}
</script>

<style lang="scss">
@import "vue-select/src/scss/vue-select.scss";

.search-filter {

  &__title {
    font-size: 0.9em;
    text-transform: uppercase;
    font-weight: 600;
  }

  .v-select {
    box-shadow: 0 1px 3px rgba(77,71,81,.2);
    padding: 0.5em 1em;
    margin: 0.5em 0 1em;
  }

  .vs__search::placeholder,
  .vs__dropdown-toggle,
  .vs__dropdown-menu {
    background: #fff;
    border: none;
  }

  .vs--single .vs__selected {
    color: #4d4751;
  }

  .vs__clear,
  .vs__open-indicator {
    fill: #4d4751;
  }

  input[type=checkbox] + label {
    display: block;
    cursor: pointer;
    margin: 0.5em 0;
  }

  input[type=checkbox] {
    display: none;
  }

  input[type=checkbox] + label:before {
    content: "\2714";
    border: 0.1em solid #4d4751;
    border-radius: 0.2em;
    display: inline-block;
    width: 1em;
    height: 1em;
    padding-left: 0.2em;
    padding-bottom: 0.3em;
    margin-right: 0.2em;
    vertical-align: bottom;
    color: transparent;
    transition: .2s;
  }

  input[type=checkbox]:checked + label:before {
    background-color: #6504B5;
    border-color: #6504B5;
    color: #fff;
  }

  input[type=checkbox]:disabled + label:before {
    border-color: #aaa;
  }

  input[type=checkbox]:checked:disabled + label:before {
    background-color: #bfb;
    border-color: #bfb;
  }
}
</style>
