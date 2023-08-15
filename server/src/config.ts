import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

interface ENV {
  port: number | undefined;
  user: string | undefined;
  password: string | undefined;
  connectionString: string | undefined;
}

interface Config {
  port: number;
  user: string;
  password: string;
  connectionString: string;
}

// Fetch .env config file
const getConfig = (): ENV => {
  return {
    port: process.env.PORT ? Number(process.env.PORT) : undefined,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWD,
    connectionString: process.env.DB_SERVER_URL,
  };
};

// Verify entries and get sanitized config
const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing variable ${key} in .env`);
    }
  }
  return config as Config;
};

const sanitizedConfig = getSanitzedConfig(getConfig());

export default sanitizedConfig;
