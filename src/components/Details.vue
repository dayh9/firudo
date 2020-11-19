<template>
  <v-container class="pa-0">
    <v-card flat height="40">
      <v-card-title class="pl-3 pt-0 text-h5">Szczegóły</v-card-title>
    </v-card>
    <v-container class="lighten-5 mb-5">
      <v-card flat class="column-wrapper">
        <v-card flat v-for="(s, id) in details" :key="id">
          <v-card-text class="ma-0 pa-0 text-body-1">
            {{ Object.keys(s)[0] }}:
            <span class="font-weight-bold">
              {{ Object.values(s)[0] }}
            </span>
          </v-card-text>
        </v-card>
      </v-card>
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