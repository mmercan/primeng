import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorDemo } from './paginatordemo';
import { PaginatorDemoRoutingModule } from './paginatordemo-routing.module';
import { PaginatorModule } from '../../../components/paginator/paginator';
import { TabViewModule } from '../../../components/tabview/tabview';
import { CodeHighlighterModule } from '../../../components/codehighlighter/codehighlighter';
import { CarService } from '../../service/carservice';
import { FormsModule } from '@angular/forms';
@NgModule({
	imports: [
		CommonModule,
		PaginatorDemoRoutingModule,
		PaginatorModule,
		TabViewModule,
		CodeHighlighterModule,
		FormsModule
	],
	providers: [CarService],
	declarations: [
		PaginatorDemo
	]
})
export class PaginatorDemoModule { }
