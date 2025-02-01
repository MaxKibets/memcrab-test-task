import { v4 as uuidv4 } from "uuid";

import { Cell } from "@/types";

import getRandomNumber from "./getRandomNumber";

const createCell = (): Cell => ({
  // in documentation there should be a number
  // and of course it can be done by Math.foor(Math.random() * 100000)
  // or Date.now()
  // but in this case it is a string
  id: uuidv4(),
  amount: getRandomNumber(3),
});

export default createCell;
