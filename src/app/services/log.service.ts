import { Injectable } from '@angular/core';

import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  constructor() {
    this.logs = [
      { id: '1', text: 'Generated components 1', date: new Date('12/07/2020 12:34:32') },
      { id: '1', text: 'Generated components 2', date: new Date('12/07/2020 12:34:32') },
      { id: '1', text: 'Generated components 3', date: new Date('12/07/2020 12:34:32') }
    ];
  }

  getLogs() {
    return this.logs;
  }
}
