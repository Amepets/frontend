<template>
  <v-dialog v-model="showModal" persistent max-width="740px">
    <v-card class="py-6 px-4" style="border-radius:20px">
      <div>
        <v-flex class="d-flex align-start justify-space-between flex-row mb-4">
          <h1 class="font-weight-bold" style="font-size:40px">
            Dados bancários
          </h1>
          <v-icon size="30px" @click="toggleModal">mdi-close</v-icon>
        </v-flex>
        <v-flex class="d-flex justify-space-between flex-wrap">
          <div class="dados d-flex align-center mb-3">
            <div>
              <img
                class="mr-3"
                width="32px"
                src="../../../assets/imgs/icon-dados-bancarios.png"
              />
            </div>
            <div>
              <p class="font-weight-bold" style="color:#4f4e50">
                Banco do Brasil
              </p>
              <p class="font-weight-bold" style="color:#4f4e50">
                CNPJ: 01.181.582/0001-12
              </p>
              <p class="font-weight-bold" style="color:#4f4e50">
                Agência: 0098-1
              </p>
              <p class="font-weight-bold" style="color:#4f4e50">
                Conta Corrente: 123584-2
              </p>
            </div>
          </div>
          <div class="dados d-flex align-center">
            <div>
              <img
                class="mr-3"
                width="32px"
                src="../../../assets/imgs/icon-dados-bancarios.png"
              />
            </div>
            <div>
              <p class="font-weight-bold" style="color:#4f4e50">
                Caixa Econômica Federal
              </p>
              <p class="font-weight-bold" style="color:#4f4e50">
                Agência: 1910-1
              </p>
              <p class="font-weight-bold" style="color:#4f4e50">
                Conta Corrente: 01696-3
              </p>
              <p class="font-weight-bold" style="color:#4f4e50">Operação: 03</p>
            </div>
          </div>
        </v-flex>
        <img
          class="mt-6"
          width="100%"
          src="../../../assets/imgs/img-dados-bancarios.png"
        />
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class ModalDadosBancarios extends Vue {
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
