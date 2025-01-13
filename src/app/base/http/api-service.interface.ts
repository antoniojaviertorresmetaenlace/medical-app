import { Observable } from 'rxjs';

export abstract class ApiService {
  abstract get<T>(endpoint: string): Observable<T>;
  abstract post<T>(endpoint: string, data: any): Observable<T>;
  abstract put<T>(endpoint: string, id: number, data: any): Observable<T>;
  abstract delete<T>(endpoint: string, id: number): Observable<T>;
}