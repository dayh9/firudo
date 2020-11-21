<template>
  <div class="offer">
    <v-card class="" height="100%">
      <v-app-bar
        tile
        dense
        absolute
        color="secondary"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
      >
        <v-icon color="click" left>mdi-home</v-icon>

        <v-toolbar-title class="accent--text">{{
          example_model["title"]
        }}</v-toolbar-title>

        <v-spacer></v-spacer>
        <h3 class="secondary--text">
          {{ Object.values(example_model.price).toLocaleString("pl-PL") }} zł
        </h3>
      </v-app-bar>

      <v-sheet id="scrolling-techniques-7" class="overflow-visible">
        <v-spacer style="height: 35px"></v-spacer>
        <Gallery :photos="this.example_model.photos.Zdjęcia" />
        <v-divider class="mx-3 my-1 secondary"></v-divider>
        <Details :details="this.example_model.details" />
        <v-divider class="mx-3 my-1 secondary"></v-divider>

        <Description :description="this.example_model.description" />
        <v-divider class="mx-3 my-1 secondary"></v-divider>
        <v-btn @click="addItem" color="click" class="ma-5" dark elevation="2"
          >CLICK ME</v-btn
        >
        <v-container style="height: 1000px"> </v-container>
      </v-sheet>
      <!-- 

    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores iure
      ipsam ut odit et provident veritatis dicta nisi error consectetur. Ab
      iusto quod enim sunt consequatur ratione adipisci voluptatem laboriosam
      facere maiores perspiciatis id reiciendis quia quis quibusdam ut saepe
      architecto et molestiae dolorem minus, tempora soluta eveniet omnis.
      Inventore cumque voluptatum, doloremque facere distinctio minima dolorum.
      Commodi voluptatibus laudantium amet eaque saepe impedit consequuntur
      natus officia esse sit possimus nobis ipsa, blanditiis reiciendis ex quam
      necessitatibus ad assumenda quasi voluptatum? Adipisci voluptate esse et
      mollitia saepe temporibus error laborum cupiditate? Aliquid, ipsum in
      numquam illo quis expedita accusamus! Vitae, dignissimos sapiente
      consectetur assumenda eligendi debitis quae, maiores non doloribus culpa
      eos nihil ad, labore a quibusdam repellat omnis nemo officia recusandae
      sint dolorem totam ab consequuntur autem? Rem commodi sit tempora velit
      molestiae molestias accusamus aut voluptatem impedit quidem atque omnis
      quae voluptatum sapiente quam, libero placeat! Blanditiis fugit neque, ex
      eos aperiam officia recusandae quia, soluta beatae ipsum voluptates
      praesentium? Laboriosam, consectetur ex quisquam earum nulla eaque
      reiciendis illo perferendis culpa ullam dolorum sequi, error commodi
      eveniet laborum. Asperiores quis nesciunt voluptatem aut laboriosam eius
      perspiciatis odit unde nihil consequuntur. Est odio officia vel ullam
      nobis itaque veniam, nulla cumque corporis sit repellendus labore
      doloribus laboriosam quis, adipisci nisi repudiandae architecto magni,
      accusantium et beatae. Unde perspiciatis, exercitationem nostrum veritatis
      quia fugiat provident ea rem nam temporibus voluptates inventore beatae
      deserunt accusamus. Similique, dolorum nisi dolores quae ipsum architecto
      repellendus culpa tempora, cumque voluptate, in ad aut molestiae deserunt
      obcaecati laborum? Molestias itaque, consectetur voluptate et nihil
      aliquid laborum aperiam dolorem ducimus debitis, dolore neque sit!
      Sapiente libero fuga fugit eius repellendus ut velit architecto
      consequuntur possimus quibusdam neque placeat numquam, rem veritatis
      laborum odit nisi illo dolorem quae id sequi nemo perferendis! Tempore ab
      libero necessitatibus odit sit labore dicta incidunt sunt, atque porro
      ipsa possimus cum modi nesciunt autem ut velit esse eos dolore animi
      adipisci et repellendus at eum! Alias veritatis nihil sint id eveniet
      tempora officiis officia dolor. Ullam in quasi deserunt. Incidunt
      aspernatur, reiciendis porro delectus quo harum fuga nam iure accusamus
      eius possimus dolorem distinctio blanditiis sed. Et totam commodi
      necessitatibus iure, doloremque quo dignissimos, qui recusandae facere
      distinctio ullam! Qui optio eos delectus sed beatae in consectetur vel
      suscipit illum saepe necessitatibus velit nemo autem enim, facilis soluta
      assumenda vero. Ipsam nobis laudantium impedit nam tempore ipsum quo
      eveniet corporis iusto ratione perspiciatis harum autem atque tempora
      numquam ad, quasi aspernatur iste voluptates dolorum consequatur?
      Architecto incidunt, quas iste, beatae eos odit sit nisi alias enim
      tempore ab dolor error perferendis earum optio ullam id hic tenetur atque.
      Molestias amet voluptas labore maiores consequatur rerum a veritatis,
      commodi libero id soluta? Quasi necessitatibus quisquam cumque accusantium
      asperiores exercitationem quam blanditiis deserunt similique aliquid.
      Deserunt accusantium, necessitatibus vel distinctio nemo dolor maxime non
      ea, repellendus cupiditate iste soluta alias facere possimus ducimus,
      cumque ullam dignissimos? Fuga ipsum numquam deleniti repellendus
      asperiores consectetur soluta molestias praesentium sunt voluptatem eos
      aliquam, excepturi id? Accusantium?Deserunt accusantium, necessitatibus
      vel distinctio nemo dolor maxime non ea, repellendus cupiditate iste
      soluta alias facere possimus ducimus, cumque ullam dignissimos? Fuga ipsum
      numquam deleniti repellendus asperiores consectetur soluta molestias
      praesentium sunt voluptatem eos aliquam, excepturi id?
      Accusantium?Deserunt accusantium, necessitatibus vel distinctio nemo dolor
      maxime non ea, repellendus cupiditate iste soluta alias facere possimus
      ducimus, cumque ullam dignissimos? Fuga ipsum numquam deleniti repellendus
      asperiores consectetur soluta molestias praesentium sunt voluptatem eos
      aliquam, excepturi id? Accusantium?Deserunt accusantium, necessitatibus
      vel distinctio nemo dolor maxime non ea, repellendus cupiditate iste
      soluta alias facere possimus ducimus, cumque ullam dignissimos? Fuga ipsum
      numquam deleniti repellendus asperiores consectetur soluta molestias
      praesentium sunt voluptatem eos aliquam, excepturi id? Accusantium?
    </p>
  </div> -->
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
    Description,
  },
  data() {
    return {
      example_model: {
        title: "Mieszkanie dla ciebie",
        price: { Cena: 300000 },
        address: {
          locality: { Miejscowość: "Wrocław" },
          district: { Dzielnica: "Tarnogaj" },
          street: { Ulica: "Klimasa" },
        },
        description: {
          Opis:
            "Sprzedam mieszkanie\nduże i umeblowane mieszkanie w centrum Wrocławia\nOkazja jedyna w swym rodzaju" +
            "\npolecam badzo",
        },
        photos: {
          Zdjęcia: [
            "garden.jpg",
            "garage.jpg",
            "house.jpg",
            "m1.jpg",
            "m2.jpg",
            "m3.jpg",
            "m4.jpg",
            "m5.jpg",
            "m6.jpg",
            "m7.jpg",
            "m8.jpg",
            "m9.jpg",
          ],
        },
        details: {
          size: { Powierzchnia: 30 },
          priceForM2: { "Cena za m2": 10000 },
          rooms: { "Liczba pokoi": 3 },
          market: { Rynek: "pierwotny" },
          floor: { Piętro: 2 },
          year: { "Rok budowy": 1980 },
          state: { "Stan wykończenia": "do zamieszkania" },
          rent: { Czynsz: 300 },
        },
      },
    };
  },
  methods: {
    async addItem() {
      db.ref("users").push(this.example_model);
      alert("aaa");
    },
    changePhoto(n) {
      this.actualPhoto = n % this.example_model.photos.Zdjęcia.length;
    },
  },
  firebase: {
    users: db.ref(),
    offers: db.ref(),
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
</style>
