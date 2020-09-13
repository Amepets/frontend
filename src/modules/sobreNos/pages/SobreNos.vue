<template>
  <div>
    <AppBar />

    <v-flex class="w-100 d-flex align-center justify-center mt-10">
      <div :class="this.$vuetify.breakpoint.smAndDown ? 'chamada wrpa-invertido' : 'chamada' ">
        <div>
          <h1
            :class="this.$vuetify.breakpoint.smAndDown ? 'text-center' : 'mr-12 mb-3' "
          >Lorem ipsum sodales nam morbi enim dui per urna at ullam.</h1>
        </div>
        <img
          :width="this.$vuetify.breakpoint.smAndDown ? '100%' : '50%'"
          src="../../../assets/imgs/sobreNos/img-sobre-nos.png"
        />
      </div>
    </v-flex>

    <v-flex class="w-100 d-flex align-center">
      <img width="100%" src="../../../assets/imgs/sobreNos/session-organic-form-blue.png" />
    </v-flex>

    <v-flex class="w-100 d-flex align-center justify-center blue-variant-three">
      <div :class="this.$vuetify.breakpoint.smAndDown ? 'chamada wrpa-normal' : 'chamada' ">
        <div :class="this.$vuetify.breakpoint.smAndDown ? 'mb-4' : 'mr-12'">
          <h1 class="mb-3">História</h1>
          <p>
            Lorem ipsum sodales nam morbi enim dui per urna at, ullamcorper lobortis blandit tristique aptent vulputate sollicitudin diam aptent, et ultricies convallis congue sodales magna enim nullam.
            Eleifend sociosqu nec pulvinar nec curabitur metus faucibus placerat semper, euismod semper congue sollicitudin potenti nam.
            Uismod conubia turpis pharetra, amet fringilla malesuada taciti quisque primis curae lacinia.
            Semper mi tortor sem porttitor nam metus habitant cubilia lobortis nisi tempus mauris sem, tristique sodales elit elementum aliquam pulvinar commodo eget donec vulputate molestie.
          </p>
          <v-btn v-if="!this.$vuetify.breakpoint.smAndDown" class="mt-4" rounded color="yellow">
            Como posso ajudar
            <img
              width="15px"
              class="ml-2"
              src="../../../assets/imgs/home/icons/icon-button.svg"
            />
          </v-btn>
        </div>
        <img
          :width="this.$vuetify.breakpoint.smAndDown ? '100%' : '50%'"
          src="../../../assets/imgs/sobreNos/img-historia.png"
        />
        <v-btn block v-if="this.$vuetify.breakpoint.smAndDown" class="mt-4" rounded color="yellow">
          Como posso ajudar
          <img
            width="15px"
            class="ml-2"
            src="../../../assets/imgs/home/icons/icon-button.svg"
          />
        </v-btn>
      </div>
    </v-flex>

    <v-flex class="w-100 d-flex align-center">
      <img width="100%" src="../../../assets/imgs/sobreNos/session-organic-form-blue-bottom.png" />
    </v-flex>

    <v-flex class="w-100 d-flex align-center justify-center">
      <div :class="this.$vuetify.breakpoint.smAndDown ? 'chamada wrpa-invertido' : 'chamada' ">
        <v-btn
          block
          v-if="this.$vuetify.breakpoint.smAndDown"
          class="mt-4 mb-6"
          rounded
          color="yellow"
        >
          Quero adotar
          <img
            width="15px"
            class="ml-2"
            src="../../../assets/imgs/home/icons/icon-button.svg"
          />
        </v-btn>
        <img
          :width="this.$vuetify.breakpoint.smAndDown ? '100%' : '50%'"
          src="../../../assets/imgs/sobreNos/img-adocao.png"
        />

        <div :class="this.$vuetify.breakpoint.smAndDown ? 'mb-4 mt-2' : 'ml-12'">
          <h1 class="mb-3">Adoção responsável</h1>
          <p>Platea dui egestas augue euismod curae adipiscing eget pharetra curabitur leo in orci condimentum primis ultricies, hendrerit.</p>
          <v-btn v-if="!this.$vuetify.breakpoint.smAndDown" class="mt-4" rounded color="yellow">
            Quero adotar
            <img
              width="15px"
              class="ml-2"
              src="../../../assets/imgs/home/icons/icon-button.svg"
            />
          </v-btn>
        </div>
      </div>
    </v-flex>

    <v-flex class="w-100 d-flex align-center">
      <img width="100%" src="../../../assets/imgs/sobreNos/session-organic-form-cinza.png" />
    </v-flex>

    <v-flex class="w-100 d-flex align-center justify-center grey-variant-four">
      <div :class="this.$vuetify.breakpoint.smAndDown ? 'chamada wrpa-normal' : 'chamada' ">
        <div :class="this.$vuetify.breakpoint.smAndDown ? 'mb-4' : 'mr-12'">
          <h1 class="mb-3">Prestação de contas</h1>
          <p>
            Pulvinar lectus per vivamus netus id porttitor suspendisse cursus, torquent quam pellentesque condimentum praesent vel varius, rutrum metus porttitor sollicitudin vitae massa vivamus.
            Ligula felis consequat malesuada ante euismod tempor quisque suspendisse ut congue.
          </p>
        </div>
        <img
          :width="this.$vuetify.breakpoint.smAndDown ? '100%' : '50%'"
          src="../../../assets/imgs/sobreNos/img-prestacao-de-contas.png"
        />
      </div>
    </v-flex>

    <v-flex class="w-100 d-flex align-center">
      <img width="100%" src="../../../assets/imgs/sobreNos/session-organic-form-cinza-bottom.png" />
    </v-flex>

    <v-flex class="w-100 d-flex align-center justify-center">
      <div :class="this.$vuetify.breakpoint.smAndDown ? 'chamada wrpa-invertido' : 'chamada' ">
        <v-btn block v-if="this.$vuetify.breakpoint.smAndDown" class="mt-4" rounded color="yellow">
          Quero ajudar
          <img
            width="15px"
            class="ml-2"
            src="../../../assets/imgs/home/icons/icon-button.svg"
          />
        </v-btn>
        <img
          :width="this.$vuetify.breakpoint.smAndDown ? '100%' : '50%'"
          src="../../../assets/imgs/sobreNos/img-ajude-voce-tambem.png"
        />
        <div :class="this.$vuetify.breakpoint.smAndDown ? 'mb-4 mt-6' : 'ml-12'">
          <h1 class="mb-3">Ajude você também</h1>
          <p>
            Não só falar de dinheiro mais outras coisas, como voluntario e itens de higiene praesent vel varius, rutrum metus porttitor sollicitudin vitae massa vivamus.
            Ligula felis consequat malesuada ante euismod tempor quisque suspendisse ut congue.
          </p>
          <v-btn v-if="!this.$vuetify.breakpoint.smAndDown" class="mt-4" rounded color="yellow">
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

    <v-flex class="w-100 d-flex align-center justify-center">
      <div :class="this.$vuetify.breakpoint.smAndDown ? 'chamada wrpa-normal' : 'chamada' ">
        <div :class="this.$vuetify.breakpoint.smAndDown ? 'mb-4' : 'mr-12'">
          <h1 class="mb-3">Empresa também ajuda</h1>
          <p>
            Posicionar APA como associação séria praesent vel varius, rutrum metus porttitor sollicitudin vitae massa vivamus.
            Ligula felis consequat malesuada ante euismod tempor quisque suspendisse ut congue.
          </p>
          <v-btn v-if="!this.$vuetify.breakpoint.smAndDown" class="mt-4" rounded color="yellow">
            Como minha empresa pode ajudar
            <img
              width="15px"
              class="ml-2"
              src="../../../assets/imgs/home/icons/icon-button.svg"
            />
          </v-btn>
        </div>
        <img
          :width="this.$vuetify.breakpoint.smAndDown ? '100%' : '50%'"
          src="../../../assets/imgs/sobreNos/img-empresa-tambem-ajuda.png"
        />
        <v-btn
          block
          v-if="this.$vuetify.breakpoint.smAndDown"
          class="mt-4 mb-6"
          rounded
          color="yellow"
        >
          Como minha empresa pode ajudar
          <img
            width="15px"
            class="ml-2"
            src="../../../assets/imgs/home/icons/icon-button.svg"
          />
        </v-btn>
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
export default class SobreNos extends Vue {}
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
}

@media (max-width: 600px) {
  .chamada {
    padding: 20px 15px;
  }
}
</style>