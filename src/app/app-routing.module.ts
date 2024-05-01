import { FloatingActionButtonComponent } from './floating-action-button/floating-action-button.component';
import { CardComponent } from './card/card.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ActionSheetCComponent } from './action-sheet-c/action-sheet-c.component';
import { HomeCComponent } from './home-c/home-c.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AlertComponent } from './alert/alert.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BadgeComponent } from './badge/badge.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipComponent } from './chip/chip.component';
import { DatetimeComponent } from './datetime/datetime.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { ItemsComponent } from './items/items.component';
import { MenuModalPopoverComponent } from './menu-modal-popover/menu-modal-popover.component';
import { PickerProgressBarComponent } from './picker-progress-bar/picker-progress-bar.component';
import { RangeReorderComponent } from './range-reorder/range-reorder.component';
import { SearchSegmentSpinnerComponent } from './search-segment-spinner/search-segment-spinner.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeCComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'action-sheet-c',
    component: ActionSheetCComponent
  },
  {
    path: 'accordion',
    component: AccordionComponent
  },
  {
    path: 'alert',
    component: AlertComponent
  },
  {
    path: 'avatar',
    component: AvatarComponent
  },
  {
    path: 'badge',
    component: BadgeComponent
  },
  {
    path: 'Breadcrumbs',
    component: BreadcrumbsComponent
  },
  {
    path: 'Buttons',
    component: ButtonsComponent
  },
  {
    path: 'Cards',
    component: CardComponent
  },
  {
    path: 'checkbox',
    component: CheckboxComponent
  },
  {
    path: 'chip',
    component: ChipComponent
  },
  {
    path: 'datetime',
    component: DatetimeComponent
  },
  {
    path: 'FloatingActionButton',
    component: FloatingActionButtonComponent
  },
  {
    path: 'InfiniteScroll',
    component: InfiniteScrollComponent
  },
  {
    path: 'items',
    component: ItemsComponent
  },
  {
    path: 'menu-modal-popover',
    component: MenuModalPopoverComponent
  },
  {
    path: 'picker-progressBar',
    component: PickerProgressBarComponent
  },
  {
    path: 'RangeReorder',
    component: RangeReorderComponent
  },
  {
    path: 'SearchSegmentSpinner',
    component: SearchSegmentSpinnerComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
