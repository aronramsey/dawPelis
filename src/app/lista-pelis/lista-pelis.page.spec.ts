import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaPelisPage } from './lista-pelis.page';

describe('ListaPelisPage', () => {
  let component: ListaPelisPage;
  let fixture: ComponentFixture<ListaPelisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPelisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaPelisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
