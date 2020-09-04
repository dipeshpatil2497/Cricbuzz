const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const dbconfig = {
    host: "localhost",
    user: "root",
    password: "",
    database: "dbforcricbuzz",
};

const addUser = async (input) => {
    const connection = mysql.createConnection(dbconfig);

    await connection.connectAsync();

    const sql =
        "SELECT * FROM USER";
    const result = await connection.queryAsync(sql);

    await connection.endAsync();
    return result;
};

module.exports = { addUser };