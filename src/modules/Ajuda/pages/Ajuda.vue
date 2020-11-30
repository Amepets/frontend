<template>
  <div
    :style="!this.$vuetify.breakpoint.smAndDown ? 'height: 100vh' : ''"
    :class="
      !this.$vuetify.breakpoint.smAndDown
        ? 'd-flex flex-column justify-space-between'
        : ''
    "
  >
    <AppBar v-if="!isOpenDadosBancarios && !isOpenPontosColeta" />
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
            data-aos-anchor-placement="top-bottom"
            data-aos="fade-right"
            data-aos-duration="800"
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
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration="800"
              style="padding: 5px; border-radius: 10px; margin: 5px"
              width="141px"
              height="99px"
              min-height="79px"
              max-width="121px"
              class="mt-4 mr-3"
              x-small
              color="#ffffff"
              elevation="2"
              @click="isOpenDadosBancarios = true"
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
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-down"
              data-aos-duration="800"
              style="padding: 5px; border-radius: 10px; margin: 5px"
              min-height="79px"
              width="141px"
              height="99px"
              max-width="121px"
              class="mt-4 mr-3"
              x-small
              color="#ffffff"
              elevation="2"
              @click="isOpenPontosColeta = true"
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
            <a
              href="https://api.whatsapp.com/send?phone=5534998368539&text=Ol%C3%A1,%20Gostaria%20de%20me%20voluntariar"
              target="_blank"
            >
              <v-btn
                data-aos-anchor-placement="top-bottom"
                data-aos="fade-up"
                data-aos-duration="800"
                style="padding: 5px; border-radius: 10px; margin: 5px"
                min-height="79px"
                max-width="121px"
                width="141px"
                height="99px"
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
                  <p>Voluntário</p>
                </div>
              </v-btn>
            </a>
          </div>
        </div>
        <img
          data-aos-anchor-placement="top-bottom"
          data-aos="fade-left"
          data-aos-duration="800"
          :width="this.$vuetify.breakpoint.smAndDown ? '100%' : '50%'"
          src="../../../assets/imgs/ajuda/manAndDog.svg"
        />
        <div
          v-if="this.$vuetify.breakpoint.smAndDown"
          style="justify-content=space-around"
          class="d-flex flex-row botoes"
        >
          <v-btn
            style="padding: 5px; border-radius: 10px; margin: 5px; width: 30%"
            min-height="79px"
            max-width="121px"
            class="mt-4"
            width="141px"
            height="99px"
            x-small
            color="#ffffff"
            elevation="2"
            @click="isOpenDadosBancarios = true"
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
            style="padding: 5px; border-radius: 10px; margin: 5px; width: 30%"
            min-height="79px"
            max-width="121px"
            class="mt-4"
            x-small
            width="141px"
            height="99px"
            color="#ffffff"
            elevation="2"
            @click="isOpenPontosColeta = true"
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
            style="padding: 5px; border-radius: 10px; margin: 5px; width: 30%"
            min-height="79px"
            max-width="121px"
            class="mt-4 alinhamento-botao"
            width="141px"
            height="99px"
            x-small
            color="#ffffff"
            elevation="2"
          >
            <a
              href="https://api.whatsapp.com/send?phone=5534998368539&text=Ol%C3%A1,%20Gostaria%20de%20me%20voluntariar"
              target="_blank"
            >
              <div class="button-wrapper">
                <img
                  width="24px"
                  class="mb-2"
                  src="../../../assets/imgs/ajuda/ic-voluntery.svg"
                />
                <p>Tornar-se</p>
                <p>Voluntário</p>
                <p></p>
              </div>
            </a>
          </v-btn>
        </div>
      </div>
    </v-flex>
    <ModalDadosBancarios
      v-if="isOpenDadosBancarios"
      :showModal.sync="isOpenDadosBancarios"
    />
    <ModalPontosColeta
      v-if="isOpenPontosColeta"
      :showModal.sync="isOpenPontosColeta"
    />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppBar from "../../components/AppBar.vue";
import Footer from "../../components/Footer.vue";
import ModalDadosBancarios from "../../components/modais/DadosBancarios.vue";
import ModalPontosColeta from "../../components/modais/PontosColeta.vue";

@Component({
  components: { AppBar, Footer, ModalDadosBancarios, ModalPontosColeta }
})
export default class Ajuda extends Vue {
  private isOpenDadosBancarios = false;

  private isOpenPontosColeta = false;

  public created() {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }
}
</script>

<style>
.alinhamento-botao {
  justify-content: flex-start;
}

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
  justify-items: flex-start;
  justify-self: flex-start;
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
