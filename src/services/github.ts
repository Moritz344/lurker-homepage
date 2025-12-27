import { Injectable } from '@angular/core';
import { Observable, Subject, of, throwError, BehaviorSubject } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class Github {

  base_url = "https://api.github.com";

  constructor(private http: HttpClient) { }

  getCommits(owner: string, repo: string) {
    const url = this.base_url + "/repos/" + owner + "/" + repo + "/commits";
    return this.http.get(url);
  }

}
