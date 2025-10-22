import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'season'
})
export class SeasonPipe implements PipeTransform {

    transform(valor: string) {
        return valor.slice(1,3);
    }
}
