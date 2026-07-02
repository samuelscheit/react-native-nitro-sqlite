import * as harnessTestApi from 'react-native-harness'
import { registerUnitTests } from '@tests/unit'
import { setTestApi } from '@tests/TestApi'

setTestApi(harnessTestApi)
registerUnitTests()
