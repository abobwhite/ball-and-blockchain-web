class AuthSvc {
  constructor() {

  }

  public login(username: string): void {
    localStorage.setItem('loggedInUser', username);
  }

  public getLoggedInUser(): string {
    return localStorage.getItem('loggedInUser');
  }

  public logout(): void {
    return localStorage.removeItem('loggedInUser');
  }
}

export default AuthSvc;