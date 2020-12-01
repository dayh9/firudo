<template>
  <v-container class="pa-0 mt-1">
    <v-card flat height="40">
      <v-card-title class="pl-3 pt-0 text-h5">Szczegóły</v-card-title>
    </v-card>
    <v-container class="lighten-5">
      <v-row no-gutters>
        <v-col cols="4">
          <v-card flat class="d-flex align-start justify-start pr-8">
            <!-- <span class="ma-0 pt-1 text-body-1"> Powierzchnia: </span> -->
            <v-text-field
              label="Powierzchnia:"
              dense
              type="text"
              suffix="m²"
              @input="changeHandler($event, 'space')"
              v-model="details.space"
            >
            </v-text-field>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card flat class="d-flex align-center justify-start pr-8">
            <!-- <span class="ma-0 pa-0 text-body-1"> Liczba pokoi: </span> -->
            <v-text-field
              label="Liczba pokoi:"
              dense
              type="text"
              @input="changeHandler($event, 'rooms')"
              v-model="details.rooms"
            ></v-text-field>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card flat class="d-flex align-center justify-start pr-8">
            <!-- <span class="ma-0 pa-0 text-body-1"> Czynsz: </span> -->
            <v-text-field
              label="Czynsz:"
              dense
              type="text"
              suffix="zł"
              @input="changeHandler($event, 'rent')"
              v-model="details.rent"
            ></v-text-field>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card flat class="d-flex align-center justify-start pr-8">
            <!-- <span class="ma-0 pa-0 text-body-1"> Rynek: </span> -->
            <!-- <v-text-field
              label="Rynek:"
              dense
              type="text"
              @input="changeHandler($event, 'market')"
            ></v-text-field> -->
            <v-select
              label="Rynek:"
              dense
              type="text"
              @input="changeHandler($event, 'market')"
              :items="marketTypes"
              v-model="details.market"
            ></v-select>
            <!-- </v-card> -->
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card flat class="d-flex align-center justify-start pr-8">
            <v-text-field
              label="Dostępność:"
              dense
              type="text"
              @input="changeHandler($event, 'availability')"
              v-model="details.availability"
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
      marketTypes: ["pierwotny", "wtórny"],
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