import { add, substract } from './math';

const x = 20;
const y = 10;

export const mySubtract = () => { 
    console.log(`----${x} - ${y} = ${substract(x, y)}`);
}