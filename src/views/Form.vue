<template>
  <div class="form">
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
              label="Tytuł ogłoszenia:"
              dense
              type="text"
              v-model="newOffer.title"
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
              type="text"
              v-model="newOffer.localization.locality"
            ></v-text-field>
            <v-text-field
              background-color="white"
              filled
              class="mr-2"
              color="accent"
              label="Dzielnica:"
              dense
              type="text"
              v-model="newOffer.localization.district"
            ></v-text-field>
            <v-text-field
              background-color="white"
              filled
              class="mr-2"
              color="accent"
              label="Ulica:"
              dense
              type="text"
              v-model="newOffer.localization.street"
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
              type="text"
              :items="propertyTypes"
              v-model="newOffer.propertyType"
            ></v-select>
            <v-select
              background-color="white"
              filled
              class="mr-2 h3"
              color="click"
              label="Typ ogłoszenia:"
              dense
              type="text"
              :items="offerTypes"
              v-model="newOffer.offerType"
            ></v-select>
          </span>
          <v-text-field
            background-color="white"
            filled
            class="mr-2 h3"
            color="click"
            label="Cena:"
            dense
            type="number"
            v-model="newOffer.price"
            suffix="zł"
          ></v-text-field>
        </v-card>
        <!-- <h3 class="click--text"> -->

        <!-- </h3> -->
      </v-card>

      <v-sheet id="scrolling-techniques-7" class="overflow-visible">
        <GalleryForm :photos.sync="this.newOffer.photos" />
        <v-divider class="mx-3 secondary"></v-divider>
        <DetailsForm :details="this.newOffer.details" @input="updateMsg" />
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
              type="text"
              v-model="newOffer.description"
            ></v-textarea>
          </v-card>
        </v-container>
        <v-divider class="mx-3 mt-12 secondary"></v-divider>
        <v-card flat class="px-3"
          ><v-text-field
            background-color="white"
            filled
            class="h3"
            color="click"
            label="Telefon kontaktowy:"
            dense
            type="text"
            v-model="newOffer.phoneNumber"
          ></v-text-field
        ></v-card>

        <v-btn
          width="100%"
          class="my-3"
          @click="addOffer"
          color="click"
          dark
          elevation="2"
          >{{ this.$route.params.id ? "Zapisz Zmiany" : "Dodaj Ofertę" }}</v-btn
        >
      </v-sheet>
    </v-card>
  </div>
</template>

<script>
import { db } from "../db.js";
import DetailsForm from "../components/DetailsForm.vue";
import GalleryForm from "../components/GalleryForm.vue";

export default {
  name: "Form",
  components: {
    GalleryForm,
    DetailsForm
  },
  data() {
    return {
      propertyTypes: ["mieszkanie", "dom"],
      offerTypes: ["sprzedaż", "wynajem"],
      newOffer: {
        id: null,
        offerType: null,
        propertyType: null,
        title: null,
        price: null,
        photos: [],
        localization: {
          locality: null,
          district: null,
          street: null
        },
        details: {
          space: null,
          rooms: null,
          rent: null,
          market: null,
          availability: null
        },
        description: null,
        phoneNumber: null
      }
    };
  },

  computed: {
    loggedIn() {
      return this.$store.state.user.email;
    },
    filled() {
      if (
        this.newOffer.title &&
        this.newOffer.offerType &&
        this.newOffer.propertyType &&
        this.newOffer.localization.locality &&
        this.newOffer.price &&
        this.newOffer.photos[0] &&
        this.newOffer.phoneNumber &&
        this.newOffer.details.space &&
        this.newOffer.details.rooms
      )
        return true;
      return false;
    }
  },
  async created() {
    if (this.$route.params.id)
      db.ref("offers/" + this.$route.params.id).once("value", snapshot => {
        this.newOffer = snapshot.val();
      });
  },
  methods: {
    addOffer() {
      if (this.filled) {
        let newId = null;
        if (!this.$route.params.id) {
          this.newOffer.user = this.$store.state.user.email;
          newId = db
            .ref("offers")
            .push()
            .getKey();
          this.newOffer.id = newId;
        } else {
          newId = this.$route.params.id;
        }
        this.newOffer.price = Number(this.newOffer.price);
        db.ref("offers")
          .child(newId)
          .set(this.newOffer);
        alert("Dodano");
        if (this.$route.name != "Home") this.$router.push({ name: "Home" });
      } else {
        alert(
          "Wypełnij podstawowe informacje o ofercie, zdjęcia oraz tel. kontaktowy"
        );
      }
    },
    changePhoto(n) {
      this.actualPhoto = n % this.offer.photos.length;
    },
    updateMsg(event, id) {
      if (id === "space" || id === "rooms" || id === "rent")
        this.newOffer.details[id] = Number(event);
      else this.newOffer.details[id] = event;
    }
  },
  firebase: {
    users: db.ref(),
    offers: db.ref()
  }
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
