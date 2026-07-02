import * as harnessTestApi from 'react-native-harness'
import { registerTypeORMUnitTests } from './unit'
import { setTestApi } from './TestApi'

setTestApi(harnessTestApi)
registerTypeORMUnitTests()
