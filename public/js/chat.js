
// client side / front end JS file 
// (can also be written in script tags in ejs)
// otherwise u have to link at bottom of ejs file
// requires the socket IO CDN

const socket = io();
var chatUsername = document.querySelector('#chat-username');
var chatMessage = document.querySelector('#chat-message');

socket.on('connect', ()=>{

    let chatForm = document.querySelector('form');

    if(chatForm)
    {
        // add event listener to form on submit event
        
        chatForm.addEventListener('submit', (e)=>{

            e.preventDefault();
            // broadcast message back to server

            socket.emit('chat room', {

                // grab username and message
                username: chatUsername.value,
                message: chatMessage.value

            });

            // clear fields when user hits send
            chatUsername.value = "";
            chatMessage.value = "";

        }); //end of form event listener

    //listen to incoming messages from server
    socket.on('chat room', (msgFromServer)=>{

        // {username: value, message:value}
        showMessage(msgFromServer);

    })

    } //end of if statement


}) //end of socket.on

function showMessage(data)
{
    var chatDisplay = document.querySelector('.chat-display');
    var newMessage = document.createElement('p');

    if (chatUsername.value == data.username)
    {
        newMessage.className = 'bg-dark chat-text';
    }
    else
    {
        newMessage.className = 'bg-light text-dark chat-text';
    }

    newMessage.innerHTML = '<strong>' + data.username + '</strong>: ' + data.message;
    chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);

}