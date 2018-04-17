function sendMail(str) {
    var link = "mailto:don.parminter@gmail.com" + "&subject=" + escape("New Contact Message") + "&body=" + escape(str);
    fieldReset();
}

function submit_comment() {
    var Name = document.querySelector('#name').value;
    var Email = document.querySelector('#email').value;
    var Message = document.querySelector('#message').value;
    if((Name !="") && (Email !="") && (Message !="")) {
        sendMail("HELLO");
    }
}

function fieldReset() {
    Name.value = '';
    Email.value = '';
    Message.value = '';
}