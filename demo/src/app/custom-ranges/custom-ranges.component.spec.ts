import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule} from '@angular/material';
import { NgxMdDaterangepicker } from '../../../../src/daterangepicker';

import { CustomRangesComponent } from './custom-ranges.component';

describe('CustomRangesComponent', () => {
  let component: CustomRangesComponent;
  let fixture: ComponentFixture<CustomRangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomRangesComponent ],
      imports: [
        FormsModule,
        NgxMdDaterangepicker,
        MatToolbarModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomRangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
