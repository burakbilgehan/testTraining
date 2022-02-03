describe(`${Person.name} Class`, () => {
  let model;

  beforeEach(() => {
    model = new Person();
  });

  describe("default values", () => {
    it("first name defaults to empty", () => {
      // assert
      expect(model.firstName).toBe("");
    });

    it("last name defaults to empty", () => {
      // assert
      expect(model.lastName).toBe("");
    });

    it("middle name name defaults to empty", () => {
      // assert
      expect(model.middleName).toBe("");
    });
  });

  describe("full name", () => {
    beforeEach(() => {
      model = new Person({
        firstName: "Burak",
        lastName: "Bilgehan",
      });
    });
    // fit to focus
    it("middle name returns initial when not empty", () => {
      // arrange
      model.middleName = "Kaan";

      // act
      const result = model.fullName;

      // audit
      const { firstName: fn, lastName: ln, middleName: mn } = model;

      // assert
      expect(result).toBe(`${fn} ${mn[0]} ${ln}`);
    });
    xit("full name returns only first and last", () => {
      // arrange

      // act
      const result = model.fullName;

      // audit
      const { firstName: fn, lastName: ln } = model;

      // assert
      expect(result).toBe(`${fn} ${ln}`);
    });
  });

  describe("say my name", () => {
    it("alerts the full name of the user", () => {
      // arrange
      model.firstName = "Burak";
      model.lastName = "Bilgehan";
      spyOn(window, "alert");

      // act
      model.sayMyName();

      // assert
      expect(window.alert).toHaveBeenCalled();
      expect(window.alert).toHaveBeenCalledWith(model.fullName);
    });
  });

  describe("get code name", () => {
    it("confirmed testing god", () => {
      // arrange
      spyOn(window, "confirm").and.returnValue(true);

      // act
      const result = model.getCodeName();

      // assert
      expect(result).toBe("TESTING GOD!");
    });

    it("declined testing god", () => {
      // arrange
      spyOn(window, "confirm").and.returnValue(false);

      // act
      const result = model.getCodeName();

      // assert
      expect(result).toBe("Scrub skipping tests!");
    });
  });
});
