import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';
import {HttpClientModule} from "@angular/common/http";
import {AppModule} from "../app.module";

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule], providers:[AppService]});
    service = TestBed.inject(AppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
