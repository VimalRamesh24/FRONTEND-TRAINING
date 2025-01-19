const data = [
    {
        id: 1,
        name: "John",
        tasks: [
            { taskId: 101, description: "Complete report", status: "Pending" },
            { taskId: 102, description: "Review code", status: "Completed" },
        ],
    },
    {
        id: 2,
        name: "Jane",
        tasks: [
            { taskId: 103, description: "Prepare slides", status: "In Progress" },
            { taskId: 104, description: "Team meeting", status: "Pending" },
        ],
    },
];

function TasksTable() {
    let table = '<table border="1" style="width: 100%; text-align: center;">';
    table += '<tr><th>Name</th><th>Description</th><th>Status</th></tr>';

    for (let i = 0; i < data.length; i++) {
        const person = data[i];
        for (let j = 0; j < person.tasks.length; j++) {
            const task = person.tasks[j];
            table += '<tr>';
            table += '<td>' + person.name + '</td>';
            table += '<td>' + task.description + '</td>';
            table += '<td>' + task.status + '</td>';
            table += '</tr>';
        }
    }

    table += '</table>';
    document.getElementById('tasksTable').innerHTML = table;
}

TasksTable();
