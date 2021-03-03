<template>
  <div>
    <AppBar />

    <v-flex
      class="w-100 d-flex align-center justify-center"
      style="margin-top: 80px"
    >
      <div
        :class="
          this.$vuetify.breakpoint.smAndDown
            ? 'chamada wrpa-invertido'
            : 'chamada'
        "
      >
        <div>
          <h1
            data-aos-anchor-placement="top-bottom"
            data-aos="fade-right"
            data-aos-duration="800"
            :class="
              this.$vuetify.breakpoint.smAndDown ? 'text-center' : 'mr-12 mb-3'
            "
          >
            Conheça a trajetória de {{data_formatada - 1996}} anos da APA 
          </h1>
        </div>
        <img
          data-aos-anchor-placement="top-bottom"
          data-aos="fade-left"
          data-aos-duration="800"
          :width="this.$vuetify.breakpoint.smAndDown ? '100%' : '50%'"
          src="../../../assets/imgs/sobreNos/img-sobre-nos.png"
        />
      </div>
    </v-flex>

    <v-flex class="w-100 d-flex align-center">
      <img
        width="100%"
        src="../../../assets/imgs/sobreNos/session-organic-form-blue.png"
      />
    </v-flex>

    <v-flex class="w-100 d-flex align-center justify-center blue-variant-three">
      <div
        :class="
          this.$vuetify.breakpoint.smAndDown ? 'chamada wrpa-normal' : 'chamada'
        "
      >
        <div
          data-aos-anchor-placement="top-bottom"
          data-aos="fade-right"
          data-aos-duration="800"
          :class="this.$vuetify.breakpoint.smAndDown ? 'mb-4' : 'mr-12'"
        >
          <h1 class="mb-3">Nossa História</h1>
          <p>
            Associação de Proteção Animal em Uberlândia (APA) surgiu em 1996,
            tendo como objetivo principal a defesa de animais domésticos em
            situações de risco.<br />
            <br />
            A APA atua na causa animal desde então, resgatando animais vítimas
            de maus-tratos, abandonados em condições de perigo e fêmeas prenhes
            em processo gestacional de risco. Em 2001, a APA ganhou o título de
            utilidade pública municipal em Uberlândia e, em 2011, obteve o
            título estadual. <br />
            <br />Durante nossa trajetória, a estimativa é de que cerca de 20
            mil animais tenham sido resgatados de situações de risco,
            encontrados em condições inacreditáveis e desumanas. Além disso,
            nossas ações preventivas foram responsáveis pela castração em massa
            de mais de 300 animais domésticos somente no ano de 2013. Mesmo após
            {{data_formatada - 1996}} anos de atuação, ainda há um longo caminho pela frente. Hoje, o
            espaço abriga cerca de 500 cães e gatos, todos à procura de um lar.
            <br />
            <br />
            Para quem acredita que todos são dignos de amor, nos ajude a
            perpetuar esse ideal! Adote, não compre.
          </p>
          <router-link to="ajuda">
            <v-btn
              width="268px"
              height="56px"
              v-if="!this.$vuetify.breakpoint.smAndDown"
              class="mt-4"
              rounded
              color="yellow"
            >
              Como posso ajudar
              <img
                width="15px"
                class="ml-2"
                src="../../../assets/imgs/home/icons/icon-button.svg"
              />
            </v-btn>
          </router-link>
        </div>
        <img
          data-aos-anchor-placement="top-bottom"
          data-aos="fade-left"
          data-aos-duration="800"
          :width="this.$vuetify.breakpoint.smAndDown ? '100%' : '50%'"
          src="../../../assets/imgs/sobreNos/img-historia.png"
        />
        <router-link to="ajuda">
          <v-btn
            data-aos-anchor-placement="top-bottom"
            data-aos="fade-right"
            data-aos-duration="1300"
            height="56px"
            block
            v-if="this.$vuetify.breakpoint.smAndDown"
            class="mt-4"
            rounded
            color="yellow"
          >
            Como posso ajudar
            <img
              width="15px"
              class="ml-2"
              src="../../../assets/imgs/home/icons/icon-button.svg"
            />
          </v-btn>
        </router-link>
      </div>
    </v-flex>

    <v-flex class="w-100 d-flex align-center">
      <img
        width="100%"
        src="../../../assets/imgs/sobreNos/session-organic-form-blue-bottom.png"
      />
    </v-flex>

    <v-flex class="w-100 d-flex align-center justify-center">
      <div
        :class="
          this.$vuetify.breakpoint.smAndDown
            ? 'chamada wrpa-invertido'
            : 'chamada'
        "
      >
        <a
          href="https://api.whatsapp.com/send?phone=5534996770358&text=Ol%C3%A1,%20Gostaria%20de%20adotar%20um%20Pet!"
          target="_blank"
        >
          <v-btn
            height="56px"
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
        </a>
        <img
          data-aos-anchor-placement="top-bottom"
          data-aos="fade-right"
          data-aos-duration="800"
          :width="this.$vuetify.breakpoint.smAndDown ? '100%' : '50%'"
          src="../../../assets/imgs/sobreNos/img-adocao.png"
        />

        <div
          data-aos-anchor-placement="top-bottom"
          data-aos="fade-left"
          data-aos-duration="800"
          :class="this.$vuetify.breakpoint.smAndDown ? 'mb-4 mt-2' : 'ml-12'"
        >
          <h1 class="mb-3">Adoção responsável</h1>
          <p>
            Adotar um animal é um ato de amor, mas que requer cuidados e
            responsabilidade.<br />
            <br />
            Optamos pela adoção consciente como forma de prevenir abandonos e
            para que nossos animais, que já sofreram o bastante, levem uma vida
            tranquila e cheia de amor.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5534996770358&text=Ol%C3%A1,%20Gostaria%20de%20adotar%20um%20Pet!"
            target="_blank"
          >
            <v-btn
              height="56px"
              width="268px"
              v-if="!this.$vuetify.breakpoint.smAndDown"
              class="mt-4"
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
          </a>
        </div>
      </div>
    </v-flex>

    <v-flex class="w-100 d-flex align-center">
      <img
        width="100%"
        src="../../../assets/imgs/sobreNos/session-organic-form-cinza.png"
      />
    </v-flex>

    <v-flex class="w-100 d-flex align-center justify-center grey-variant-four">
      <div
        :class="
          this.$vuetify.breakpoint.smAndDown ? 'chamada wrpa-normal' : 'chamada'
        "
      >
        <div
          data-aos-anchor-placement="top-bottom"
          data-aos="fade-left"
          data-aos-duration="800"
          :class="this.$vuetify.breakpoint.smAndDown ? 'mb-4' : 'mr-12'"
        >
          <h1 class="mb-3">Nossa estrutura</h1>
          <p>
            A APA é uma é organização sem fins lucrativos, criada por um ideal
            em comum: a defesa de animais domésticos em situação de risco.
            <br /><br />
            As doações são convertidas integralmente para ajuda aos nossos
            resgatados. São gastos, em média, 100kg de ração por dia, além dos
            custos com vacinas, medicações, higiene e limpeza do espaço.
            <br /><br />
            Todo e qualquer gesto importa. Faça uma contribuição e nos ajude a
            proteger cada vez mais animais!
          </p>
        </div>
        <img
          data-aos-anchor-placement="top-bottom"
          data-aos="fade-right"
          data-aos-duration="800"
          :width="this.$vuetify.breakpoint.smAndDown ? '100%' : '50%'"
          src="../../../assets/imgs/sobreNos/img-prestacao-de-contas.png"
        />
      </div>
    </v-flex>

    <v-flex class="w-100 d-flex align-center">
      <img
        width="100%"
        src="../../../assets/imgs/sobreNos/session-organic-form-cinza-bottom.png"
      />
    </v-flex>

    <v-flex class="w-100 d-flex align-center justify-center">
      <div
        :class="
          this.$vuetify.breakpoint.smAndDown
            ? 'chamada wrpa-invertido'
            : 'chamada'
        "
      >
        <router-link to="ajuda">
          <v-btn
            height="56px"
            block
            v-if="this.$vuetify.breakpoint.smAndDown"
            class="mt-4"
            rounded
            color="yellow"
          >
            Quero ajudar
            <img
              width="15px"
              class="ml-2"
              src="../../../assets/imgs/home/icons/icon-button.svg"
            />
          </v-btn>
        </router-link>

        <img
          data-aos-anchor-placement="top-bottom"
          data-aos="fade-right"
          data-aos-duration="800"
          :width="this.$vuetify.breakpoint.smAndDown ? '100%' : '50%'"
          src="../../../assets/imgs/sobreNos/img-ajude-voce-tambem.png"
        />
        <div
          :class="this.$vuetify.breakpoint.smAndDown ? 'mb-4 mt-6' : 'ml-12'"
        >
          <h1
            data-aos-anchor-placement="top-bottom"
            data-aos="fade-left"
            data-aos-duration="800"
            class="mb-3"
          >
            Ajude a APA
          </h1>
          <p>
            Toda a verba para manutenção e cuidados com nossos animais vem de
            doações e contribuições por apoiadores da causa animal. Seja um
            deles e nos ajude a resgatar cada vez mais animais indefesos!
          </p>
          <router-link to="ajuda">
            <v-btn
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration="1100"
              height="56px"
              width="268px"
              v-if="!this.$vuetify.breakpoint.smAndDown"
              class="mt-4"
              rounded
              color="yellow"
            >
              Quero ajudar
              <img
                width="15px"
                class="ml-2"
                src="../../../assets/imgs/home/icons/icon-button.svg"
              />
            </v-btn>
          </router-link>
        </div>
      </div>
    </v-flex>

    <v-flex class="w-100 d-flex align-center justify-center">
      <div
        :class="
          this.$vuetify.breakpoint.smAndDown
            ? 'chamada wrpa-normal'
            : 'chamada mt-16 mb-10'
        "
      >
        <div
          data-aos-anchor-placement="top-bottom"
          data-aos="fade-right"
          data-aos-duration="800"
          :class="this.$vuetify.breakpoint.smAndDown ? 'mb-4' : 'mr-12'"
        >
          <h1 class="mb-3">Empresas que acreditam neste sonho</h1>
          <p>
            As parcerias com empresas que acreditam na causa animal são muito
            importante para nós. Seja uma empresa que auxilia no cuidado dos
            indefesos, seja um parceiro da APA!
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5534996770358&text=Ol%C3%A1,%20tenho%20uma%20empresa%20e%20gostaria%20de%20ajudar%20a%20APA!"
            target="_blank"
          >
            <v-btn
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration="1300"
              height="56px"
              width="377px"
              v-if="!this.$vuetify.breakpoint.smAndDown"
              class="mt-4"
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
          </a>
        </div>
        <img
          data-aos-anchor-placement="top-bottom"
          data-aos="fade-right"
          data-aos-duration="800"
          :width="this.$vuetify.breakpoint.smAndDown ? '100%' : '50%'"
          src="../../../assets/imgs/sobreNos/img-empresa-tambem-ajuda.png"
        />
        <a
          href="https://api.whatsapp.com/send?phone=5534996770358&text=Ol%C3%A1,%20tenho%20uma%20empresa%20e%20gostaria%20de%20ajudar!"
          target="_blank"
        >
          <v-btn
            height="56px"
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
        </a>
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
export default class SobreNos extends Vue {

  private hoje = new Date();

  private data_formatada = this.hoje.getFullYear();

  public created() {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }

  

}
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
