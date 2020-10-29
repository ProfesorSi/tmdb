import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowsHomeComponent } from './tv-shows-home.component';

describe('TvShowsHomeComponent', () => {
  let component: TvShowsHomeComponent;
  let fixture: ComponentFixture<TvShowsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
