import { inject, Injectable } from "@angular/core";
import { Translation, TranslocoLoader } from "@ngneat/transloco";
import { HttpClient } from "@angular/common/http";
import {environment} from '../environments/environment.development';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    private readonly http = inject(HttpClient);

    getTranslation(lang: string):Observable<Translation> {
        return this.http.get<Translation>(`${environment.baseUrl}/assets/i18n/${lang}.json`);
    }
}
