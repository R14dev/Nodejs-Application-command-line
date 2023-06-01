import Draftlog from "draftlog";
import checkTable from "chalk-table";
import chalk from "chalk";
import readline from "readline";
import Person from "./Person.js";
import File from "./File.js";

export class TerminalCommanderLine {
  constructor() {
    this.data = {};
    this.print = {};
    this.terminal = null;
  }

  questions(msg = "") {
    return new Promise((resolve) => this.terminal.question(msg, resolve));
  }
  initilializeTerminal(database, language) {
    Draftlog(console).addLineListener(process.stdin);
    this.terminal = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.initilialize(database, language);
  }

  updateTable(item) {
    this.data.push(item);
    this.print(checkTable(this.getTable(), this.data));

    File.WriteFile(this.data)
  }
  stopTerminal() {
    this.terminal.close();
  }
  initilialize(database, language) {
    const data = database.map((item) => new Person(item).format(language));
    const table = checkTable(this.getTable, data);
    this.print = console.draft();
    this.print(table);
    this.data = data;
  }
  getTable() {
    return {
      leftPad: 2,
      columns: [
        { field: "id", name: chalk.cyan("ID") },
        { field: "vehicle", name: chalk.magenta("Vehicle") },
        { field: "kmTraveled", name: chalk.cyan("Km Traveled") },
        { field: "from", name: chalk.cyan("From") },
        { field: "to", name: chalk.cyan("To") },
      ],
    };
  }
}
