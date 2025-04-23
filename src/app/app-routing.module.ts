import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
path: '',
loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
},
{
path: 'platform-details/:platform',
loadChildren: () =>
import('./platform-details/platform-details.module').then(
(m) => m.PlatformDetailsPageModule
),
},
{
path: 'game-details/:gameId',
loadChildren: () =>
import('./game-details/game-details.module').then(
(m) => m.GameDetailsPageModule
),
},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
