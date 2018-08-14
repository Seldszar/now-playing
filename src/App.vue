<template>
  <div id="app">
    <Widget v-bind:track="track" />
  </div>
</template>

<script>
/* global settings */

import jsonp from "jsonp";
import { find, get, isEqual } from "lodash";
import Widget from "./components/Widget.vue";

export default {
  components: {
    Widget
  },
  data() {
    return {
      track: null
    };
  },
  mounted() {
    setInterval(() => this.refresh(), 10000);
    this.refresh();
  },
  methods: {
    refresh() {
      jsonp(
        `https://libre.fm/2.0/?method=user.getrecenttracks&user=${
          settings.user
        }&limit=2&format=json`,
        (error, data) => {
          if (error) {
            return;
          }

          let track = null;
          const playingTrack = find(data.recenttracks.track, track =>
            Boolean(get(track, ["@attr", "nowplaying"]))
          );

          if (playingTrack) {
            track = {
              name: get(playingTrack, ["name"]),
              artist: get(playingTrack, ["artist", "#text"]),
              album: get(playingTrack, ["album", "#text"])
            };
          }

          if (!isEqual(this.track, track)) {
            this.track = track;
          }
        }
      );
    }
  }
};
</script>

<style lang="scss">
@include foundation-global-styles;
@include foundation-typography;

body {
  overflow: hidden;
}
</style>
