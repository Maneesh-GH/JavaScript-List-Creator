/*
  Demonstration: JS To Do List / JS List
  
  Written By: Maneesh Pandey
  Nickname: NamelessX
  Website: maneesh.dx.am
  Instagram: https://www.instagram.com/_maneesh_pandey
*/

var inp = document.getElementById('listInput');
var list = document.getElementById('listContainer');


// This function adds items into the list
function addList(){
  let item = inp.value;
  if (item != "") {
    let li = document.createElement('LI');
    let text = document.createTextNode(item);

    // This is for removing and marking the list item as done
    let cross = document.createElement('button');
    let done = document.createElement('button');
    cross.appendChild(document.createTextNode('X'));
    done.appendChild(document.createTextNode('D'));
    cross.className = "cross";
    done.className = "done";

    cross.onclick = function(){
      list.removeChild(li);
    }

    done.onclick = function(){
      li.removeChild(this);
      li.style.background = "#35cef4";
      li.style.color = "#ffffff";
    }

    li.appendChild(cross);
    li.appendChild(done);
    li.appendChild(text);
	
    list.appendChild(li);
    inp.value = "";
  }

}



// This Function Clears the List
function clearList(){
  let itemNum = list.childElementCount;
  for (var i = 0; i <= itemNum ; i++) {
    list.removeChild(list.firstChild);
  }
}
