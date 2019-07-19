import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateEditFormComponent } from './cate-edit-form.component';

describe('CateEditFormComponent', () => {
  let component: CateEditFormComponent;
  let fixture: ComponentFixture<CateEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
