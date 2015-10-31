$(document).ready(function(){
  sidebarMovement();
  sidebarFocus();
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
