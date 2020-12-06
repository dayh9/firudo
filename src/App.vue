<template>
  <v-app>
    <v-app-bar app clipped-right clipped-left flat height="50" color="primary">
      <v-app-bar-nav-icon
        @click.stop="leftDrawer = !leftDrawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="click--text px-16 text-h4" @click="goHome"
        >FIRUDO</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <div v-if="isAuthenticated" class="pr-16 d-flex align-center">
        <v-btn @click="goForm" color="click" class="mr-3" dark
          >Dodaj Ofertę</v-btn
        >
        <v-icon color="click">mdi-account-circle</v-icon>
        <div class="text--click ml-1 mr-3">{{ loggedIn }}</div>

        <v-btn @click="signOutUser" text color="click" dark>Wyloguj się</v-btn>
      </div>
      <div v-else class="pr-16">
        <v-icon color="click">mdi-account-circle</v-icon>
        <v-btn @click="showLogin" text color="click">Zaloguj się</v-btn>
        <v-btn @click="showRegister" color="click" dark>Zarejestruj się</v-btn>
      </div>
      <!-- <v-app-bar-nav-icon
        @click.stop="rightDrawer = !rightDrawer"
      ></v-app-bar-nav-icon> -->
    </v-app-bar>

    <v-navigation-drawer v-model="leftDrawer" app clipped left>
      <v-list>
        <v-list-item class="mb-n3">
          <v-list-item-content>
            <v-list-item-title class="text--click"
              ><span class="accent--text">
                Sortowanie:
              </span></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content class="d-flex flex-row mb-n10">
            <span class="d-flex pb-n3">
              <v-select
                class="mr-2 text-subtitle-2"
                background-color="white"
                solo
                dense
                label="domyślnie"
                v-model="sortType"
                :items="sortTypes"
              ></v-select>
            </span>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="mb-n3">
          <v-list-item-content>
            <v-list-item-title
              ><span class="accent--text"> Wybierz Filtry: </span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content class="d-flex flex-row mb-n10">
            <span class="d-flex pb-n3">
              <v-select
                class="mr-2 text-subtitle-2"
                background-color="white"
                solo
                clearable
                dense
                label="Typ nieruchomości"
                placeholder="Typ nieruchomości"
                v-model="propertyType"
                :items="propertyTypes"
              ></v-select>
            </span>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content class="d-flex flex-row mb-n10">
            <span class="d-flex pb-n3">
              <v-select
                class="mr-2 text-subtitle-2"
                background-color="white"
                solo
                clearable
                dense
                label="Typ ogłoszenia"
                placeholder="Typ ogłoszenia"
                v-model="offerType"
                :items="offerTypes"
              ></v-select>
            </span>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content class="d-flex flex-row mb-n10">
            <span class="d-flex pb-n3">
              <v-text-field
                class="mr-2 text-subtitle-2"
                background-color="white"
                solo
                clearable
                dense
                label="Cena od"
                placeholder="Cena od"
                v-model="priceMin"
              ></v-text-field>
              <v-text-field
                class="mr-2 text-subtitle-2"
                background-color="white"
                solo
                clearable
                dense
                label="Cena do"
                placeholder="Cena do"
                v-model="priceMax"
              ></v-text-field>
            </span>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content class="d-flex flex-row mb-n10">
            <span class="d-flex pb-n3">
              <v-text-field
                class="mr-2 text-subtitle-2"
                background-color="white"
                solo
                clearable
                dense
                label="Powierzchnia od"
                placeholder="Pow. od"
                v-model="spaceMin"
              ></v-text-field>
              <v-text-field
                class="mr-2 text-subtitle-2"
                background-color="white"
                solo
                clearable
                dense
                label="Powierzchnia do"
                placeholder="Pow. do"
                v-model="spaceMax"
              ></v-text-field>
            </span>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="isAuthenticated" class="mt-3 mr-2">
          <v-btn block dark color="click" @click="changeOffers">{{
            showMyOffers ? "Wszystkie Oferty" : "Moje Oferty"
          }}</v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

    <!-- <v-footer app color="transparent" height="72" inset>
      <v-text-field
        background-color="grey lighten-1"
        dense
        flat
        hide-details
        rounded
        solo
      ></v-text-field>
    </v-footer> -->
  </v-app>
</template>

<script>
import { db } from "./db.js";

export default {
  name: "App",
  data: () => ({
    favs: null,
    // showMyOffers: false,
    leftDrawer: true,
    rightDrawer: true,
    drawer: null,
    propertyTypes: ["mieszkanie", "dom"],
    offerTypes: ["sprzedaż", "wynajem"],
    sortTypes: [
      "domyślnie",
      "od najtańszych",
      "od najdroższych",
      "od największych",
    ],
  }),
  firebase: {
    offers: db.ref(),
  },
  methods: {
    showRegister() {
      if (this.$route.name != "Register")
        this.$router.push({ name: "Register" });
    },
    showLogin() {
      if (this.$route.name != "Login") this.$router.push({ name: "Login" });
    },
    changeOffers() {
      this.showMyOffers = !this.showMyOffers;
    },
    signOutUser() {
      this.$store.dispatch("signOutUser");
      // if (this.$route.name != "Home") this.$router.push({ name: "Home" });
    },
    goForm() {
      window.scrollTo(0, 0);
      // this.$router.push({ name: "Form" });
      if (this.$route.name != "Form") this.$router.push({ name: "Form" });
    },
    goHome() {
      if (this.$route.name != "Home") this.$router.push({ name: "Home" });
    },
  },
  computed: {
    loggedIn() {
      return this.$store.state.user.email;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
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
        this.$store.commit("setPriceMin", Number(value));
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
};
</script>
