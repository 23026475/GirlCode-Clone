document.getElementById('addItemButton').addEventListener('click',function(){
    var newItem = document.createElement('li');

    document.getElementById('myList').appendChild(newItem);
});