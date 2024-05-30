<template>
  <div>
    <h1>
      {{ category.name }}
    </h1>

    <div :class="$style.catalogWrapper">


      <CatalogProductCart
          v-for="product in products"
          :key="product.id"
          :product="product"
      />
    </div>
  </div>
</template>

<script setup>
const store = useCatalogStore();

const {products, category} = storeToRefs(store);

</script>

<style lang="scss" module>
h1{
  text-align: center;
  font-size: 24px;
}
.catalogWrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>