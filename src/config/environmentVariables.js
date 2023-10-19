export const configData = {
    "mongo": {
        'driver': 'mongodb',
        'database': process.env.MONGO_DB,
        'host': process.env.MONGO_HOST,
        'user': process.env.MONGO_USER,
        'password': process.env.MONGO_PASS,
        'port': process.env.MONGO_PORT
    },
}