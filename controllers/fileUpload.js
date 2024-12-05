const File = require("../models/File");
const cloudinary = require("cloudinary").v2;

//localfileupload -> handler function

exports.localFileUpload = async (req, res) => {
    try {

        //fetch filefrom request
        const file = req.files.file;
        console.log("FILE AAGYI JEE -> ",file);


        //create path where file need to be stored on server
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        console.log("PATH-> ", path)

        //add path to the move fucntion
        file.mv(path , (err) => {
            console.log(err);
        });

        //create a successful response
        res.json({
            success:true,
            message:'Local File Uploaded Successfully',
        });

    }
    catch(error) {
        console.log("Not able to upload the file on server")
        console.log(error);
    }
}


function isFileTypeSupported(type,supportedTypes){
    return supportedTypes.includes(type)
}

async function uploadFileToCloudinary(file, folder,quality) {
    const options = {folder};
    console.log("temp file path", file.tempFilePath);
    if(quality){
        options.quality=quality
    }
    options.resource_type = "auto"
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

// image uploadHandler
exports.imageUpload = async (req,res)=>{
    try{
        const {name,tags,email} = req.body
        console.log(name,tags,email)

        const file = req.files.imageFile;
        console.log("file image",file)

        // validation
        const supportedTypes= ["jpeg","jpg","png"]
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log(fileType)

        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                sucess:false,
                message:'File type not supported'
            })
        }

        //file format supprted
       

        console.log("Uploading to Iamges");
        const response = await uploadFileToCloudinary(file, "Images");
        console.log(response);

        //enty in db 
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        })
        res.json({
            sucess:true,
            message:"image Succesfully upload"
        })

    }
    catch(error){
console.log(error);
res.status(400).json({
    sucess:false,
    message:"something went wrong"
})
    }
}

// upload Videohandler
exports.videoUpload = async (req,res) =>{
    try{
        const {name,tags,email} = req.body
        console.log(name,tags,email)

        const file = req.files.videoFile;
        console.log("file video",file)

         // validation
         const supportedTypes= ["mp4","mov"]
         const fileType = file.name.split('.')[1].toLowerCase();
         console.log(fileType)
 
         if(!isFileTypeSupported(fileType,supportedTypes)){
             return res.status(400).json({
                 sucess:false,
                 message:'File type not supported'
             })
         }

         console.log("Uploading to Iamges");
         const response = await uploadFileToCloudinary(file, "Images");
         console.log(response);

         //enty in db 
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        })
        res.json({
            sucess:true,
            message:"video Succesfully upload"
        })
 

    }
    catch(error){
        res.status(400).json({
            sucess:false,
            message:"Something went wrong"
        })
    }
    
}


// Iamge Size Reducer

exports.imageSizeReducer = async (req,res)=>{
    try{
        const {name,tags,email} = req.body
        console.log(name,tags,email)

        const file = req.files.imageFile;
        console.log("file image",file)

        // validation
        const supportedTypes= ["jpeg","jpg","png"]
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log(fileType)

        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                sucess:false,
                message:'File type not supported'
            })
        }

        //file format supprted
       

        console.log("Uploading to Iamges");
        const response = await uploadFileToCloudinary(file, "Images",30);
        console.log(response);

        //enty in db 
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        })
        res.json({
            sucess:true,
            message:"image Succesfully upload"
        })

    }
    catch(error){
        res.status(400).json({
            sucess:false,
            message:"Something went wrong"
        }) 
    }
}