<template>
  <v-flex class="w-100 d-flex align-center justify-center blue-variant-three">
    <div class="footer">
      <img
        class="mb-4"
        width="50px"
        src="../../assets/imgs/logo-apa-black.svg"
      />
      <div
        :class="
          this.$vuetify.breakpoint.smAndDown
            ? 'd-flex justify-space-between  align-end flex-wrap'
            : 'd-flex justify-space-between  align-end'
        "
      >
        <div class="flex-grow-1">
          <p class="border-titulos">Contatos</p>
          <p>apauberlandia@gmail.com</p>
          <p>0800 000 0000</p>
        </div>

        <div
          v-if="!this.$vuetify.breakpoint.xs"
          :class="
            this.$vuetify.breakpoint.smAndDown
              ? ' flex-grow-0 mr-12'
              : ' flex-grow-0 mr-12'
          "
        >
          <p class="border-titulos">Páginas</p>
          <div class="d-flex justify-space-between">
            <div
              :class="this.$vuetify.breakpoint.smAndDown ? '' : 'mr-8'"
              :style="
                this.$vuetify.breakpoint.smAndDown ? 'margin-right:80px' : ''
              "
            >
              <p>Início</p>
              <p>Como posso ajudar</p>
            </div>
            <div>
              <p>Adoção</p>
              <p>Sobre nós</p>
            </div>
          </div>
        </div>

        <div
          v-if="!this.$vuetify.breakpoint.smAndDown"
          class="flex-grow-1 d-flex justify-space-between ml-4"
        >
          <div class="redes_sociais d-flex justify-center align-center">
            <img src="../../assets/imgs/redesSociais/ic-instagram.svg" />
          </div>
          <div class="redes_sociais d-flex justify-center align-center">
            <img src="../../assets/imgs/redesSociais/ic-facebook.svg" />
          </div>
          <div class="redes_sociais d-flex justify-center align-center">
            <img src="../../assets/imgs/redesSociais/ic-linkedin.svg" />
          </div>
          <div class="redes_sociais d-flex justify-center align-center">
            <img src="../../assets/imgs/redesSociais/ic-youtube.svg" />
          </div>
        </div>
      </div>

      <div v-if="this.$vuetify.breakpoint.xs" class="border_top pt-6">
        <p class="border-titulos">Páginas</p>
        <div>
          <p>Início</p>
          <p>Como posso ajudar</p>
          <p>Adoção</p>
          <p>Sobre nós</p>
        </div>
      </div>

      <div
        v-if="this.$vuetify.breakpoint.smAndDown"
        class="d-flex pt-12 border_top"
      >
        <div class="redes_sociais d-flex justify-center align-center mr-5">
          <img src="../../assets/imgs/redesSociais/ic-instagram.svg" />
        </div>
        <div class="redes_sociais d-flex justify-center align-center mr-5">
          <img src="../../assets/imgs/redesSociais/ic-facebook.svg" />
        </div>
        <div class="redes_sociais d-flex justify-center align-center mr-5">
          <img src="../../assets/imgs/redesSociais/ic-linkedin.svg" />
        </div>
        <div class="redes_sociais d-flex justify-center align-center mr-5">
          <img src="../../assets/imgs/redesSociais/ic-youtube.svg" />
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
  padding: 32px 10px 64px 10px;
  width: 100%;
  max-width: 960px;
}

.redes_sociais {
  height: 48px;
  width: 48px;
  background-color: white;
  border-radius: 100%;
}

.border_top {
  margin-top: 30px;
  border-top: 1px solid #101010;
}
</style>