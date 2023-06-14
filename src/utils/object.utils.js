export const filterObjectFields = (object) => {
  let resultObject = {}
  for (const objectKey in object) {
    // eslint-disable-next-line no-prototype-builtins
    if (object.hasOwnProperty(objectKey) && object[objectKey] !== undefined) {
      resultObject[objectKey] = object[objectKey]
    }
  }
  return resultObject
}
