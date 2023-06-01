import { expect } from "chai";
import { it, describe } from "mocha";
import Person from "../src/Person.js";

describe("Person Test /", () => {
  it(" instance and format values", () => {
    const person = new Person({
      id: 3,
      vehicle: ["txl", "banner", "car", "yundai"],
      kmTraveled: 100000,
      from: "2015-10-10",
      to: "2018-03-03",
    });
    const formatted = person.format("pt-BR");

    const expected = {
      id: 3,
      vehicle: "txl, banner, car e yundai",
      kmTraveled: "100.000 km",
      from: "10 de outubro de 2015",
      to: "03 de março de 2018",
    };
    expect(formatted).to.be.deep.equal(expected);
  });
  it("formateDate function", () => {
    const data = "3 txl,yundai,avad 10000 2019-10-10 2023-12-12";
    const person = Person.formatData(data);
    const expecteds = {
      id: "3",
      vehicle: ["txl", "yundai", "avad"],
      kmTraveled: "10000",
      from: "2019-10-10",
      to: "2023-12-12",
    };
    expect(person).to.be.deep.equal(expecteds);
  });
});
