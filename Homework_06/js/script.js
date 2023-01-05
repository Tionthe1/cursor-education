/* У цьому домашньому завданні, ви будете працювати з масивом об'єктів.
Для початку необхідно створити наступний масив (ви можете його просто
скопіювати):

const students = [{
name: "Tanya",
course: 3,
subjects: {
math: [4, 4, 3, 4],
algorithms: [3, 3, 3, 4, 4, 4],
data_science: [5, 5, 3, 4]
}
}, {
name: "Victor",
course: 4,
subjects: {
physics: [5, 5, 5, 3],
economics: [2, 3, 3, 3, 3, 5],
geometry: [5, 5, 2, 3, 5]
}
}, {
name: "Anton",
course: 2,
subjects: {
statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
english: [5, 3],
cosmology: [5, 5, 5, 5]
}
}];






Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого
студента зі списку по показнику середньої оцінки.
Cтворіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка
повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх
повторень. */

const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4], //3.75
      algorithms: [3, 3, 3, 4, 4, 4], //3.5
      data_science: [5, 5, 3, 4], //4.25
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

/* Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"]
- яка повертає список предметів для конкретного студента. Зверніть увагу –
назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл */

function getSubjects(students) {
  const subject = Object.keys(students.subjects);
  let subNames = subject.map(
    (item) => item.charAt(0).toUpperCase() + item.slice(1).replace("_", " ")
  );

  return subNames;
}
console.log(getSubjects(students[2]));

/* Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню
оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ.
Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у
попередніх домашніх завданнях :) */

function getAverageMark(students) {
  const marks = Object.values(students.subjects).flat();
  const averageMarks = (
    marks.reduce((accumulator, currentValue) => accumulator + currentValue) /
    marks.length
  ).toFixed(2);
  return averageMarks;
}
console.log(getAverageMark(students[0]));

/* Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya",
"averageMark": 3.79} – яка повертає інформацію загального виду по переданому
студенту (вам знадобиться функція з попереднього завдання). ПОвинна бути
виведена інформація: курс, ім'я, середня оцінка. */

function getStudentInfo(students) {
  const studentinfo = {
    course: students.course,
    name: students.name,
    "averageMark": getAverageMark(students),
  };
  return studentinfo;
}
console.log(getStudentInfo(students[0]));

/* Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка
повертає імена студентів у алфавітному порядку. */
