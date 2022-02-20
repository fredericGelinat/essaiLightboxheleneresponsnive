var myfigure = document.getElementById('hg');
// does you ID exists ? 
if (myfigure.hasChildNodes()) // has it got any child ? 
{
  var children = myfigure.childNodes;
  // if it does, get them
  for (var i = 0; i < children.length; i++) {
    // go through all children
    if (children[i].nodeName == 'IMG') {
      // is it an img tag 
      children[i].style.border = "solid"; // apply some style or whatever else 
    }
    // another test
    if (children[i].nodeName == 'FIGCAPTION') {
      children[i].style.color = "red";
    }
  }
}