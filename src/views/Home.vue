<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <RangeInput class="test" v-model="range" :step="10"></RangeInput>
    <h2>{{range}}</h2>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import RangeInput from '../components/RangeInput';

export default {
  name: 'Home',
  data() {
    return {
      range: 50,
    }
  },
  components: {
    HelloWorld,
    RangeInput
  }
}
</script>
<style scoped>
  .test {
    max-width: 70%;
    margin-left: 100px;
  }
</style>
