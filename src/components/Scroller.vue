<template>
  <div class="Scroller">
    <div ref="content" class="Scroller__content">
      <slot />
    </div>
  </div>
</template>

<script>
import { easing, styler, timeline } from "popmotion";

export default {
  mounted() {
    this.tween();
  },
  updated() {
    this.tween();
  },
  methods: {
    tween() {
      if (this.animation) {
        this.animation.stop();
      }

      const $content = this.$refs.content;
      const endValue = Math.max(0, $content.clientWidth - this.$el.clientWidth);
      const duration = endValue * 15;
      const styled = styler($content);

      const playlist = [
        "+2000",
        { track: "x", from: 0, to: -endValue, duration, ease: easing.linear },
        "+2000",
        { track: "x", to: 0 }
      ];

      styled.set({ x: 0, opacity: 1 });

      if (duration > 0) {
        this.animation = timeline(playlist, { loop: Infinity }).start(
          styled.set
        );
      }
    }
  }
};
</script>

<style lang="scss">
.Scroller {
  display: flex;
  overflow-x: hidden;
  width: 100%;

  &__content {
    padding: 0 2px;
    white-space: nowrap;
  }
}
</style>
