
export const handler = async (event:any, context:any, callback:any) => {
    let test = process.env.test
    console.log("event", event, test)
}