import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { getTablesWithMonths } from '@renderer/@shared/tablePage'

export const useUserStore = defineStore('user', () => {
  const data = useStorage('userData', getTablesWithMonths())

  return {
    data
  }
})
