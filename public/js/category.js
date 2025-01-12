function addCategory() {
    var response = "";

    var jsonData = new Object();
    jsonData.name = document.getElementById("name").value;
    jsonData.categorydescription = document.getElementById("categorydescription").value;

    if (jsonData.name === "" || jsonData.categorydescription === "") {
        document.getElementById("message").innerHTML = 'All fields are required!';
        document.getElementById("message").setAttribute("class", "text-danger");
        return;
    }

    var request = new XMLHttpRequest();

    request.open("POST", "/add-category", true);
    request.setRequestHeader('Content-Type', 'application/json');

    request.onload = function () {
        response = JSON.parse(request.responseText);
        console.log(response)
        if (response.message == undefined) {
            document.getElementById("message").innerHTML = 'Category:' + jsonData.name + 'created successfully !';
            document.getElementById("message").setAttribute("class", "text-success");

            document.getElementById("name").value = "";
            document.getElementById("categorydescription").value = "";
            window.location.href = 'index.html';
        }
        else {
            document.getElementById("message").innerHTML = response.message || 'Unable to add category. Please try again.';
            document.getElementById("message").setAttribute("class", "text-danger");
            document.getElementById("name").setAttribute("class", "text-danger");
        }
    };

    request.send(JSON.stringify(jsonData));
}

function viewCategories() {
    var response = '';
    var request = new XMLHttpRequest();

    request.open("GET", "/view-categories", true);
    request.setRequestHeader('Content-Type', 'application/json');

    request.onload = function () {
        response = JSON.parse(request.responseText);

        var html = ''
        for (var i = 0; i < response.length; i++) {
            html += '<tr>' + '<td>' + (i + 1) + '</td>' + '<td>' + response[i].name + '</td>' + '<td>' + response[i].categorydescription + '</td>' + '<td>' + '<button type="button" class="btn btn-warning" onclick = "editResource(\'' + JSON.stringify(response[i]).replaceAll('\"', '&quot;') + '\')">Edit </button> ' + '<button type="button" class="btn btn-danger" onclick = "deleteResource(' + response[i].id + ')" > Delete</button > ' + '</td>' +
                '</tr>'
        }
        document.getElementById('tableContent').innerHTML = html;
    };
    request.send();
}

