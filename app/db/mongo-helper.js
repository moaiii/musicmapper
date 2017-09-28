// "use strict";

// let debug = require('debug')('ambie:modules:common:mongodb');
// let client = require('mongodb').MongoClient;

// class PromiseMongo {

// 	constructor(connectionString) {
// 		this.connectionString = connectionString;
// 	}

// 	connect() {
// 		return new Promise((resolveConnection,rejectConnection) => {

// 			if (!this.connection) {
// 				console.log('Connecting to mongo Url: ' , this.connectionString);
// 				client.connect("mongodb://" + this.connectionString,
// 					(err, db) => {
// 						if (err) {
// 							console.error(err);
// 							rejectConnection(false)
// 						} else {
// 							console.log('Mongo connected');
// 							this.connection = db;
// 							resolveConnection(this.connection)
// 						}
// 					});

// 			} else {
// 				resolveConnection(this.connection);
// 			}
// 		});
// 	}

// 	findDocuments(collection_name, search_object) {
// 		return new Promise( (resolve, reject) => {

// 			this.connect()
// 				.then(db =>{
// 					//Find some documents
// 					// console.log("Collection name",collection_name);
// 					// console.log("search_object", search_object);

// 					db.collection(collection_name)
// 						.find(search_object)
// 						.toArray((err, docs) => {

// 							if (err) {
// 								reject(err)
// 							} else {
// 								resolve(docs);
// 							}
// 						});
// 				})
// 				.catch(e => {
// 					reject(e)
// 				});
// 		});
// 	}

// 	insertOneDocument (collection_name, document) {
// 		return new Promise( (resolve, reject) => {

// 			this.connect()
// 				.then(db =>{
// 					debug('insert into collection' , collection_name);
// 					//debug(db);
// 					db.collection(collection_name)
// 						.insertOne(document,
// 							(err, result) => {
// 								if (err) {
// 									reject(err)
// 								} else {
// 									resolve(result);
// 								}
// 							});

// 				});
// 		});
// 	}

// 	insertManyDocuments (collection_name, documents) {
// 		return new Promise( (resolve, reject) => {

// 			this.connect()
// 				.then(db =>{

// 					debug('insert into collection' , collection_name);
// 					//debug(db);
// 					db.collection(collection_name)
// 						.insertMany(documents,
// 							(err, result) => {
// 								if (err) {
// 									reject(err)
// 								} else {
// 									resolve(result);
// 								}
// 							});
// 				});
// 		});
// 	}

// 	removeDocuments (collection_name, search_object) {
// 		return new Promise( (resolve, reject) => {

// 			this.connect()
// 				.then(db =>{
// 					//Find some documents
// 					debug("Collection name",collection_name);
// 					debug("search_object", search_object);

// 					db.collection(collection_name)
// 						.deleteMany(search_object,{}, (err, docs) => {
// 							if (err) {
// 								reject(err)
// 							} else {
// 								resolve(docs);
// 							}
// 						});
// 				})
// 				.catch(e => {
// 					reject(e)
// 				});
// 		});
// 	}
// }

// module.exports = (connection_string) => {
// 	return new PromiseMongo(connection_string);
// };
