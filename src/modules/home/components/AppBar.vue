<template>
  <div>
    <v-app-bar elevation="2" color="white" height="auto">
      <v-flex class="w-100 d-flex align-center justify-center">
        <div class="app-bar-conteudo">
          <img width="75px" class="mr-10" src="../../../assets/imgs/logo-apa-black.svg" />
          <div class="mr-10 app-bar-links">
            <a>Início</a>
            <a>Como posso ajudar</a>
            <a>Adoção</a>
            <a>Sobre nós</a>
            <a>Eventos</a>
            <a>Loja</a>
          </div>
          <div>
            <v-btn rounded color="yellow">
              Fazer uma Doação
              <img
                width="15px"
                class="ml-2"
                src="../../../assets/imgs/home/icon-button.svg"
              />
            </v-btn>
          </div>
        </div>
      </v-flex>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class AppBar extends Vue {}
</script>

<style>
.app-bar-conteudo {
  padding: 8px 10px;
  width: 100%;
  max-width: 960px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.v-toolbar__content {
  padding: 0px !important;
}

.app-bar-links {
  display: flex;
  justify-content: space-between;
  flex: 1;
}

.app-bar-links a {
  color: var(--v-grey-variant-two-base) !important;
}

.app-bar-links a:hover {
  color: var(--v-black-base) !important;
}
</style>