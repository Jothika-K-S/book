import express from "express"
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import bookRoute from "./routes/bookRoute.js"
const app = express()
dotenv.config()

app.use(express.json())

app.use(express.urlencoded({ extended: false }));

app.use(cors())

// app.use(
//     cors(
//         {
//             origin: 'http://localhost:1234/',
//             methods: ['GET', 'POST', 'PUT', 'DELETE'],
//             allowedHeaders: ['Content-Type', 'Authorization'],
//         }
//     )
// )

app.use('/api/books',bookRoute)

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Database Connected Successfully!')
    app.listen(process.env.X_ZOHO_CATALYST_LISTEN_PORT || 3500, () =>  {
    console.log(`Server is running on port 3500`)
})
}).catch((err) => console.log(err))

