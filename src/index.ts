import getStdin from "get-stdin";

import { typoglycemia } from "./lib";

const main = async () => {
  const input = (await getStdin()).trim();

  if (input.length === 0) {
    throw new Error("pass sentenses string using standard input.");
  }

  const typo = typoglycemia(input);

  console.log(typo);
};

main().catch(e => {
  if (e instanceof Error) {
    console.error(e.message);
  } else {
    console.error("something went wrong.");
  }

  process.exit(1);
});
