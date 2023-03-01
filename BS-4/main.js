let messageInput = document.getElementById("message-input");
let messageOutput = document.getElementById("message-output");

messageInput.addEventListener("keydown", function(e){
    if(e.key == "Enter"){
        generateMessage();
    }
})

function generateMessage(){
    messageOutput.innerHTML = messageInput.value;
    messageInput.value = "";
}