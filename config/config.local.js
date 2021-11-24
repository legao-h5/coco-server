module.exports = {
  sequelize: {
    dialect: 'mysql',
    host: 'rm-wz9rff17dy2y29t5y2o.mysql.rds.aliyuncs.com',
    port: 3306,
    database: 'bdw-web-legao',
    username: 'betterwood_qd',
    password: 'betterwood_qd###123',
    logging: false
  },
  cors: {
    origin:ctx => ctx.get('origin'),
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true,
  },
  security: {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: [
      'http://localhost:8080',
      'http://aaa.coco-h5.cn:8080',
      'http://localhost:8085/',
      'rm-wz9rff17dy2y29t5y2o.mysql.rds.aliyuncs.com'
    ]
  }
};
