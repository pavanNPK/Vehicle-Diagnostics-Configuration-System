export class ResponseWithError<T>{
  data?: T;
  message?: string;
  success?: boolean;
}
