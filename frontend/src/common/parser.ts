/** @format */

import { useCofigStore } from '../store/config'

/** @format */

export function setLocalStorageKey(key: any, value: string) {
  const configStore = useCofigStore()
  const cfgObj = JSON.parse(localStorage.getItem('stored-config'))
  cfgObj[key] = value
  //  修改pina
  localStorage.setItem('stored-config', JSON.stringify(cfgObj))
  configStore.init(cfgObj)
}
