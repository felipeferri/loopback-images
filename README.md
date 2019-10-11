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

# Example output

Each image contains a `container` and a `filename` property. When you call the `GET api/images` method the images will be returned containing also a full url:

    // GET images
    [
      {
        "container": "container1",
        "filename": "f1.txt",
        "id": 1,
        "productId": 1,
        "url": "http://localhost:3000/api/containers/container1/download/f1.txt"
      },
      {
        "container": "container1",
        "filename": "f1.txt",
        "id": 2,
        "productId": 1,
        "url": "http://localhost:3000/api/containers/container1/download/f1.txt"
      }
    ]
