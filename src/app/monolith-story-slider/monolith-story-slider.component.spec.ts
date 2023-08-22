import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonolithStorySliderComponent } from './monolith-story-slider.component';

describe('MonolithStorySliderComponent', () => {
  let component: MonolithStorySliderComponent;
  let fixture: ComponentFixture<MonolithStorySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonolithStorySliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonolithStorySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
