import { typo } from "@/lib";

test("test1", () => {
  expect(typo("to")).toBe("to");
});

test("test2", () => {
  expect(typo("with")).toBe("with");
});

test("test3", () => {
  const typoed = typo("According");
  expect(typoed.startsWith("A")).toBe(true);
  expect(typoed.endsWith("g")).toBe(true);
});

test("test4", () => {
  const typoed = typo("university,");
  expect(typoed.startsWith("u")).toBe(true);
  expect(typoed.endsWith("y,")).toBe(true);
});
