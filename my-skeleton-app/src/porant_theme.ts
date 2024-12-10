import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const porant_theme: CustomThemeConfig = {
    name: 'porant_theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-family-heading": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "4px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #d4fa0f 
		"--color-primary-50": "249 254 219", // #f9fedb
		"--color-primary-100": "246 254 207", // #f6fecf
		"--color-primary-200": "244 254 195", // #f4fec3
		"--color-primary-300": "238 253 159", // #eefd9f
		"--color-primary-400": "225 252 87", // #e1fc57
		"--color-primary-500": "212 250 15", // #d4fa0f
		"--color-primary-600": "191 225 14", // #bfe10e
		"--color-primary-700": "159 188 11", // #9fbc0b
		"--color-primary-800": "127 150 9", // #7f9609
		"--color-primary-900": "104 123 7", // #687b07
		// secondary | #4d4d4d 
		"--color-secondary-50": "228 228 228", // #e4e4e4
		"--color-secondary-100": "219 219 219", // #dbdbdb
		"--color-secondary-200": "211 211 211", // #d3d3d3
		"--color-secondary-300": "184 184 184", // #b8b8b8
		"--color-secondary-400": "130 130 130", // #828282
		"--color-secondary-500": "77 77 77", // #4d4d4d
		"--color-secondary-600": "69 69 69", // #454545
		"--color-secondary-700": "58 58 58", // #3a3a3a
		"--color-secondary-800": "46 46 46", // #2e2e2e
		"--color-secondary-900": "38 38 38", // #262626
		// tertiary | #ffffff 
		"--color-tertiary-50": "255 255 255", // #ffffff
		"--color-tertiary-100": "255 255 255", // #ffffff
		"--color-tertiary-200": "255 255 255", // #ffffff
		"--color-tertiary-300": "255 255 255", // #ffffff
		"--color-tertiary-400": "255 255 255", // #ffffff
		"--color-tertiary-500": "255 255 255", // #ffffff
		"--color-tertiary-600": "230 230 230", // #e6e6e6
		"--color-tertiary-700": "191 191 191", // #bfbfbf
		"--color-tertiary-800": "153 153 153", // #999999
		"--color-tertiary-900": "125 125 125", // #7d7d7d
		// success | #15cbc8 
		"--color-success-50": "220 247 247", // #dcf7f7
		"--color-success-100": "208 245 244", // #d0f5f4
		"--color-success-200": "197 242 241", // #c5f2f1
		"--color-success-300": "161 234 233", // #a1eae9
		"--color-success-400": "91 219 217", // #5bdbd9
		"--color-success-500": "21 203 200", // #15cbc8
		"--color-success-600": "19 183 180", // #13b7b4
		"--color-success-700": "16 152 150", // #109896
		"--color-success-800": "13 122 120", // #0d7a78
		"--color-success-900": "10 99 98", // #0a6362
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #D41976 
		"--color-error-50": "249 221 234", // #f9ddea
		"--color-error-100": "246 209 228", // #f6d1e4
		"--color-error-200": "244 198 221", // #f4c6dd
		"--color-error-300": "238 163 200", // #eea3c8
		"--color-error-400": "225 94 159", // #e15e9f
		"--color-error-500": "212 25 118", // #D41976
		"--color-error-600": "191 23 106", // #bf176a
		"--color-error-700": "159 19 89", // #9f1359
		"--color-error-800": "127 15 71", // #7f0f47
		"--color-error-900": "104 12 58", // #680c3a
		// surface | #131313 
		"--color-surface-50": "220 220 220", // #dcdcdc
		"--color-surface-100": "208 208 208", // #d0d0d0
		"--color-surface-200": "196 196 196", // #c4c4c4
		"--color-surface-300": "161 161 161", // #a1a1a1
		"--color-surface-400": "90 90 90", // #5a5a5a
		"--color-surface-500": "19 19 19", // #131313
		"--color-surface-600": "17 17 17", // #111111
		"--color-surface-700": "14 14 14", // #0e0e0e
		"--color-surface-800": "11 11 11", // #0b0b0b
		"--color-surface-900": "9 9 9", // #090909
		
	}
}