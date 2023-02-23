import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticCounterComponent } from './statistic-counter.component';

describe('StatisticCounterComponent', () => {
  let component: StatisticCounterComponent;
  let fixture: ComponentFixture<StatisticCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
