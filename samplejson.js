fetch('https://mocki.io/v1/0361c6a7-49a5-41ac-b273-14b38adc227d')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function appendData(data) {
    var mainContainer = document.getElementById("data");
    for (var i = 0; i < data.length; i++) {
        var li = document.createElement("li");
        var span1 = document.createElement("span1");
        var span2 = document.createElement("span2");
        li.appendChild(span1);
        li.appendChild(span2);
        span1.innerHTML = 'Name: ' + data[i].name + '&nbsp;&nbsp;' ;
        span1.style.color= "red";
        span2.innerHTML = 'City :' + data[i].city;
        mainContainer.appendChild(li);
    }
}
