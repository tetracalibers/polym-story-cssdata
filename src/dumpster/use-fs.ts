import { dumpJson } from 'json-microscope'
import {
  mdnCssProperties,
  withoutVendorProperties,
  final
} from '../api/browser'

dumpJson(mdnCssProperties)('tmp/all.json')
dumpJson(withoutVendorProperties)('tmp/without-vendor.json')
dumpJson(final)('tmp/final.json')

dumpJson(final)('src/data/css-prop-doc.json')
