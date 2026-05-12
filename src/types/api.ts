// Autenticação

export interface Token {
  access_token: string;
  token_type: string;
}

// Usuários

export interface UserCreate {
    username: string
    email: string
    password: string
}

export interface UserUpdate {
    username?: string
    email?: string
    password?: string
}

export interface UserPublic {
  id: number;
  username: string;
  email: string;
  created_at: string;
}

export interface UserList {
  users: UserPublic[];
}

// Tarefas

export type TodoState = 'draft' | 'todo' | 'doing' | 'done' | 'trash';

export interface TodoCreate {
  title: string;
  description: string;
  state: TodoState;
}

export interface TodoUpdate {
  title?: string;
  description?: string;
  state?: TodoState;
}

export interface TodoPublic {
  id: number;
  title: string;
  description: string;
  state: TodoState;
  user_id: number;
  created_at: string;
  updated_at: string;
}

export interface TodoList {
  todos: TodoPublic[];
  total: number;
}
