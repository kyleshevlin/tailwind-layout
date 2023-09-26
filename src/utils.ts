type OptionalClassname = [value: unknown, classname: string]

function isNotUndefined(x: string | undefined): x is string {
  return x !== undefined
}

export const makeClassnames = (
  ...items: (string | OptionalClassname | undefined)[]
) => {
  return items
    .map(item => {
      if (Array.isArray(item)) {
        const [value, classname] = item
        return value ? classname : undefined
      }

      return item
    })
    .filter(isNotUndefined)
    .join(' ')
    .trim()
}
