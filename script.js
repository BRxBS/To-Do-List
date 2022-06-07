function action() {

    let item = document.createElement('li');
    let inputValue = document.getElementById('tasks').value;
    var t = document.createTextNode(inputValue);
    item.appendChild(t);

        if(inputValue === ''){
            document.getElementById('tasks').value= '';
        }
        else{
            const promessa = new Promise (function(resolve){
                setTimeout(()=>{
                     resolve('ok')
                },5000)
            })
            
            async function start(){
                const result = await promessa
                console.log(result)}

            document.getElementById('myUl').appendChild(item);
            start()
        }
        document.getElementById('tasks').value= '';

        const tasksDelete = document.createElement("button");
         tasksDelete.classList.add("delete");
         tasksDelete.innerHTML = 'X';
         tasksDelete.addEventListener('click', function() {
          item.remove();
         });
         item.appendChild(tasksDelete);
}

        function removeAll(){
            document.getElementById("myUl").innerHTML = "";
        } 
        


        //this lines does't work, but is here for lernig purpose

        /*const tasksDelete = document.createElement ("button");
        tasksDelete.classList.add("tasksdelete");
        tasksDelete.innerHTML= 'X';
        item.appendChild(tasksDelete);
        //document.getElementsByTagName("button").onclick = log;
        document.getElementsByClassName("tasksDelete").addEventListener("click", myFunction());
        
        function myFunction() {
            const element = document.getElementsByClassName("index");
            element.remove();}*/


        
       //var myNodeList = document.getElementsByTagName('li');
       //var i;

        /*var span = document.createElement('span');
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        tasks.appendChild(span);

        for (i = 0; i < myNodeList.length; i++) {
              close[i].onclick = function() {
              var div = this.parentElement;
              div.style.display = "none";
              span.className = "close";
              span.appendChild(txt);
              myNodeList[i].appendChild(span);
            }
        }*/
    
       /* var by = getElementById("myUl");
        function newFunction() {
            by = getElementById("myUl");
            by.addEventListener("click", function() { by.reset()}
       ) }


function reset() {
    var clearButton = document.getElementById("resetBut");
      clearButton.addEventListener("click", function (e) {
        document.getElementById("myUl").reset()
        //let text = document.getElementById('listItem');
        //let addItem = document.getElementById('output');
        //addItem.innerHTML = '';
        //text.value = '';
    })

 

}*/