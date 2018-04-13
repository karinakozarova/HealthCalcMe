
// set up text to print, each item in array is new line
var aText = new Array(
"So.. You're probably thinking what the fuck is this", 
"Well, that's my Web Design course projects",
"It basically consists of a few pages and links for them",
"but no real content actually...",
"Some day maybe I will also add content",
"But currently it's no priority for me.",
"Have fun exploring this site!"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 600);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();