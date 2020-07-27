<template>
  <v-flex class="w-100 d-flex align-center justify-center blue-variant-three">
    <div class="footer">
      <img class="mb-6" width="75px" src="../../../assets/imgs/logo-apa-black.svg" />
      <div class="footer-conteudo">
        <div class="mr-12">
          <p class="border-titulos">Contatos</p>
          <p class="mt-3">apauberlandia@gmail.com</p>
          <p>0800 000 0000</p>
        </div>
        <div class="ml-12">
          <p class="border-titulos">Páginas</p>
          <v-row>
            <v-col cols="6">
              <p>Inicio</p>
              <p>Como posso ajudar</p>
              <p>Adoção</p>
            </v-col>
            <v-col cols="6">
              <p>Sobre nós</p>
              <p>Eventos</p>
              <p>Loja</p>
            </v-col>
          </v-row>
        </div>
      </div>
      <div class="footer-conteudo border-separacao my-6">
        <div class="mt-3">
          <p>© 2020 Associação Protetora de Animais,</p>
          <p>R. Valdomira Pimenta - Chácaras Rancho Alegre</p>
          <p>Uberlândia - MG, 38412-685</p>
        </div>
      </div>
    </div>
  </v-flex>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Footer extends Vue {}
</script>

<style>
.footer {
  padding: 15px 10px;
  width: 100%;
  max-width: 960px;
}

.footer-conteudo {
  display: flex;
}

.footer-conteudo div {
  flex: 1;
}

.border-titulos {
  border-bottom: 1px solid var(--v-black-base);
}

.border-separacao {
  border-top: 1px solid var(--v-black-base);
}
</style>