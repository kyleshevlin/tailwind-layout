/**
 * Could maybe use a better name, but this will make optional classes a lot easier
 */
export const maybe = (value: unknown, name: string) => (value ? [name] : [])
