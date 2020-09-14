<template>
    <div class='card-container'>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class CarouselCard extends Vue {}
</script>

<style>
.card-container {
  min-width: 297px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.14);
  background-color: #ffffff;
  margin-right: 20px;
}
.card-container:hover {
  transform: scale(1.05);
  transition: all .2s ease-in-out;
}

@media (max-width: 600px) {
 .card-container {
  min-width: 197px;
  height: 150px;
  border-radius: 10px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.14);
  background-color: #ffffff;
  margin-right: 20px;
}
}
</style>
