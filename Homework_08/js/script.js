/* У цьому завданні вам необхідно створити клас Student та розробляти методи
всередині цього класу.

1. У стдентів повинні бути наступні властивості: university, course, fullName, вони
передаються при створенні студента(в конструктор).

2. Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії
м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про
курс, учбовий заклад та імені студента.

3. Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]

4. Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту.
Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5,
4, 4, 5, 5]

5. Створіть метод отримання середнього балу this.getAverageMark() -> 4.6

6. Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу
– ставити студенту оцінки та отримувати їх більше не можна. (Ніяких помилок,
просто повертається завжди null замість масиву оцінок)

7. Створіть метод this.recover, який дозволить поновити студента



/* У стдентів повинні бути наступні властивості: university, course, fullName, вони
передаються при створенні студента(в конструктор). */

class student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this._marks = [];
    this._active = true;
  }
  getInfo() {
    return `Студент ${this.course} курсу ${this.university}, ${this.fullName}"`;
  }
  get marks() {
    if (this._active) {
      return this._marks;
    } else {
      return null;
    }
  }
  set marks(mark) {
    if (this._active) {
      this._marks.push(mark);
    } else {
      return console.log("студента видалено");
    }
  }
  getAverageMark() {
    if (this._marks === null) {
      return null;
    } else {
      let sum = this._marks.reduce((a, b) => a + b, 0);
      let average = sum / this._marks.length;
      return average.toFixed(1);
    }
  }
  dismiss() {
    this.savedMarks = this._marks;
    this._marks = null;
    this._active = false;
  }

  recover() {
    this._marks = this.savedMarks;
    this._active = true;
  }
}

const person = new student(
  `Вища Школа Психотерапії
м.Одеса`,
  `1`,
  `Остап Родоманський Бендер`
);
person._marks = [5, 4, 4, 5];
console.log(person.getInfo());
console.log(person.marks);
person.marks = 5;
console.log(person.marks);
console.log(person.getAverageMark());
person.dismiss();
console.log(person.marks);
person.recover();
console.log(person.marks);

/* Advanced

1. Створіть новий клас BudgetStudent, який повністю наслідує клас Student

2. Бюджетний студент може отримати стипендію за допомогою методу
  this.getScholarship. Отримання стипендії супроводжується виведенням інформації
  в консоль: Ви отримали 1400 грн. стипендії

3. Метод отримання стипендії автоматично викликається кожні 30 секунд післе
створення об'єкту. Підказка: викликайте його в constructor

4. Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього вище
або дорівнює 4.0

5. Якщо студента виключено, він не отримує стипендію (думаю це було і так очевидно

*/ 
class BudgetStudent extends student {
  constructor(university, course, fullName) {
    super(university, course, fullName);
    setInterval(() => this.getScholarship(), 30000);
  }
  getScholarship() {
    if (this.getAverageMark() >= 4) {
      console.log(`Ви отримали 1400 грн. стипендії`);
    } else {
      this.getAverageMark() < 4;
      {
        console.log(
          `Середній бал вашої оцінки не дозволяє Вам отримати стипендію`
        );
      }
    }
  }
}
const budgetStudentHarry = new BudgetStudent(
  "Hogwards",
  "Gryffindor",
  "Potter Harry Jamesovich",
  [5, 4, 4, 5]
);
console.log(budgetStudentHarry.getInfo());
budgetStudentHarry.getScholarship();
budgetStudentHarry.marks = 5;
budgetStudentHarry.getScholarship();