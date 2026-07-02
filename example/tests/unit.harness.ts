import * as harnessTestApi from 'react-native-harness'
import { registerUnitTests } from './unit'
import { setTestApi } from './TestApi'

setTestApi(harnessTestApi)
registerUnitTests()
