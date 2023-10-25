/** @format */

import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useCofigStore = defineStore('useConfig', {
	state: () => {
		const configObj: Record<string, never> = null
		useLocalStorage('stored-config', configObj)
		return {
			config: configObj,
		}
	},
	persist: {
		storage: localStorage,
		paths: ['config'],
	},
	// 也可以这样定义
	// state: () => ({ count: 0 })
	actions: {
		init(config: Object) {
			this.config = config
		},
	},
})
