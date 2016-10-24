import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CandidateComponent } from './candidate/candidate.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { VideosComponent } from './videos/videos.component';
import { FooterComponent } from './footer/footer.component';
import { SamplesComponent } from './samples/samples.component';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    SkillsComponent,
    ProjectsComponent,
    VideosComponent,
    FooterComponent,
    SamplesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
