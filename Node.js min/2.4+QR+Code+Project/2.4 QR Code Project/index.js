/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


    // <!-- @Author: Tran Cao Anh Kiet -->
    // <!-- Date created: 2026.03.27  14:29 PM-->
import { input  } from "@inquirer/prompts";
import qr from 'qr-image';
import fs from 'fs';
import { url } from "inspector";

try {
  const answer = await input({message: 'Enter the link:'});

  // analyze the url to take web's name
  const urlObj = new URL(answer);
  // take the name of web
  const siteName = urlObj.hostname.replace("www.",'').split(".")[0];

  // name web to qr image
  const fileName = `${siteName}.png`
  const qr_png = qr.image(answer, { type:'png'});
  qr_png.pipe(fs.createWriteStream(fileName));

  // save the url web
  fs.appendFile("URL.txt",answer  +"\n",(err) =>{
    if(err) throw err;
    console.log(`Successfully! Create an image ${fileName} and update url to URL.txt.`);
  });
} catch(error) {
  console.log("please enter a valide url.");
}

