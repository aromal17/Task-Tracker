import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( employee => {
        if(employee.EmployeeUsername.toString().toLowerCase().includes(searchText))
            return employee.EmployeeUsername.toString().toLowerCase().includes(searchText);
        
        else if(employee.EmployeeTask.toString().toLowerCase().includes(searchText))
            return employee.EmployeeTask.toString().toLowerCase().includes(searchText);

        else if(employee.BugId.toString().toLowerCase().includes(searchText))
            return employee.BugId.toString().toLowerCase().includes(searchText);

        else if(employee.TaskDate.toString().toLowerCase().includes(searchText))
            return employee.TaskDate.toString().toLowerCase().includes(searchText);
    });
   }
}