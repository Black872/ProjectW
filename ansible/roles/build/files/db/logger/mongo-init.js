db = db.getSiblingDB('admin');

db.auth("root", "root");

db = db.getSiblingDB('logger');

db.createUser({
    'user': "user",
    'pwd': "user",
    'roles': [{
        'role': 'dbOwner',
        'db': 'logger'
    }]
});

db.createCollection('init');