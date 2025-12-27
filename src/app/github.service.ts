import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GitHubCommit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
  html_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  private readonly apiUrl = 'https://api.github.com/repos';

  constructor(private http: HttpClient) {}

  getCommits(owner: string, repo: string, perPage: number = 10): Observable<GitHubCommit[]> {
    const url = `${this.apiUrl}/${owner}/${repo}/commits?per_page=${perPage}`;
    return this.http.get<GitHubCommit[]>(url);
  }
}