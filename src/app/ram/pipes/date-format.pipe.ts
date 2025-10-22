import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'airDateFormat'
})
export class AirDateFormatPipe implements PipeTransform {

    transform(valor: string) {
        const fecha = new Date(valor);
        return fecha.toISOString().slice(0, 10).replace(/-/g, '/');
    }
}
