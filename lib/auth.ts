import { User } from "./types/user";

export async function authenticateUser(email: string, password: string): Promise<User | null> {
  // Implémenter la logique d'authentification ici
  return null;
}

export async function registerUser(userData: Partial<User>): Promise<User | null> {
  // Implémenter la logique d'inscription ici
  return null;
}

export async function logoutUser(): Promise<void> {
  // Implémenter la logique de déconnexion ici
}