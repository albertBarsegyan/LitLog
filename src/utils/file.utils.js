export const renameFile = ({ file, fileName }) => {
  const fileExtension = file.type.split('/')[1]

  const fileChangedName = [fileName, fileExtension].join('.')

  return new File([file], fileChangedName, {
    type: file.type,
  })
}
