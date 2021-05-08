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
        flex-wrap: wrap;


    }
    .range__btn {
        min-width: 70px;
        min-height: 40px;

        margin-top: 26px;

        background-color: #456686;
        border-radius: 20px;
        border: 0;

        cursor: pointer;

        font-size: 16px;
        font-weight: bold;
        padding-top: 4px;
        color: #fff;
    }
</style>
