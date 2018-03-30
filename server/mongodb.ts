// tslint:disable-next-line:no-var-requires
import { MongoClient } from "mongodb";
const url = "mongodb://heroku_t4mgjxzt:puh8csv4qhenmata8e5q9f7frd@ds229549.mlab.com:29549/heroku_t4mgjxzt";

const con = function connect(callback) {
    MongoClient.connect(url, (error, db) => {
        if (error) {
            // tslint:disable-next-line:no-console
            console.log(error);
            callback(false);
        } else {
            const dbo = db.db("heroku_t4mgjxzt");
            callback(dbo);
        }
    });
};

export { con };
