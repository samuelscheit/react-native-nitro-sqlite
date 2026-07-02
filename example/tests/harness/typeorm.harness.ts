import * as harnessTestApi from 'react-native-harness'
import { registerTypeORMUnitTests } from '@tests/unit'
import { setTestApi } from '@tests/TestApi'

setTestApi(harnessTestApi)
registerTypeORMUnitTests()
