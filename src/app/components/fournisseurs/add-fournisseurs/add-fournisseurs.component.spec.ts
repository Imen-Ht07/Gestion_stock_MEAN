import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFournisseursComponent } from './add-fournisseurs.component';

describe('AddFournisseursComponent', () => {
  let component: AddFournisseursComponent;
  let fixture: ComponentFixture<AddFournisseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFournisseursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFournisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
