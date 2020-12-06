<template>
  <div class="home">
    <v-card
      class="d-flex flex-column justify-center pb-0 pt-3 px-3 ma-0"
      color=""
      width="100%"
      flat
    >
      <v-card class="mb-3 py-2 d-flex align-center" flat width="100%">
        <v-btn dark color="click" @click="setPage(-1)"
          ><v-icon>mdi-arrow-left-bold-hexagon-outline</v-icon></v-btn
        >
        <v-spacer></v-spacer>
        <v-btn dark text color="click" @click="setPage(-maxPage)">{{
          page + 1
        }}</v-btn>
        <span class="click--text text-h4"> / </span>
        <v-btn dark text color="click" @click="setPage(maxPage)">{{
          maxPage + 1
        }}</v-btn>
        <v-spacer></v-spacer>
        <v-btn dark color="click" @click="setPage(1)"
          ><v-icon>mdi-arrow-right-bold-hexagon-outline</v-icon></v-btn
        >
      </v-card>
      <v-card
        v-for="(offer, n) in filteredOffers.slice(
          this.page * this.range,
          (1 + this.page) * this.range
        )"
        :key="n"
        class="mb-3 pa-2 d-flex"
        height="200"
        width="100%"
        hover
        :style="styleCard"
      >
        <v-card
          height="100%"
          width="30%"
          rounded="sm"
          elevation="4"
          @click.native="scrollToTop"
          :to="{
            name: 'Offer',
            params: { id: offer.id, title: offer.title },
          }"
        >
          <v-img :src="require(`@/assets/${offer.photos[0]}`)" height="100%" />
        </v-card>
        <v-card
          flat
          tile
          color=""
          class="d-flex flex-column align-start"
          width="50%"
          height="100%"
          @click.native="scrollToTop"
          :to="{
            name: 'Offer',
            params: { id: offer.id, title: offer.title },
          }"
        >
          <v-card-title class="click--text text-no-wrap">{{
            offer.title
          }}</v-card-title>
          <v-card-subtitle
            class="subheading font-weight-normal success--text text-no-wrap mb-0 pb-0"
          >
            <v-icon x-small color="accent" class="mb-1 mx-0" right
              >mdi-map-marker</v-icon
            >
            {{ offer.localization.locality }},
            {{ offer.localization.district }}, {{ offer.localization.street }}
          </v-card-subtitle>
          <v-card-subtitle
            class="py-1 ml-6 font-weight-bold subtitle-1 accent--text"
          >
            <span class="mr-8">
              Powierzchnia: {{ offer.details.space }} m²
            </span>
            <span class="">
              Pokoje:
              {{ offer.details.rooms }}
            </span>
          </v-card-subtitle>
          <v-card-subtitle class="mt-auto pb-0 font-weight-light success--text">
            {{ offer.propertyType }} na {{ offer.offerType }} od
            {{ offer.user }}
          </v-card-subtitle>
          <!-- <v-icon color="click" left>mdi-home</v-icon> -->
        </v-card>

        <v-card
          flat
          tile
          color="transparent"
          class="d-flex flex-column justify-start align-end"
          width="20%"
          height="100%"
        >
          <v-card-title
            v-if="offer.offerType === 'wynajem'"
            class="font-weight-normal accent--text"
          >
            {{ offer.price.toLocaleString("pl-PL") }} zł/mc
          </v-card-title>
          <v-card-title v-else class="font-weight-normal accent--text">
            {{ offer.price.toLocaleString("pl-PL") }} zł
          </v-card-title>
          <!-- <v-card-subtitle
            @click.stop="addToFav(offer.id)"
            class="font-weight-bold click--text text-no-wrap mt-auto d-flex align-end pb-0"
          >
            <v-icon large color="click" class="mb-0 mx-0"
              >mdi-home-outline</v-icon
            >
            Dodaj do ulubionych
          </v-card-subtitle> -->
        </v-card>
      </v-card>
      <v-card class="mb-3 py-2 d-flex align-center" flat width="100%">
        <v-btn dark color="click" @click="setPage(-1)"
          ><v-icon>mdi-arrow-left-bold-hexagon-outline</v-icon></v-btn
        >
        <v-spacer></v-spacer>
        <v-btn dark text color="click">{{ page + 1 }}</v-btn>
        <span class="click--text text-h4"> / </span>
        <v-btn dark text color="click" @click="setPage(maxPage)">{{
          maxPage + 1
        }}</v-btn>
        <v-spacer></v-spacer>
        <v-btn dark color="click" @click="setPage(1)"
          ><v-icon>mdi-arrow-right-bold-hexagon-outline</v-icon></v-btn
        >
      </v-card>
    </v-card>
  </div>
