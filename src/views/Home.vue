<template>
  <div class="home">
    <img alt="Apa logo" src="../assets/logo-apa-black.png" />
    <HelloWorld msg="Bem vindo a APA" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
