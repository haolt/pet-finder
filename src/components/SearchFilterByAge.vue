<template>
  <Fragment class="container">
    <div class="item">
      <input type="checkbox" id="allAge" name="all" value="">
      <label for="allAge">All</label>
    </div>
    <div class="item">
      <input type="checkbox" id="baby" name="baby" value="baby">
      <label for="baby">Baby</label>
    </div>
    <div class="item">
      <input type="checkbox" id="young" name="young" value="young">
      <label for="young">Young</label>
    </div>
    <div class="item">
      <input type="checkbox" id="adult" name="adult" value="adult">
      <label for="adult">Adult</label>
    </div>
    <div class="item">
      <input type="checkbox" id="senior" name="senior" value="senior">
      <label for="senior">Senior</label>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';

export default {
  name: 'SearchFilterByAge',
  components: {
    Fragment,
  },
}
</script>

<style lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;

  .item {
    flex-grow: 1;
    flex-basis: 40%;

    &:first-child {
      flex-basis: 100%;
      margin-top: 0.5em;
    }
  }
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
</style>
