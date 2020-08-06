<template>
  <div>
    <AppBar />

    <v-flex class="w-100 d-flex align-center justify-center mt-10">
      <div :class="this.$vuetify.breakpoint.xs ? 'chamada wrpa-invertido' : 'chamada' ">
        <div>
          <h1 class="mr-3 mb-3">Em defesa e resgate de animais domésticos em situação de risco</h1>
          <v-btn rounded :block="this.$vuetify.breakpoint.xs" color="yellow">
            Como posso ajudar
            <img
              width="15px"
              class="ml-2"
              src="../../../assets/imgs/home/icons/icon-button.svg"
            />
          </v-btn>
        </div>
        <img
          v-if="!this.$vuetify.breakpoint.sm"
          :width="this.$vuetify.breakpoint.xs ? '100%' : '60%'"
          src="../../../assets/imgs/home/img-home.png"
        />
        <img v-else width="60%" src="../../../assets/imgs/home/img-home-tablet.png" />
      </div>
    </v-flex>

    <v-flex class="w-100 d-flex align-center justify-center">
      <div class="proposito"></div>
    </v-flex>

    <v-flex class="w-100 d-flex align-center justify-end mb-10">
      <div class="informacoes direita wrpa-invertido">
        <div class="informacoes-texto">
          <h1 class="mb-3">Uma chamada legal para nosso usuário entrar na página sobre nós</h1>
          <v-btn text class="padding-botao">
            Conheça nossa história
            <img
              width="15px"
              class="ml-1"
              src="../../../assets/imgs/home/icons/icon-link.svg"
            />
          </v-btn>
        </div>
        <img
          class="ml-4"
          v-if="!this.$vuetify.breakpoint.smAndDown"
          width="60%"
          src="../../../assets/imgs/home/img-sobre-nos-desktop.png"
        />
        <img v-else width="100%" src="../../../assets/imgs/home/img-sobre-nos.png" />
      </div>
    </v-flex>

    <v-flex class="w-100 d-flex align-center">
      <img width="100%" src="../../../assets/imgs/home/session-organic-form.svg" />
    </v-flex>

    <v-flex class="w-100 d-flex align-center justify-start grey-variant-four pb-6">
      <div class="informacoes esquerda wrpa-invertido mt-10">
        <img
          class="mt-6"
          :width="!this.$vuetify.breakpoint.smAndDown ? '60%' : '100%'"
          src="../../../assets/imgs/home/img-oque-fazemos-01.png"
        />

        <div :class=" !this.$vuetify.breakpoint.smAndDown ? 'ml-3' : 'informacoes-texto'">
          <h1 class="mb-3">Oque fazemos at nu ugh sotphi lorem ipsum</h1>
          <p>Plate dui egestas augue euismod curae adipiscing eget pharetra curabitur leo in orci condimentum primis ultricies, hendrerit proin lorem ipsum card be nulok.</p>
        </div>
      </div>
    </v-flex>

    <v-flex class="w-100 d-flex align-center justify-end grey-variant-four">
      <div
        :class="!this.$vuetify.breakpoint.smAndDown ? 'informacoes direita wrpa-normal pb-8' : 'informacoes direita wrpa-normal'"
      >
        <div :class=" !this.$vuetify.breakpoint.smAndDown ? 'mr-3' : 'informacoes-texto'">
          <h1 class="mb-3">Numeros de animais que ajudamos vitae primis cras ad curab</h1>
          <p
            class="mb-3"
          >Platea dui egestas augue euismod curae adipiscing eget pharetra curabitur leo in orci condimentum primis ultricies, hendrerit proin</p>
          <v-btn rounded color="yellow" :block="this.$vuetify.breakpoint.smAndDown">
            Quero ajudar
            <img
              width="15px"
              class="ml-2"
              src="../../../assets/imgs/home/icons/icon-button.svg"
            />
          </v-btn>
        </div>
        <img
          class="mt-2"
          :width="!this.$vuetify.breakpoint.smAndDown ? '60%' : '100%'"
          src="../../../assets/imgs/home/img-oque-fazemos-02.png"
        />
      </div>
    </v-flex>

    <v-flex class="w-100 d-flex align-center justify-center blue-variant-three">
      <div class="chamada my-12 wrpa-invertido chamada-tablet">
        <v-btn v-if="this.$vuetify.breakpoint.smAndDown" class="mt-8" rounded block color="yellow">
          Quero adotar um pet
          <img
            width="15px"
            class="ml-2"
            src="../../../assets/imgs/home/icons/icon-button.svg"
          />
        </v-btn>
        <img
          :width="!this.$vuetify.breakpoint.smAndDown ? '60%' : '100%'"
          src="../../../assets/imgs/home/ilustracao-adote-um-amigo.png"
        />
        <div :class="!this.$vuetify.breakpoint.smAndDown ? 'ml-7' : ''">
          <h1 class="mb-3">Adotar é um ato genuíno de amor, faça parte da nossa família.</h1>
          <v-btn v-if="!this.$vuetify.breakpoint.smAndDown" rounded color="yellow">
            Quero adotar um pet
            <img
              width="15px"
              class="ml-2"
              src="../../../assets/imgs/home/icons/icon-button.svg"
            />
          </v-btn>
        </div>
      </div>
    </v-flex>

    <v-flex class="w-100 d-flex align-center justify-end pb-12">
      <div class="informacoes direita wrpa-invertido">
        <div class="informacoes-texto">
          <div class="border">
            <h1 class="mb-3">Inscrição personalizada convallis fusce cras</h1>
            <v-form>
              <v-text-field label="Nome" outlined dense></v-text-field>
              <v-text-field label="E-mail" outlined dense></v-text-field>
            </v-form>
            <v-btn rounded color="yellow" block>
              Fique por dentro
              <img
                width="15px"
                class="ml-2"
                src="../../../assets/imgs/home/icons/icon-button.svg"
              />
            </v-btn>
          </div>
        </div>
        <img
          v-if="!this.$vuetify.breakpoint.smAndDown"
          class="ml-12"
          width="60%"
          src="../../../assets/imgs/home/img-news-desktop.png"
        />
        <img class="mb-10" v-else width="100%" src="../../../assets/imgs/home/img-newsletter.png" />
      </div>
    </v-flex>

    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppBar from "../components/AppBar.vue";
