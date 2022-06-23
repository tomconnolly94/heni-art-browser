# heni-art-browser

### Quick start (for linux/mac) email tom.connolly@protonmail.com for windows support

 * Clone the repo to your machine
 * Open a terminal in the root directory and install all dependencies:
```
cd heni-art-browser/art-browser
npm install --force
cd ../art-browser-server
npm install --force
```
 * create an .env file in the `art-browser-server` directory and paste in the following contents:
 ```
PORT=8082
APIKEY=c28e4be0-4c0e-11ea-90d6-25d9a9fe80fc
 ```

 * Start the server
```
npm run build
npm start
``` 
 * Open a new terminal and start the client 
```
cd art-browser
npm start
```


### Testing

There is minimal skeleton testing in the project due to time contraints, testing is important and these tests are meant to demonstrate the testing structure and show how other tests could be added 

#### Client

Open a new terminal and trigger the test suite:
```
cd art-browser
npm run test
```


#### Server

Open a new terminal and trigger the test suite:
```
cd art-browser-server
npm run test
```

