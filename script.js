function count() {
  // for (i=-10;i<=10;i=i+2) {
  //   document.getElementById("main").innerHTML+="<br />"+i+",";
  // }
  // var choice = false;
  // while(choice == false) {
  //   alert("Try again");
  //   choice=confirm("Do you want to install the virus?")
  //   if (choice == true) {
  //     alert("virus installed")
  //   }
  //}
  var count = 99;
  var count2 = 98;
  while (count >= -1 && count2 >= 0 ) {
    document.getElementById("main").innerHTML+="<br /> <br />"+count+" bottles of beer on the wall, <br />"+count+" bottles of beer 🍺. <br /> Take one down and pass it around, <br />"+count2+" bottles of beer on the wall </br>";
    count = count - 1;
    count2 = count2 - 1;
  } if (count == 0) {
    alert("No more bottles 🍻 of beer on the wall, no more bottles of beer 🍺. Go to the store and buy some more, 99 bottles of beer on the wall 🥳 ")
  }
} 