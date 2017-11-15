import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocaoDetailsComponent } from './promocao-details.component';

describe('PromocaoDetailsComponent', () => {
  let component: PromocaoDetailsComponent;
  let fixture: ComponentFixture<PromocaoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromocaoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocaoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
