import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgistroComponent } from './resgistro.component';

describe('ResgistroComponent', () => {
  let component: ResgistroComponent;
  let fixture: ComponentFixture<ResgistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResgistroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResgistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
