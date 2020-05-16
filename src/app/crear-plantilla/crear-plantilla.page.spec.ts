import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearPlantillaPage } from './crear-plantilla.page';

describe('CrearPlantillaPage', () => {
  let component: CrearPlantillaPage;
  let fixture: ComponentFixture<CrearPlantillaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPlantillaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearPlantillaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
