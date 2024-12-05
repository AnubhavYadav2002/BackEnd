const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
    },
    tags:{
        type:String,
    },
    email:{
        type:String,
    }
});


//post middleware

fileSchema.post("save", async function (doc) {
    try{
   console.log("DOC",doc)

   let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
   
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  //send mail
  let info = await transporter.sendMail({
    from:`"Anav" <anavcoding@gmail.com> `,
    to: doc.email,
    subject:"New File Uploaded",
    html: "<b>Hello world?</b>", 
  });
  console.log("INFO",info)

    }
    catch(error){
console.log(error)
    }
})

const File = mongoose.model("File", fileSchema);
module.exports = File;