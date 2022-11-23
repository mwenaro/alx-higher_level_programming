//Write a JavaScript script that adds, removes and clears LI elements from a list when the user clicks:

const my_list = document.querySelector("ul.my_list");

const add_item = document.querySelector("div#add_item");

const remove_item = document.querySelector("div#remove_item");

const clear_list = document.querySelector("div#clear_list");

/**
 * Event Listners
 */

//Add item
add_item.addEventListener("click", ()=>{
  const list_item = document.createElement("li");
  list_item.innerHTML = "Item";

  my_list.appendChild(list_item);
});

//Clear Items
clear_list.addEventListener("click", ()=>{
//Get all list tiems
 let items = document.querySelectorAll("ul.my_list li");
  
 //Loop and remove all list items
  items.forEach(function(li){
    my_list.removeChild(li);
  });

});


//Remove the last list Item on click
remove_item.addEventListener("click", ()=>{
//Get all list tiems
 let items = document.querySelectorAll("ul.my_list li");
  
 //remove the last item
  if(items.length>0){
    my_list.removeChild(items[items.length -1]);
  }

});
