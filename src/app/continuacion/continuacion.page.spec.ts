import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContinuacionPage } from './continuacion.page';

describe('ContinuacionPage', () => {
  let component: ContinuacionPage;
  let fixture: ComponentFixture<ContinuacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinuacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContinuacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
