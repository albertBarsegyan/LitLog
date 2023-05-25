export const firebaseUserDataFilter = (user) => ({
  uid: user.uid,
  email: user.email,
  emailVerified: user.emailVerified,
  displayName: user.displayName,
  photoURL: user.photoURL,
})

export const getStoragePathFromDownloadUrl = (downloadUrl) => {
  const bucketUrl = 'https://storage.googleapis.com/'
  const storagePath = downloadUrl.replace(bucketUrl, '')
  return decodeURIComponent(storagePath)
}
