import { interval } from "rxjs";
import { take, finalize, delay } from "rxjs/operators";

export const generateNumber = max => Math.floor(Math.random() * max + 1);

const generateSequence = (round = 0, speed = 1, callback) => {
  const sequenceLength = 3 + round;
  const speedInMs = speed * 1000;

  const speedInterval = interval(speedInMs);

  return speedInterval.pipe(
    take(sequenceLength),
    finalize(() => setTimeout(() => callback(), speedInMs))
  );
};

export default generateSequence;
