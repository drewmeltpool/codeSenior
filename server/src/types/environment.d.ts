declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DB_CLIENT: string;
      DB_USER: string;
      DB_PASSWORD: string;
      DB_HOST: string;
      DB_NAME: string;
      DB_PORT: string;
      MIN_POOL: string;
      MAX_POOL: string;
      WORKERS_COUNT: string;
      JWT_ACCESS_TOKEN: string;
      JWT_REFRESH_TOKEN: string;
      MAIL_HOST: string;
      MAIL_PORT: number;
      API_URL: string;
      MAIL_USER: string;
      MAIL_PASS: string;
      CLIENT_URL: string;
      GOOGLE_REFRESH_TOKEN: string;
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
      GOOGLE_REDIRECT_URL: string;
      BCRYPT_SALT: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
