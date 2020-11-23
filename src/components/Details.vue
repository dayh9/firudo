<template>
  <v-container class="pa-0 mt-1">
    <v-card flat height="40">
      <v-card-title class="pl-3 pt-0 text-h5">Szczegóły</v-card-title>
    </v-card>
    <v-container class="lighten-5">
      <v-row no-gutters>
        <v-col cols="4">
          <v-card v-if="details.space" flat>
            <v-card-text class="ma-0 pa-0 text-body-1">
              Powierzchnia:
              <span class="font-weight-bold">
                {{ details.space }} m<sup>2</sup>
              </span>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card v-if="details.rooms" flat>
            <v-card-text class="ma-0 pa-0 text-body-1">
              Liczba pokoi:
              <span class="font-weight-bold">
                {{ details.rooms }}
              </span>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card v-if="details.rent" flat>
            <v-card-text class="ma-0 pa-0 text-body-1">
              Czynsz:
              <span class="font-weight-bold">
                {{ details.rent.toLocaleString("pl-PL") }} zł
              </span>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card v-if="details.market" flat>
            <v-card-text class="ma-0 pa-0 text-body-1">
              Rynek:
              <span class="font-weight-bold">
                {{ details.market }}
              </span>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card v-if="details.availability" flat>
            <v-card-text class="ma-0 pa-0 text-body-1">
              Dostępność:
              <span class="font-weight-bold">
                {{ details.availability }}
              </span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "Details",
  props: {
    details: Object,
  },
};
</script>

<style>
</style>