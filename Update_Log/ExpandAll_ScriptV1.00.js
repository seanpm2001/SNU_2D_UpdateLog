// start of script
/* remixed from stackoverflow 
https://stackoverflow.com/questions/43008609/expanding-all-details-tags
Original poster: zer00one
*/
// Reference the toggle link
var xa = document.getElementById('expAll');
// Register link on click event
xa.addEventListener('click', function(e) {
  /* Toggle the two classes that represent "state"
  || determined when link is clicked
  */
  e.target.classList.toggle('exp');
  e.target.classList.toggle('col');
  // Collect all <details> into a NodeList
  var details = document.querySelectorAll('details');
  /* Convert NodeList into an array then iterate
  || throught it...
  */
  var D = Array.from(details);
  /* Start a for loop at 6 instead of 0
  || Now 0 - 5 details are excluded
  */
  for (let i = 6; i < D.length; i++) {
    /* If the link has the class .exp...
    || make each <detail>'s open attribute true
    */
    if (e.target.classList.contains('exp')) {
      D[i].open = true;
      // Otherwise make it false
    } else {
      D[i].open = false;
    }
// end of script