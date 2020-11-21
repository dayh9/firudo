<template>
  <div class="formulage">
    <v-card class="" height="100%">
      <v-app-bar
        tile
        dense
        absolute
        color="secondary"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
      >
        <v-icon color="click" left>mdi-home</v-icon>

        <v-toolbar-title class="accent--text">{{
          example_model["title"]
        }}</v-toolbar-title>

        <v-spacer></v-spacer>
        <h3 class="secondary--text">
          {{ Object.values(example_model.price).toLocaleString("pl-PL") }} zł
        </h3>
      </v-app-bar>

      <v-sheet id="scrolling-techniques-7" class="overflow-visible">
        <v-spacer style="height: 35px"></v-spacer>
        <GalleryForm />
        <v-divider class="mx-3 secondary"></v-divider>
        <Details :details="this.example_model.details" />
        <v-divider class="mx-3 my-1 secondary"></v-divider>

        <!-- <Description :description="this.example_model.description" />
        <v-divider class="mx-3 my-1 secondary"></v-divider>
        <v-btn @click="addItem" color="click" class="ma-5" dark elevation="2"
          >CLICK ME</v-btn
        > -->
        <v-container style="height: 1000px"> </v-container>
      </v-sheet>
    </v-card>
  </div>
</template>

<script>
import { db } from "../db.js";
// import Gallery from "../components/Gallery.vue";
import Details from "../components/Details.vue";
// import Description from "../components/Description.vue";
import GalleryForm from "../components/GalleryForm.vue";

export default {
  name: "Offer",
  components: {
    // Gallery,
    Details,
    // Description,
    GalleryForm,
  },
  data() {
    return {
      example_model: {
        title: "Mieszkanie dla ciebie",
        price: { Cena: 300000 },
        address: {
          locality: { Miejscowość: "Wrocław" },
          district: { Dzielnica: "Tarnogaj" },
          street: { Ulica: "Klimasa" },
        },
        description: {
          Opis:
            "Sprzedam mieszkanie\nduże i umeblowane mieszkanie w centrum Wrocławia\nOkazja jedyna w swym rodzaju" +
            "\npolecam badzo",
        },
        photos: {
          Zdjęcia: [
            "garden.jpg",
            "garage.jpg",
            "house.jpg",
            "m1.jpg",
            "m2.jpg",
            "m3.jpg",
            "m4.jpg",
            "m5.jpg",
            "m6.jpg",
            "m7.jpg",
            "m8.jpg",
            "m9.jpg",
          ],
        },
        details: {
          size: { Powierzchnia: 30 },
          priceForM2: { "Cena za m2": 10000 },
          rooms: { "Liczba pokoi": 3 },
          market: { Rynek: "pierwotny" },
          floor: { Piętro: 2 },
          year: { "Rok budowy": 1980 },
          state: { "Stan wykończenia": "do zamieszkania" },
          rent: { Czynsz: 300 },
        },
      },
    };
  },
  methods: {
    async addItem() {
      db.ref("users").push(this.example_model);
      alert("aaa");
    },
    changePhoto(n) {
      this.actualPhoto = n % this.example_model.photos.Zdjęcia.length;
    },
  },
  firebase: {
    users: db.ref(),
    offers: db.ref(),
  },
};
</script>

<style>
.sticky {
  /* position: sticky; */
  top: 60px;
}
.column-wrapper {
  column-count: 3;
}
</style>
