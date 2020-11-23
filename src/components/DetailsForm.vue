<template>
  <v-container class="pa-0 mt-1">
    <v-card flat height="40">
      <v-card-title class="pl-3 pt-0 text-h5">Szczegóły</v-card-title>
    </v-card>
    <v-container class="lighten-5">
      <v-row no-gutters>
        <v-col cols="4">
          <v-card
            v-if="details.space"
            flat
            class="d-flex align-start justify-start pr-8"
          >
            <!-- <span class="ma-0 pt-1 text-body-1"> Powierzchnia: </span> -->
            <v-text-field
              label="Powierzchnia:"
              dense
              @input="changeHandler($event, 'space')"
            >
              <template slot="append">
                <span v-html="m2Suffix"></span>
              </template>
            </v-text-field>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card
            v-if="details.rooms"
            flat
            class="d-flex align-center justify-start pr-8"
          >
            <!-- <span class="ma-0 pa-0 text-body-1"> Liczba pokoi: </span> -->
            <v-text-field
              label="Liczba pokoi:"
              dense
              @input="changeHandler($event, 'rooms')"
            ></v-text-field>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card
            v-if="details.rent"
            flat
            class="d-flex align-center justify-start pr-8"
          >
            <!-- <span class="ma-0 pa-0 text-body-1"> Czynsz: </span> -->
            <v-text-field
              label="Czynsz:"
              dense
              @input="changeHandler($event, 'rent')"
              suffix="zł"
            ></v-text-field>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card
            v-if="details.market"
            flat
            class="d-flex align-center justify-start pr-8"
          >
            <!-- <span class="ma-0 pa-0 text-body-1"> Rynek: </span> -->
            <v-text-field
              label="Rynek:"
              dense
              @input="changeHandler($event, 'market')"
            ></v-text-field>
            <!-- </v-card> -->
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card
            v-if="details.availability"
            flat
            class="d-flex align-center justify-start pr-8"
          >
            <v-text-field
              label="Dostępność:"
              dense
              @input="changeHandler($event, 'market')"
            ></v-text-field>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

    
<script>
export default {
  name: "DetailsForm",
  props: {
    details: Object,
  },
  data() {
    return {
      m2Suffix: "m<sup>2</sup>",
    };
  },
  methods: {
    changeHandler(e, id) {
      this.$emit("input", e, id);
    },
  },
};
</script>

<style>
</style>