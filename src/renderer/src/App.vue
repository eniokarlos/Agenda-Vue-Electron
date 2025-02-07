<script setup lang="ts">
import { ref } from 'vue'
import BodyVue from './components/BodyVue.vue'
import TabsVue from './components/TabsVue.vue'
import UiToast from './ui/UiToast.vue'

const currentMonthIndex = ref(0)
const showToast = ref(false)
let savedOn = ''

window.api.onPrint((path) => {
  console.log(path)
  savedOn = path
  showToast.value = true
})
</script>

<template>
  <div class="py-20px px-50px">
    <UiToast v-model="showToast" :title="`salvo com sucesso em: ${savedOn}`" />
    <TabsVue v-model="currentMonthIndex"></TabsVue>
    <BodyVue class="z-2 transform-translate-y--8px" :table-index="currentMonthIndex"></BodyVue>
  </div>
</template>
