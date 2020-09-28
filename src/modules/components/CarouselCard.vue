<template>
  <div class="external-container">
    <div @click="scrollToTarget" class="card-container"></div>
    <p>Lorem ipsum at opens nu vivamus consectetur arcu mattis enim blandit.</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import $ from "jquery";

@Component({})
export default class CarouselCard extends Vue {
  // eslint-disable-next-line class-methods-use-this

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  // eslint-disable-next-line class-methods-use-this
  private showTitle(e: any) {
    e.target.parentNode.className = "external-container-active";
  }

  scrollToTarget(e: any) {
    const $container: any = document.getElementById("proposito");
    const $scrollTo: any = e.target.parentNode;
    $container.scrollTo({
      top: 0,
      left: $scrollTo.offsetLeft - 60,
      behavior: "smooth"
    });
    this.showTitle(e);
  }
}
</script>

<style>
.external-container {
  position: relative;
  display: flex;
  min-width: 360px;
  justify-items: center;
  align-content: space-between;
  height: 100%;
  flex-direction: column;
}

.external-container h1 {
  color: var(--v-blue-variant-three-base);
}

.external-container p {
  color: var(--v-blue-variant-three-base);
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
  color: black;
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
  color: black;
}

.card-container {
  min-width: 297px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px 0 rgba(0, 0, 0, 0.14);
  background-color: #ffffff;
  margin-right: 20px;
  cursor: pointer;
  margin-bottom: 20px;
}
.card-container:hover {
  transform: scale(1.05);
  transition: all 0.2s ease-in-out;
}

@media (max-width: 600px) {
  .external-container p {
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 0.6px;
    margin-top: 20px;
    color: black;
  }
  .card-container {
    min-width: 197px;
    height: 150px;
    border-radius: 10px;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.12),
      0 2px 4px 0 rgba(0, 0, 0, 0.14);
    background-color: #ffffff;
    margin-right: 20px;
  }

  .external-container {
    position: relative;
    display: flex;
    min-width: 250px;
    justify-items: center;
    align-content: space-between;
    height: 100%;
    flex-direction: column;
  }

  .external-container-active {
    position: relative;
    display: flex;
    justify-items: center;
    align-content: space-between;
    height: 100%;
    min-width: 250px;
    flex-direction: column;
  }
}
</style>
