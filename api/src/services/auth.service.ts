import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import type { LoginDto, LoginResponseDto, JwtClaims } from "../dtos/auth.dto.js";
import type { PublicUser } from "../models/auth.model.js";
import type { UserRepository } from "../repositories/user.repository.js";

export class InvalidCredentialsError extends Error {
  constructor() {
    super("Invalid credentials");
    this.name = "InvalidCredentialsError";
  }
}

export class AuthService {
  constructor(
    private readonly users: UserRepository,
    private readonly jwtSecret: string,
    private readonly jwtExpiresIn: string,
  ) {}

  async login(input: LoginDto): Promise<LoginResponseDto> {
    const user = await this.users.findByUsername(input.username);
    const passwordMatches = user
      ? await bcrypt.compare(input.password, user.passwordHash)
      : false;
    if (!user || !passwordMatches) throw new InvalidCredentialsError();

    const userMetadata = {
      id: user.id,
      username: user.username,
      displayName: user.displayName,
      email: user.email,
      roles: user.roles,
      metadata: user.metadata,
    } satisfies PublicUser;
    const claims: JwtClaims = {
      sub: user.id,
      username: user.username,
      displayName: user.displayName,
      email: user.email,
      roles: user.roles,
      metadata: user.metadata,
    };

    return {
      accessToken: jwt.sign(claims, this.jwtSecret, { expiresIn: this.jwtExpiresIn as jwt.SignOptions["expiresIn"] }),
      expiresIn: this.jwtExpiresIn,
      user: userMetadata,
    };
  }
}
