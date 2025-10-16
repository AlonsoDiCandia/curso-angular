import { Component } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css'],
  viewProviders: [LoggerService]
})
export class ExtraComponent {
  estado: boolean = false;

  constructor(
    public logger: LoggerService
  ) {}
}
