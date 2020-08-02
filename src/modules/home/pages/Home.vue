<template>
  <div>
    <AppBar v-if="!this.$vuetify.breakpoint.sm" />

    <v-flex class="w-100 d-flex align-center justify-center">
      <div class="chamada">
        <div>
          <h1 class="mr-3 mb-3">Em defesa e resgate de animais domésticos em situação de risco</h1>
          <v-btn rounded color="yellow">
            Como posso ajudar
            <img
              width="15px"
              class="ml-2"
              src="../../../assets/imgs/home/icons/icon-button.svg"
            />
          </v-btn>
        </div>
        <img width="60%" src="../../../assets/imgs/home/img-home.png" />
      </div>
    </v-flex>

    <v-flex class="w-100 d-flex align-center justify-center">
      <div class="proposito"></div>
    </v-flex>

    <v-flex class="w-100 d-flex align-center justify-end">
      <div class="informacoes direita">
        <div>
          <h1 class="mr-3 mb-3">Uma chamada legal para nosso usuário entrar na página sobre nós</h1>
          <v-btn text class="padding-botao">
            Conheça nossa história
            <img
              width="15px"
              class="ml-1"
              src="../../../assets/imgs/home/icons/icon-link.svg"
            />
          </v-btn>
        </div>
        <img width="60%" src="../../../assets/imgs/home/img-sobre-nos-desktop.png" />
      </div>
    </v-flex>

    <v-flex class="w-100 d-flex align-center">
      <img width="100%" src="../../../assets/imgs/home/session-organic-form.svg" />
    </v-flex>

    <v-flex class="w-100 d-flex align-center justify-end grey-variant-four">
      <div class="informacoes direita mt-10">
        <div class="mr-3">
          <h1 class="mb-3">Oque fazemos at nu ugh sotphi lorem ipsum</h1>
          <p>Plate dui egestas augue euismod curae adipiscing eget pharetra curabitur leo in orci condimentum primis ultricies, hendrerit proin lorem ipsum card be nulok.</p>
        </div>
        <img width="60%" src="../../../assets/imgs/home/img-oque-fazemos-01.png" />
      </div>
    </v-flex>

    <v-flex class="w-100 d-flex align-center justify-start grey-variant-four">
      <div class="informacoes esquerda">
        <img width="60%" src="../../../assets/imgs/home/img-oque-fazemos-02.png" />

        <div class="ml-3">
          <h1 class="mb-3">Numeros de animais que ajudamos vitae primis cras ad curab</h1>
          <p
            class="mb-3"
          >Platea dui egestas augue euismod curae adipiscing eget pharetra curabitur leo in orci condimentum primis ultricies, hendrerit proin</p>
          <v-btn rounded color="yellow">
            Quero ajudar
            <img
              width="15px"
              class="ml-2"
              src="../../../assets/imgs/home/icons/icon-button.svg"
            />
          </v-btn>
        </div>
      </div>
    </v-flex>

    <v-flex class="w-100 d-flex align-center justify-center blue-variant-three">
      <div class="chamada my-12">
        <div>
          <h1 class="mr-3 mb-3">Adotar é um ato genuíno de amor, faça parte da nossa família.</h1>
          <v-btn rounded color="yellow">
            Quero adotar um pet
            <img
              width="15px"
              class="ml-2"
              src="../../../assets/imgs/home/icons/icon-button.svg"
            />
          </v-btn>
        </div>
        <img width="60%" src="../../../assets/imgs/home/ilustracao-adote-um-amigo.png" />
      </div>
    </v-flex>

    <v-flex class="w-100 d-flex align-center justify-start grey-variant-four">
      <div class="informacoes direita">
        <div class="mr-12">
          <h1 class="mb-3">Inscrição personalizada convallis fusce cras</h1>
          <v-text-field label="Nome" outlined dense></v-text-field>
          <v-text-field label="E-mail" outlined dense></v-text-field>
          <v-btn rounded color="yellow" block>
            Fique por dentro
            <img
              width="15px"
              class="ml-2"
              src="../../../assets/imgs/home/icons/icon-button.svg"
            />
          </v-btn>
        </div>

        <img width="60%" src="../../../assets/imgs/home/img-news-desktop.png" />
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
  padding: 0 0 30px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.direita {
  margin-left: calc((100% - 960px) / 2);
  padding-left: 10px;
}

.esquerda {
  margin-right: calc((100% - 960px) / 2);
  padding-right: 10px;
}

.padding-botao {
  padding: 0 !important;
}
</style>