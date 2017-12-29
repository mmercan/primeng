<<<<<<< HEAD
<<<<<<< HEAD
import { NgModule, Component, ElementRef, Input, Output, SimpleChange, EventEmitter, forwardRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const PAGINATOR_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Paginator),
    multi: true
};
=======
import {NgModule,Component,ElementRef,Input,Output,SimpleChange,EventEmitter,TemplateRef} from '@angular/core';
=======
import {NgModule,Component,OnInit,ElementRef,Input,Output,SimpleChange,EventEmitter,TemplateRef} from '@angular/core';
>>>>>>> 6f85eb18371e35cd1b0949ff866dc4381dadb669
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from '../dropdown/dropdown';
import {SelectItem} from '../common/selectitem';
import {SharedModule} from '../common/shared';
>>>>>>> d21992e62584de0db47e5db0c2f49371ad6b2ed0

@Component({
    selector: 'p-paginator',
    template: `
        <div [class]="styleClass" [ngStyle]="style" [ngClass]="'ui-paginator ui-widget ui-widget-header ui-unselectable-text ui-helper-clearfix'"
            *ngIf="alwaysShow ? true : (pageLinks && pageLinks.length > 1)">
            <div class="ui-paginator-left-content" *ngIf="templateLeft">
                <p-templateLoader [template]="templateLeft" [data]="paginatorState"></p-templateLoader>
            </div>
            <a href="#" class="ui-paginator-first ui-paginator-element ui-state-default ui-corner-all"
                    (click)="changePageToFirst($event)" [ngClass]="{'ui-state-disabled':isFirstPage()}" [tabindex]="isFirstPage() ? -1 : null">
                <span class="fa fa-step-backward"></span>
            </a>
            <a href="#" class="ui-paginator-prev ui-paginator-element ui-state-default ui-corner-all"
                    (click)="changePageToPrev($event)" [ngClass]="{'ui-state-disabled':isFirstPage()}" [tabindex]="isFirstPage() ? -1 : null">
                <span class="fa fa-backward"></span>
            </a>
            <span class="ui-paginator-pages">
                <a href="#" *ngFor="let pageLink of pageLinks" class="ui-paginator-page ui-paginator-element ui-state-default ui-corner-all"
                    (click)="onPageLinkClick($event, pageLink - 1)" [ngClass]="{'ui-state-active': (pageLink-1 == getPage())}">{{pageLink}}</a>
            </span>
            <a href="#" class="ui-paginator-next ui-paginator-element ui-state-default ui-corner-all"
                    (click)="changePageToNext($event)" [ngClass]="{'ui-state-disabled':isLastPage()}" [tabindex]="isLastPage() ? -1 : null">
                <span class="fa fa-forward"></span>
            </a>
            <a href="#" class="ui-paginator-last ui-paginator-element ui-state-default ui-corner-all"
                    (click)="changePageToLast($event)" [ngClass]="{'ui-state-disabled':isLastPage()}" [tabindex]="isLastPage() ? -1 : null">
                <span class="fa fa-step-forward"></span>
            </a>
            <p-dropdown [options]="rowsPerPageItems" [(ngModel)]="rows" *ngIf="rowsPerPageOptions" 
                (onChange)="onRppChange($event)" [lazy]="false" [autoWidth]="false"></p-dropdown>
            <div class="ui-paginator-right-content" *ngIf="templateRight">
                <p-templateLoader [template]="templateRight" [data]="paginatorState"></p-templateLoader>
            </div>
        </div>
    `,
    providers: [PAGINATOR_VALUE_ACCESSOR]
})
<<<<<<< HEAD
export class Paginator implements ControlValueAccessor {
=======
export class Paginator implements OnInit {
>>>>>>> 6f85eb18371e35cd1b0949ff866dc4381dadb669

    @Input() pageLinkSize: number = 5;

    @Output() onPageChange: EventEmitter<any> = new EventEmitter();

    @Input() style: any;

    @Input() styleClass: string;

    @Input() alwaysShow: boolean = true;
    
    @Input() templateLeft: TemplateRef<any>;
    
    @Input() templateRight: TemplateRef<any>;

    pageLinks: number[];

<<<<<<< HEAD
    public _totalRecords: number = 0;
    public _itemSource: any[];
    public _pagedItemSource: any[];
    public _first: number = 0;
=======
    _totalRecords: number = 0;

    _first: number = 0;
>>>>>>> d21992e62584de0db47e5db0c2f49371ad6b2ed0

    _rows: number = 0;
    
    _rowsPerPageOptions: number[];
    
    rowsPerPageItems: SelectItem[];
    
    paginatorState: any;
    
    ngOnInit() {
        this.updatePaginatorState();
    }

    constructor(private cd: ChangeDetectorRef) {

    }

    @Input() get totalRecords(): number {
        return this._totalRecords;
    }

