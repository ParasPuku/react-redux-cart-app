const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// const mConnections = {};

// _.forEach(config.mongo, (m, key) => {
//   const { uri } = m;
//   mConnections[key] = createConnection(key, uri);
//   //   mongoose.createConnection(uri, opt);
// });

// /**
//  * Connect to MongoDB
//  * @param {string} name
//  * @param {string} uri
//  * @returns {mongoose.Connection}
//  */
// function createConnection(name, uri) {
//   logger.debug(uri);
//   console.time("mongodb connection time");
//   let db = mongoose.createConnection(uri, options);

//   db.then(() => {}).catch((err) => {
//     console.error(err);
//   });

//   db.on("connected", function () {
//     console.timeLog("mongodb connection time");
//     logger.info(`MongoDB ${name} connected`);
//   });

//   db.on("disconnected", function () {
//     logger.warn(`MongoDB ${name} disconnected`);
//   });

//   db.on("reconnected", function () {
//     logger.info(`MongoDB ${name} reconnected`);
//   });

//   db.on("error", function (err) {
//     logger.error(`Error connection MongoDB ${name}`);
//     console.error(err);
//     // If first connect fails because mongod is down, try again later.
//     // This is only needed for first connect, not for runtime reconnects.
//     // See: https://github.com/Automattic/mongoose/issues/5169
//     // Wait for a bit, then try to connect again

//     // [PNC]: removed the if clause to retry on every connection error
//     setTimeout(function () {
//       logger.info(`Retrying first connect for MongoDB ${name}...`);
//       db.openUri(uri).catch(() => {});
//       // Why the empty catch?
//       // Well, errors thrown by db.open() will also be passed to .on('error'),
//       // so we can handle them there, no need to log anything in the catch here.
//       // But we still need this empty catch to avoid unhandled rejections.
//     }, 5 * 1000);
//   });

//   db.on("reconnectFailed", function () {
//     logger.info(`MongoDB ${name} reconnectFailed`);
//   });

//   return db;
// }

// module.exports = mConnections;
