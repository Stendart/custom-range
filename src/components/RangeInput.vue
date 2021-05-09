<template>
    <div class="range-wrapper">
        <div ref="rangeLine" class="range"
             @mousedown="mouseDown"
             @mouseup="mouseUp"
             @mousemove="move"
             @mouseleave="mouseLeave"
             @touchmove="move"
             @touchstart="mouseDown"
             @touchend="mouseUp">
            <div class="range__pointContainer">
                <div :style="{ left: range + '%' }" class="range__point"></div>
            </div>
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
          let biasX = this.calcBiasX(e);
          this.setPointPosition(biasX);
        }
      }, 100),
      mouseDown(e) {
        const biasX = this.calcBiasX(e);
        this.setPointPosition(biasX);
        this.isMouseDown = true;

        document.addEventListener('mouseup', this.mouseUp);
      },
      mouseUp() {
        this.isMouseDown = false;
        document.removeEventListener('mouseup', this.mouseUp);
      },
      mouseLeave(e) {
        if(e.buttons) {
          this.mouseUp();
        }
      },
      setPointPosition(newX) {
        const curentPosition = newX - this.coordinateStartComponent;
          this.range = Math.round(curentPosition / this.elWidth * 100);
      },
      changeVal(val) {
        this.range = val;
      },
      calcBiasX(e) {
        if (e.targetTouches) { // Если устройство сенсорное
          return  e.targetTouches[0].pageX;
        } else if (e.clientX) { // Если устройство не сенсорное
          return e.clientX;
        } else {
          throw new Error('Unknown device type');
        }
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
        background-color: #bddaf5;
        border-radius: 30px;
    }

    .range__pointContainer {
        position: relative;
        left: 0;
        top: 0;
        width: calc(100% - 40px);
        height: 100%;
        margin-left: 17px;
    }

    .range__point {
        position: absolute;
        border-radius: 50%;

        transform: translateX(-50%);

        cursor: pointer;

        left: 0;
        margin: 3px;
        width: 34px;
        height: 34px;
        background-color: #fff;


    }
</style>
