import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'urlsecure'
})
export class UrlsecurePipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer){}

  transform(value: string, url1: string, url2: string): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url1 + value + url2);
  }

}
