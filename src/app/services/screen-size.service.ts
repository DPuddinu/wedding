import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {

  constructor() {}

  getScreenType(width: number) : ScreenType{
    let screenType = ScreenType.mobile

    if(width >= 576 && width <= 992) {
      screenType =  ScreenType.tablet
    }
    if(width > 992) {
      screenType =  ScreenType.desktop
    }
    return screenType
  }
}

export enum ScreenType {
  mobile, tablet, desktop
}
