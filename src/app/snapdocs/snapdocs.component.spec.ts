import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapdocsComponent } from './snapdocs.component';

describe('SnapdocsComponent', () => {
  let component: SnapdocsComponent;
  let fixture: ComponentFixture<SnapdocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnapdocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnapdocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
