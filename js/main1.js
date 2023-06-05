
var form = document.getElementById('addForm');
var addList = document.getElementById('items');
var filterItem = document.getElementById('filter')



form.addEventListener('submit', addItem);
addList.addEventListener('click', removeItem);
filterItem.addEventListener('keyup', filterItems)

function addItem(e) {
    e.preventDefault();
    var newItem = document.getElementById('item');
    var li = document.createElement('li')
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem.value));

    var btn = document.createElement('button');
    btn.classList = 'btn btn-danger btn-sm float-left delete';
    btn.appendChild(document.createTextNode('x'));
    li.appendChild(btn);
    addList.appendChild(li);

    newItem.value = '';
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            addList.removeChild(li);

        }
    }
}

// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = addList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }



