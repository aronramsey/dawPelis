import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPeliPage } from './add-peli.page';

describe('AddPeliPage', () => {
  let component: AddPeliPage;
  let fixture: ComponentFixture<AddPeliPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPeliPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPeliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
