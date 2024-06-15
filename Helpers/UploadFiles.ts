import multer from "multer";

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./upload/book")
    },
    filename:(req,file,cb)=>{
        const date = Date.now()
        cb(null,`${date} - ${file.originalname}`)

    }

})
const upload = multer({storage:storage})
export default upload