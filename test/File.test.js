import { expect } from "chai";
import { describe, it } from "mocha";
import File from "../src/File.js";
import Sinon from "sinon";

describe("File class Test", async () => {
  it("read file", async () => {
    const Expected = [
        {
          id: 2,
          vehicle: "erer, ero e ero",
          kmTraveled: "10 km",
          from: "10 de outubro de 2019",
          to: "23 de outubro de 2023",
        },
      ];
    const readFile = await File.ReadFile();
    expect(readFile).to.be.deep.equal(Expected);
  });
});
