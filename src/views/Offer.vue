<template>
  <div class="offer">
    <v-card class="" height="100%">
      <v-app-bar
        tile
        absolute
        color="secondary"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
      >
        <!-- <v-icon color="click" left>mdi-home</v-icon> -->

        <v-toolbar-title class="accent--text pa-0"
          >{{ offer.title }}
          <div
            class="subheading font-weight-normal pa-0 text-subtitle-1 success--text align-end"
          >
            <v-icon x-small color="accent" class="mb-1 mx-0" right
              >mdi-map-marker</v-icon
            >
            {{ offer.localization.locality }},
            {{ offer.localization.district }}, {{ offer.localization.street }}
          </div>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <h3 class="click--text">
          {{ offer.price.toLocaleString("pl-PL") }} zł
        </h3>
      </v-app-bar>

      <v-sheet id="scrolling-techniques-7" class="overflow-visible">
        <v-spacer style="height: 64px"></v-spacer>
        <Gallery :photos="this.offer.photos" />
        <v-divider class="mx-3 secondary"></v-divider>
        <Details :details="this.offer.details" />
        <v-divider class="mx-3 secondary"></v-divider>

        <Description :description="this.offer.description" />
        <v-divider class="mx-3 secondary"></v-divider>
        <!-- <v-btn @click="addItem" color="click" class="ma-5" dark elevation="2"
          >CLICK ME</v-btn
        > -->
        <v-container style="height: 300px"> </v-container>
      </v-sheet>
    </v-card>
  </div>
</template>

<script>
import { db } from "../db.js";
import Gallery from "../components/Gallery.vue";
import Details from "../components/Details.vue";
import Description from "../components/Description.vue";

export default {
  name: "Offer",
  components: {
    Gallery,
    Details,
    Description,
  },
  data() {
    return {
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
          "15.jpg",
          "3.jpg",
          "21.jpg",
          "4.jpg",
          "17.jpg",
          "8.jpg",
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
            "\npolecam badzo" +
            "Est dolor numquam porro aliquam labore quaerat. Labore voluptatem consectetur numquam dolore dolorem sed. Modi quaerat neque amet. Dolore labore aliquam eius magnam. Consectetur modi sed dolorem eius. Consectetur voluptatem sed sed quisquam etincidunt ipsum dolor. Quaerat modi velit eius neque. Consectetur consectetur sed amet velit dolore sit.\n\nQuiquia ut quiquia porro est. Neque ipsum dolor est adipisci labore dolorem. Neque quisquam quaerat modi quiquia modi amet. Modi eius quisquam non consectetur etincidunt aliquam. Voluptatem sit dolore est sed. Modi quiquia est numquam est voluptatem velit dolorem. Etincidunt sed adipisci porro. Modi labore amet magnam eius.\n\nIpsum ut etincidunt ut dolorem. Neque dolorem sed neque aliquam dolore sit tempora. Modi quiquia velit amet amet numquam ut. Quaerat est quaerat quisquam. Eius dolorem amet sit ut adipisci sit voluptatem. Quaerat dolore numquam quisquam eius consectetur. Consectetur labore eius dolorem labore. Etincidunt adipisci est voluptatem. Numquam eius neque labore porro.",
        },
        photos: {
          Zdjęcia: [
            "10.jpg",
            "11.jpg",
            "12.jpg",
            "1.jpg",
            "2.jpg",
            "3.jpg",
            "4.jpg",
            "5.jpg",
            "6.jpg",
            "7.jpg",
            "8.jpg",
            "9.jpg",
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
      db.ref("users").push(this.offer);
      alert("aaa");
    },
    changePhoto(n) {
      this.actualPhoto = n % this.offer.photos.length;
    },
  },
  firebase: {
    users: db.ref(),
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
