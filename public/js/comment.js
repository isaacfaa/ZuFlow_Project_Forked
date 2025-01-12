function load_id(){
    var url = document.location.href;
    var params = url.split('?')[1];
    var taskid = params.split('=')[1];
    document.getElementById("taskid").value = taskid
    console.log(document.getElementById("taskid").value)
}

document.getElementById('commentForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    var response = "";
    var jsonData = {};
    jsonData.owner = document.getElementById("name").value;
    jsonData.comment = document.getElementById("comment").value;
    jsonData.taskid = document.getElementById("taskid").value;

    if (jsonData.owner === "" || jsonData.comment === "") {
        document.getElementById("message").innerHTML = 'All fields are required!';
        document.getElementById("message").setAttribute("class", "text-danger");
        return;
    }

    var request = new XMLHttpRequest();
    request.open("POST", "/add-comment", true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = function () {
        response = JSON.parse(request.responseText);
        if (response.message === 'Comment added!') {
            document.getElementById("name").value = "";
            document.getElementById("comment").value = "";
            window.location.href = 'index.html';
        } else {
            document.getElementById("message").innerHTML = response.message || 'Error';
            document.getElementById("message").setAttribute("class", "text-danger");
        }
    };
    request.send(JSON.stringify(jsonData));
});