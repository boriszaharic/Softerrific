import { Pipe, PipeTransform } from '@angular/core';
import{ Task }  from '../task';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {

  transform(tasks: Array<any>, args?: any): any {
        return tasks.sort(function(a, b){
            if(a[args.property] < b[args.property]){
                return -1;
            }
            else if( a[args.property] > b[args.property]){
                return 1;
            }
            else{
                return 0;
            }
        });
    };

}
