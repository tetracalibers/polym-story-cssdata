import {
  mdnCssProperties,
  withoutVendorProperties,
  final
} from '../api/browser'
import { dumpJson } from './dumpJson'
import { getDiff } from 'json-difference'
import * as prev from '../data/css-prop-doc.json'
import { fromJson } from 'json-microscope'
import _ from 'lodash'

await dumpJson('tmp/all.json', mdnCssProperties)
await dumpJson('tmp/without-vendor.json', withoutVendorProperties)
await dumpJson('tmp/final.json', final)

const delta = getDiff(final, fromJson(prev), true)

const { added, removed, edited } = delta

const addpatched = added.reduce((acc, curr) => {
  const [path, value] = curr
  return _.set(acc, path, value)
}, final)

const removepatched = removed.reduce((acc, curr) => {
  const [path, value] = curr
  const resu = path.match(/[a-zA-Z\.]+(\[[0-9]\])/)
  if (resu === null) {
    return _.omit(acc, path)
  }
  const [, idxBracket] = resu
  const arrPath = path.replace(idxBracket, '')
  const arr = _.get(acc, arrPath)
  const removedArr = _.reject(arr, (v) => v === value)
  return _.set(acc, arrPath, removedArr)
}, addpatched)

const editpatched = edited.reduce((acc, curr) => {
  const [path, _oldV, newV] = curr
  return _.set(acc, path, newV)
}, removepatched)

await dumpJson('src/data/css-prop-doc.json', editpatched)
