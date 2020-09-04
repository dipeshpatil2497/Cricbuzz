import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SchdInternationalComponent } from './schd-international/schd-international.component';
import { SchdT20Component } from './schd-t20/schd-t20.component';
import { SchdAllmatchesComponent } from './schd-allmatches/schd-allmatches.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { RankingComponent } from './ranking/ranking.component';
import { RankBattingComponent } from './rank-batting/rank-batting.component';
import { RankBowlingComponent } from './rank-bowling/rank-bowling.component';
import { RankTeamComponent } from './rank-team/rank-team.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamIndiaComponent } from './teams/1/team-india/team-india.component';
import { TeamSouthafricaComponent } from './teams/1/team-southafrica/team-southafrica.component';
import { TeamWestindiesComponent } from './teams/1/team-westindies/team-westindies.component';
import { TeamAustraliaComponent } from './teams/1/team-australia/team-australia.component';
import { HomeMiddleContentComponent } from './home-middle-content/home-middle-content.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {
    path: 'home-page', component: HomePageComponent,
    children: [
      { path: '', component: HomeMiddleContentComponent },
      {
        path: 'schedule', component: ScheduleComponent,
        children: [
          { path: '', component: SchdInternationalComponent },
          { path: 'schdt20', component: SchdT20Component },
          { path: 'schdAllmatches', component: SchdAllmatchesComponent },
        ]
      },
      { path: 'teams', component: TeamsComponent },
      { path: 'teams/india', component: TeamIndiaComponent },
      { path: 'teams/australia', component: TeamAustraliaComponent },
      { path: 'teams/westindies', component: TeamWestindiesComponent },
      { path: 'teams/southafrica', component: TeamSouthafricaComponent },
      {
        path: 'ranking', component: RankingComponent,
        children: [
          { path: '', component: RankBattingComponent },
          { path: 'bowling', component: RankBowlingComponent },
          { path: 'team', component: RankTeamComponent },
        ]
      },
      { path: 'registerpage', component: RegisterPageComponent },
      { path: 'aboutus', component: AboutUsComponent },
    ],
  },
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: '**', component: ErrorpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
