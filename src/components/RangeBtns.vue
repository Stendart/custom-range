<template>
    <div class="range__btns">
        <button class="range__btn" v-for="val in rangeVals" @click="setRangeVal(val)">{{val}} %</button>
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

        margin-top: 26px;
    }
    .range__btn {
        min-width: 70px;

        color: #fff;

        min-height: 40px;
        background-color: #456686;
        border-radius: 20px;
        border: 0;
        margin: 0 6px;
        font-size: 16px;
        font-weight: bold;
        padding-top: 4px;
    }
</style>
