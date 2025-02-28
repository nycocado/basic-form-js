let tableBody = document.getElementById("result");
let editRow = null;

document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();

    let id = document.getElementById("form_id").value.trim();
    let name = document.getElementById("form_name").value.trim();
    let age = document.getElementById("form_age").value.trim();
    let address = document.getElementById("form_address").value.trim();
    let postalCode = document.getElementById("form_postal_code").value.trim();

    if (!id || !name || !age || !address || !postalCode) {
        alert("Insira as informações!!");
        return;
    }

    if (editRow) {
        editRow.cells[0].innerHTML = id;
        editRow.cells[1].innerHTML = name;
        editRow.cells[2].innerHTML = age;
        editRow.cells[3].innerHTML = address;
        editRow.cells[4].innerHTML = postalCode;

        editRow = null;
        document.getElementById("submit").innerHTML = "Adicionar";
        clearForm();
        return;
    }

    let row = document.createElement("tr");
    row.id = `person_${id}`;
    row.innerHTML = `
        <th scope="row">${id}</th>
        <td>${name}</td>
        <td>${age}</td>
        <td>${address}</td>
        <td>${postalCode}</td>
        <td><button type="button" class="btn btn-primary edit-btn">Editar</button></td>
        <td><button type="button" class="btn btn-danger delete-btn">Apagar</button></td>
    `;

    tableBody.appendChild(row);

    row.querySelector(".edit-btn").addEventListener("click", function () {
        document.getElementById("form_id").value = id;
        document.getElementById("form_name").value = name;
        document.getElementById("form_age").value = age;
        document.getElementById("form_address").value = address;
        document.getElementById("form_postal_code").value = postalCode;

        editRow = row;
        document.getElementById("submit").innerHTML = "Editar";
    });

    row.querySelector(".delete-btn").addEventListener("click", function () {
        row.remove();
    });

    clearForm();
});

function clearForm() {
    document.getElementById("form_id").value = "";
    document.getElementById("form_name").value = "";
    document.getElementById("form_age").value = "";
    document.getElementById("form_address").value = "";
    document.getElementById("form_postal_code").value = "";
}
