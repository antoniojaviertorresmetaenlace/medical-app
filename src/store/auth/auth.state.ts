import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SetAuthData } from './auth.actions';
import { UsuarioType } from '../../app/core/domain/models';

@State<UsuarioType>({
  name: 'authState',
  defaults: {
    usuario : '',
    apellidos: '',
    clave: '',
    nombre: '',
    tipo: 'base'
  }
})
@Injectable()
export class AuthState {
  @Selector()
  static getAuthData(state: UsuarioType): UsuarioType {
    return AuthState.getInstanceState(state);
  }

  private static setInstanceState(state: UsuarioType): UsuarioType {
    return { ...state };
  }

  private static getInstanceState(state: UsuarioType): UsuarioType {
    return { ...state };
  }

  @Action(SetAuthData)
  setAuthData(
    { setState }: StateContext<UsuarioType>,
    { payload }: SetAuthData
  ) {
    setState(AuthState.setInstanceState(payload));
  }
}
