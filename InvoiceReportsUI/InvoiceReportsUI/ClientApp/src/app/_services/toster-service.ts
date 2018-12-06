import { Injectable } from '@angular/core';
declare let alertify: any;
@Injectable()
export class Toster {

  constructor() { }


  confirm(mess: string, okCallBack: () => any) {
    alertify.confirm(mess, function (e) {
      if (e) {
        okCallBack();
      } else { }
    });
  }
  success(mess: string) {
    alertify.success(mess);
  }
  error(mess: string) {
    alertify.error(mess);
  }
  warning(mess: string) {
    alertify.warning(mess);
  }
  message(mess: string) {
    alertify.message(mess);
  }
}
