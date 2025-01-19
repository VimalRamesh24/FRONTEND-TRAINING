const employees = [
    { id: 1, name: "John", age: 28, department: "HR" },
    { id: 2, name: "Jane", age: 34, department: "Finance" },
    { id: 3, name: "Mike", age: 25, department: "IT" },
    { id: 4, name: "Emma", age: 30, department: "Marketing" },
    { id: 5, name: "Chris", age: 40, department: "Operations" },
    { id: 6, name: "Sophia", age: 29, department: "HR" },
    { id: 7, name: "Daniel", age: 32, department: "Finance" },
    { id: 8, name: "Olivia", age: 27, department: "IT" },
    { id: 9, name: "Liam", age: 35, department: "Sales" },
    { id: 10, name: "Noah", age: 26, department: "Logistics" }
];
function Table() {
    let table = '<table border="1" style="width: 100%; text-align: center;">';
    table += '<tr><th>ID</th><th>Name</th><th>Age</th><th>Department</th></tr>';

    for (let i = 0; i < employees.length; i++) {
        table += '<tr>';
        table += '<td>' + employees[i].id + '</td>';
        table += '<td>' + employees[i].name + '</td>';
        table += '<td>' + employees[i].age + '</td>';
        table += '<td>' + employees[i].department + '</td>';
        table += '</tr>';
    }
    table += '</table>';
    document.getElementById('employeeTable').innerHTML = table;
}
Table();
