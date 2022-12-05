
var task_input = document.querySelector('#add-task-input input');
var task_add = document.querySelector('#task-list-add-delete');
var add_task = document.querySelector('#Add').onclick = function(){
    
    // button add clicked without entering any task in the input box
    
    //counting starts by clicking add button for task



    if(task_input.value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }

    //task entered and add button clicked
    else{
        task_add.innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${task_input.value}
                </span>
                <button class="delete" onclick="decrement()">
					<i class="fa-solid fa-circle-minus"></i>
                </button>
            </div>
        `;
    }


    


    //delete function implemented

	var current_tasks = document.querySelectorAll(".delete");
	    for(var i=0; i<current_tasks.length; i++){
	        current_tasks[i].onclick = function(){
	            this.parentNode.remove();
	        }
	    }

	    //initialising a variable name data
            var data = 0;
  
            //printing default value of data that is 0 in h2 tag
            document.getElementById("task-left-count").innerText = data;
  
            //creation of increment function
            function increment() {
                data = data + 1;
                document.getElementById("task-left-count").innerText = data;
            }
            //creation of decrement function
            function decrement() {
                data = data - 1;
                document.getElementById("task-left-count").innerText = data;
            }

}
