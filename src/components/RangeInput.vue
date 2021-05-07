<template>
    <div class="range-wrapper">
        <div ref="rangeLine" class="range"
             @mousedown="mouseDown"
             @mouseup="mouseUp"
             @mousemove="move"
             @touchmove="move"
             @touchstart="mouseDown"
             @touchend="mouseUp">
            <div :style="{ left: range + '%' }" class="range__point"></div>
        </div>
        <RangeBtns :range-vals="[25,50,75,100]" @changeVal="changeVal"></RangeBtns>
    </div>
</template>

<script>
import {throttle} from 'lodash';
import RangeBtns from './RangeBtns';

  export default {
    name: "RangeInput",
    props: {
      value: {
        type: Number,
        default: 50
      },
    },
    data() {
      return {
        range: this.value,
        isMouseDown: false,
        coordinateStartComponent: null,
        elWidth: null,
      }
    },
    methods: {
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
          this.range = Math.round(curentPosition / this.elWidth * 100);
        console.log('Проценты', this.range);
      },
      changeVal(val) {
        this.range = val;
      }
    },
    watch: {
      range: function (newVal) {
        if(newVal > 100) {
          this.range = 100;
        } else if (newVal < 0) {
          this.range = 0;
        }
        this.$emit('input', this.range);
      },
      value: function () {
        this.range = this.value;
      }
    },
    mounted() {
      this.coordinateStartComponent = this.$refs.rangeLine.getBoundingClientRect().left;
      this.elWidth = this.$refs.rangeLine.getBoundingClientRect().width;
    },
    components: {
      RangeBtns
    }
  }
</script>

<style scoped lang="scss">
    .range {
        position: relative;

        width: 100%;
        height: 40px;
        background-color: #778c9e;
        border-radius: 30px;
    }

    .range__point {
        position: absolute;

        width: 40px;
        height: 40px;
        background-color: #c4c4c4;
        border-radius: 50%;

        transform: translateX(-50%);

        /*pointer-events: none;*/
    }
</style>
