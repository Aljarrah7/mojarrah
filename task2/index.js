let students=[];

function creatstudent(name,age,mark){

    return {name:name,age:age,mark:mark};
}

students.push(creatstudent("mohammad",21,85));
students.push(creatstudent("jarrah",19,90));
students.push(creatstudent("sami",23,75));
students.push(creatstudent("ramy",21,45));
students.push(creatstudent("khattab",20,70));
console.log(students);

let successStudents = [];

let failedStudents = [];

for(let i=0;i<students.length;i++){

    if(students[i].mark>=50){
        successStudents.push(students[i]);
    }else{
        failedStudents.push(students[i]);
    }
}

console.table(successStudents);
console.table(failedStudents);







