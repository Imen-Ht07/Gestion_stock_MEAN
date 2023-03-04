import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFournisseursComponent } from './update-fournisseurs.component';

describe('UpdateFournisseursComponent', () => {
  let component: UpdateFournisseursComponent;
  let fixture: ComponentFixture<UpdateFournisseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFournisseursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFournisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
