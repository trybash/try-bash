<style lang="stylus">
  @import '../stylus/colors'

  .Task {
    position absolute
    top 0
    left 0.5em
    right 0

    padding 1.5em

    border-radius 2px
    background-color task-background
    box-shadow 2px 4px 0 rgba(black, 0.2)
    z-index 10000

    &-headline {
      font-size 1em
      margin-bottom 0.5em
    }

    &-text {
      white-space pre-wrap
    }

    small {
      font-size 0.5em
    }

    code {
      display inline-block
      padding-left 3px
      padding-right 3px
      border-radius 2px
      background-color rgba(#fff, 0.5)
      font-size 1.2em
      font-weight bold
    }

    &.is-active {
      background-color green
    }

    &--transition {
      transition-property all
      transition-duration 1s
      transition-timing-function ease-in-out
      transform-origin 0 0
      transform translate(0, 0) rotate(4deg)
    }

    &--enter {

    }

    &--enter,
    &--leave {
      transform translate(-50%, -1000%) rotate(-270deg)
      box-shadow 2px 4px 10px rgba(black, 1)
    }
  }
</style>

<template>
  <div class="Task" transition="Task-" v-for="section in sections" v-show="$index > 0">
    <h3 class="Task-headline">Current Task</h3>
    <div class="Task-text">{{{section.task}}}</div>
  </div>
</template>

<script>
  import { getSection } from '../vuex/getters'

  module.exports = {
    vuex: {
      getters: {
        section: getSection
      }
    },

    data () {
      return {
        sections: ['', this.section]
      }
    },

    watch: {
      section (val) {
        this.sections.shift()
        this.sections.push(val)
      }
    }
  }
</script>
