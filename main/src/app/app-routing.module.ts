import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { PriceComponent } from './price/price.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServicesComponent } from './services/services.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
// import { DataComponentComponent } from './test-components/data-component/data-component.component';
import { ParentComponent } from './test-components/parent/parent.component';
import { ChildComponent } from './test-components/child/child.component';
import { BindingComponent } from './test-components/binding/binding.component';
import { StudentComponent } from './test-components/student/student.component';
import { TeacherComponent } from './test-components/teacher/teacher.component';
import { PipesComponent } from './test-components/pipes/pipes.component';
import { DepartmentDetailsComponentComponent } from './test-components/department-details-component/department-details-component.component';
import { DepartmentComponent } from './test-components/department/department.component';
import { AnimationsComponent } from './test-components/animations/animations.component';
import { BootStrabComponent } from './test-components/boot-strab/boot-strab.component';

@NgModule({
  imports: [RouterModule.forRoot(
    [
      {path : 'home' , component : HomeComponent},
      {path:'contact' , component : ContactComponent},
      {path : 'team' , component : OurTeamComponent},
      {path : 'service' , component : ServicesComponent},
      {path : 'price' , component : PriceComponent},
      {path:'protofolio' , component : PortofolioComponent},
      {path : 'blog' , component : BlogComponent},
      {path : 'about' , component : AboutComponent},
      {path : 'signin' , component : SignInComponent},
      {path : 'signup' , component : SignUpComponent},
      // {path : 'data' , component : DataComponentComponent},

      // for-test
      {path : 'parent' , component : ParentComponent},
      {path : 'child' , component : ChildComponent},
      {path : 'bind' , component : BindingComponent} ,
      {path : 'student' , component : StudentComponent} ,
      {path : 'teacher' , component : TeacherComponent} ,
      {path : 'pipe' , component : PipesComponent} ,
      {path : 'animation' , component : AnimationsComponent},
      {path : 'bs' , component : BootStrabComponent},

      // redirect 
      {path : '' , redirectTo :'signup' , pathMatch : 'full'},

      // parameter Routing 
      {path : 'departments' , component : DepartmentComponent} ,
      {path : 'departments/:id' , component : DepartmentDetailsComponentComponent} ,
    

      // WildRoute :- desired to be last one 
      {path : '**' , component : NotFoundComponent },
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