</template>

<script>
import { db } from "../db.js";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      offers: [],
      users: [],
      page: 0,
      range: 20,
      styleCard: { border: "1px solid #5B9279" },
    };
  },
  computed: {
    maxPage() {
      return Math.ceil(this.filteredOffers.length / this.range - 1);
    },
    filteredOffers() {
      return this.offers
        .filter((offer) => {
          if (!offer.propertyType.match(this.propertyType)) return false;
          if (!offer.offerType.match(this.offerType)) return false;
          if (offer.price < this.priceMin) return false;
          if (offer.price > this.priceMax) return false;
          if (offer.space < this.spaceMin) return false;
          if (offer.space > this.spaceMax) return false;
          if (
            !offer.localization.locality.match(this.localization) &&
            !offer.localization.district.match(this.localization) &&
            !offer.localization.street.match(this.localization)
          )
            return false;
          if (
            this.showMyOffers &&
            !offer.user.match(this.$store.state.user.email)
          )
            return false;
          return true;
        })
        .sort((a, b) => {
          if (this.sortType === "od najtańszych") return a.price - b.price;
          if (this.sortType === "od najtańszych") return a.price - b.price;
          if (this.sortType === "od najdroższych") return b.price - a.price;
          if (this.sortType === "od największych")
            return b.details.space - a.details.space;
          return 0;
        });
    },
    showMyOffers: {
      get() {
        return this.$store.state.showMyOffers;
      },
      set(value) {
        this.$store.commit("setShowMyOffers", value);
      },
    },
    sortType: {
      get() {
        return this.$store.state.sortType;
      },
      set(value) {
        this.$store.commit("setSortType", value);
      },
    },
    propertyType: {
      get() {
        return this.$store.state.propertyType;
      },
      set(value) {
        this.$store.commit("setPropertyType", value);
      },
    },
    offerType: {
      get() {
        return this.$store.state.offerType;
      },
      set(value) {
        this.$store.commit("setOfferType", value);
      },
    },
    priceMin: {
      get() {
        return this.$store.state.priceMin;
      },
      set(value) {
        this.$store.commit("setPriceMin", value);
      },
    },
    priceMax: {
      get() {
        return this.$store.state.priceMax;
      },
      set(value) {
        this.$store.commit("setPriceMax", Number(value));
      },
    },
    spaceMin: {
      get() {
        return this.$store.state.spaceMin;
      },
      set(value) {
        this.$store.commit("setSpaceMin", Number(value));
      },
    },
    spaceMax: {
      get() {
        return this.$store.state.spaceMax;
      },
      set(value) {
        this.$store.commit("setSpaceMax", Number(value));
      },
    },
    localization: {
      get() {
        return this.$store.state.localization;
      },
      set(value) {
        this.$store.commit("setLocalization", value);
      },
    },
  },
  watch: {
    showMyOffers() {
      this.page = 0;
    },
    sortType() {
      this.page = 0;
    },
    propertyType() {
      this.page = 0;
    },
    offerType() {
      this.page = 0;
    },
    priceMin() {
      this.page = 0;
    },
    priceMax() {
      this.page = 0;
    },
    spaceMin() {
      this.page = 0;
    },
    spaceMax() {
      this.page = 0;
    },
    localization() {
      this.page = 0;
    },
  },
  methods: {
    // addToFav(id) {
    //   const newFav = id;
    //   db.ref("users")
    //     .child(this.$store.state.user.email.replace(".", "_"))
    //     .child("favourites")
    //     .push(newFav);
    // },
    changePhoto(n) {
      this.actualPhoto = n % this.offer.photos.length;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    setPage(n) {
      if ((n < 0 && this.page > 0) || (n > 0 && this.page < this.maxPage)) {
        this.page += n;
        if (this.page > this.maxPage) this.page = this.maxPage;
        if (this.page < 0) this.page = 0;
        window.scrollTo(0, 0);
      }
    },
  },
  firebase: {
    // users: db.ref("users"),
    offers: db.ref("offers"),
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
.v-card--outlined >>> fieldset {
  border-color: click;
}
.page-box {
  width: 50 !important;
  height: 50 !important;
}
</style>
