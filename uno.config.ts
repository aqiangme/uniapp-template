import { defineConfig,presetAttributify,presetUno} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import { presetUni } from '@uni-helper/unocss-preset-uni'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [
    presetAttributify(), 
    presetUno(),
    presetRemToPx({
        baseFontSize: 4,
    }),
	presetUni(),
	presetIcons()
  ],
})