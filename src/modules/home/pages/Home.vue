/* eslint-disable class-methods-use-this */ /* eslint-disable no-undef */
<template>
  <div>
    <AppBar />
    <v-flex
      style="margin: 120px 0 50px 0"
      class="w-100 d-flex align-center justify-center"
    >
      <div
        :class="
          this.$vuetify.breakpoint.smAndDown
            ? 'chamada wrpa-invertido'
            : 'chamada'
        "
      >
        <div>
          <div
          >
            <h1
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-right"
              data-aos-duration="800"
              class="mr-6 mb-3"
              :style="this.$vuetify.breakpoint.mdAndUp ? 'text-align: left;' : 'text-align: center;'"
            >
              Em defesa e resgate de animais domésticos em situação de risco
            </h1>
          </div>
          <router-link to="/ajuda">
            <v-btn
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-right"
              data-aos-duration="800"
              width="268px"
              height="56px"
              rounded
              :block="this.$vuetify.breakpoint.smAndDown"
              color="yellow"
            >
              Como posso ajudar
              <img
                width="24px"
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
          src="../../../assets/imgs/home/img-home.png"
        />
      </div>
    </v-flex>

    <v-flex class="w-100 d-flex align-center">
      <img
        width="100%"
        src="../../../assets/imgs/home/session-organic-form-blue.png"
      />
    </v-flex>

    <div class="titlebox">
      <div class="carrossel">
        <div class="ml-10">
          <h2>Acreditamos que é possível</h2>
          <h2>mudar realidades</h2>
        </div>
        <v-flex class="w-100 d-flex align-center justify-center">
          <div id="proposito" class="proposito">
            <v-list
              style="
              padding: 0px 40px 0px 40px;
              justify-content: space-between;
              display: flex;
              background-color: #49cbfc;
              margin: 0;
              position: relative;
            "
            >
              <div class="hehehe">
                <h1>Valores</h1>
                <CarouselCard
                  src="Valores"
                  text="Nos baseamos em três pilares: a
            empatia, o respeito e a ética. Temos o compromisso de realizar um
            trabalho íntegro, transparente e honesto. "
                  className="card-container Valores-blank"
                />
              </div>
              <div class="hehehe">
                <h1>Missão</h1>

                <CarouselCard
                  src="Missão"
                  text="Acolher e oportunizar um novo lar para aqueles que não tem voz e são  dignos de muito amor.  "
                  className="card-container Missão-blank"
                />
              </div>
              <div class="hehehe">
                <h1>Visão</h1>

                <CarouselCard
                  src="Visão"
                  text="Um de nossos sonhos é poder unir cada um de nossos animais com aqueles que amam e os defendem. "
                  className="card-container Visão-blank"
                />
              </div>
            </v-list>
          </div>
        </v-flex>
      </div>
    </div>

    <v-flex class="w-100 d-flex align-center">
      <img
        width="100%"
        src="../../../assets/imgs/home/session-organic-form-blue-two.svg"
      />
    </v-flex>

    <v-flex class="w-100 d-flex align-center justify-center mb-10">
      <div
        :class="
          this.$vuetify.breakpoint.smAndDown
            ? 'chamada wrpa-invertido'
            : 'chamada'
        "
      >
        <div
          data-aos-anchor-placement="top-bottom"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <h2
            :class="!this.$vuetify.breakpoint.smAndDown ? 'mb-3 mr-12' : 'mb-3'"
          >
            Conheça a trajetória da APA até aqui
          </h2>
          <router-link to="/sobreNos">
            <v-btn text class="padding-botao">
              História da APA
              <img
                data-aos-anchor-placement="top-bottom"
                data-aos="fade-left"
                data-aos-duration="1000"
                width="24px"
                class="ml-1"
                src="../../../assets/imgs/home/icons/icon-link.svg"
              />
            </v-btn>
          </router-link>
        </div>
        <img
          data-aos-anchor-placement="top-bottom"
          data-aos="fade-left"
          data-aos-duration="1000"
          class="ml-6"
          v-if="!this.$vuetify.breakpoint.smAndDown"
          width="50%"
          src="../../../assets/imgs/home/img-historia-APA.svg"
        />
        <img
          v-else
          width="100%"
          src="../../../assets/imgs/home/img-historia-APA.svg"
        />
      </div>
    </v-flex>

    <v-flex class="w-100 d-flex align-center">
      <img
        width="100%"
        src="../../../assets/imgs/home/session-organic-form.svg"
      />
    </v-flex>

    <v-flex
      class="w-100 d-flex align-center justify-center grey-variant-four pb-6"
    >
      <div class="chamada chamada-tablet wrpa-invertido mt-10">
        <img
          data-aos-anchor-placement="top-bottom"
          data-aos="fade-right"
          data-aos-duration="800"
          class="mt-6"
          :width="!this.$vuetify.breakpoint.smAndDown ? '50%' : '100%'"
          src="../../../assets/imgs/home/img-oque-fazemos-01.png"
        />

        <div
          data-aos-anchor-placement="top-bottom"
          data-aos="fade-left"
          data-aos-duration="1000"
          :class="!this.$vuetify.breakpoint.smAndDown ? 'ml-16' : ''"
        >
          <h2 class="mb-3">Entenda o que fazemos</h2>
          <p>
            A APA atua em várias frentes para contribuir para a causa animal.
            Além do resgate de cães e gatos em situações de risco, promovemos
            feirinhas de adoção e campanhas de castração em massa a fim de
            manter controle de natalidade. Divulgamos também conteúdos
            informativos para conscientização da população. Seguimos um sonho
            que é poder proporcionar todos os cuidados que nossos animais
            precisam até que sejam adotados e tenham lares repletos de amor.
          </p>
        </div>
      </div>
    </v-flex>

    <v-flex class="w-100 d-flex align-center justify-center grey-variant-four">
      <div
        :class="
          !this.$vuetify.breakpoint.smAndDown
            ? 'informacoes  wrpa-normal pb-8'
            : 'chamada chamada-tablet wrpa-normal'
        "
      >
        <div :class="!this.$vuetify.breakpoint.smAndDown ? 'mr-16 my-12' : ''">
          <h2 class="mb-3">Mais de 20 mil cães e gatos resgatados</h2>
          <p
            data-aos-anchor-placement="top-bottom"
            data-aos="fade-right"
            data-aos-duration="800"
            class="mb-3"
          >
            O número de animais resgatados pela APA já ultrapassou os 20 mil.
            Sempre atentos aos animais em situações de risco, buscamos aumentar
            nossa capacidade para atender números cada vez maiores. Com a sua
            ajuda, podemos ir muito além!
          </p>
          <router-link to="/ajuda">
            <v-btn
              v-if="!this.$vuetify.breakpoint.smAndDown"
              width="268px"
              height="56px"
              rounded
              color="yellow"
            >
              Quero ajudar
              <img
                data-aos-anchor-placement="top-bottom"
                data-aos="fade-left"
                data-aos-duration="1100"
                width="24px"
                class="ml-2"
                src="../../../assets/imgs/home/icons/icon-button.svg"
              />
            </v-btn>
          </router-link>
        </div>
        <img
          class="mt-2"
          :width="!this.$vuetify.breakpoint.smAndDown ? '50%' : '100%'"
          src="../../../assets/imgs/home/img-oque-fazemos-02.png"
        />
        <v-btn
          data-aos-anchor-placement="top-bottom"
          data-aos="fade-up"
          data-aos-duration="800"
          v-if="this.$vuetify.breakpoint.smAndDown"
          width="268px"
          height="56px"
          rounded
          block
          color="yellow"
          class="my-4"
        >
          Quero ajudar
          <img
            width="24px"
            class="ml-2"
            src="../../../assets/imgs/home/icons/icon-button.svg"
          />
        </v-btn>
      </div>
    </v-flex>

    <v-flex class="w-100 d-flex align-center justify-center blue-variant-three">
      <div class="chamada my-12 wrpa-invertido chamada-tablet py-12">
        <a
          href="https://api.whatsapp.com/send?phone=5534996770358&text=Ol%C3%A1,%20Gostaria%20de%20apadrinhar!"
          target="_blank"
        >
          <v-btn
            data-aos-anchor-placement="top-bottom"
            data-aos="fade-down"
            data-aos-duration="800"
            height="56px"
            class="mt-4"
            outlined
            rounded
            v-if="this.$vuetify.breakpoint.smAndDown"
            color="white"
            block
          >
            Quero apadrinhar
            <img
              width="24px"
              class="ml-2"
              src="../../../assets/imgs/icon-button-white.svg"
            />
          </v-btn>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5534996770358&text=Ol%C3%A1,%20gostaria%20de%20adotar%20um%20Pet!"
          target="_blank"
        >
          <v-btn
            height="56px"
            v-if="this.$vuetify.breakpoint.smAndDown"
            class="mt-8"
            rounded
            block
            color="yellow"
          >
            Quero adotar
            <img
              width="24px"
              class="ml-2"
              src="../../../assets/imgs/home/icons/icon-button.svg"
            />
          </v-btn>
        </a>
        <img
          data-aos-anchor-placement="top-bottom"
          data-aos="fade-right"
          data-aos-duration="800"
          :width="!this.$vuetify.breakpoint.smAndDown ? '50%' : '100%'"
          src="../../../assets/imgs/home/ilustracao-adote-um-amigo.png"
        />
        <div :class="!this.$vuetify.breakpoint.smAndDown ? 'ml-16' : ''">
          <h1 class="mb-3" :style="this.$vuetify.breakpoint.mdAndUp ? 'text-align: left;' : 'text-align: center;'">
            A adoção é um ato de amor. Faça parte de nossa família!
          </h1>
          <a
            href="https://api.whatsapp.com/send?phone=5534996770358&text=Ol%C3%A1,%20gostaria%20de%20adotar%20um%20Pet!"
            target="_blank"
          >
            <v-btn
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration="800"
              width="365px"
              height="56px"
              v-if="!this.$vuetify.breakpoint.smAndDown"
              rounded
              color="yellow"
            >
              Quero adotar
              <img
                width="24px"
                class="ml-2"
                src="../../../assets/imgs/home/icons/icon-button.svg"
              />
            </v-btn>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5534996770358&text=Ol%C3%A1,%20Gostaria%20de%20apadrinhar!"
            target="_blank"
          >
            <v-btn
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-down"
              data-aos-duration="800"
              v-if="!this.$vuetify.breakpoint.smAndDown"
              height="56px"
              width="365px"
              class="mt-4"
              outlined
              rounded
              color="white"
            >
              Quero apadrinhar
              <img
                width="24px"
                class="ml-2"
                src="../../../assets/imgs/icon-button-white.svg"
              />
            </v-btn>
          </a>
        </div>
      </div>
    </v-flex>

    <v-flex class="w-100 d-flex align-center justify-end pb-12">
      <div class="informacoes direita wrpa-invertido">
        <div class="informacoes-texto">
          <div class="border">
            <h2 class="mb-3">
              Acompanhe iniciativas e novidades da APA, inscreva-se!
            </h2>
            <v-form
              enctype="text/plain"
              action="mailto:diretoria@apauberlandia.org.br"
              method="post"
            >
              <v-text-field
                type="text"
                name="Nome"
                label="Nome"
                outlined
                dense
              ></v-text-field>
              <v-text-field
                type="text"
                style="display: none"
                id="n2"
                label="E-mail"
                name="Mensagem"
                outlined
                dense
                value="Gostaria de saber mais sobre a APA!"
              ></v-text-field>
              <v-btn
                type="submit"
                value="Send"
                height="56px"
                rounded
                color="yellow"
                block
              >
                Fique por dentro
                <img
                  width="24px"
                  class="ml-2"
                  src="../../../assets/imgs/home/icons/icon-button.svg"
                />
              </v-btn>
            </v-form>
          </div>
        </div>
        <img
          v-if="!this.$vuetify.breakpoint.smAndDown"
          class="ml-16"
          width="65%"
          src="../../../assets/imgs/home/img-news-desktop.png"
        />
        <img
          class="mb-10"
          v-else
          width="100%"
          src="../../../assets/imgs/home/img-newsletter.jpg"
        />
      </div>
    </v-flex>

    <v-flex class="w-100 d-flex align-center justify-center py-12">
      <div class="chamada d-flex flex-column align-center justify-center">
        <div style="width: 40%;" class="mb-2" >
          <h2 style="text-align: center">Marcas que acreditam na APA Uberlândia</h2>
        </div>
        <div class="d-flex flex-wrap align-center justify-center">
          <img
            class="mx-2 my-2"
            width="200px"
            height="100px"
            src="../../../assets/imgs/parceiros/client-uai-pet.jpg"
          />
          <img
            class="mx-2 my-2"
            width="200px"
            height="100px"
            src="../../../assets/imgs/parceiros/client-herdora-cosmeticos.jpg"
          />
          <img
            class="mx-2 my-2"
            width="200px"
            height="100px"
            src="../../../assets/imgs/parceiros/client-start-quimica.jpg"
          />
          <img
            class="mx-2 my-2"
            width="200px"
            height="100px"
            src="../../../assets/imgs/parceiros/client-droga-vet.jpg"
          />
          <img
            class="mx-2 my-2"
            width="200px"
            height="100px"
            src="../../../assets/imgs/parceiros/client-cvc-brasil.jpg"
          />
          <img
            class="mx-2 my-2"
            width="200px"
            height="100px"
            src="../../../assets/imgs/parceiros/client-centro-oeste.jpg"
          />
          <img
            class="mx-2 my-2"
            width="200px"
            height="100px"
            src="../../../assets/imgs/parceiros/client-do-seu-jeitim.jpg"
          />
          <img
            class="mx-2 my-2"
            width="200px"
            height="100px"
            src="../../../assets/imgs/parceiros/client-hospital-veterinario.jpg"
          />
          <img
            class="mx-2 my-2"
            width="200px"
            height="100px"
            src="../../../assets/imgs/parceiros/client-coco-bambu.jpg"
          />
          <img
            class="mx-2 my-2"
            width="200px"
            height="100px"
            src="../../../assets/imgs/parceiros/client-farmacia-confiaca.jpg"
          />
          <img
            class="mx-2 my-2"
            width="200px"
            height="100px"
            src="../../../assets/imgs/parceiros/client-emporio-terra-brasil.png"
          />
        </div>
      </div>
    </v-flex>

    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppBar from "../../components/AppBar.vue";
