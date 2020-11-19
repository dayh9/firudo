<template>
  <v-container>
    <v-card flat tile width="100%" height="300" class="pa-0" color="red">
      <v-card-title class="px-0 pt-0 text-h5">{{
        Object.keys(description)[0]
      }}</v-card-title>
      <v-card-text class="pa-0 description-text">
        {{ description["Opis"] }}
      </v-card-text>
      ac</v-card
    >
  </v-container>
</template>

<script>
export default {
  name: "Description",
  props: {
    description: Object,
  },
};
</script>

<style>
.desc-container {
  color: darkblue !important;
  background-color: darkcyan !important;
}
.description-text {
  white-space: pre-wrap !important;
}
</style>