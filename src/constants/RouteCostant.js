export const AuthenticatedRoutePath = {
  First: () => '/',
  Login: () => '/login',
  Registration: () => '/register',
  Books: () => '/books',
  Friends: () => '/friends',
  Articles: () => '/articles',
  BooksInfo: () => '/book-info',
  EditProfile: () => '/edit-profile',
  Navigate: () => '*',
}

export const UnauthenticatedRoutePath = {
  Login: () => '/login',
  Registration: () => '/register',
  Navigate: () => '*',
}
