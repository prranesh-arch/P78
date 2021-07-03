 var i=0;
 function update()
 {
     i++;
     var number_of_family_memmber_in_array = 5
     if(i > number_of_family_memmber_in_array)
     {
         i= 0;
     }
     var updatedImage = image[i];
     var updatedName  = names [i];
     document.getElementById("family_member_image").src= updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName;
 }

 var images =
 ["https://image.shutterstock.com/image-vector/cute-cartoon-family-colorful-clothes-260nw-278705615.jpg",
 "https://image.shutterstock.com/image-vector/vector-graphic-illustration-grandfather-holding-260nw-1788663509.jpg",
"https://us.123rf.com/450wm/ylivdesign/ylivdesign1605/ylivdesign160500244/56085314-dad-icon-in-cartoon-style-on-a-white-background.jpg?ver=6",
"https://www.pngkit.com/png/detail/319-3196845_mcm-every-day-my-animated-crush-boss-baby.png",
"https://us.123rf.com/450wm/yupiramos/yupiramos1905/yupiramos190505227/122760736-little-girl-avatar-character-vector-illustration-design.jpg?ver=6",
""];

var names = ["Family Book","Ranbir Singh","Diljeet Singh","Rocky Singh","Alia Singh","Soni Singh"]





