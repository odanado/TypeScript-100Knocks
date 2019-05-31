import { assert, _ } from "spec.ts";
import { sum } from "../src/01";

sum(0, 1, 2, 3);

type Params = Parameters<typeof sum>;
type Return = ReturnType<typeof sum>;
assert(_ as Params, _ as number[]);
assert(_ as Return, _ as number);
