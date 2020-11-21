<template>
  <v-container class="mb-1">
    <v-row>
      <v-col class="big-picture-container" cols="8">
        <v-img
          contain
          height="400"
          :src="require(`@/assets/${photos[bigPhotoId]}`)"
          class="secondary"
          aspect-ratio="1"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col max-height="400px" cols="4">
        <v-container class="pa-0">
          <v-row no-gutters>
            <v-col
              class="d-flex justify-center"
              v-for="(photo, id) in photos"
              :key="id"
              cols="4"
            >
              <v-img
                max-width="97%"
                max-height="97%"
                :src="require(`@/assets/${photo}`)"
                class="ma-0"
                :gradient="
                  isPhotoActive(id)
                    ? 'to bottom, rgba(76,175,80,.1), rgba(76,175,80,.7)'
                    : ''
                "
                aspect-ratio="1"
                @click="setBigPhoto(id)"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Gallery",
  props: {
    photos: Array,
  },
  data() {
    return {
      bigPhotoId: 0,
    };
  },
  methods: {
    mod(n) {
      return n % this.photos.length;
    },
    setBigPhoto(n) {
      this.bigPhotoId = n;
    },
    isPhotoActive(n) {
      if (this.bigPhotoId == n) {
        return true;
      }
      return false;
    },
  },
  computed: {},
};
</script>

<style>
.bottom-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 72px
  );
}
.repeating-gradient {
  background-image: repeating-linear-gradient(
    -45deg,
    rgba(255, 0, 0, 0.25),
    rgba(255, 0, 0, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 10px
  );
}
.big-picture-container {
  height: 400;
}
.test {
  /* background-color: brown; */
  height: 400;
}
</style>