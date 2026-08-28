import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { MOCK_CONTENT } from '../data/mock-content.data';
import {
  ClientItem,
  ProgramHighlight,
  ServiceItem,
  ShowcaseSlide,
  SiteContent,
  StatItem,
  TestimonialItem,
  TrainingSession,
} from '../models/content.models';
import { ApiService } from './api.service';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ContentService {
  constructor(private readonly api: ApiService) {}

  getSiteContent(): Observable<SiteContent> {
    return this.api.get<SiteContent>('/content').pipe(
      catchError(() => (environment.useMockFallback ? of(MOCK_CONTENT) : of(MOCK_CONTENT))),
    );
  }

  getShowcaseSlides(): Observable<ShowcaseSlide[]> {
    return this.api.get<ShowcaseSlide[]>('/showcase/slides').pipe(
      catchError(() => of(MOCK_CONTENT.showcaseSlides)),
    );
  }

  getServices(): Observable<ServiceItem[]> {
    return this.api.get<ServiceItem[]>('/services').pipe(
      catchError(() => of(MOCK_CONTENT.services)),
    );
  }

  getUpcomingTrainings(): Observable<TrainingSession[]> {
    return this.api.get<TrainingSession[]>('/trainings/upcoming').pipe(
      catchError(() => of(MOCK_CONTENT.upcomingTrainings)),
    );
  }

  getConductedTrainings(): Observable<TrainingSession[]> {
    return this.api.get<TrainingSession[]>('/trainings/conducted').pipe(
      catchError(() => of(MOCK_CONTENT.conductedTrainings)),
    );
  }

  getTrainingSummary(): Observable<StatItem[]> {
    return this.api.get<StatItem[]>('/trainings/summary').pipe(
      catchError(() => of(MOCK_CONTENT.trainingSummary)),
    );
  }

  getProgramHighlights(): Observable<ProgramHighlight[]> {
    return this.api.get<ProgramHighlight[]>('/trainings/programs').pipe(
      catchError(() => of(MOCK_CONTENT.programHighlights)),
    );
  }

  getClients(): Observable<ClientItem[]> {
    return this.api.get<ClientItem[]>('/clients').pipe(
      catchError(() => of(MOCK_CONTENT.clients)),
    );
  }

  getTestimonials(): Observable<TestimonialItem[]> {
    return this.api.get<TestimonialItem[]>('/testimonials').pipe(
      catchError(() => of(MOCK_CONTENT.testimonials)),
    );
  }
}
