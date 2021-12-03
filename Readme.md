<div style="text-align: center;"> <h1>Typetron example using WebSockets</h1> </div>
> **Note:** This project is a prototype in heavy development and not ready for production. 

#### Start the backend

```sh
$ npm install
$ npm start
```

#### Start the frontend

Pick you favorite frontend technology. You can find the available example in the `frontend` directory

#### Angular

```sh
$ cd frontend/angular
$ npm install
$ npm start
```

Check the Angular app console on [http://localhost:4200](http://localhost:4200)) to see the WebSockets message.

#### React

```sh
$ cd frontend/react
$ npm install
$ npm start
```

React will automatically open a browser window with the frontend app. Check you console to see the WebSockets message.

#### Vue

_In progress_

#### Webpack (just a simple website, with no frameworks)

```sh
$ cd frontend/webpack
$ npm install
$ npm build
```

After the build is done, webpack will output an `index.js` file in the `/public` directory. From here, all you have to
do is to open the Typetron app (usually on [http://localhost:8000](http://localhost:8000))
and check your console
