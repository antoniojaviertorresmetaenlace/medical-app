import { Usuario } from './auth.state';

export class SetAuthData {
  static readonly type = '[Auth] Auth data';
  constructor(readonly payload: Usuario) {}
}
