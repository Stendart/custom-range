<template>
    <div class="range__btns">
        <button class="range__btn" v-for="val in rangeVals" @click="setRangeVal(val)">{{val}}</button>
    </div>
</template>

<script>
  export default {
    name: "RangeBtns",
    props: {
      rangeVals: Array
    },
    methods: {
      setRangeVal(val) {
        this.$emit('changeVal', val)
      }
    }
  }
</script>

<style scoped>
    .range__btns {
        display: flex;
        justify-content: space-between;
    }
    .range__btn {
        min-width: 70px;
        min-height: 50px;
        background-color: #2c3e50;

        border-radius: 25px;

        color: #fff;
    }
</style>
