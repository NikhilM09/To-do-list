let count=0;
function updateTask(){
    var taskName=document.querySelector("#name").value;
    var dateData=document.querySelector("#date").value;
    var descriptionData=document.querySelector("#description").value;
    if (taskName==0||dateData==0||descriptionData==0)
    {
        document.querySelector("#error").style.visibility="visible";
        return;
    }
    count++;
    document.querySelector("#error").style.visibility="hidden";
    document.querySelector("#tasklist").innerHTML+=`<tr id='task${count}'><td class='check'><input type='checkbox' id='check${count}' onchange='completeTask(${count})'></td><td class='title' id='title${count}'>${taskName}</td><td class='date' id='date${count}'>${dateData}</td><td class='description' id='description${count}'>${descriptionData}</td><td class='delete'><i class='fa-solid fa-trash' id='del${count}' onclick='removeTask(${count})'></i></td></tr>`
    document.querySelector("#name").value="";   
    document.querySelector("#date").value="";
    document.querySelector("#description").value="";
}
function completeTask(id){
    let checkStatus=document.getElementById(`check${id }`).checked;
    if (checkStatus)
    {
        document.getElementById(`title${id}`).style.textDecoration="line-through";
        document.getElementById(`date${id}`).style.textDecoration="line-through";
        document.getElementById(`description${id}`).style.textDecoration="line-through";
    }
    else
    {
        document.getElementById(`title${id}`).style.textDecoration="none";
        document.getElementById(`date${id}`).style.textDecoration="none";
        document.getElementById(`description${id}`).style.textDecoration="none"; 
    }
}
function removeTask(id){
    let state=confirm("Are you sure you want to delete this task?");
    if(state)
    {
        document.getElementById(`task${id}`).remove();
    }
}
 