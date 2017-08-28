"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var core_2 = require("@angular/core");
var Header = (function () {
    function Header() {
    }
    Header = __decorate([
        core_2.Component({
            selector: 'p-header',
            template: '<ng-content></ng-content>'
        })
    ], Header);
    return Header;
}());
exports.Header = Header;
var Footer = (function () {
    function Footer() {
    }
    Footer = __decorate([
        core_2.Component({
            selector: 'p-footer',
            template: '<ng-content></ng-content>'
        })
    ], Footer);
    return Footer;
}());
exports.Footer = Footer;
var PrimeTemplate = (function () {
    function PrimeTemplate(template) {
        this.template = template;
    }
    PrimeTemplate.prototype.getType = function () {
        return this.name;
    };
    __decorate([
        core_1.Input()
    ], PrimeTemplate.prototype, "type");
    __decorate([
        core_1.Input('pTemplate')
    ], PrimeTemplate.prototype, "name");
    PrimeTemplate = __decorate([
        core_1.Directive({
            selector: '[pTemplate]',
            host: {}
        })
    ], PrimeTemplate);
    return PrimeTemplate;
}());
exports.PrimeTemplate = PrimeTemplate;
var TemplateWrapper = (function () {
    function TemplateWrapper(viewContainer) {
        this.viewContainer = viewContainer;
    }
    TemplateWrapper.prototype.ngOnInit = function () {
        this.view = this.viewContainer.createEmbeddedView(this.templateRef, {
            '\$implicit': this.item,
            'index': this.index
        });
    };
    TemplateWrapper.prototype.ngOnDestroy = function () {
        this.view.destroy();
    };
    __decorate([
        core_1.Input()
    ], TemplateWrapper.prototype, "item");
    __decorate([
        core_1.Input()
    ], TemplateWrapper.prototype, "index");
    __decorate([
        core_1.Input('pTemplateWrapper')
    ], TemplateWrapper.prototype, "templateRef");
    TemplateWrapper = __decorate([
        core_1.Directive({
            selector: '[pTemplateWrapper]'
        })
    ], TemplateWrapper);
    return TemplateWrapper;
}());
exports.TemplateWrapper = TemplateWrapper;
var Column = (function () {
    function Column() {
        this.filterType = 'text';
        this.sortFunction = new core_1.EventEmitter();
    }
    Column.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'header':
                    _this.headerTemplate = item.template;
                    break;
                case 'body':
                    _this.bodyTemplate = item.template;
                    break;
                case 'footer':
                    _this.footerTemplate = item.template;
                    break;
                case 'filter':
                    _this.filterTemplate = item.template;
                    break;
                case 'editor':
                    _this.editorTemplate = item.template;
                    break;
                default:
                    _this.bodyTemplate = item.template;
                    break;
            }
        });
    };
    __decorate([
        core_1.Input()
    ], Column.prototype, "field");
    __decorate([
        core_1.Input()
    ], Column.prototype, "colId");
    __decorate([
        core_1.Input()
    ], Column.prototype, "sortField");
    __decorate([
        core_1.Input()
    ], Column.prototype, "header");
    __decorate([
        core_1.Input()
    ], Column.prototype, "footer");
    __decorate([
        core_1.Input()
    ], Column.prototype, "sortable");
    __decorate([
        core_1.Input()
    ], Column.prototype, "editable");
    __decorate([
        core_1.Input()
    ], Column.prototype, "filter");
    __decorate([
        core_1.Input()
    ], Column.prototype, "filterMatchMode");
    __decorate([
        core_1.Input()
    ], Column.prototype, "filterType");
    __decorate([
        core_1.Input()
    ], Column.prototype, "rowspan");
    __decorate([
        core_1.Input()
    ], Column.prototype, "colspan");
    __decorate([
        core_1.Input()
    ], Column.prototype, "style");
    __decorate([
        core_1.Input()
    ], Column.prototype, "styleClass");
    __decorate([
        core_1.Input()
    ], Column.prototype, "hidden");
    __decorate([
        core_1.Input()
    ], Column.prototype, "expander");
    __decorate([
        core_1.Input()
    ], Column.prototype, "selectionMode");
    __decorate([
        core_1.Input()
    ], Column.prototype, "filterPlaceholder");
    __decorate([
        core_1.Input()
    ], Column.prototype, "filterMaxlength");
    __decorate([
        core_1.Input()
    ], Column.prototype, "frozen");
    __decorate([
        core_1.Output()
    ], Column.prototype, "sortFunction");
    __decorate([
        core_1.ContentChildren(PrimeTemplate)
    ], Column.prototype, "templates");
    __decorate([
        core_1.ContentChild(core_1.TemplateRef)
    ], Column.prototype, "template");
    Column = __decorate([
        core_2.Component({
            selector: 'p-column',
            template: ""
        })
    ], Column);
    return Column;
}());
exports.Column = Column;
var Row = (function () {
    function Row() {
    }
    __decorate([
        core_1.ContentChildren(Column)
    ], Row.prototype, "columns");
    Row = __decorate([
        core_2.Component({
            selector: 'p-row',
            template: ""
        })
    ], Row);
    return Row;
}());
exports.Row = Row;
var HeaderColumnGroup = (function () {
    function HeaderColumnGroup() {
    }
    __decorate([
        core_1.ContentChildren(Row)
    ], HeaderColumnGroup.prototype, "rows");
    HeaderColumnGroup = __decorate([
        core_2.Component({
            selector: 'p-headerColumnGroup',
            template: ""
        })
    ], HeaderColumnGroup);
    return HeaderColumnGroup;
}());
exports.HeaderColumnGroup = HeaderColumnGroup;
var FooterColumnGroup = (function () {
    function FooterColumnGroup() {
    }
    __decorate([
        core_1.ContentChildren(Row)
    ], FooterColumnGroup.prototype, "rows");
    FooterColumnGroup = __decorate([
        core_2.Component({
            selector: 'p-footerColumnGroup',
            template: ""
        })
    ], FooterColumnGroup);
    return FooterColumnGroup;
}());
exports.FooterColumnGroup = FooterColumnGroup;
var ColumnBodyTemplateLoader = (function () {
    function ColumnBodyTemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    ColumnBodyTemplateLoader.prototype.ngOnInit = function () {
        this.view = this.viewContainer.createEmbeddedView(this.column.bodyTemplate, {
            '\$implicit': this.column,
            'rowData': this.rowData,
            'rowIndex': this.rowIndex
        });
    };
    ColumnBodyTemplateLoader.prototype.ngOnChanges = function (changes) {
        if (!this.view) {
            return;
        }
        if ('rowIndex' in changes) {
            this.view.context.rowIndex = changes['rowIndex'].currentValue;
        }
    };
    ColumnBodyTemplateLoader.prototype.ngOnDestroy = function () {
        this.view.destroy();
    };
    __decorate([
        core_1.Input()
    ], ColumnBodyTemplateLoader.prototype, "column");
    __decorate([
        core_1.Input()
    ], ColumnBodyTemplateLoader.prototype, "rowData");
    __decorate([
        core_1.Input()
    ], ColumnBodyTemplateLoader.prototype, "rowIndex");
    ColumnBodyTemplateLoader = __decorate([
        core_2.Component({
            selector: 'p-columnBodyTemplateLoader',
            template: ""
        })
    ], ColumnBodyTemplateLoader);
    return ColumnBodyTemplateLoader;
}());
exports.ColumnBodyTemplateLoader = ColumnBodyTemplateLoader;
var ColumnHeaderTemplateLoader = (function () {
    function ColumnHeaderTemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    ColumnHeaderTemplateLoader.prototype.ngOnInit = function () {
        this.view = this.viewContainer.createEmbeddedView(this.column.headerTemplate, {
            '\$implicit': this.column
        });
    };
    ColumnHeaderTemplateLoader.prototype.ngOnDestroy = function () {
        this.view.destroy();
    };
    __decorate([
        core_1.Input()
    ], ColumnHeaderTemplateLoader.prototype, "column");
    ColumnHeaderTemplateLoader = __decorate([
        core_2.Component({
            selector: 'p-columnHeaderTemplateLoader',
            template: ""
        })
    ], ColumnHeaderTemplateLoader);
    return ColumnHeaderTemplateLoader;
}());
exports.ColumnHeaderTemplateLoader = ColumnHeaderTemplateLoader;
var ColumnFooterTemplateLoader = (function () {
    function ColumnFooterTemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    ColumnFooterTemplateLoader.prototype.ngOnInit = function () {
        this.view = this.viewContainer.createEmbeddedView(this.column.footerTemplate, {
            '\$implicit': this.column
        });
    };
    ColumnFooterTemplateLoader.prototype.ngOnDestroy = function () {
        this.view.destroy();
    };
    __decorate([
        core_1.Input()
    ], ColumnFooterTemplateLoader.prototype, "column");
    ColumnFooterTemplateLoader = __decorate([
        core_2.Component({
            selector: 'p-columnFooterTemplateLoader',
            template: ""
        })
    ], ColumnFooterTemplateLoader);
    return ColumnFooterTemplateLoader;
}());
exports.ColumnFooterTemplateLoader = ColumnFooterTemplateLoader;
var ColumnFilterTemplateLoader = (function () {
    function ColumnFilterTemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    ColumnFilterTemplateLoader.prototype.ngOnInit = function () {
        this.view = this.viewContainer.createEmbeddedView(this.column.filterTemplate, {
            '\$implicit': this.column
        });
    };
    ColumnFilterTemplateLoader.prototype.ngOnDestroy = function () {
        this.view.destroy();
    };
    __decorate([
        core_1.Input()
    ], ColumnFilterTemplateLoader.prototype, "column");
    ColumnFilterTemplateLoader = __decorate([
        core_2.Component({
            selector: 'p-columnFilterTemplateLoader',
            template: ""
        })
    ], ColumnFilterTemplateLoader);
    return ColumnFilterTemplateLoader;
}());
exports.ColumnFilterTemplateLoader = ColumnFilterTemplateLoader;
var ColumnEditorTemplateLoader = (function () {
    function ColumnEditorTemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    ColumnEditorTemplateLoader.prototype.ngOnInit = function () {
        this.view = this.viewContainer.createEmbeddedView(this.column.editorTemplate, {
            '\$implicit': this.column,
            'rowData': this.rowData,
            'rowIndex': this.rowIndex
        });
    };
    ColumnEditorTemplateLoader.prototype.ngOnDestroy = function () {
        this.view.destroy();
    };
    __decorate([
        core_1.Input()
    ], ColumnEditorTemplateLoader.prototype, "column");
    __decorate([
        core_1.Input()
    ], ColumnEditorTemplateLoader.prototype, "rowData");
    __decorate([
        core_1.Input()
    ], ColumnEditorTemplateLoader.prototype, "rowIndex");
    ColumnEditorTemplateLoader = __decorate([
        core_2.Component({
            selector: 'p-columnEditorTemplateLoader',
            template: ""
        })
    ], ColumnEditorTemplateLoader);
    return ColumnEditorTemplateLoader;
}());
exports.ColumnEditorTemplateLoader = ColumnEditorTemplateLoader;
var TemplateLoader = (function () {
    function TemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    TemplateLoader.prototype.ngOnInit = function () {
        if (this.template) {
            this.view = this.viewContainer.createEmbeddedView(this.template, {
                '\$implicit': this.data
            });
        }
    };
    TemplateLoader.prototype.ngOnDestroy = function () {
        if (this.view)
            this.view.destroy();
    };
    __decorate([
        core_1.Input()
    ], TemplateLoader.prototype, "template");
    __decorate([
        core_1.Input()
    ], TemplateLoader.prototype, "data");
    TemplateLoader = __decorate([
        core_2.Component({
            selector: 'p-templateLoader',
            template: ""
        })
    ], TemplateLoader);
    return TemplateLoader;
}());
exports.TemplateLoader = TemplateLoader;
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [Header, Footer, Column, TemplateWrapper, ColumnHeaderTemplateLoader, ColumnBodyTemplateLoader, ColumnFooterTemplateLoader, ColumnFilterTemplateLoader, PrimeTemplate, TemplateLoader, Row, HeaderColumnGroup, FooterColumnGroup, ColumnEditorTemplateLoader],
            declarations: [Header, Footer, Column, TemplateWrapper, ColumnHeaderTemplateLoader, ColumnBodyTemplateLoader, ColumnFooterTemplateLoader, ColumnFilterTemplateLoader, PrimeTemplate, TemplateLoader, Row, HeaderColumnGroup, FooterColumnGroup, ColumnEditorTemplateLoader]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
