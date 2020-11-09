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
          <div class="dados d-flex align-center mb-5">
            <div>
              <img
                class="mr-3"
                width="32px"
                src="../../../assets/imgs/icon-pontos-coleta.png"
              />
            </div>
            <div>
              <p class="font-weight-bold">Rua Clezio Migueleto 310</p>
              <p class="font-weight-bold">Bairro Roosevelt</p>
              <p class="font-weight-bold">(34) 99677 0358 - Elson</p>
            </div>
          </div>
          <div class="dados d-flex align-center mb-5">
            <div>
              <img
                class="mr-3"
                width="32px"
                src="../../../assets/imgs/icon-pontos-coleta.png"
              />
            </div>
            <div>
              <p class="font-weight-bold">Rua Sebastiao Rangel 692</p>
              <p class="font-weight-bold">Santa Monica - antiga rua 31</p>
              <p class="font-weight-bold">(34) 991037557 - Claudio</p>
            </div>
          </div>
          <div class="dados d-flex align-center mb-5">
            <div>
              <img
                class="mr-3"
                width="32px"
                src="../../../assets/imgs/icon-pontos-coleta.png"
              />
            </div>
            <div>
              <p class="font-weight-bold">Rua Angelica 137</p>
              <p class="font-weight-bold">Bairro Cruzeiro Sul</p>
              <p class="font-weight-bold">(34) 99975 2001 - Lilian</p>
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
