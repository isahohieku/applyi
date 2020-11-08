import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactPersonComponent } from './contact-person/contact-person.component';
import { KeyInfoComponent } from './key-info/key-info.component';
import { TuitionApplicationComponent } from './tuition-application/tuition-application.component';
import { AdmissionRequirementComponent } from './admission-requirement/admission-requirement.component';
import { AdmissionProcessComponent } from './admission-process/admission-process.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { SchoolFacilitiesComponent } from './school-facilities/school-facilities.component';
import { AboutSchoolComponent } from './about-school/about-school.component';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';
import { SchoolBasicComponent } from './school-basic/school-basic.component';
import { ClassTagsComponent } from './class-tags/class-tags.component';
import { HomeComponent } from './pages/home/home.component';
import { SchoolComponent } from './pages/school/school.component';
import { SearchComponent } from './search/search.component';
import { SchoolContactComponent } from './school-contact/school-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactPersonComponent,
    KeyInfoComponent,
    TuitionApplicationComponent,
    AdmissionRequirementComponent,
    AdmissionProcessComponent,
    AttendanceComponent,
    SchoolFacilitiesComponent,
    AboutSchoolComponent,
    MapComponent,
    FooterComponent,
    SchoolBasicComponent,
    ClassTagsComponent,
    HomeComponent,
    SchoolComponent,
    SearchComponent,
    SchoolContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
