import presetUno from '@unocss/preset-uno';
import presetAttributify from '@unocss/preset-attributify';
import Unocss from 'unocss/vite';

export default {
  vite: true,
  vitePlugins:
      [
        Unocss({
          presets: [
            presetAttributify({ /* options */ }),
            presetUno(),
          ],
        }),
      ],
}