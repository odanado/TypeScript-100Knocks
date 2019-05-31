import { assert, _ } from "spec.ts";
import { add } from "../src/00";

add(10, 32);

type Params = Parameters<typeof add>;
type Return = ReturnType<typeof add>;

assert(_ as Params[0], _ as number);
assert(_ as Params[1], _ as number);
assert(_ as Return, _ as number);