    set totalRecords(val: number) {
        this._totalRecords = val;
        this.updatePageLinks();
    }

    @Input() get itemSource(): any[] {
        return this._itemSource;
    }

    set itemSource(val: any[]) {
        if (val && val.length) {
            if (!this._itemSource || val.length !== this._itemSource.length) {
                this._itemSource = val;
                this.totalRecords = this._itemSource.length;
                this.changePage(0);
            } else {
                this._itemSource = val;
                this.totalRecords = this._itemSource.length;
            }
        }
    }
    public onModelChange: Function = () => { };

    public onModelTouched: Function = () => { };

    get value(): any {
        return this._pagedItemSource;
    }
    writeValue(value: any): void {
        this._pagedItemSource = value;
        this.cd.markForCheck();
    }

    registerOnChange(fn: Function): void {
        this.onModelChange = fn;
    }

    registerOnTouched(fn: Function): void {
        this.onModelTouched = fn;
    }

    setDisabledState(val: boolean): void {
        // this.disabled = val;
    }

    @Input() get first(): number {
        return this._first;
    }

    set first(val: number) {
        this._first = val;
        this.updatePageLinks();
    }

    @Input() get rows(): number {
        return this._rows;
    }

    set rows(val: number) {
        this._rows = val;
        this.updatePageLinks();
    }
    
    @Input() get rowsPerPageOptions(): number[] {
        return this._rowsPerPageOptions;
    }

    set rowsPerPageOptions(val:number[]) {
        this._rowsPerPageOptions = val;
        if(this._rowsPerPageOptions) {
            this.rowsPerPageItems = [];
            for(let opt of this._rowsPerPageOptions) {
                this.rowsPerPageItems.push({label: String(opt), value: opt});
            }
        }
    }

    isFirstPage() {
        return this.getPage() === 0;
    }

    isLastPage() {
        return this.getPage() === this.getPageCount() - 1;
    }

    getPageCount() {
        return Math.ceil(this.totalRecords / this.rows) || 1;
    }

    calculatePageLinkBoundaries() {
        let numberOfPages = this.getPageCount(),
            visiblePages = Math.min(this.pageLinkSize, numberOfPages);

        //calculate range, keep current in middle if necessary
        let start = Math.max(0, Math.ceil(this.getPage() - ((visiblePages) / 2))),
            end = Math.min(numberOfPages - 1, start + visiblePages - 1);

        //check when approaching to last page
        var delta = this.pageLinkSize - (end - start + 1);
        start = Math.max(0, start - delta);

        return [start, end];
    }

    updatePageLinks() {
        this.pageLinks = [];
        let boundaries = this.calculatePageLinkBoundaries(),
            start = boundaries[0],
            end = boundaries[1];

        for (let i = start; i <= end; i++) {
            this.pageLinks.push(i + 1);
        }
    }

    changePage(p: number) {
        var pc = this.getPageCount();

        if (p >= 0 && p < pc) {
            this.first = this.rows * p;
            var state = {
                page: p,
                first: this.first,
                rows: this.rows,
                pageCount: pc
            };
            this.updatePageLinks();

            this.onPageChange.emit(state);
<<<<<<< HEAD
            this.calculatePagedItemSource(state.page);
        }
    }

    calculatePagedItemSource(pagenumber: number) {
        if (this._itemSource && this._itemSource.length && this.rows) {
            this._pagedItemSource = this._itemSource.slice(pagenumber * this.rows, (pagenumber + 1) * this.rows);
            this.onModelChange(this._pagedItemSource);
=======
            this.updatePaginatorState();
>>>>>>> 6f85eb18371e35cd1b0949ff866dc4381dadb669
        }
    }

    getPage(): number {
        return Math.floor(this.first / this.rows);
    }

    changePageToFirst(event) {
        if (!this.isFirstPage()) {
            this.changePage(0);
        }

        event.preventDefault();
    }

    changePageToPrev(event) {
        this.changePage(this.getPage() - 1);
        event.preventDefault();
    }

    changePageToNext(event) {
        this.changePage(this.getPage() + 1);
        event.preventDefault();
    }

    changePageToLast(event) {
        if (!this.isLastPage()) {
            this.changePage(this.getPageCount() - 1);
        }

        event.preventDefault();
    }

    onPageLinkClick(event, page) {
        this.changePage(page);
        event.preventDefault();
    }

    onRppChange(event) {
        this.changePage(this.getPage());
    }
    
    updatePaginatorState() {
        this.paginatorState = {
            page: this.getPage(),
            rows: this.rows,
            first: this.first,
            totalRecords: this.totalRecords
        }
    }
}

@NgModule({
    imports: [CommonModule,DropdownModule,FormsModule,SharedModule],
    exports: [Paginator,DropdownModule,FormsModule,SharedModule],
    declarations: [Paginator]
})
export class PaginatorModule { }
