import { Injectable } from '@angular/core';
import { IUser } from 'src/app/core/interfaces/IUser';
import { userData } from 'src/app/core/mock/userData';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  /**
  * 
  * @description get user data from api by user id
  * @author Alireza PhF
  */
  getUserById(userId: number): IUser {
    return userData[1];
  }


}
