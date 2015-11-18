$(document).ready(function(){
  sidebarMovement();
  sidebarFocus();
  articleClicked();
});

function sidebarMovement(){
  /*create a function to monitor the y-position of the topmost $(.sidebar-item)
    -- when this function returns 0 or that the $(.sidebar-item) is top: 0;
    -- change the $(.sidebar-container) position from absolute, to fixed positioning
  */
  console.log("sidebarMovement");
}

function sidebarFocus(){
  /*create a function that changes the background-color of $(.sidebar-item)
    -- to $sidebar-item-background-focused when it is clicked on
    -- also needs to remove the $sidebar-item-background-focused from the
       previous $(.sidebar-item)
  */
  console.log("sidebarFocus");
}

function articleClicked(){
  $('.isClick').on("click", function(){
    alert('When an article is clicked... use AJAX & Jquery to switch out the article content for the full length article, and a back arrow [<]');
  });
}
