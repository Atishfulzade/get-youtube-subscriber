# Get YouTube Subscribers API

This project is a simple Node.js application that connects to a MongoDB database to manage and retrieve YouTube subscriber data. The application uses Express for handling HTTP requests and Mongoose for MongoDB interaction.

## Project Structure

get-youtube-subscriber/                                                                                                                                                                                             
├── public/                                                                                                                                                                                                         
│ └── index.html                                                                                                                                                                                                    
├── src/                                                                                                                                                                                                            
│ ├── app.js                                                                                                                                                                                                        
│ ├── createDatabase.js                                                                                                                                                                                             
│ ├── data.js                                                                                                                                                                                                       
│ ├── index.js                                                                                                                                                                                                      
│ ├── models/                                                                                                                                                                                                       
│ │ └── subscribers.js                                                                                                                                                                                              
│ └── routes/                                                                                                                                                                                                       
│ └── subscribers.js                                                                                                                                                                                                
├── .env                                                                                                                                                                                                            
├── package.json                                                                                                                                                                                                    
└── README.md                                                                                                                                                                                                       

## Prerequisites

- Node.js
- MongoDB (local or Atlas)

## Getting Started

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Atishfulzade/get-youtube-subscriber.git
    cd your-repo-name
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Set up your environment variables by creating a `.env` file in the root directory and adding your MongoDB URI:

    ```dotenv
    MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority
    PORT=3000
    ```

    Replace `<username>`, `<password>`, `<cluster-url>`, and `<dbname>` with your actual MongoDB credentials and database name.

4. Create the database by running:

    ```bash
    node src/createDatabase.js
    ```

### Running the Application

1. Start the server:

    ```bash
    node src/index.js
    ```

2. The server will start on the port specified in your `.env` file (default is 3000). Open your browser and navigate to `http://localhost:3000` to view the API documentation.

## API Endpoints

### Get All Subscribers

- **URL**: `/subscribers`
- **Method**: `GET`
- **Response**: An array of subscriber objects.

    ```json
    [
        {
            "_id": "60d0fe4f5311236168a109ca",
            "name": "Subscriber1",
            "subscribedChannel": "Channel1"
        },
        {
            "_id": "60d0fe4f5311236168a109cb",
            "name": "Subscriber2",
            "subscribedChannel": "Channel2"
        }
    ]
    ```

### Get Subscriber Names and Channels

- **URL**: `/subscribers/names`
- **Method**: `GET`
- **Response**: An array of subscriber objects with only `name` and `subscribedChannel` fields.

    ```json
    [
        {
            "name": "Subscriber1",
            "subscribedChannel": "Channel1"
        },
        {
            "name": "Subscriber2",
            "subscribedChannel": "Channel2"
        }
    ]
    ```

### Get Subscriber by ID

- **URL**: `/subscribers/:id`
- **Method**: `GET`
- **URL Params**: `id=[string]`
- **Response**: A subscriber object with the given ID.

    ```json
    {
        "_id": "60d0fe4f5311236168a109ca",
        "name": "Subscriber1",
        "subscribedChannel": "Channel1"
    }
    ```

- **Error Response**:

    ```json
    {
        "message": "Cannot find subscriber"
    }
    ```

## Troubleshooting

### Common Issues

- **Deprecation Warning for MongoDB URL**: Ensure you are using the `mongodb+srv` protocol in your connection string.
- **Database Connection Errors**: Ensure your IP is whitelisted in your MongoDB Atlas cluster. Follow the instructions [here](https://docs.atlas.mongodb.com/security-whitelist/).

### Enabling Debugging

To enable debugging for Mongoose, add the following line before your `mongoose.connect` call in `src/index.js`:

```javascript
mongoose.set('debug', true);

## License

This project is licensed under the MIT License.


