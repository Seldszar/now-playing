<template>
  <div v-if="track" class="Widget">
    <div ref="trackName" class="Widget__trackName">
      <Scroller>
        {{ track.name }}
      </Scroller>
    </div>
    <div ref="trackArtist" class="Widget__trackArtist">
      <Scroller>
        {{ track.artist }}
      </Scroller>
    </div>
  </div>
</template>

<script>
import Scroller from "./Scroller.vue";

export default {
  components: {
    Scroller
  },
  props: {
    track: Object
  }
};
</script>

<style lang="scss">
.Widget {
  font-size: rem-calc(24);
  line-height: 1.2;
  text-transform: uppercase;
  text-shadow: 0 0 2px $black, 0 0 2px $black, 0 0 2px $black;

  &__trackName {
    font-weight: bold;
  }

  &__trackArtist {
    font-size: $small-font-size;
  }
}
</style>
