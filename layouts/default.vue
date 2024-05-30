<template>
  <div>
    <v-app>
      <AppHeader/>

      <main :class="$style.content">
        <slot/>
      </main>

      <AppFooter/>
    </v-app>
  </div>
</template>
<style lang="scss" module>
.content {
  margin: 64px 40px 56px 40px;
  padding: 20px 10px;
  @include xs {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>