$(document).ready(function(){  
$("#submit").click(function(){
	var name = $("#name").val();
	var email = $("#email").val();
	var subject = $("#message").val();
	var message = $("#contact").val();

	$("#returnmessage").empty(); //To empty previous error/success message.
//checking for blank fields	
if(name==''||email==''||subject=='')
{
   alert("Please Fill Required Fields"); 
}
else{
// Returns successful data submission message when the entered information is stored in database.
$.post("save_message.php",{ name1: name, email1: email, subject1:subject, message1: message},
   function(data) {
                $("#returnmessage").append(data);//Append returned message to message paragraph
					if(data=="Your Query has been received, We will contact you soon."){
						$("#form")[0].reset();//To reset form fields on success
					}
			});
         }
 
});
});
