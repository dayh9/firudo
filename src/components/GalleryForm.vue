<template>
  <v-card flat tile color="" height="50vh" width="100%" class="pl-3 pr-1 py-2">
    <v-card flat tile color="" width="100%" height="100%" class="d-flex">
      <v-card flat tile color="" width="65%" height="100%" class="py-1">
        <label for="imgInputBig" class="pointer">
          <v-img
            contain
            height="100%"
            :src="
              photos[0]
                ? require(`@/assets/${photos[0]}`)
                : require(`@/assets/add--v1.png`)
            "
            :lazy-src="require(`@/assets/add--v1.png`)"
            class="secondary"
            aspect-ratio="1"
          >
            <input
              id="imgInputBig"
              type="file"
              name="photo"
              accept="image/*"
              style="display: none"
              @change="onFileSelected($event, 2)"
            /> </v-img></label
      ></v-card>
      <v-card
        flat
        tile
        color=""
        width="35%"
        height="100%"
        class="px-1 d-flex flex-wrap align-content-start"
      >
        <v-card
          v-for="(n, index) in 12"
          :key="index"
          flat
          tile
          width="33.3333%"
          height="25%"
          class="pa-1"
        >
          <label for="imgInput" class="pointer">
            <v-img
              width="100%"
              height="100%"
              :class="photos[index] ? null : `secondary`"
              :contain="photos[index] ? false : true"
              :src="
                photos[index]
                  ? require(`@/assets/${photos[index]}`)
                  : require(`@/assets/add--v1.png`)
              "
              class="ma-0 pa-0"
              :gradient="
                isPhotoActive(index)
                  ? 'to bottom, rgba(76,175,80,.1), rgba(76,175,80,.7)'
                  : ''
              "
              aspect-ratio="1"
              @click="setBigPhoto(index)"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
              <input
                id="imgInput"
                type="file"
                name="photo"
                accept="image/*"
                style="display: none"
                @change="onFileSelected($event, index)"
              /> </v-img></label
        ></v-card>
      </v-card>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: "GalleryForm",
  props: {
    photos: Array
  },
  data() {
    return {
      bigPhotoId: 0,
      photosHere: [
        // "16.jpg",
        // "9.jpg",
        // null,
        // "20.jpg",
        // "10.jpg",
        // "2.jpg",
        // "15.jpg",
      ]
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
    onFileSelected(event, index) {
      console.log(index);
      // let newa = [];
      // newa[k] = event.target.files[0].name
      // console.log(k);
      // this.newPhotos = this.photosHere;
      // this.newPhotos[k] = event.target.files[0].name;
      // this.set(this.photosHere, 2, event.target.files[0].name);
      // this.photosHere.splice(7, 1, event.target.files[0].name);
      // this.photosHere = this.newPhotos;
      this.photos.push(event.target.files[0].name);
    }
  },
  computed: {}
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
.pointer {
  cursor: pointer;
}
</style>
