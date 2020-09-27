<template>
  <div class="teste">
    <AppBar />
    <v-flex
      class="w-100 d-flex align-center justify-center blue-variant-three pb-6"
      style="padding-top: 100px; "
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
            Ajude a manter viva a causa animal, sua contribuição é muito
            importante para nós
          </h1>

          <div
            v-if="!this.$vuetify.breakpoint.smAndDown"
            class="d-flex flex-row botoes"
          >
            <v-btn
              style="padding:5px; border-radius: 10px; margin: 5px; width: 30%;"
              min-height="79px"
              max-width="121px"
              class="mt-4"
              x-small
              color="#ffffff"
              elevation="2"
            >
              <div class="button-wrapper">
                <img
                  width="24px"
                  class="mb-2"
                  src="../../../assets/imgs/ajuda/ic-donation-money.svg"
                />
                <p>Doação em</p>
                <p>Dinheiro</p>
              </div>
            </v-btn>
            <v-btn
              style="padding:5px; border-radius: 10px; margin: 5px; width: 30%;"
              min-height="79px"
              max-width="121px"
              class="mt-4"
              x-small
              color="#ffffff"
              elevation="2"
            >
              <div class="button-wrapper">
                <img
                  width="24px"
                  class="mb-2"
                  src="../../../assets/imgs/ajuda/ic-donation-medicine.svg"
                />
                <p>Remédios e</p>
                <p>Produtos</p>
              </div>
            </v-btn>
            <v-btn
              style="padding: 5px; border-radius: 10px; margin: 5px; width: 30%;"
              min-height="79px"
              max-width="121px"
              class="mt-4"
              x-small
              color="#ffffff"
              elevation="2"
            >
              <div class="button-wrapper">
                <img
                  width="24px"
                  class="mb-2"
                  src="../../../assets/imgs/ajuda/ic-voluntery.svg"
                />
                <p>Tornar-se</p>
                Voluntário
              </div>
            </v-btn>
          </div>
        </div>
        <img
          :width="this.$vuetify.breakpoint.smAndDown ? '100%' : '50%'"
          src="../../../assets/imgs/ajuda/manAndDog.svg"
        />
        <div
          v-if="this.$vuetify.breakpoint.smAndDown"
          style="justify-content=space-around"
          class="d-flex flex-row botoes"
        >
          <v-btn
            style="padding:5px; border-radius: 10px; margin: 5px; width: 30%;"
            min-height="79px"
            max-width="121px"
            class="mt-4"
            x-small
            color="#ffffff"
            elevation="2"
          >
            <div class="button-wrapper">
              <img
                width="24px"
                class="mb-2"
                src="../../../assets/imgs/ajuda/ic-donation-money.svg"
              />
              <p>Doação em</p>
              <p>Dinheiro</p>
            </div>
          </v-btn>
          <v-btn
            style="padding:5px; border-radius: 10px; margin: 5px; width: 30%;"
            min-height="79px"
            max-width="121px"
            class="mt-4"
            x-small
            color="#ffffff"
            elevation="2"
          >
            <div class="button-wrapper">
              <img
                width="24px"
                class="mb-2"
                src="../../../assets/imgs/ajuda/ic-donation-medicine.svg"
              />
              <p>Remédios e</p>
              <p>Produtos</p>
            </div>
          </v-btn>
          <v-btn
            style="padding: 5px; border-radius: 10px; margin: 5px; width: 30%;"
            min-height="79px"
            max-width="121px"
            class="mt-4"
            x-small
            color="#ffffff"
            elevation="2"
          >
            <div class="button-wrapper">
              <img
                width="24px"
                class="mb-2"
                src="../../../assets/imgs/ajuda/ic-voluntery.svg"
              />
              <p>Tornar-se</p>
              Voluntário
            </div>
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
export default class Ajuda extends Vue {}
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

.botoes {
  width: 100%;
}

.button-wrapper {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  padding: 0;
  padding: 20px 0px 20px 0px;
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