import Footer from "../../components/Footer.vue";
import CarouselCard from "../../components/CarouselCard.vue";

window.onload = function() {
  const slider: any = document.getElementById("proposito");
  let isDown = false;
  let startX: number;
  let scrollLeft: number;
  slider.addEventListener("mousedown", (e: any) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mousemove", (e: any) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
  });
};

@Component({ components: { AppBar, Footer, CarouselCard } })
export default class Home extends Vue {
  // eslint-disable-next-line class-methods-use-this
}
</script>

<style>
.hehehe {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: flex-start;
}

.hehehe h1 {
  margin-left: -20px;
}

.placeholder {
  position: relative;
  display: block;
  min-width: 50%;
}
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
  width: 100%;
  padding: 30px 0px 30px 0px;
  box-sizing: content-box;
  cursor: grab;
  overflow: auto;
  position: relative;
}

.titlebox {
  background-color: var(--v-blue-variant-three-base);
  padding-top: 20px;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
}
.titlebox h1 {
  font-family: 'Helvetica';
  font-size: 40px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: black;
  padding-left: 40px;
}
.proposito::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.proposito {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.list {
  display: flex;
  position: relative;
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

@media (min-width: 960px) {
  .carrossel {
    max-width: 1200px;
    width: 100%;
  }
}

@media (max-width: 960px) {
  .carrossel {
    width: 100%;
  }

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

  .titlebox h1 {
    font-size: 32px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  }
}
</style>
