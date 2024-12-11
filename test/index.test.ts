import { describe, expect, it } from 'vitest'
import { getWorkLogs } from '../src'

describe('test', () => {
  it('test', () => {
    expect(getWorkLogs()).toMatchInlineSnapshot()
  })
})
