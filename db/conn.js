// import mongoose from "mongoose";

// const Connection = async () => {
//     try {
//         await mongoose.connect(process.env.DB_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("Database connected successfully");
//     } catch (error) {
//         console.error("Database connection error: ", error.message);
//         process.exit(1); // Exit the process if the database connection fails
//     }
// };

// export default Connection;


import mongoose from "mongoose";

const Connection = async () => {
    try {
        await mongoose.connect(process.env.db_url)
        console.log("database connected");
        
    } catch (error) {
        console.log(error);
        
    }
}

export default Connection;