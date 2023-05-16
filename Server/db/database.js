// import mysql from 'mysql2';
import {config} from '../config.js';
// import SQ from 'sequelize';


// mongodb 로 변환
// import MongoDb from 'mongodb';

// const {host, user, database, password} = config.db;


// mongoose 사용
import Mongoose from 'mongoose';


// const pool = mysql.createPool({
//     // host: config.db.host,
//     // user: config.db.user,
//     // database: config.db.database,
//     // password: config.db.password 
//     // 위에 const 조작으로 밑처럼 변환하기 가능
//     host,
//     user,
//     database,
//     password
// })
// export const db = pool.promise()


// Sequelize(디비, 유저, 패스워드,{넣을곳})
// export const sequelize = new SQ.Sequelize(database, user, password, {
//     host,
//     // db 종류
//     dialect: 'mysql',
//     //로그 남기지 않기
//     logging: false,
//     timezone: "+9:00"
// })


// mongoDb 사용하기
// export async function connectDB(){
//     return MongoDb.MongoClient.connect(config.db.host)
//     .then((client) => {
//         db = client.db()
//     });
// }
// let db;


// mongoose 사용
export async function connectDB(){
    return Mongoose.connect(config.db.host);
}

export function useVirtualId(schema){
    schema.virtual('id').get(function(){
        return this._id.toString();
    })
    schema.set('toJSON', {virtuals : true});
    schema.set('toObject', {virtuals:true});
}





export function getUsers(){
    return db.collection('users')   
}

export function getTweets(){
    return db.collection('tweets')
}



