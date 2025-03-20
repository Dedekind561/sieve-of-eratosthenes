import {describe, test, expect} from 'vitest';
import {setupGrid} from './utils.ts'

describe('setupGrid()',() => {

    test('can create an array of numbers 1 to n',() => {
        expect(setupGrid(10)).toEqual([{value: 1},{value: 2},{value: 3},{value: 4},{value: 5},{value: 6},{value: 7},{value: 8},{value: 9},{value: 10}])
    })
})