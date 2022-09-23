import {
  mdnCssProperties,
  withoutVendorProperties,
  final
} from '../api/browser'
import { dumpJson } from './dumpJson'

await dumpJson('tmp/all.json', mdnCssProperties)
await dumpJson('tmp/without-vendor.json', withoutVendorProperties)
await dumpJson('tmp/final.json', final)

//dumpJson(final)('src/data/css-prop-doc.json')
