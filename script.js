const sendBtn= document.querySelector('#sendBtn');
const messageIn= document.querySelector('#messageIn');
const messsageOut= document.querySelector('#messsageOut');


sendBtn.addEventListener('click',sendMsg)

function sendMsg(){
    let content = messageIn.value;
    // console.log(content);
    if(messageIn.value==''){
        alert('Please Enter Your Message')
    }else{

    
    messageOut.innerHTML= content;
    messageIn.value = '';
}}
