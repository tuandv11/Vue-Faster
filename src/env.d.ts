interface ImportMetaEnv {
  readonly VITE_NODE_ENV: string
  readonly VITE_LOCALE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
