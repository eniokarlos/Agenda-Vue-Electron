/* eslint-disable prettier/prettier */
export interface TablePage {
  month: Month
  rows: TableBody
}

export type Month = "Janeiro" | "Fevereiro" | "Março" | "Abril" | "Maio" | "Junho"
| "Julho" | "Agosto" | "Setembro" | "Outubro" | "Novembro" | "Dezembro"

export type TableBody = Array<TableRow>

export interface TableRow {
  lineSize: number
  lineColor: string,
  values: string[]
}

export function getMonths() {
  return [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ]
}

export function newTablePage(monthName): TablePage {
  return {
    month: monthName,
    rows: [
      {
        lineSize: 40,
        lineColor: 'white',
        values: ['','','','','','','']
      }
    ]
  }
}

export function getTablesWithMonths(): TablePage[] {
  const months = getMonths()
  const tables: TablePage[] = []

  for (const month of months) {
    tables.push(newTablePage(month))
  }

  return tables
}
