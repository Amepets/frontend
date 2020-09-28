<template>
  <v-app-bar
    fixed
    v-if="!this.$vuetify.breakpoint.smAndDown"
    elevation="2"
    color="white"
    height="auto"
  >
    <v-flex class="w-100 d-flex align-center justify-center">
      <div class="app-bar-conteudo">
        <div class="d-flex align-center justify-center">
          <img
            width="50px"
            class="mr-8"
            src="../../assets/imgs/logo-apa-black.svg"
          />
          <router-link class="mr-8" to="/">Início</router-link>
          <router-link class="mr-8" to="/ajuda">Como posso ajudar</router-link>
          <router-link class="mr-8" to="/adocao">Adoção</router-link>
          <router-link to="/sobreNos">
            Sobre nós
          </router-link>
        </div>
        <div>
          <v-btn rounded color="yellow">
            Ajudar
            <img
              width="24px"
              class="ml-2"
              src="../../assets/imgs/home/icons/icon-button.svg"
            />
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-app-bar>
  <v-app-bar fixed v-else elevation="2" color="white" height="auto">
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
              width="24px"
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
              <div class="d-flex flex-column">
                <router-link class="ml-2" to="/">Início</router-link>
                <router-link class="ml-2" to="/ajuda"
                  >Como posso ajudar</router-link
                >
                <router-link class="ml-2" to="/adocao">Adoção</router-link>
                <router-link class="ml-2" to="/sobreNos">
                  Sobre nós
                </router-link>
              </div>
            </v-list>
          </v-menu>
        </div>
      </div>
    </v-flex>
  </v-app-bar>
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

.app-bar-conteudo a {
  color: var(--v-grey-variant-two-base) !important;
}

.app-bar-conteudo a:hover {
  color: var(--v-black-base) !important;
  font-weight: 500;
}

.app-bar-conteudo a.router-link-exact-active {
  color: var(--v-black-base) !important;
  font-weight: 500;
}
</style>
