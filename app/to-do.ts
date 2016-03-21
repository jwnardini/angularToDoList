//interfaces
interface ITask {
  description: string;
  done: boolean;
  priority: string;
  markDone(): void;
  assignedTo?: IPerson;
}

interface IPerson {
  name: string;
  email: string;
}


//classes
class Task implements ITask {
  done: boolean = false;
  constructor(public description: string, public priority: string, public assignedTo?: IPerson){}
  markDone(){
    this.done = true;
  }
}

//this class CAN be assigned to a person
class HomeTask extends Task {
  constructor(public description: string, public priority: string, public assignedTo?: IPerson){
    super(description, priority);
  }
}
//this class CANNOT be assigned to a person
class HobbyTask extends Task {
  constructor(public description: string){
    super(description, "low");
  }
}
//this class MUST be assigned to a person
class WorkTask extends Task {
  constructor(public dueDate: Date, public description: string, public priority: string, public assignedTo: IPerson){
    super(description, priority, assignedTo);
  }
}

var diane: IPerson = {
  name: "Diane D",
  email: "diane@epicodus.com"
}

var thor: IPerson = {
  name: "Thor Son of Odin",
  email: "thor@asgard.com"
}

var loki: IPerson = {
  name: "God of mischief",
  email: "loki@geocities.com"
}

//tasks
var tasks = [];
tasks.push(new HomeTask("Do the dishes.", "High"));
tasks.push(new HomeTask("Buy chocolate.", "Low", diane));
tasks.push(new HomeTask("Wash the laundry.", "High"));

tasks.push(new HobbyTask("Go to driving range."));
tasks.push(new HobbyTask("Play guitar."));

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

tasks.push(new WorkTask(today, "Update blog.", "High", diane));
tasks.push(new WorkTask(tomorrow, "Go to meeting.", "Medium", thor));
tasks.push(new WorkTask(nextDay, "Clean ceiling.", "Low", loki));

console.log(tasks);
