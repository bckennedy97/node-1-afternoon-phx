//req is the request from the client, res is response from the server
//req.body is the body of the object from the client during the request
//req.params are the parameters required by the endpoints? that the client is providing


let messages = [];

let id = 0;

module.exports = {
    create:(req,res)=>{
        const {text,time} = req.body; //destructering the properties of text and time from the clients request
        messages.push({id,text,time}); 
        id++;
        res.status(200).json(messages);
    },
    read:(req,res)=>{
        res.status(200).json(messages);
    },
    update:(req,res)=>{
        const{text}=req.body
        let updateID = req.params.id
        let messageIndex = messages.findIndex(message=>message.id==updateID)
        let message = messages[messageIndex]; 
        messages[messageIndex] = {
            id: message.id,
            text: text || message.text, // update if new text is truthy, otherwise keep original text
            time: message.time

        }
            res.status(200).json(messages);
    },
    delete:(req,res)=>{
        const deleteID = req.params.id;
        let messageIndex = messages.findIndex(message=>message.id==deleteID);
        messages.splice(messageIndex,1);
        res.status(200).json(messages);
    }
}