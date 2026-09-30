const students = [
    {
        name: "Rahul",
        rollNo: "101",
        marks: 450,
        total: 500
    },
    {
        name: "Priya",
        rollNo: "102",
        marks: 425,
        total: 500
    },
    {
        name: "Aman",
        rollNo: "103",
        marks: 280,
        total: 500
    },
    {
        name: "Neha",
        rollNo: "104",
        marks: 475,
        total: 500
    },
    {
        name: "Rohit",
        rollNo: "105",
        marks: 195,
        total: 500
    },
    {
        name: "Anjali",
        rollNo: "106",
        marks: 390,
        total: 500
    }
];

function getPercentage(marks, total) {
    return (marks / total) * 100;
}

function getGrade(percentage) {
    if (percentage >= 90) {
        return "A+";
    } else if (percentage >= 80) {
        return "A";
    } else if (percentage >= 70) {
        return "B";
    } else if (percentage >= 60) {
        return "C";
    } else if (percentage >= 50) {
        return "D";
    } else {
        return "F";
    }
}

function getResult(percentage) {
    return percentage >= 40 ? "Pass" : "Fail";
}

function displayStudents(data) {

    const table = document.getElementById("studentTable");

    table.innerHTML = "";

    data.forEach(student => {

        const percentage = getPercentage(
            student.marks,
            student.total
        );

        const grade = getGrade(percentage);
        const result = getResult(percentage);

        const row = `
            <tr>
                <td>${student.name}</td>
                <td>${student.rollNo}</td>
                <td>${student.marks}/${student.total}</td>
                <td>${percentage.toFixed(2)}%</td>
                <td>${grade}</td>
                <td>${result}</td>
            </tr>
        `;

        table.innerHTML += row;
    });
}

displayStudents(students);
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchText) ||
        student.rollNo.includes(searchText)
    );

    displayStudents(filteredStudents);
});
const resultFilter = document.getElementById("resultFilter");

resultFilter.addEventListener("change", function () {

    const filterValue = resultFilter.value;

    let filteredStudents = students;

    if (filterValue === "pass") {
        filteredStudents = students.filter(student => {
            const percentage = getPercentage(student.marks, student.total);
            return percentage >= 40;
        });
    }

    if (filterValue === "fail") {
        filteredStudents = students.filter(student => {
            const percentage = getPercentage(student.marks, student.total);
            return percentage < 40;
        });
    }

    displayStudents(filteredStudents);
});
const sortMarks = document.getElementById("sortMarks");

sortMarks.addEventListener("change", function () {

    const sortValue = sortMarks.value;

    let sortedStudents = [...students];

    if (sortValue === "high") {
        sortedStudents.sort((a, b) => b.marks - a.marks);
    }

    if (sortValue === "low") {
        sortedStudents.sort((a, b) => a.marks - b.marks);
    }

    displayStudents(sortedStudents);
});
function findStudentByRoll(rollNo) {
    return students.find(student => student.rollNo === rollNo);
}

console.log("Student found:", findStudentByRoll("101"));