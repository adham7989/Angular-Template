import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Routing File in imports 
import { AppRoutingModule } from './app-routing.module';

// Components in declaration
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { PriceComponent } from './price/price.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { ServicesComponent } from './services/services.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ParentComponent } from './test-components/parent/parent.component';
import { ChildComponent } from './test-components/child/child.component';
import { BindingComponent } from './test-components/binding/binding.component';
import { StudentComponent } from './test-components/student/student.component';
import { TeacherComponent } from './test-components/teacher/teacher.component';
import { PipesComponent } from './test-components/pipes/pipes.component';
// import { DataComponentComponent } from './test-components/data-component/data-component.component';

// Forms in imports  
import { FormsModule , ReactiveFormsModule , FormGroup  } from '@angular/forms';

// services in providers 
import { FormBuilder } from '@angular/forms';

// http in imports 
import {HttpClientModule } from '@angular/common/http';

// parameter routing
import { DepartmentComponent } from './test-components/department/department.component';
import { DepartmentDetailsComponentComponent } from './test-components/department-details-component/department-details-component.component';
import { AnimationsComponent } from './test-components/animations/animations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// material
import { MatStepperModule} from '@angular/material/stepper'
import { MatInputModule} from '@angular/material/input'
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatButtonModule} from '@angular/material/button'
import { MatIconModule} from '@angular/material/icon'
import { MatCardModule} from '@angular/material/card';
import { BootStrabComponent } from './test-components/boot-strab/boot-strab.component'


// BrowserAnimationsModule
// import { FormGroup , FormControl } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    HomeComponent,
    NotFoundComponent,
    OurTeamComponent,
    PriceComponent,
    PortofolioComponent,
    ServicesComponent,
    SignInComponent,
    SignUpComponent,
    ParentComponent,
    ChildComponent,
    BindingComponent,
    StudentComponent,
    TeacherComponent,
    PipesComponent,
    DepartmentComponent ,
    DepartmentDetailsComponentComponent,
    AnimationsComponent,
    BootStrabComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule ,
    HttpClientModule , 
    BrowserAnimationsModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [ FormBuilder ],
  bootstrap: [AppComponent]
})
export class AppModule { }
