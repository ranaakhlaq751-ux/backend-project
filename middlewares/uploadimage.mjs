import multer from "mculter";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.mjs";


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "Products",
        allowed_formats: ["jpg", "jpeg","png"],
       transformation: [
    { width: 800, height: 600, crop: "limit" }
],
    },
})

const upload = multer({ storage });

export default upload;