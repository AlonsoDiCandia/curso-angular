import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'episodeNumber'
})
export class EpisodeNumberPipe implements PipeTransform {

    transform(valor: string) {
        return valor.slice(4,6);
    }
}
