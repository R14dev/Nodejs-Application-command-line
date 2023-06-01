import { readFile,writeFile } from "node:fs/promises";

export default class File {
  static async ReadFile() {
    return JSON.parse((await readFile(process.cwd() + "/src/database.json")).toString());
  }

  static async WriteFile(content){
    const currentFile = await File.ReadFile()
    currentFile.push(content)
    return writeFile(process.cwd() + "/src/database.json",JSON.stringify(currentFile))
  }
}
