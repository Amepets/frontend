<template>
  <div>
    <AppBar />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppBar from "../components/AppBar.vue";

@Component({ components: { AppBar } })
export default class Home extends Vue {}
</script>

<style>
</style>