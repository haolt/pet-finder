<template>
  <Fragment>
    <ul v-if="!isLoading">
      <li v-for="animal in animals" :key="animal.id">
        {{ animal.name }}
      </li>
      <AnimalList :animals="this.fakedAnimals" />
    </ul>
    <span v-else>I S   L O A D I N G . . .</span>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';
import fakedAnimals from '../constants/animals';
import RepositoryFactory from '../services/RepositoryFactory';
import AnimalList from './AnimalList';
// import axios from 'axios';
const AnimalRepository = RepositoryFactory.get('animals'); 

export default {
  name: 'SearchResult',
  components: {
    Fragment,
    AnimalList
  },
  data() {
    return {
      fakedAnimals: fakedAnimals,
      animals: [],
      isLoading: false,
    };
  },
  watch: {
    $route() {
      console.log(this.$route.query);
      // const { type, age } = this.$route.query;
    }
  },
  created() {
    this.fetchAnimals();
  },
  methods: {
    async fetchAnimals() {
      this.isLoading = true;
      const {
        data: {
          animals,
          // pagination: { total_count, current_page, total_pages },  
        },
      } = await AnimalRepository.getAll();
      this.isLoading = false;
      console.log('animals: ', animals);
      // console.log('total_count: ', total_count);
      // console.log('current_page: ', current_page);
      // console.log('total_pages: ', total_pages);
      this.animals = animals;
  
      // await axios.post(
      //   'https://api.petfinder.com/v2/types',
      //   {
      //     headers: {
      //       'Content-Type': 'text/plain',
      //       "Access-Control-Allow-Origin": "*",
      //     }
      //   }
      //   ).then(response => {
      //       console.log("Success ========>", response);
      //   })
      //   .catch(error => {
      //       console.log("Error ========>", error);
      //   }
      // )
    }
  }
}
</script>

<style lang="scss">

</style>
