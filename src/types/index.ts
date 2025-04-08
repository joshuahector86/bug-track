export interface TaskCardType {
  title: string;
  description: string;
  status: string;
  author: string;
  createdAt: string;
  createdDate: string;
  updatedAt?: string;
  updatedDate?: string;
}

export interface AccountType {
  name: string;
  email: string;
  role: string;
  accountCreationDate: string;
  lastLoginDate: string;
  notifications: NotificationType[];
}

export interface NotificationType {
  id: number;
  title: string;
  description: string;
  status: string;
}
