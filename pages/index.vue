<template>
  <div class="w-100">
    <div class="text-center">
      <h1 :class="$style.main_text">Добро пожаловать!</h1>
      <h2>
        <NuxtLink :class="$style.secondary_text" to="/catalog">Перейти в каталог</NuxtLink>
      </h2>
    </div>
    <section :class="$style.bannerWrapper">
      <div
          :class="[$style.gridItem,$style.gridItem1]"
      >
        <v-img
            src="/test.jpg"
            cover
            alt="Баннер 1"
            class="h-100"
        >
          <template v-slot:error>
            <v-img
                src="/catalog/empty.webp"
            ></v-img>
          </template>
        </v-img>
      </div>
      <div
          :class="[$style.gridItem,$style.gridItem2]"
      >
        <v-img
            src="/test2.jpg"
            alt="Баннер 1"
            cover
            class="h-100"
        >
          <template v-slot:error>
            <v-img
                src="/catalog/empty.webp"
            ></v-img>
          </template>
        </v-img>
      </div>
      <div
          :class="[$style.gridItem,$style.gridItem3]"
      >
        <v-img
            src="/test3.jpg"
            cover
            alt="Баннер 1"
            class="h-100"
        >
          <template v-slot:error>
            <v-img
                src="/catalog/empty.webp"
            ></v-img>
          </template>
        </v-img>
      </div>
    </section>
  </div>

</template>
<style module lang="scss">
.main_text {
  color: $primary;
}

.secondary_text {
  color: $secondary;
}

.bannerWrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  @include xs {
    grid-template-columns: 1fr;
    grid-template-rows: unset;
    grid-auto-rows: 300px;
  }

  .gridItem1 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;

  }

  .gridItem2 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  .gridItem3 {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  .gridItem {
    @include xs {
      grid-column-start: unset;
      grid-column-end: unset;
      grid-row-start: unset;
      grid-row-end: unset;
    }
  }
}
</style>
<script setup lang="ts">
</script>