import File from "./File.js";
import Person from "./Person.js";
import { TerminalCommanderLine } from "./TerminalLineCommander.js";

const database = await File.ReadFile()


const DEFAULT_LANGUAGE = "pt-BR";
const DEFAULT_STOP = ":q";

const Terminal = new TerminalCommanderLine();
Terminal.initilializeTerminal(database, DEFAULT_LANGUAGE);

async function mainLoops() {
  try {
    const awser = await Terminal.questions("");
    const person = Person.formatData(awser);
    Terminal.updateTable(person.format(DEFAULT_LANGUAGE));
    if (awser === DEFAULT_STOP) {
      Terminal.stopTerminal();
      console.log("process finished...");
      return;
    }
    return mainLoops();
  } catch (error) {
    console.log("DEU RUIM***", error);
    return mainLoops();
  }
}

await mainLoops();