import Footer from "../components/Footer.vue";

@Component({ components: { AppBar, Footer } })
export default class Home extends Vue {}
</script>

<style>
.chamada {
  padding: 40px 10px;
  width: 100%;
  max-width: 960px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.proposito {
  background-color: var(--v-blue-variant-three-base);
  padding: 150px;
  width: 100%;
}

.informacoes {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
}

.direita {
  max-width: 100% !important;
  margin-left: calc((100% - 960px) / 2);
  padding-left: 10px;
}

.esquerda {
  max-width: 100% !important;
  margin-right: calc((100% - 960px) / 2);
  padding-right: 10px;
}

.padding-botao {
  padding: 0 !important;
}

@media (max-width: 960px) {
  .chamada {
    padding: 40px 0px 40px 10px;
  }

  .chamada-tablet {
    padding: 10px 100px;
  }

  .informacoes-texto {
    padding: 10px 100px;
    width: 100%;
  }

  .direita {
    padding-left: 0px;
  }

  .esquerda {
    padding-right: 0px;
  }

  .wrpa-invertido {
    flex-wrap: wrap-reverse;
  }

  .wrpa-normal {
    flex-wrap: wrap;
  }
}

@media (max-width: 600px) {
  .chamada {
    padding: 40px 10px;
  }

  .chamada-tablet {
    padding: 0px 10px;
  }

  .informacoes-texto {
    padding: 10px 10px;
    width: 100%;
  }
}
</style>