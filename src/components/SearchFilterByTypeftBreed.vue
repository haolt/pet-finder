<template>
  <Fragment>
    <SearchFilterContainer title="Type">
      <select class="search-filter__slt" v-model="selectedType" @change="onSelectType">
        <option v-for="option in options" v-bind:value="option" v-bind:key="option">
          {{ option }}
        </option>
      </select>
    </SearchFilterContainer>
    <SearchFilterContainer title="Breed">
      <select class="search-filter__slt" v-model="selectedType" @change="onSelectType">
        <option v-for="option in options" v-bind:value="option" v-bind:key="option">
          {{ option }}
        </option>
      </select>
    </SearchFilterContainer>
  </Fragment>
</template>
<script>
import { Fragment } from 'vue-fragment';
import SearchFilterContainer from './SearchFilterContainer';
// import RepositoryFactory from '../services/RepositoryFactory';
// const TypeRequest = RepositoryFactory.get('types'); 
import axios from 'axios';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJtV1Z0V2pmaWRBUXh6R09RUTc0RGdFQ2VEZnZMOGYzN0hOZXJpVk13cUZlZ1JPZkJIMiIsImp0aSI6IjIyZDFiOWFmYzE4ZDQ4YjY4YjcwM2FlYmM0M2FiMDM3ODQyZTVjZTgxZDZmNWM2NmVhNmE1MWUxZmE1YzM2Njg5NTZjY2Y5ZDUxYTMwNWU4IiwiaWF0IjoxNTkyODg2NjM4LCJuYmYiOjE1OTI4ODY2MzgsImV4cCI6MTU5Mjg5MDIzOCwic3ViIjoiIiwic2NvcGVzIjpbXX0.q2IXJis2kF4h6Q80zrniHS4z0REwVrmmhemaiPA1p2B7K_agKyj4r88923C-2SR1dxvpFX83RttE6abXoYVgUjS03oFtvwqmTax0HDSfsCMJRclr9qpFMSWsRc1c9JHMHHRJtAs0cRdzrAXbT2oV5TM1JtJ4a64qMXSiTJFYQwm2PCFblUPc0ChInsEXbbSAIWPpJR6kOHfHFeQqoQl_ZmhuLLtgNe9pOKATQuxxekrldpFfEmQQFjcg7FVUbKHWhexOPUpZZey_ACtepzIoRi80P1mBWmPPH5uj_5UqbJlW8if_Z6qSUQQgE8lAeXSMpKYjimP2igM8B7tV9YRCJw';

export default {
  name: 'SearchFilterByTypeftBreed',
  components: { Fragment, SearchFilterContainer },
  created() {
    this.fetchAllTypes();
  },
  data() {
    return {
      selectedType: '',
      options: [ 'dog', 'cat', 'bird' ],
    }
  },
  methods: {
    async fetchAllTypes() {
      // const { types } = await TypeRequest.getAll();
      // console.log(types);
      axios(
        'https://api.petfinder.com/v2/types',
        {
          method: 'GET',
          // mode: 'no-cors',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
        credentials: 'same-origin',
        }
      ).then(response => console.log(response) );
    },
    onSelectType() { }
  },
}
</script>

<style lang="scss">
.search-filter {

  &__title {
    font-size: 0.9em;
    text-transform: uppercase;
    font-weight: 600;
  }
  .search-filter__slt {
    display: block;
    width: 100%;
    box-shadow: 0 1px 3px rgba(77, 71, 81, 0.2);
    padding: 1em;
    margin: 0.5em 0 1em;
    border: none;;
  }
}
</style>
