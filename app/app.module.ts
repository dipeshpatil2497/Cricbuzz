import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomePageComponent } from './home-page/home-page.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SchdInternationalComponent } from './schd-international/schd-international.component';
import { SchdT20Component } from './schd-t20/schd-t20.component';
import { SchdAllmatchesComponent } from './schd-allmatches/schd-allmatches.component';
import { RankingComponent } from './ranking/ranking.component';
import { RankBattingComponent } from './rank-batting/rank-batting.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { RankBowlingComponent } from './rank-bowling/rank-bowling.component';
import { RankTeamComponent } from './rank-team/rank-team.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamIndiaComponent } from './teams/1/team-india/team-india.component';
import { TeamSouthafricaComponent } from './teams/1/team-southafrica/team-southafrica.component';
import { TeamWestindiesComponent } from './teams/1/team-westindies/team-westindies.component';
import { TeamAustraliaComponent } from './teams/1/team-australia/team-australia.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegModalComponent } from './reg-modal/reg-modal.component';
import { HomeMiddleContentComponent } from './home-middle-content/home-middle-content.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ScheduleComponent,
    SchdInternationalComponent,
    SchdT20Component,
    SchdAllmatchesComponent,
    RankingComponent,
    RankBattingComponent,
    RegisterPageComponent,
    ErrorpageComponent,
    RankBowlingComponent,
    RankTeamComponent,
    TeamsComponent,
    TeamIndiaComponent,
    TeamSouthafricaComponent,
    TeamWestindiesComponent,
    TeamAustraliaComponent,
    RegModalComponent,
    HomeMiddleContentComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
