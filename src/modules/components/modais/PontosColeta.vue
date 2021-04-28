<template>
  <v-dialog v-model="showModal" persistent max-width="740px">
    <v-card class="py-6 px-4" style="border-radius:20px">
      <div>
        <v-flex class="d-flex align-start justify-space-between flex-row mb-4">
          <h1 class="font-weight-bold" style="font-size:40px">
            Pontos de coleta
          </h1>
          <v-icon size="30px" @click="toggleModal">mdi-close</v-icon>
        </v-flex>
        <v-flex class="d-flex justify-space-between flex-wrap">
          <div
            v-for="(pontoColeta, index) in PontosColeta"
            :key="index"
            class="dados d-flex align-center mb-5"
          >
            <div>
              <img
                class="mr-3"
                width="32px"
                src="../../../assets/imgs/icon-pontos-coleta.png"
              />
            </div>
            <div>
              <p class="font-weight-bold">{{ pontoColeta.endereco }}</p>
              <p class="font-weight-bold">{{ pontoColeta.bairro }}</p>
              <p class="font-weight-bold">{{ pontoColeta.contato }}</p>
            </div>
          </div>
        </v-flex>
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class ModalPontosColeta extends Vue {
  @Prop({ required: true }) public showModal!: boolean;

  private PontosColeta = [
    {
      endereco: "Rua Clésio Migueleto 310",
      bairro: "Bairro Roosevelt",
      contato: "(34) 99677-0358 - Elson"
    },
    {
      endereco: "Rua  Sebastião Rangel 692",
      bairro: "Bairro Santa Mônica",
      contato: "(34) 99103-7557 - Cláudio"
    },
    {
      endereco: "Rua Angelica 137",
      bairro: "Bairro Cruzeiro do Sul",
      contato: "(34) 99975 2001 - Lilian"
    },
    {
      endereco: "Rua Eurico Adelino Mendes 30",
      bairro: "Bairro São Jorge",
      contato: "(34) 99654-7969 - Michel"
    },
    {
      endereco: "Av. San Marino 510",
      bairro: "Bairro Jardim Europa",
      contato: "(34) 99174-3918 - Isis"
    },
    {
      endereco: "Rua Aurora 67",
      bairro: "Bairro Cruzeiro do Sul",
      contato: "(34) 99147-5696 - Dalca"
    },
    {
      endereco: "Rua dos Anturios 85",
      bairro: "Bairro Cidade Jardim",
      contato: "(34)  99218 8928 - 11h30 em diante - Iracema"
    },
    {
      endereco: "Tapuios 1322",
      bairro: "Bairro Saraiva - Distribuidora Ipérius Beer 24h",
      contato: "(34) 99879-7900 - Cairo"
    }
  ];

  private toggleModal() {
    this.$emit("update:showModal", false);
  }
}
</script>

<style lang="scss" scoped>
.dados {
  max-width: 344px;
  width: 100%;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 10px 16px;
}
</style>
