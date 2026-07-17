import { beforeEach, describe } from '../TestApi'
import { setupTestDb } from './common'
import registerExecuteUnitTests from './specs/operations/execute.spec'
import registerTransactionUnitTests from './specs/operations/transaction.spec'
import registerExecuteBatchUnitTests from './specs/operations/executeBatch.spec'
import registerTypeORMUnitTestsSpecs from './specs/typeorm.spec'
import registerDatabaseQueueUnitTests from './specs/DatabaseQueue.spec'
import registerSqliteVecUnitTestsSpecs from './specs/sqlite-vec.spec'
import registerExternalMemoryUnitTests from './specs/externalMemory.spec'

export function registerUnitTests() {
  beforeEach(setupTestDb)

  describe('Operations', () => {
    registerExecuteUnitTests()
    registerTransactionUnitTests()
    registerExecuteBatchUnitTests()
  })

  registerExternalMemoryUnitTests()

  registerDatabaseQueueUnitTests()
}

export function registerTypeORMUnitTests() {
  registerTypeORMUnitTestsSpecs()
}

export function registerSqliteVecUnitTests() {
  registerSqliteVecUnitTestsSpecs()
}
