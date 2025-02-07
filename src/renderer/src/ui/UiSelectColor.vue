<script setup lang="ts">
const selectedColor = defineModel<string>()
</script>
<template>
  <div class="no-print grid grid-cols-2 gap-0.5 w-fit">
    <div class="color-btn w-11px h-11px bg-red rd-100%"   @pointerdown="selectedColor='#FFA0AC46'"/>
    <div class="color-btn w-11px h-11px bg-green rd-100%" @pointerdown="selectedColor='#BDE08F46'"/>
    <div class="color-btn w-11px h-11px bg-orange rd-100%" @pointerdown="selectedColor='#FFD44946'"/>
    <div class="color-btn w-11px h-11px bg-blue rd-100%" @pointerdown="selectedColor='#A8D5E246'"/>
    <div class="color-btn w-11px h-11px bg-white rd-100%" @pointerdown="selectedColor='white'"/>
  </div>
</template>



<style scoped>
.color-btn {
  box-shadow: 0px 1px 1px 1px #aaaaaa;
  transition: all .05s ease-in-out;
}
.color-btn:hover {
  transform: scale(1.5);
}
</style>