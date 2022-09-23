import fs from 'fs-extra'
import { toJson } from 'json-microscope'

export const dumpJson = async (filePath: string, data: any) => {
  await fs.outputFile(filePath, toJson(data))
}
