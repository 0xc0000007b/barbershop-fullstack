import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbercardComponent } from './barbercard.component';

describe('BarbercardComponent', () => {
  let component: BarbercardComponent;
  let fixture: ComponentFixture<BarbercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarbercardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarbercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
