import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WizardFinishedComponent } from './wizard-finished/wizard-finished.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    WizardFinishedComponent,
    PersonalDetailsComponent,
    SkillsComponent,
    ContactDetailsComponent,
    WorkExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
