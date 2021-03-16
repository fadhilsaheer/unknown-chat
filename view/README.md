# Unknown Chat View 👀

View is made using __REACT__ 😉

__packages used__

* React Router Dom
* Firebase
* Axios
* Sweetalert
* React-Scroll-To-Bottom
* Socket.IO-Client



### Setup

You need `NODE JS` & `NPM` for this



1. Install dependencies by `npm install` or `yarn install`
2. Run view by `npm start` or `yarn start`

> run view only after running server and database ❗



**if you changed the port of server or database **

Navigate to `view/src/utils/consts.js`

```javascript
const server = "you-server-url";
const database = "your-database-url";
```



**The authentication is made possible by Firebase 🔥**

Navigate to `view/src/utils`

create a folder named `firebase` and inside that folder create a file named 

`firebase.js`

create a project in firebase and copy firebase config 🔗

```javascript
const firebaseConfig = {
  // your firebase config 
};

export default firebaseConfig;
```



**change bot profile**

Navigate to `view/src/components/chat/chatMsg.jsx`

```javascript
import botImage from 'your-image-path';
```

