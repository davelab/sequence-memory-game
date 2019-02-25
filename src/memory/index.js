import { interval } from "rxjs";
import { take, finalize } from "rxjs/operators";

export const generateNumber = max => Math.floor(Math.random() * max + 1);

const generateSequence = (round = 0, speed = 1, callback) => {
  const sequenceLength = 3 + round;

  const speedInterval = interval(speed * 1000);

  return speedInterval.pipe(
    take(sequenceLength),
    finalize(() => callback())
  );
};

export default generateSequence;
