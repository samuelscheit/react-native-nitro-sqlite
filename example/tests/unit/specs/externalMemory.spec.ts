import { describe, expect, it } from '@tests/TestApi'
import { testDb } from '@tests/db'

const LARGE_RESULT_ROW_COUNT = 25_000

export default function registerExternalMemoryUnitTests() {
  describe('External memory', () => {
    it('does not reject a large query result as too much external memory', () => {
      const result = testDb.execute(`
        WITH RECURSIVE numbers(value) AS (
          SELECT 1
          UNION ALL
          SELECT value + 1 FROM numbers WHERE value < ${LARGE_RESULT_ROW_COUNT}
        )
        SELECT value FROM numbers
      `)

      expect(result.rows).not.toBe(undefined)
      expect(result.rows?.length).toBe(LARGE_RESULT_ROW_COUNT)
      expect(result.rows?.item(0)).toEqual({ value: 1 })
      expect(result.rows?.item(LARGE_RESULT_ROW_COUNT - 1)).toEqual({
        value: LARGE_RESULT_ROW_COUNT,
      })
    })
  })
}
