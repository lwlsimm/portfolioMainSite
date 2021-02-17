var path = window.location.pathname;
var page = path.split("/").pop();

function moveToNextPage () {
  
  switch(page) {
    case 'index.html':
      document.location.href = "aboutMe.html";
      break;
    case 'aboutMe':
      document.location.href = "myPortfolio.html";
      break;
    case 'myPortfolio.html':
      document.location.href = "contact.html";
      break;
  }
};