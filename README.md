# heni-art-browser

### Quick start (for linux/mac) email tom.connolly@protonmail.com for windows support

 * Clone the repo to your machine
 * Open a terminal in the root directory and install all dependencies:
```
cd art-browser
npm install
cd ../art-browser-server
npm install
```
 * Start the server (this is in development mode)
```
cd art-browser-server
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

