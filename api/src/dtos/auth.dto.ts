import { z } from "zod";
import type { PublicUser, UserRole, UserMetadata } from "../models/auth.model.js";

export const loginDto = z.object({
  username: z.string().trim().min(1).max(100),
  password: z.string().min(1).max(200),
});

export type LoginDto = z.infer<typeof loginDto>;

export type LoginResponseDto = {
  accessToken: string;
  expiresIn: string;
  user: PublicUser;
};

export type JwtClaims = {
  sub: string;
  username: string;
  displayName: string;
  email: string;
  roles: UserRole[];
  metadata: UserMetadata;
};
