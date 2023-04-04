import * as fs from "fs";
import * as dotenv from 'dotenv' 
dotenv.config({path:"../../../test.env"})

let args = process.argv

let file_path = args[2]
console.log("hello world", args)

fs.readFile(file_path, "utf-8", async (error, data:string )=>{
    if(error){
        console.log("error", error)
        return
    }

    let jsonData = JSON.parse(data)
    try {
        let func = await import(jsonData.path)
        let event = jsonData.event;
        console.log("handler", func.handler)
        await func.handler(event,{},()=>"")
    } catch (error) {
        console.log("error", error)
        return
    }
});

