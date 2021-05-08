<template>
  <div class="home">
    <h2>{{range}}</h2>
    <RangeInput class="test" v-model="range"></RangeInput>
  </div>
</template>

<script>
import RangeInput from '../components/RangeInput';

export default {
  name: 'Home',
  data() {
    return {
      range: 20,
    }
  },
  components: {
    RangeInput
  }
}
</script>
<style scoped>
  .test {
    max-width: 70%;
    margin: 0 auto;
  }
</style>
