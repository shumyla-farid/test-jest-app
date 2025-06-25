import { test, expect } from '@jest/globals'

import sum from '../code/sum'
//const { test } = require('@jest/globals')
test('should first', () => {})

test('adds 1+2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})
