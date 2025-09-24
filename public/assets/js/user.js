//user.js
window.onload = function () {

    var btn_users = document.querySelector("#btn-users");

    var div_users = document.querySelector("#div-users");

    var div_busca = document.querySelector("#div-busca");
    
    var div_create = document.querySelector("#div-create");
 
    var input_busca = document.querySelector("#input-busca");

    var btn_buscar = document.querySelector("#btn-buscar");

    var form_cadastrar = document.querySelector("#form-cadastrar");

    
    //logica para cadastrar
    form_cadastrar.onsubmit = function(event) {
        event.preventDefault();
        xmlHttpPost('ajax/create', function() {

            beforeSend(function(){
                div_create.innerHTML = `<i class = "fa fa-refresh fa-spin fa-3x fa-fw"></i><span class = "sr-only">Loading</span>`;

            });

            success(function() {
                




            }); 
            error(function() {




            });


        });
    }

    btn_users.onclick = function () {
        xmlHttpGet('ajax/users', function () {

                beforeSend(function () {

                    div_users.innerHTML = `<i class = "fa fa-refresh fa-spin fa-3x fa-fw"></i><span class = "sr-only">Loading</span>`;
                    


                });



                success(function () {

                    console.log(xhttp.responseText);

                    var users = JSON.parse(xhttp.responseText);

                    var table = `<table class = "table table-striped">`;

                    table += `<thead>
                          <tr>
                          <td>ID</td>
                          <td>Nome</td>
                          <td>Email</td>
                          </tr>
                          </thead>`;    

                    table += `<tbody>`;

                    users.forEach(function (users) {

                        table += `<tr>`;

                        table += `<td>${users.id}</td>`;

                        table += `<td>${users.name}</td>`;

                        table += `<td>${users.email}</td>`;

                        table += `</tr>`;
                    });

                    table += `</tbody>`;

                    table += `</table>`;

                    div_users.innerHTML = table;
                });

                error(function() {

                    div_users.innerHTML = "Ocorreu um erro";


                });


            });


    }


    //Search

     btn_buscar.onclick = function () {
        var id = input_busca.value;

        xmlHttpGet('ajax/user', function () {

                beforeSend(function () {

                    div_busca.innerHTML = `<i class = "fa fa-refresh fa-spin fa-3x fa-fw"></i><span class = "sr-only">Loading</span>`;
                    


                });



                success(function () {

                    console.log(xhttp.responseText);
                    var user = JSON.parse(xhttp.responseText);

                    var table = `<table class = "table table-striped">`;

                    table += `<thead>
                          <tr>
                          <td>ID</td>
                          <td>Nome</td>
                          <td>Email</td>
                          </tr>
                          </thead>`;    

                    table += `<tbody>`;

                        table += `<tr>`;

                        table += `<td>${user.id}</td>`;

                        table += `<td>${user.name}</td>`;

                        table += `<td>${user.email}</td>`;

                        table += `</tr>`;   

                    table += `</tbody>`;

                    table += `</table>`;

                    div_busca.innerHTML = table;
                });

                error(function() {

                    div_busca.innerHTML = "Ocorreu um erro";


                });


            },'?id=' + encodeURIComponent(id)  );


    }
}