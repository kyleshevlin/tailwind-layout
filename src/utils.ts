const maybe = (value: unknown, classname: string) => (value ? [classname] : [])

type OptionalClassname = [value: unknown, classname: string]

export const makeClassnames = (
  ...items: (string | OptionalClassname | undefined)[]
) => {
  return items
    .map(item => {
      if (Array.isArray(item)) return maybe(...item)

      return item
    })
    .join(' ')
    .trim()
}
