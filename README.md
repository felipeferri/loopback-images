This project was is based on [loopback-example-storage](https://github.com/strongloop/loopback-example-storage).

The main difference is that we present an `Image` model which stores image information in our database. Also we add an operation hook to `Image` in order to return a full url for each image which can be used directly to download the image.

The original example from loopback included a client which allows uploading and downloading files.

# Executing this project

Install dependencies:

    npm install
    
Run the server

    npm run-script debug
    
Then open the api explorer at:

    localhost:3000/explorer
