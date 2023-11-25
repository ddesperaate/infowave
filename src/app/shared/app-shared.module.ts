import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { RouterModule } from '@angular/router';
import { DividerModule } from 'primeng/divider';
import { ScrollTopModule } from 'primeng/scrolltop';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { BrowserModule } from '@angular/platform-browser';
import { ChipModule } from 'primeng/chip';
import { MessagesModule } from 'primeng/messages';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';


const imports = [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    TableModule,
    PaginatorModule,
    ProgressBarModule,
    AutoCompleteModule,
    ButtonModule,
    InputTextModule,
    InputSwitchModule,
    DropdownModule,
    CheckboxModule,
    CalendarModule,
    DividerModule,
    ScrollTopModule,
    DynamicDialogModule,
    ChipModule,
    MessagesModule,
    SidebarModule,
    PanelMenuModule
];

@NgModule({
    imports: [...imports],
    exports: [...imports],
    declarations: [],
})
export class AppSharedModule {}
