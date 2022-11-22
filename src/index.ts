import {Config} from '@oclif/core'
import {expect, fancy, FancyTypes} from 'fancy-test'

import {command} from './command'
import exit from './exit'
import hook from './hook'
import {loadConfig} from './load-config'

loadConfig.root = require.main.filename

export const test = fancy
.register('loadConfig', loadConfig)
.register('command', command)
.register('exit', exit)
.register('hook', hook)
.env({NODE_ENV: 'test'})

export default test

export {
  expect,
  FancyTypes,
  Config,
  command,
}
