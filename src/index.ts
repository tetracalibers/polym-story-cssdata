import _ from 'lodash'
import * as CSST from 'csstype'
import * as desc_CSSJson from './data/css-prop-doc.json'
import { fromJson } from 'json-microscope'

type ProvideCssPropNames = keyof CSST.Properties

export const desc_CSS = fromJson(desc_CSSJson) as {
  [k in ProvideCssPropNames]: {
    control: {
      type: 'select' | 'text' | 'color' | 'number'
    }
    options?: string[]
    description: string
    table: {
      category: string
      subcategory: string
      defaultValue: {
        summary: string
        detail: string | null
      }
    }
  }
}

export const useSetDefaultAs =
  (defaultProps: Record<string, unknown>) =>
  (propName: ProvideCssPropNames) => {
    const defaultV = defaultProps[propName]
    return _.set(
      _.set(desc_CSS[propName], 'table.defaultValue.detail', null),
      'table.defaultValue.summary',
      defaultV
    )
  }
