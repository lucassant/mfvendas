import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioPromocaoComponent } from './relatorio-promocao.component';

describe('RelatorioPromocaoComponent', () => {
  let component: RelatorioPromocaoComponent;
  let fixture: ComponentFixture<RelatorioPromocaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioPromocaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioPromocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
