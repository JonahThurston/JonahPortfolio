import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideFirebaseApp(() => initializeApp({ projectId: "jonahportfolio-7272c", appId: "1:483422842706:web:3ea99152cb0beeaaa3d48b", storageBucket: "jonahportfolio-7272c.firebasestorage.app", apiKey: "AIzaSyAz3T3PNYsfEVQ2NDZRxeu-uHIJILGx6xI", authDomain: "jonahportfolio-7272c.firebaseapp.com", messagingSenderId: "483422842706", measurementId: "G-DLM4QVQKW5" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
