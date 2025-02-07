<script setup lang="ts">
import { getMonths } from '@renderer/@shared/tablePage';

const months = getMonths()
const selectedMonthIndex = defineModel<number>({default:0})

function selectMonth(monthIndex: number) {
  selectedMonthIndex.value = monthIndex
}

</script>
<template>
  <nav class="no-print">
    <ul class="flex">
      <li 
        v-for="month,i in months" 
        :key="month" 
        :class="{'tab--current': selectedMonthIndex == i}"
        class="tab cursor-pointer font-sans w-fit font-size-16px py-1.5 pb-10px rd-3"
        @click="selectMonth(i)">
        <span>{{ month }}</span>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.tab {
  flex-grow: 1;
  text-align: center;
  background-color: #ffcc5c ;
  color: #2e2e2e;
  list-style: none;
  border-end-start-radius: 0;
  border-end-end-radius: 0;
  transition: all .2s ease-in-out;
}
.tab:not(.tab--current):hover {
  background-color: hsl(41, 72%, 60%);
  transform: translateY(-4px);
}

.tab--current {
  color: white;
  background-color: #ff6f69 ;
}

</style>
