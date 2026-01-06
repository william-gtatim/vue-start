<script setup lang="ts">
import { RouterView } from 'vue-router'
import Button from "primevue/button"
</script>

<template>
  <p class="text-red-500">Página inicial</p>
  <Button label="Botão" icon="pi pi-user" />
  <RouterView />
</template>

