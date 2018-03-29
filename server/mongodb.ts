// tslint:disable-next-line:no-var-requires
import { MongoClient } from "mongodb";
const url = "mongodb://heroku_fvq5rqrz:m3kel00mccj49gu8k1ha4qqo95@ds127899.mlab.com:27899/heroku_fvq5rqrz";

const con = function connect(callback) {
    MongoClient.connect(url, (error, db) => {
        if (error) {
            // tslint:disable-next-line:no-console
            console.log(error);
            callback(false);
        } else {
            const dbo = db.db("heroku_fvq5rqrz");
            callback(dbo);
        }
    });
};

export { con };
