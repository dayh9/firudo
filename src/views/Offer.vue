<template>
  <div v-if="offer" class="offer">
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
        <v-card
          v-if="this.offer.phoneNumber"
          class="my-5 mx-3"
          width="30%"
          height="70"
          color="primary"
        >
          <v-card-title class="pt-1">Kontakt:</v-card-title>
          <v-card-subtitle class="text-h5"
            >tel. {{ this.offer.phoneNumber }}</v-card-subtitle
          >
        </v-card>
        <v-card flat class="d-flex justify-space-around mt-9 pb-3 mx-3">
          <v-btn
            v-if="owner"
            width="30%"
            @click="deleteOffer"
            color="warning"
            elevation="2"
            >Usuń Ofertę</v-btn
          >
          <v-btn
            v-if="owner"
            width="30%"
            @click="updateOffer"
            color="accent"
            elevation="2"
            >Edytuj Ofertę</v-btn
          >
        </v-card>
        <!-- <v-container style="height: 300px"> </v-container> -->
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
    Description
  },
  data() {
    return {
      offer: null
    };
  },
  async created() {
    db.ref("offers/" + this.$route.params.id).once("value", snapshot => {
      this.offer = snapshot.val();
    });
  },
  computed: {
    owner() {
      if (!this.$store.state.user) return false;
      return this.$store.state.user.email === this.offer.user;
    }
    // offer() {
    //   return db
    //     .ref("offers/" + this.$route.params.id)
    //     .once("value", (snapshot) => {
    //       console.log(snapshot.val());
    //       // do something with document
    //     });
    //db.ref("offers").doc(this.$route.params.id).get();
    // this.$route.params.offer;
    // },
  },
  methods: {
    changePhoto(n) {
      this.actualPhoto = n % this.offer.photos.length;
    },
    deleteOffer() {
      if (confirm("Do you really want to delete?")) {
        db.ref("offers")
          .child(this.offer.id)
          .remove();
        alert("Usunięto");
        if (this.$route.name != "Home") this.$router.push({ name: "Home" });
      }
    },
    updateOffer() {
      if (confirm("Do you really want to edit?")) {
        if (this.$route.name != "Form")
          this.$router.push({ name: "Form", params: { id: this.offer.id } });
      }
    }
  },
  firebase: {}
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
