export type UserRole = "user" | "admin";

export type AuthUser = {
  id: string;
  username: string;
  displayName: string;
  email: string;
  roles: UserRole[];
  metadata: { department: string; locale: string };
};

export type AuthSession = {
  accessToken: string;
  expiresIn: string;
  user: AuthUser;
};

export type LoginFormValues = { username: string; password: string };
