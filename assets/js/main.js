function sendMail(str) {
    var link = "mailto:don.parminter@gmail.com" + "&subject=" + escape("New Contact Message") + "&body=" + escape(str);
    location.href = link;
}

function submit_comment() {
var Name = document.forms["contact_form"]["name"].value;
var Email = document.forms["contact_form"]["email"].value;
var Message = document.forms["contact_form"]["message"].value;
if((Name !="") && (Email !="") && (Message !="")) {
   sendMail("HELLO");
}
}