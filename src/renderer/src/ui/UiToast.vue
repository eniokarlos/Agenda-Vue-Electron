<script setup lang="ts">
import { ref, watch } from 'vue';

const toast = ref<HTMLElement>()
const model = defineModel<boolean>({default: false}) 
const props = defineProps({
  title: {
    type: String,
    default: 'put a title'
  }
})
function show() {
  if (!toast.value) return
  toast.value.classList.add('toast--active')
  setTimeout(() => {
    toast.value!.classList.remove('toast--active')
  }, 3000);
}

watch(model, () => {
  if (model.value) show()
  model.value = false
})
</script>

<template>
  <div 
  ref="toast"
  class="no-print toast w-fit bottom-40px left-20px fixed z-10 
    rd-5px flex items-center justify-center px-10px py-5px color-white"
  >
    {{ props.title }}
  </div>
</template>


<style lang="css" scoped>
.toast{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  visibility: hidden;
  background-color: #15a426d4;
}

.toast--active {
  visibility: visible; /* Show the snackbar */
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}
</style>