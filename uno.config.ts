import { defineConfig } from 'unocss'
import { presetWebFonts } from 'unocss'
import { presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetWebFonts({
      provider: 'google',
      fonts: { sans: 'Raleway' }
    }),
    presetUno()
  ]
})
