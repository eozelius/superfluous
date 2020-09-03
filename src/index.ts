import { Test } from './models/Test'

const name = 'ethan';

export function main(): void {
  const test = new Test(name)
  console.log('index.ts() test => ', test)
}

main()