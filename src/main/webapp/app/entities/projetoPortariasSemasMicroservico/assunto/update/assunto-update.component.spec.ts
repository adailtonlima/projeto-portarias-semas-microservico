import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of, Subject, from } from 'rxjs';

import { ITopico } from 'app/entities/projetoPortariasSemasMicroservico/topico/topico.model';
import { TopicoService } from 'app/entities/projetoPortariasSemasMicroservico/topico/service/topico.service';
import { AssuntoService } from '../service/assunto.service';
import { IAssunto } from '../assunto.model';
import { AssuntoFormService } from './assunto-form.service';

import { AssuntoUpdateComponent } from './assunto-update.component';

describe('Assunto Management Update Component', () => {
  let comp: AssuntoUpdateComponent;
  let fixture: ComponentFixture<AssuntoUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let assuntoFormService: AssuntoFormService;
  let assuntoService: AssuntoService;
  let topicoService: TopicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, AssuntoUpdateComponent],
      providers: [
        FormBuilder,
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{}]),
          },
        },
      ],
    })
      .overrideTemplate(AssuntoUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(AssuntoUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    assuntoFormService = TestBed.inject(AssuntoFormService);
    assuntoService = TestBed.inject(AssuntoService);
    topicoService = TestBed.inject(TopicoService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should call Topico query and add missing value', () => {
      const assunto: IAssunto = { id: 456 };
      const topicos: ITopico[] = [{ id: '15f0be54-41c2-48d9-a854-968dcbdf8c3c' }];
      assunto.topicos = topicos;

      const topicoCollection: ITopico[] = [{ id: '0a004fd3-6938-47f4-b2b8-018e92858e8f' }];
      jest.spyOn(topicoService, 'query').mockReturnValue(of(new HttpResponse({ body: topicoCollection })));
      const additionalTopicos = [...topicos];
      const expectedCollection: ITopico[] = [...additionalTopicos, ...topicoCollection];
      jest.spyOn(topicoService, 'addTopicoToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ assunto });
      comp.ngOnInit();

      expect(topicoService.query).toHaveBeenCalled();
      expect(topicoService.addTopicoToCollectionIfMissing).toHaveBeenCalledWith(
        topicoCollection,
        ...additionalTopicos.map(expect.objectContaining),
      );
      expect(comp.topicosSharedCollection).toEqual(expectedCollection);
    });

    it('Should update editForm', () => {
      const assunto: IAssunto = { id: 456 };
      const topicos: ITopico = { id: '4fb59c08-9533-41bd-806c-78e1db37b88b' };
      assunto.topicos = [topicos];

      activatedRoute.data = of({ assunto });
      comp.ngOnInit();

      expect(comp.topicosSharedCollection).toContain(topicos);
      expect(comp.assunto).toEqual(assunto);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IAssunto>>();
      const assunto = { id: 123 };
      jest.spyOn(assuntoFormService, 'getAssunto').mockReturnValue(assunto);
      jest.spyOn(assuntoService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ assunto });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: assunto }));
      saveSubject.complete();

      // THEN
      expect(assuntoFormService.getAssunto).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(assuntoService.update).toHaveBeenCalledWith(expect.objectContaining(assunto));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IAssunto>>();
      const assunto = { id: 123 };
      jest.spyOn(assuntoFormService, 'getAssunto').mockReturnValue({ id: null });
      jest.spyOn(assuntoService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ assunto: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: assunto }));
      saveSubject.complete();

      // THEN
      expect(assuntoFormService.getAssunto).toHaveBeenCalled();
      expect(assuntoService.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IAssunto>>();
      const assunto = { id: 123 };
      jest.spyOn(assuntoService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ assunto });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(assuntoService.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });

  describe('Compare relationships', () => {
    describe('compareTopico', () => {
      it('Should forward to topicoService', () => {
        const entity = { id: '9fec3727-3421-4967-b213-ba36557ca194' };
        const entity2 = { id: '1361f429-3817-4123-8ee3-fdf8943310b2' };
        jest.spyOn(topicoService, 'compareTopico');
        comp.compareTopico(entity, entity2);
        expect(topicoService.compareTopico).toHaveBeenCalledWith(entity, entity2);
      });
    });
  });
});
