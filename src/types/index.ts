export interface User {
  id: string;
  login: string;
  lang: LanguageEnum;
  role: UserRoleEnum;
  permissions: UserPermission[];
}

export enum LanguageEnum {
  EN = 'EN',
  RU = 'RU',
}

export enum UserRoleEnum {
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER',
  ADMIN = 'ADMIN',
}

export enum UserPermission {
  DASHBOARD = 'DASHBOARD',
  POSTS = 'POSTS',
}
