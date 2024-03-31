const targetDivs = document.querySelectorAll('div[id="nypl_prodFramed"], div[id="nypl_prodStretched"], div[id="nypl_prodMural"], div[id="nypl_prodPaper"]'); // Modify selector to target specific divs

targetDivs.forEach(div => {
  div.innerHTML = '<img src="https://i.ibb.co/NF3zm7x/error.png" style="width: 300px; height: 400px"></img>';
});