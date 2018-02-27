import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapList'
})
export class MapListPipe implements PipeTransform {

  transform(value: any, args: any[] = null): any {

    return Object.keys(value).map(function(key) {
        let pair = {};
        let k = 'key';
        let v = 'value';
   console.log('in pipe now');

        pair[k] = key;
        pair[v] = value[key];

        return pair;
    });
}

}
