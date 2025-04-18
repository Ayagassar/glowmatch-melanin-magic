import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
                skin: {
                    brown: {
                        100: '#F8F5F1',
                        200: '#F2EAE1',
                        300: '#E5D8C8',
                        400: '#D3BEA8',
                        500: '#C09D7F',
                        600: '#A47A5A',
                        700: '#805C42',
                        800: '#5D4231',
                        900: '#2E2016',
                    },
                    gold: {
                        100: '#FAF6E9',
                        200: '#F5ECD3',
                        300: '#EFE0B0',
                        400: '#E7D28B',
                        500: '#D9BD67',
                        600: '#C1A443',
                        700: '#9C8436',
                        800: '#766327',
                        900: '#4F4219',
                    },
                    peach: {
                        100: '#FFF4ED',
                        200: '#FFE8DB',
                        300: '#FFDAC4',
                        400: '#FFC7A8',
                        500: '#FFA980',
                        600: '#FF8752',
                        700: '#E56435',
                        800: '#B04D27',
                        900: '#6F2F18',
                    },
                    terracotta: {
                        100: '#F9EAE5',
                        200: '#F3D5CB',
                        300: '#EAB7A7',
                        400: '#E09882',
                        500: '#D5755A',
                        600: '#C45339',
                        700: '#9C422E',
                        800: '#733123',
                        900: '#4A1F17',
                    },
                },
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
