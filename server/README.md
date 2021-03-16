# Unknown Chat Server 💾

I used  __NODE JS, HTTP, SOCKET IO__ for message signaling & __NODE FETCH__ for updating database and i used __SHORT ID__ for generating random room id 😊 



### Setup

You need `NODE JS` & `NPM` for this



1. Install dependencies by `npm install` or `yarn install`
2. Run server by `node server.js`



The server will listen on port 8080

http://localhost:8080 



if you changed the port of database 

go to `server/constants.js`

```javascript
const database = 'you-database-url'; // http://localhost:8000
```

you can change the bot name by editing

```javascript
const bot = {
    name: 'you-bot-name',
    profile: 'bot',
};
```

