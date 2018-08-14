<template>
  <div class="Scroller">
    <div ref="content" class="Scroller__content">
      <slot />
    </div>
  </div>
</template>

<script>
import { TimelineMax, Linear } from "gsap";

export default {
  mounted() {
    this.tween();
  },
  updated() {
    this.tween();
  },
  methods: {
    tween() {
      if (this.timeline) {
        this.timeline.kill();
      }

      const { content } = this.$refs;
      const endValue = Math.max(0, content.clientWidth - this.$el.clientWidth);
      const duration = endValue * 0.015;
      const x = -endValue;

      const timeline = new TimelineMax({
        paused: !duration,
        repeat: -1
      });

      timeline.set(content, { x: 0, opacity: 1 });
      timeline.to(content, duration, { ease: Linear.easeNone, x }, "+=2");
      timeline.to(content, 0.25, { opacity: 0 }, "+=2");
      timeline.set(content, { x: 0 });
      timeline.to(content, 0.25, { opacity: 1 });

      this.timeline = timeline;
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
