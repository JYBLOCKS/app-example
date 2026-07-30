export type UserRole = "user" | "admin";

export type UserMetadata = {
  department: string;
  locale: string;
};

export type User = {
  id: string;
  username: string;
  displayName: string;
  email: string;
  passwordHash: string;
  roles: UserRole[];
  metadata: UserMetadata;
};

export type PublicUser = Omit<User, "passwordHash">;
