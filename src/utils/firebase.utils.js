export const firebaseUserDataFilter = (user, dbUser = {}) => ({
  uid: user.uid,
  email: user.email,
  emailVerified: user.emailVerified,
  displayName: user.displayName,
  photoURL: user.photoURL,
  booksCount: dbUser?.booksCount ?? 0,
})

export const getStoragePathFromDownloadUrl = (downloadUrl) => {
  const bucketUrl = 'https://storage.googleapis.com/'
  const storagePath = downloadUrl.replace(bucketUrl, '')
  return decodeURIComponent(storagePath)
}
