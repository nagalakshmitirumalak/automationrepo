// Create a tuple for student (id, name, grade)
// Create an enum for days of the week and print a message based on the day.

const studentTuple : [id: string, name: string, grade: string] = ["T001", "Likhith", "A+"];

console.log("Student in Tuple :", studentTuple);


enum Day{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

function dayOftheWeek(day: Day){
    console.log(`Hi there, Its ${Day[day]}`);
}

dayOftheWeek(Day.Saturday);