module.exports = {
  sqs: {
    region: process.env.SQS_REGION,
    accessKey: process.env.SQS_ACCESS_KEY,
    secret: process.env.SQS_SECRET,
    url: process.env.SQS_URL
  },
  db: {
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME || 'postgres'
  },
  auth: {
    realm: process.env.KEYCLOAK_REALM,
    url: process.env.KEYCLOAK_URL,
    client: process.env.KEYCLOAK_CLIENT,
    secret: process.env.KEYCLOAK_SECRET,
    username: process.env.KEYCLOAK_USERNAME,
    password: process.env.KEYCLOAK_PASSWORD
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiry: process.env.JWT_EXPIRY || '7 days'
  },
  emailer: {
    host: process.env.EMAILER_SERVICE,
    registerService: process.env.REGISTER_SERVICE
  }
};
