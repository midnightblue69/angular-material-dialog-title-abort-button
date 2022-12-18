import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCloseDialogComponent } from './title-close-dialog.component';

describe('TitleCloseDialogComponent', () => {
  let component: TitleCloseDialogComponent;
  let fixture: ComponentFixture<TitleCloseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TitleCloseDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleCloseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
