<template>
  <div
    :style="!this.$vuetify.breakpoint.smAndDown ? 'height: 100vh' : ''"
    :class="
      !this.$vuetify.breakpoint.smAndDown
        ? 'd-flex flex-column justify-space-between'
        : ''
    "
  >
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
            style="width: 376px;
  height: 147px;
  margin: 0 0 24px;
  font-family: Helvetica;
  font-size: 40px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: var(--101010);
}"
          >
            A adoção é um ato de amor. Faça parte da família APA!
          </h1>

          <div
            v-if="!this.$vuetify.breakpoint.smAndDown"
            class="d-flex flex-column botoes"
          >
            <a
              href="https://api.whatsapp.com/send?phone=5534998368539&text=Ol%C3%A1,%20Gostaria%20de%20adotar%20um%20Pet!"
              target="_blank"
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
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5534998368539&text=Ol%C3%A1,%20Gostaria%20de%20apadrinhar!"
              target="_blank"
            >
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
            </a>
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
          <a
            href="https://api.whatsapp.com/send?phone=5534998368539&text=Ol%C3%A1,%20Gostaria%20de%20adotar%20um%20Pet!"
            target="_blank"
          >
            <v-btn height="56px" block class="mt-4" rounded color="yellow">
              Quero adotar
              <img
                width="24px"
                class="ml-2"
                src="../../../assets/imgs/home/icons/icon-button.svg"
              />
            </v-btn>
            <a
              href="https://api.whatsapp.com/send?phone=5534998368539&text=Ol%C3%A1,%20Gostaria%20de%20apadrinhar!"
              target="_blank"
            >
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5534998368539&text=Ol%C3%A1,%20Gostaria%20de%20apadrinhar!"
              target="_blank"
            >
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
            </a>
          </a>
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