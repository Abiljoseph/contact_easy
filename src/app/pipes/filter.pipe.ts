import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allContact:any[],searchKey:String,propName:string): any[]{
    const result:any = []
    if(!allContact || searchKey =='' || propName==''){
      return allContact
    }
    allContact.forEach((item:any) => {
     if(item[propName].trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
      result.push(item)
     }
    })
    return result;
  }

}
