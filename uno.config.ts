// uno.config.ts
import { defineConfig, presetUno, presetIcons, Preset } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

const presetHexlab: Preset = {
  name: 'preset-hexlab',
  shortcuts: {
    'btn': 'flex flex-row items-center justify-center gap-10 cursor-pointer items-center',
    'btn-primary': 'bg-primary text-white hover:bg-primary-dark',
    'btn-secondary': 'bg-transparent b-1 b-primary text-primary hover:bg-primary hover:text-white',
    'btn-tertiary': 'text-primary hover:text-primary-dark',
    'btn-subtle': 'bg-ghost text-gray-darker hover:bg-gray-lighter',
    'btn-sm': 'py-8 px-12 rd-36',
    'btn-md': 'py-12 px-16 rd-44',
    'btn-lg': 'py-16 px-24 rd-56',
    'type-display': 'font-display text-72 leading-80 font-600 tracking-(-0.02em)',
    'type-h1': 'font-body text-64 leading-72 font-600 tracking-(-0.02em)',
    'type-h2': 'font-body text-56 leading-64 font-600 tracking-(-0.02em)',
    'type-h3': 'font-body text-48 leading-56 font-600 tracking-(-0.02em)',
    'type-h4': 'font-body text-32 leading-40 font-600 tracking-(-0.02em)',
    'type-link': 'font-body text-16 leading-24 font-500 tracking-0.02em',
    'type-quote': 'font-body text-16 leading-24 font-400 tracking-0.02em italic',
    'type-sm': 'font-body text-14 leading-16 font-400 tracking-0.02em',
    'type-xs': 'font-body text-12 leading-16 font-400 tracking-0.02em',
    'type-eyebrow': 'font-body text-16 leading-20 font-500 tracking-0.02em',
    'type-body': 'font-body text-16 leading-24 font-400 tracking-0.02em',
    'type-caption': 'font-body text-12 leading-16 font-500 tracking-0.02em',
    'type-btn-lg': 'font-body text-18 leading-24 font-500 tracking-0.02em',
    'type-btn-md': 'font-body text-16 leading-20 font-500 tracking-0.02em',
    'type-btn-sm': 'font-body text-14 leading-20 font-500 tracking-0.02em',
  },
  prefix: 'hex-',
}

const config = defineConfig({
  theme: {
    colors: {
      'success': '#51CF66',
      'warning': '#F8EB46',
      'danger': '#F44831',
      'info': '#00A2FF',

      'black': '#000000',
      'dark': '#262A31',
      'ghost': '#F2F6FF',
      'white': '#FFFFFF',

      'primary': {
        'lighter': '#A1BBFF',
        'light': '#6E97FF',
        'DEFAULT': '#3B71FE',
        'dark': '#1B4DCC',
        'darker': '#052F99',
      },
      'gray': {
        'lighter': '#C0C5CE',
        'light': '#A7ADBA',
        'DEFAULT': '#A0A4AB',
        'dark': '#333B42',
        'darker': '#1C2126',
      },
    },
    fontFamily: {
      'display': 'ClashDisplay',
      'body': 'GeneralSans',
    },
  },
  presets: [
    presetUno(),
    presetIcons(),
    presetRemToPx({
      baseFontSize: 4,
    }),
    presetHexlab,
  ],
  transformers: [
  ],
})

export default config;