<template>
    <div class="range-wrapper">
        <div ref="rangeLine" class="range"
             @mousedown="mouseDown"
             @mouseup="mouseUp"
             @mousemove="move"
             @touchmove="move"
             @touchstart="mouseDown"
             @touchend="mouseUp">
            <div ref="rangePoint" :style="{ left: range + '%' }" class="range__point"></div>
        </div>
    </div>
</template>

<script>
import {throttle} from 'lodash';

  export default {
    name: "RangeInput",
    props: {
      value: 0,
      /*min: {
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
      }*/
    },
    data() {
      return {
        range: this.value,
        point: this.$refs.rangePoint,
        isMouseDown: false,
        //distance: 0,
        coordinateStartComponent: null,
        elWidth: null,
      }
    },
    methods: {
      onInput (e) {
        this.$emit('input', e.target.value)
      },
      move: throttle(function(e) {
        if (this.isMouseDown === true) {
          console.log('move');
          let biasX;
          if (e.targetTouches) { // Если устройство сенсорное
            biasX = e.targetTouches[0].pageX;
          } else if (e.clientX) { // Если устройство не сенсорное
            biasX = e.clientX;
          } else {
            throw new Error('Unknown device type')
          }
          this.setPointPosition(biasX);//pageX) //clientX)
        }
      }, 100),
      mouseDown(e) {
        console.log('DOWN', e)
        console.log('DOWN', e.targetTouches)
        let biasX;
        if (e.targetTouches) { // Если устройство сенсорное
          biasX = e.targetTouches[0].pageX;
        } else if (e.clientX) { // Если устройство не сенсорное
          biasX = e.clientX;
        } else {
          throw new Error('Unknown device type')
        }
        this.setPointPosition(biasX);
        this.isMouseDown = true;
      },
      mouseUp() {
        this.isMouseDown = false;
      },
      setPointPosition(newX) {
        const curentPosition = newX - this.coordinateStartComponent;
        console.log('Значение', curentPosition);
        //this.distance = curentPosition;
        const percent = Math.round(curentPosition / this.elWidth * 100);
        if(percent >= 0 && percent <= 100) {
          this.range = percent;
        }

        //this.$emit('input', this.range)
        console.log('Проценты', this.range);
      }
    },
    watch: {
      range: function () {
        this.$emit('input', this.range);
      },
      value: function () {
        this.range = this.value;
      }
    },
    mounted() {
      this.coordinateStartComponent = this.$refs.rangeLine.getBoundingClientRect().left;
      this.elWidth = this.$refs.rangeLine.getBoundingClientRect().width;
      console.log(this.coordinateStartComponent);
      console.log('elWidth', this.elWidth);
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

        transform: translateX(-50%);

        /*pointer-events: none;*/
    }
</style>
