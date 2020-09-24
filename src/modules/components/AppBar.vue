<template>
  <div class="app-bar" v-if="!this.$vuetify.breakpoint.smAndDown">
    <v-flex class="w-100 d-flex align-center justify-center">
      <div class="app-bar-conteudo">
        <img width="50px" class="mr-10" src="../../assets/imgs/logo-apa.png" />
        <div class="mr-10 app-bar-links">
          <a>Início</a>
          <a>Como posso ajudar</a>
          <a>Adoção</a>
          <router-link to="/sobreNos">
            <a>Sobre nós</a>
          </router-link>
          <a>Eventos</a>
          <a>Loja</a>
        </div>
        <div>
          <v-btn rounded color="yellow">
            Ajudar
            <img
              width="15px"
              class="ml-2"
              src="../../assets/imgs/home/icons/icon-button.svg"
            />
          </v-btn>
        </div>
      </div>
    </v-flex>
  </div>
  <div class="app-bar" v-else>
    <v-flex class="w-100 d-flex align-center justify-center">
      <div class="app-bar-conteudo">
        <img
          width="50px"
          class="mr-10"
          src="../../assets/imgs/logo-apa-black.svg"
        />
        <div>
          <v-btn rounded color="yellow">
            Ajudar
            <img
              width="15px"
              class="ml-2"
              src="../../assets/imgs/home/icons/icon-button.svg"
            />
          </v-btn>

          <v-menu offset-y v-if="this.$vuetify.breakpoint.smAndDown">
            <template v-slot:activator="{ on }">
              <v-btn text class="padding-botao" v-on="on">
                <img
                  class="mr-n8"
                  src="../../assets/imgs/home/icons/icon-menu.svg"
                />
              </v-btn>
            </template>
            <v-list class="mt-2 pr-10">
              <p class="ml-2">Início</p>
              <p class="ml-2">Como posso ajudar</p>
              <p class="ml-2">Adoção</p>
              <p class="ml-2">Sobre nós</p>
            </v-list>
          </v-menu>
        </div>
      </div>
    </v-flex>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class AppBar extends Vue {}
</script>

<style>
.app-bar {
  box-shadow: 0 2px 3px 0 rgba(16, 16, 16, 0.15);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: white;
}

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

@media (max-width: 960px) {
  .app-bar-conteudo {
    padding: 12px 10px;
    width: 100%;
    max-width: 960px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
