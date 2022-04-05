import {Pool} from 'pg';

let conn: any

if (!conn) {
    conn = new Pool({
        user: 'postgres',
        password: '',
        host: 'localhost',
        port: 5432,
        database: 'datasport'
    })
}

export { conn };