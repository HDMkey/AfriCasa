export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile extends User {
  address?: string;
  city?: string;
  country?: string;
  avatar?: string;
}