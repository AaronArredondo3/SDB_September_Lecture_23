let grades = {
    midterm: {
        grade: 3.3,
        weight: 1
    },
    project: {
        grade: 4.0,
        weight: 1
    },
    final: {
        grade: 3.2,
        weight: 2
    },
}

function gpa(grades) {
    let gradesToWeight = Object.keys(grades);
    gradesSum = 0;
    weightSum = 0;
    gradesToWeight.forEach((item, index) => console.log('grades', item, index));
}

GradesSum = [grades] 
gpa(grades)

// console.log(grades);
