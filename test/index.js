import { expect } from 'chai'
import Pkg from '../src'

describe('Main server package test', () => {
  it('empty test', () => {
    const app = Pkg({})
    expect(app).to.exists()
  })
/*
  it('should have all Storage keys', () => {
    const app = Storage({})
    expect(app).to.include.keys('db', 'name',
      'processBeforeSaveToStorage',
      'processAfterLoadFromStorage',
      'mapPropToKnexTable',
      'initStorage',
      'closeStorage',
      'init',
      'findById',
      'findOne',
      'findAll',
      'count',
      'removeById',
      'removeAll',
      'create',
      'update')
  })
 */
})
