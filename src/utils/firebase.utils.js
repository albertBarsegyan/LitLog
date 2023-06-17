export const firebaseUserDataFilter = (user, dbUser = {}) => ({
  uid: user.uid,
  email: user.email,
  emailVerified: user.emailVerified,
  displayName: user.displayName,
  photoURL: user.photoURL,
  booksCount: dbUser?.booksCount ?? 0,
})

export function getStoragePathFromDownloadUrl(downloadUrl) {
  if (!downloadUrl) return null

  const storageRootPath = 'https://firebasestorage.googleapis.com/v0/b/'
  const isFirebaseDownloadUrl = downloadUrl.startsWith(storageRootPath)

  if (!isFirebaseDownloadUrl) {
    return null
  }

  const decodedStoragePath = decodeURIComponent(downloadUrl)
  const urlObj = new URL(decodedStoragePath)
  urlObj.search = ''
  return urlObj.toString().split('/o/')[1]
}
