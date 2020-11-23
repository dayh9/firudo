<template>
  <div class="formulage">
    <v-card height="100%">
      <v-card
        flat
        tile
        absolute
        class="d-flex align-end mb-n3"
        color="secondary"
      >
        <v-card
          flat
          tile
          width="50%"
          class="d-flex flex-column pl-3 pt-3"
          color="secondary"
        >
          <span>
            <v-text-field
              background-color="white"
              filled
              class="mr-2 mb-n3"
              color="accent"
              label="Tytył ogłoszenia:"
              dense
              v-model="formToSubmit.title"
            ></v-text-field>
          </span>
          <span class="d-flex">
            <v-text-field
              background-color="white"
              filled
              class="mr-2"
              color="accent"
              prepend-icon="mdi-map-marker"
              label="Miejscowość:"
              dense
              v-model="formToSubmit.localization.locality"
            ></v-text-field>
            <v-text-field
              background-color="white"
              filled
              class="mr-2"
              color="accent"
              label="Dzielnica:"
              dense
              v-model="formToSubmit.localization.district"
            ></v-text-field>
            <v-text-field
              background-color="white"
              filled
              class="mr-2"
              color="accent"
              label="Ulica:"
              dense
              v-model="formToSubmit.localization.street"
            ></v-text-field>
          </span>
        </v-card>
        <v-spacer></v-spacer>
        <v-card
          flat
          tile
          width="50%"
          class="d-flex flex-column pl-3 pr-1 pt-3"
          color="secondary"
        >
          <span class="d-flex mb-n3">
            <v-select
              background-color="white"
              filled
              class="mr-2 h3"
              color="click"
              label="Typ nieruchomości:"
              dense
              :items="propertyTypes"
            ></v-select>
            <v-select
              background-color="white"
              filled
              class="mr-2 h3"
              color="click"
              label="Typ ogłoszenia:"
              dense
              :items="offerTypes"
            ></v-select>
          </span>
          <v-text-field
            background-color="white"
            filled
            class="mr-2 h3"
            color="click"
            label="Cena:"
            dense
            v-model="formToSubmit.price"
            suffix="zł"
          ></v-text-field>
        </v-card>
        <!-- <h3 class="click--text"> -->

        <!-- </h3> -->
      </v-card>

      <v-sheet id="scrolling-techniques-7" class="overflow-visible">
        <GalleryForm :photos.sync="this.offer.photos" />
        <v-divider class="mx-3 secondary"></v-divider>
        <DetailsForm :details="offer.details" @input="updateMsg" />
        <v-divider class="mx-3 secondary"></v-divider>
        <v-container class="my-0">
          <v-card
            flat
            tile
            width="100%"
            height="400"
            class="pa-0 my-1"
            color=""
          >
            <v-card-title class="px-0 pt-0 text-h5">{{ "Opis" }}</v-card-title>
            <v-textarea
              height="400"
              solo
              name="description-input"
              label="Wpisz opis ogłoszenia"
              v-model="formToSubmit.description"
            ></v-textarea>
          </v-card>
        </v-container>
        <!-- <Description :description="this.example_model.description" />
        <v-divider class="mx-3 my-1 secondary"></v-divider>
        <v-btn @click="addItem" color="click" class="ma-5" dark elevation="2"
          >CLICK ME</v-btn
        > -->
        <v-container style="height: 300px"> </v-container>
      </v-sheet>
    </v-card>
  </div>
</template>

<script>
import { db } from "../db.js";
// import Gallery from "../components/Gallery.vue";
// import Details from "../components/Details.vue";
import DetailsForm from "../components/DetailsForm.vue";
// import Description from "../components/Description.vue";
import GalleryForm from "../components/GalleryForm.vue";

export default {
  name: "Form",
  components: {
    // Gallery,
    // Details,
    // Description,
    GalleryForm,
    DetailsForm,
  },
  data() {
    return {
      propertyTypes: ["mieszkanie", "dom"],
      offerTypes: ["sprzedaż", "wynajem"],
      formToSubmit: {
        title: "",
        price: null,
        localization: {
          locality: null,
          district: null,
          street: null,
        },
        description: "",
      },
      msg: {
        // space: null,
        // rooms: 3,
        // rent: 1600,
        // market: "wt\u00f3rny",
        // availability: "8.2023",
      },
      offer: {
        id: "92f459ce-771d-4fcf-8265-d7a57da8497f",
        user_id: "d4",
        user: "Peter11",
        user_type: "po\u015brednik",
        offer_type: "sprzeda\u017c",
        property_type: "dom",
        title: "Dom na sprzeda\u017c oferta od Peter11",
        price: 690000,
        photos: [
          "16.jpg",
          "9.jpg",
          "12.jpg",
          "20.jpg",
          "10.jpg",
          "2.jpg",
          // "15.jpg",
          // "3.jpg",
          // "21.jpg",
          // "4.jpg",
          // "17.jpg",
          // "8.jpg",
        ],
        localization: {
          locality: "Wroc\u0142aw",
          district: "Mokot\u00f3w",
          street: "ul. Lotnik\u00f3w",
        },
        details: {
          space: 75,
          rooms: 3,
          rent: 1600,
          market: "wt\u00f3rny",
          availability: "8.2023",
        },
        description:
          "Labore velit dolorem quisquam adipisci. Voluptatem modi magnam numquam eius est. Non dolor ut sed. Ipsum est dolor eius velit. Amet etincidunt sit labore ipsum neque. Modi adipisci non modi numquam dolore.\n\nQuiquia ipsum sit quaerat. Dolore sed tempora labore dolor voluptatem dolore tempora. Velit dolor quaerat etincidunt eius modi modi. Quisquam consectetur neque labore. Non quaerat sed ut neque quisquam.\n\nMagnam aliquam consectetur neque modi velit ut labore. Porro consectetur numquam labore magnam dolorem quisquam dolor. Neque non sit labore labore etincidunt modi. Amet porro sit sed velit sit labore consectetur. Labore aliquam tempora modi voluptatem ipsum dolor. Aliquam dolor amet dolor ut. Porro voluptatem aliquam dolor aliquam eius velit. Tempora consectetur numquam dolorem dolor. Non porro dolore ipsum.\n\nModi aliquam tempora adipisci quisquam numquam adipisci etincidunt. Dolore neque non porro. Dolorem quaerat quaerat sit. Quiquia dolorem quisquam ut quiquia magnam. Labore dolorem tempora aliquam quaerat. Neque quiquia sit eius. Sed dolorem quiquia quiquia. Velit sed quisquam consectetur ipsum. Non labore quiquia aliquam.\n\nVelit sit amet adipisci aliquam. Aliquam dolore tempora dolore eius. Aliquam quaerat tempora non magnam labore. Sit etincidunt sed quaerat neque. Ipsum adipisci aliquam magnam sed quaerat modi etincidunt. Modi est tempora quiquia voluptatem est neque non. Dolorem sit quisquam modi.\n\nSit quiquia etincidunt quiquia modi. Consectetur quaerat aliquam adipisci dolore. Est voluptatem etincidunt velit velit sit. Quiquia ipsum ut non dolor quisquam eius. Magnam non velit est non dolore ipsum. Dolor aliquam magnam labore etincidunt ut.",
      },
    };
  },
  methods: {
    async addItem() {
      db.ref("users").push(this.offer);
      alert("aaa");
    },
    changePhoto(n) {
      this.actualPhoto = n % this.offer.photos.length;
    },
    updateMsg(event, id) {
      this.msg[id] = event;
      // console.log(id);
      // console.log(event);
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
