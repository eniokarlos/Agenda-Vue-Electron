<script setup lang="ts">
import { watch, ref, onMounted } from 'vue';

const props = defineProps({
  size: {
    type: Number,
    default: 40
  },
  color: {
    type: String,
    default: 'white'
  }
})
const model = defineModel<string>()
const textarea = ref<HTMLTextAreaElement>()
// const { textarea,input } = useTextareaAutosize({
//   onResize: () => {emit('resize', 
//   textarea.value?.scrollHeight ?? 0)}
// })

function update() {
  if (!textarea.value) return 
  textarea.value.style['min-height'] = props.size + 'px'
  textarea.value.style['background-color'] = props.color
}

watch(props, update)

onMounted(update)
</script>

<template>
  <textarea
    ref="textarea"
    v-model="model"
    class="resize-none py-3px"
  />
</template>


<style scoped>
textarea {
  -ms-overflow-style: none;
  scrollbar-width: none;
  outline: none;
  text-align: center;
}

textarea::-webkit-scrollbar {
  display: none;
}
</style>