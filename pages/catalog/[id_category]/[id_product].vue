<template>
  <main>
    <v-card>
      Карточка товара {{ id }}
    </v-card>
  </main>
</template>
<script setup lang="ts">
  const route = useRoute()
  const id = route.params.id_product;
</script>
<style lang="scss" module>

</style>