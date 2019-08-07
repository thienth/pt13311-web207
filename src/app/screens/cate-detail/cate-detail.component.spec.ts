import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateDetailComponent } from './cate-detail.component';

describe('CateDetailComponent', () => {
  let component: CateDetailComponent;
  let fixture: ComponentFixture<CateDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
