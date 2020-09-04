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
        "INSERT INTO USER (USERNAME, EMAIL, MOBNO, PASSWORD) VALUES (?, ?, ?, ?)";
    await connection.queryAsync(sql, [
        input.username,
        input.email,
        input.mobno,
        input.password,
    ]);

    await connection.endAsync();
};

module.exports = { addUser };