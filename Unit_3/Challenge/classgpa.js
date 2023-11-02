const grades = {
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
};

function gpa(object) {
    const gradesToWeight = Object.keys(grades);
    totalGradesSum = 0;
    weightSum = 0;

    gradesToWeight.forEach(function (key) {
        totalGradesSum += object[key].grade * object[key].weight;
        weightSum += object[key].weight;
    });
    
    const weightedGrade = totalGradesSum / weightSum;
    console.log(weightedGrade);
    }
    
    gpa(grades);


// console.log(grades);
