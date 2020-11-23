<template>
  <v-container class="my-0">
    <v-card flat tile width="100%" min-height="100" class="pa-0 my-1" color="">
      <v-card-title class="px-0 pt-0 text-h5">{{ "Opis" }}</v-card-title>
      <v-card-text class="pa-0 description-text">
        {{ "\n" }}{{ description }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Description",
  props: {
    description: String,
  },
};
</script>

<style>
.desc-container {
  border-top: 1px solid brown !important;
  border-bottom: 1px solid brown !important;
  background-color: #c8e6c9 !important;
}
.description-text {
  white-space: pre-wrap !important;
}
</style>