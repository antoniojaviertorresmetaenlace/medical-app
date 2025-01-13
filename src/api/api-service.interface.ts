import { Observable } from 'rxjs';

export interface ApiService {
  get<T>(endpoint: string): Observable<T>;
  post<T>(endpoint: string, data: any): Observable<T>;
  put<T>(endpoint: string, id: number, data: any): Observable<T>;
  delete<T>(endpoint: string, id: number): Observable<T>;
}