export const renameFile = ({ file, fileName }) => {
  if (!file || !fileName) {
    return null
  }

  const fileExtension = file.type.split('/')[1]

  const fileChangedName = [fileName, fileExtension].join('.')

  return new File([file], fileChangedName, {
    type: file.type,
  })
}
