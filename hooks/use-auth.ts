"use client";

import { useState, useCallback } from "react";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = useCallback(async (email: string, password: string) => {
    // Implement login logic here
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    setUser(null);
  }, []);

  const register = useCallback(async (userData: any) => {
    // Implement registration logic here
  }, []);

  return {
    isAuthenticated,
    user,
    login,
    logout,
    register,
  };
}