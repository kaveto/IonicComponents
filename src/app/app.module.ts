import { CardComponent } from './card/card.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ActionSheetCComponent } from './action-sheet-c/action-sheet-c.component';
import { HomeCComponent } from './home-c/home-c.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AlertComponent } from './alert/alert.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BadgeComponent } from './badge/badge.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipComponent } from './chip/chip.component';
import { DatetimeComponent } from './datetime/datetime.component';
import { FloatingActionButtonComponent } from './floating-action-button/floating-action-button.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { ItemsComponent } from './items/items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuModalPopoverComponent } from './menu-modal-popover/menu-modal-popover.component';
import { PickerProgressBarComponent } from './picker-progress-bar/picker-progress-bar.component';
import { RangeReorderComponent } from './range-reorder/range-reorder.component';
import { SearchSegmentSpinnerComponent } from './search-segment-spinner/search-segment-spinner.component';


@NgModule({
  declarations: [AppComponent, AccordionComponent, ActionSheetCComponent, HomeCComponent, AlertComponent, AvatarComponent, BadgeComponent, BreadcrumbsComponent, ButtonsComponent, CardComponent, CheckboxComponent, ChipComponent, DatetimeComponent, FloatingActionButtonComponent, InfiniteScrollComponent, ItemsComponent, MenuModalPopoverComponent, PickerProgressBarComponent, RangeReorderComponent, SearchSegmentSpinnerComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
