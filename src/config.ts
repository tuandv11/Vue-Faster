interface Config {
  VITE_NODE_ENV: string;
  VITE_LOCALE: string;
}

const getConfig = (): ImportMetaEnv => {
  return {
    VITE_NODE_ENV: import.meta.env.VITE_NODE_ENV,
    VITE_LOCALE: import.meta.env.VITE_LOCALE
  };
};


const getSanitizedConfig = (config: ImportMetaEnv): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${ key } in config.env`);
    }
  }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitizedConfig(config);

export default sanitizedConfig;
