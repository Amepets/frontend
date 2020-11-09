<template>
  <div style="height: 100vh;" class=" d-flex flex-column justify-space-between">
    <AppBar />
    <v-flex
      class="w-100 d-flex align-center justify-center blue-variant-three pb-6"
      style="padding-top: 100px"
    >
      <div
        :class="
          this.$vuetify.breakpoint.smAndDown ? 'chamada wrpa-normal' : 'chamada'
        "
      >
        <div :class="this.$vuetify.breakpoint.smAndDown ? 'mb-4' : 'mr-12'">
          <h1
            :class="this.$vuetify.breakpoint.smAndDown ? 'text-center' : 'mb-3'"
          >
            Lorem ipsum sodales nam morbi enim dui per urna at.
          </h1>

          <div
            v-if="!this.$vuetify.breakpoint.smAndDown"
            class="d-flex flex-column botoes"
          >
            <v-btn
              width="268px"
              height="56px"
              class="mt-4"
              rounded
              color="yellow"
            >
              Quero adotar
              <img
                width="24px"
                class="ml-2"
                src="../../../assets/imgs/home/icons/icon-button.svg"
              />
            </v-btn>
            <v-btn
              height="56px"
              width="268px"
              class="mt-4"
              outlined
              rounded
              color="white"
            >
              Quero apadrinhar
              <img
                width="24px"
                class="ml-2"
                src="../../../assets/imgs/icon-button-white.svg"
              />
            </v-btn>
          </div>
        </div>
        <img
          :width="this.$vuetify.breakpoint.smAndDown ? '100%' : '50%'"
          src="../../../assets/imgs/adocao/ilustracao-adocao.svg"
        />
        <div
          v-if="this.$vuetify.breakpoint.smAndDown"
          class="d-flex flex-column botoes"
        >
          <v-btn height="56px" block class="mt-4" rounded color="yellow">
            Quero adotar
            <img
              width="24px"
              class="ml-2"
              src="../../../assets/imgs/home/icons/icon-button.svg"
            />
          </v-btn>
          <v-btn
            height="56px"
            block
            class="mt-4"
            outlined
            rounded
            color="white"
          >
            Quero apadrinhar
            <img
              width="24px"
              class="ml-2"
              src="../../../assets/imgs/icon-button-white.svg"
            />
          </v-btn>
        </div>
      </div>
    </v-flex>

    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppBar from "../../components/AppBar.vue";
import Footer from "../../components/Footer.vue";

@Component({ components: { AppBar, Footer } })
export default class Adocao extends Vue {
  public created() {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }
}
</script>

<style>
.chamada {
  padding: 0px 10px;
  width: 100%;
  max-width: 960px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (min-width: 960px) {
  .botoes {
    width: 269px !important;
  }
}

@media (max-width: 960px) {
  .wrpa-invertido {
    flex-wrap: wrap-reverse;
  }

  .wrpa-normal {
    flex-wrap: wrap;
  }

  .chamada {
    padding: 20px 140px;
  }

  .botoes {
    width: 100%;
  }
}

@media (max-width: 600px) {
  .chamada {
    padding: 20px 15px;
  }
}
</style>