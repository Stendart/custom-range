<template>
    <div class="range-wrapper">
        <div ref="rangeLine" class="range" @mousedown="mouseDown" @mouseup="mouseUp" @mousemove="move">
            <div ref="rangePoint" :style="{ left: distance + 'px' }" class="range__point"></div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "RangeInput",
    props: {
      value: 0,
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      step: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {
        range: this.value,
        point: this.$refs.rangePoint,
        isMouseDown: false,
        distance: 0,
        coordinateStartComponent: null
      }
    },
    methods: {
      onInput (e) {
        this.$emit('input', e.target.value)
      },
      move(e) {
        if (this.isMouseDown === true) {
          console.log('move')
          this.setPointPosition(e.clientX)//pageX) //clientX)
        }
      },
      mouseDown() {
        this.isMouseDown = true;
      },
      mouseUp() {
        this.isMouseDown = false;
      },
      setPointPosition(newX) {
        console.log('Значение', newX)
        const curentPosition = newX - this.coordinateStartComponent;
        this.distance = curentPosition;
      }
    },
    watch: {
      /*range: function () {
        this.$emit('input', this.range)
      },
      value: function () {
        this.range = this.value
      }*/
    },
    mounted() {
      this.coordinateStartComponent = this.$refs.rangeLine.getBoundingClientRect().left
      console.log('Проверка')
      console.log(this.coordinateStartComponent)
    }
  }
</script>

<style scoped lang="scss">
    .range {
        position: relative;

        width: 100%;
        height: 40px;
        background-color: #2c3e50;
        border-radius: 30px;
    }

    .range__point {
        position: absolute;

        width: 40px;
        height: 40px;
        background-color: #ea9b9b;
        border-radius: 50%;

        /*pointer-events: none;*/
    }
</style>
