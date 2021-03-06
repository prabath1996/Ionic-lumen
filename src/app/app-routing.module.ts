import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
 
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'insurance-compnay',
    loadChildren: () => import('./pages/insurance-compnay/insurance-compnay.module').then( m => m.InsuranceCompnayPageModule)
  },
  {
    path: 'aaib',
    loadChildren: () => import('./pages/aaib/aaib.module').then( m => m.AaibPageModule)
  },
  {
    path: 'sanasa',
    loadChildren: () => import('./pages/sanasa/sanasa.module').then( m => m.SanasaPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./pages/tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'description',
    loadChildren: () => import('./pages/description/description.module').then( m => m.DescriptionPageModule)
  },
  {
    path: 'forum',
    loadChildren: () => import('./pages/forum/forum.module').then( m => m.ForumPageModule)
  },  {
    path: 'des1',
    loadChildren: () => import('./pages/des1/des1.module').then( m => m.Des1PageModule)
  },
  {
    path: 'des2',
    loadChildren: () => import('./pages/des2/des2.module').then( m => m.Des2PageModule)
  },
  {
    path: 'des3',
    loadChildren: () => import('./pages/des3/des3.module').then( m => m.Des3PageModule)
  },
  {
    path: 'claim',
    loadChildren: () => import('./pages/claim/claim.module').then( m => m.ClaimPageModule)
  },
  {
    path: 'policies',
    loadChildren: () => import('./pages/policies/policies.module').then( m => m.PoliciesPageModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./pages/client/client.module').then( m => m.ClientPageModule)
  },
  {
    path: 'types',
    loadChildren: () => import('./pages/types/types.module').then( m => m.TypesPageModule)
  },
  {
    path: 'agent',
    loadChildren: () => import('./pages/agent/agent.module').then( m => m.AgentPageModule)
  },
  {
    path: 'organization',
    loadChildren: () => import('./pages/organization/organization.module').then( m => m.OrganizationPageModule)
  },
  {
    path: 'active-policy',
    loadChildren: () => import('./pages/active-policy/active-policy.module').then( m => m.ActivePolicyPageModule)
  },
  {
    path: 'update',
    loadChildren: () => import('./pages/update/update.module').then( m => m.UpdatePageModule)
  },

  // {
  //   path: 'aaibtab1',
  //   loadChildren: () => import('./pages/aaibtab1/aaibtab1.module').then( m => m.Aaibtab1PageModule)
  // },
  // {
  //   path: 'aaibtab2',
  //   loadChildren: () => import('./pages/aaibtab2/aaibtab2.module').then( m => m.Aaibtab2PageModule)
  // },
  // {
  //   path: 'aaibtab3',
  //   loadChildren: () => import('./pages/aaibtab3/aaibtab3.module').then( m => m.Aaibtab3PageModule)
  // },
  // {
  //   path: 'aaibtab4',
  //   loadChildren: () => import('./pages/aaibtab4/aaibtab4.module').then( m => m.Aaibtab4PageModule)
  // },

  // {
  //   path: 'tab1',
  //   loadChildren: () => import('./pages/tab1/tab1.module').then( m => m.Tab1PageModule)
  // },
  // {
  //   path: 'tab2',
  //   loadChildren: () => import('./pages/tab2/tab2.module').then( m => m.Tab2PageModule)
  // },
  // {
  //   path: 'tab3',
  //   loadChildren: () => import('./pages/tab3/tab3.module').then( m => m.Tab3PageModule)
  // },
  // {
  //   path: 'tabs',
  //   loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  // },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
