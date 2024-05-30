<template>
  <div :class="$style.productWrapper">
    <v-card :class="$style.product">
      <NuxtLink
          :to="productLink"
          :class="$style.productLink"
      >
        <div
            :class="$style.productImage"
        >
          <v-img
              class="mx-auto"
              height="100"
              width="100"
              :src="product.images[0] || 'error'"
          >
            <template v-slot:error>
              <v-img
                  class="mx-auto"
                  height="100"
                  max-width="100"
                  src="/catalog/empty.webp"
              ></v-img>
            </template>
          </v-img>
        </div>
        <div
            :class="$style.productTitle"
        >
          {{ product.title }}
        </div>
        <v-btn
            :class="$style.productBtn"
            variant="outlined"
            @click=""
        >
          В корзину
        </v-btn>
      </NuxtLink>

    </v-card>
  </div>
</template>

<script setup>
const props = defineProps(['product'])
const product = props.product;

const productLink = `/catalog/${product.category.id}/${product.id}`;

</script>

<style lang="scss" module>
.productWrapper {
  padding: 10px 8px;
  width: 50%;
  text-align: center;

  .product {
    padding: 10px;
    height: 100%;

    .productLink {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;

      .productImage {
        margin-bottom: 8px;
      }

      .productTitle {
        flex-grow: 1;
        margin-bottom: 5px;
      }

      .productBtn {
        font-size: 12px;
      }
    }

    img {
      height: 100px;
      width: auto;
    }
  }

}
</style>