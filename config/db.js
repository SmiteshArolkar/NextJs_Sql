import serverlessMysql from "serverless-mysql";


export const db = serverlessMysql({
    config: {
        host: 'localhost',
        database:'shoes',
        user:'root'
    }
});


export default async function executeQuery({query , values}) {
    try{
        const results = await db.query(query,values)
        await db.end();
        return results;
    }
    catch (error)
    {
        return { error };
    }
}