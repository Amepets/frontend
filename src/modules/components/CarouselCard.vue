<template>
  <div class="external-container">
    <div @click="scrollToTarget" :class="className"></div>
    <b class="txt">{{ text }}</b>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import $ from "jquery";

// eslint-disable-next-line @typescript-eslint/no-var-requires
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line @typescript-eslint/no-var-requires

@Component({})
export default class CarouselCard extends Vue {
  // eslint-disable-next-line class-methods-use-this

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  // eslint-disable-next-line class-methods-use-this
  @Prop({ required: true }) public text!: string;

  @Prop({ required: true }) public src!: string;

  @Prop({ required: true }) public className!: string;

  private showTitle(e: any) {
    e.target.parentNode.className = "external-container-active";
  }

  private showTitle2(e: any) {
    e.parentNode.className = "external-container-active";
  }

  scrollToTarget(e: any) {
    let name = this.src;
    if (this.src === "Missão") {
      name = "Missao";
    }
    e.target.className = `card-container ${name}`;
    this.showTitle(e);
  }

  scrollToTarget2(e: any) {
    let name = this.src;
    if (this.src === "Missão") {
      name = "Missao";
    }
    e.target.className = `card-container ${name}`;
    this.showTitle2(e.target.parentNode);
  }
}
</script>

<style>
.txt {
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  max-width: 340px;
}
.title-cd {
  font-family: Helvetica;
  font-size: 40px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  margin-bottom: 15px;
}
.external-container {
  position: relative;
  display: flex;
  justify-items: center;
  align-content: space-between;
  height: 100%;
  min-width: 360px;
  flex-direction: column;
}

.external-container-active {
  position: relative;
  display: flex;
  justify-items: center;
  align-content: space-between;
  height: 100%;
  min-width: 360px;
  flex-direction: column;
}

.external-container-active h1 {
  font-family: Helvetica;
  font-size: 40px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
}

.external-container-active p {
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.6px;
  margin-top: 20px;
}

.card-container {
  min-width: 297px;
  max-width: 340px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px 0 rgba(0, 0, 0, 0.14);
  margin-right: 40px;
  cursor: pointer;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  background-size: cover;
  background-image: url("../../assets/imgs/carousel/bg-missao.png");
  padding-left: 20px;
}
.card-container:hover {
  transform: scale(1.05);
  transition: all 0.2s ease-in-out;
}
.Missão {
  background-image: url("../../assets/imgs/carousel/bg-missao.png");
  color: white;
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
}

.Missão-blank {
  background-image: url("../../assets/imgs/carousel/bg-missao.png");
  color: white;
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
}

.Valores {
  background-image: url("../../assets/imgs/carousel/bg-valores.png");
  color: white;
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
}
.Valores-blank {
  background-image: url("../../assets/imgs/carousel/bg-valores.png");
  color: white;
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
}
.Visão {
  background-image: url("../../assets/imgs/carousel/bg-visao.png");
  color: black;
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
}

.Visão-blank {
  background-image: url("../../assets/imgs/carousel/bg-visao.png");
  color: black;
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
}
@media (max-width: 600px) {
  .external-container b {
    color: black;
  }
  .external-container p {
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 0.6px;
    margin-top: 20px;
  }
  .card-container {
    min-width: 197px;
    height: 150px;
    border-radius: 10px;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.12),
      0 2px 4px 0 rgba(0, 0, 0, 0.14);
    margin-right: 20px;
  }

  .external-container {
    position: relative;
    display: flex;
    min-width: 300px;
    justify-items: center;
    align-content: space-between;
    height: 100%;
    flex-direction: column;
    margin-right: 20px;

    text-align: unset;
  }

  .external-container-active {
    position: relative;
    display: flex;
    justify-items: center;
    align-content: space-between;
    height: 100%;
    min-width: 300px;
    flex-direction: column;
    margin-right: 20px;

    text-align: unset;
  }
}
</style>
