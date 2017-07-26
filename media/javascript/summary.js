function doRequest() {
    console.log("doRequest actually ran");
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.open("GET", "https://api.moves-app.com/api/1.1/user/summary/daily/20170726?access_token=uYHv_S14HjuqQt3wXxLA37OH6X0dns429ABLeKiwVVRx1LUWPhmdZKjBx19F8gWb");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "f4f8b5e0-f93c-e8d7-4acb-60884f94c8b7");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:63342");
    xhr.setRequestHeader("Access-Control-Allow-Credentials", "true");
    xhr.setRequestHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    xhr.setRequestHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Header, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    xhr.send(data);

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
            var parsed = JSON.parse(this.responseText);
            console.log(parsed);
            console.log("Level 1" + parsed[0]);
            console.log("Level 2" + parsed[0].summary[0].activity);

            var actTable = "<table border = '1'>";
            actTable += "<tr><td>Activity</td><td>Group</td><td>Duration</td><td>Distance</td><td>Steps</td><td>Calories</td></tr>";

            for (i=0; i<parsed[0].summary.length; i++) {
                actTable += "<tr>";

                activity = parsed[0].summary[i].activity;
                actTable += "<td>" + activity + "</td>";

                group = parsed[0].summary[i].group;
                actTable += "<td>" + group + "</td>";

                duration = parsed[0].summary[i].duration;
                actTable += "<td>" + duration + "</td>";

                distance = parsed[0].summary[i].distance;
                actTable += "<td>" + distance + "</td>";

                steps = parsed[0].summary[i].steps;
                actTable += "<td>" + steps + "</td>";

                calories = parsed[0].summary[i].calories;
                actTable += "<td>" + calories + "</td>";

                actTable +="</tr>";
            }
            actTable += "</table>";

            document.getElementById("output").innerHTML = actTable;
        }
    });


}