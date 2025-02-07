<script setup lang="ts">
import UiTableCell from '@renderer/ui/UiTableCell.vue';
import {Icon} from '@iconify/vue'
import { useEventListener } from '@vueuse/core';
import { useUserStore } from '@renderer/stores/user.store';
import UiSelectColor from '@renderer/ui/UiSelectColor.vue';

const props = defineProps({
  tableIndex: {
    type: Number,
    default: 0
  }
})

const resizeEvent = {
  pressed: false,
  rowIndex: 0,
  y: 0
}

const days = [
  'Segunda', 'Terça', 
  'Quarta', 'Quinta', 'Sexta', 
  'Sábado', 'Domingo'
]

const minSize = 40
const maxSize = 100
const store = useUserStore()

function startResizeRow(e: PointerEvent, rowIndex: number) {
  resizeEvent.pressed = true
  resizeEvent.y = e.clientY
  resizeEvent.rowIndex = rowIndex
}

function resizeRow(e: MouseEvent) {
  if (resizeEvent.pressed) {
    const height = e.clientY - resizeEvent.y
    const row = store.data[props.tableIndex]
      .rows[resizeEvent.rowIndex]
    const newSize = row.lineSize + height

    if (newSize > minSize && newSize < maxSize)
      row.lineSize += height
    resizeEvent.y = e.clientY
  }
}

function addNewRow() {
  store.data[props.tableIndex].rows.push({
    lineColor: 'white',
    lineSize: minSize,
    values: ['','','','','','','']
  })
}

function removeRow(rowIndex: number) {
  store.data[props.tableIndex].rows.splice(rowIndex,1)
}

useEventListener('mouseup', () => {
  resizeEvent.pressed = false
})

useEventListener('mousemove', resizeRow)
</script>

<template>
  <div class="main-table">
    <section class="days select-none">
     <div class="grid grid-cols-7">
      <div 
      v-for="day in days" 
      :key="day"
      class="day font-sans font-size-16px">
        {{ day }}
      </div>
     </div> 
    </section>
    <section 
      v-for="row,rowIndex in store.data[props.tableIndex].rows"
      :key="rowIndex"
      class="relative cells grid grid-cols-7">
      <UiTableCell 
        v-for="_,cellIndex in row.values" 
        :key="cellIndex" 
        v-model="row.values[cellIndex]"
        :size="row.lineSize"
        :color="row.lineColor"
        class="cell px-5px font-size-16px"
      />
      <Icon 
        class="no-print trash color-red cursor-pointer absolute" 
        icon="ic:baseline-delete" 
        width="24" height="24" 
        @pointerdown="removeRow(rowIndex)"
      />
      <UiSelectColor 
        v-model="row.lineColor"
        class="colors absolute"
      />
      <div 
      class="absolute hr h-2px px w-full"
      @pointerdown="startResizeRow($event, rowIndex)"/>
    </section>
    <section class="no-print add">
      <div 
        class="icon mt-10px cursor-pointer h-40px flex items-center justify-center"
        @pointerdown="addNewRow"
      >
        <Icon class="plus" icon="ic:round-plus" width="30" height="30"/>
      </div>
    </section>
  </div>
</template> 


<style scoped lang="css">
.day {
  background-color: #ffeead   ;
  border-right: 1px;
  border-bottom: 1px;
  border-style: solid;
  border-color: #dbc0ad;
  text-align: center;
}

.day:first-child {
  border-left: 1px;
  border-style: solid;
  border-color: #dbc0ad;
}

.cell {
  border-right: 1px;
  border-style: solid;
  border-color:#c1c1c1e0;
}

.cell:first-child {
  border-left: 1px;
  border-style: solid;
  border-color:#c1c1c1e0;
}

.hr {
  cursor: ns-resize;
  user-select: none;
  background-color: #c1c1c1e0;
  bottom: 0;
}

.icon {
  color: #6f6f6f;
  transition: all .2s ease-in-out;
}

.icon:hover{
  background-color: #e6e6e6;
}

.plus {
  transition: all .05s ease;
}

.icon:hover .plus{
  width: 34px;
  height: 34px;
}

.trash {
  right: -30px;
  top: 50%;
  transform: translateY(-50%);
}

.colors {
  left: -30px;
  top: 50%;
  transform: translateY(-50%);
}
</style>