import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class BmkLibraryFirstService {
    constructor() { }
}
BmkLibraryFirstService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: BmkLibraryFirstService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
BmkLibraryFirstService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: BmkLibraryFirstService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: BmkLibraryFirstService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class BmkLibraryFirstComponent {
    constructor() { }
    ngOnInit() {
    }
}
BmkLibraryFirstComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: BmkLibraryFirstComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BmkLibraryFirstComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: BmkLibraryFirstComponent, selector: "lib-bmk-library-first", ngImport: i0, template: `
    <p>
      bmk-library-first works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: BmkLibraryFirstComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-bmk-library-first',
                    template: `
    <p>
      bmk-library-first works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class BmkLibraryFirstModule {
}
BmkLibraryFirstModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: BmkLibraryFirstModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BmkLibraryFirstModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: BmkLibraryFirstModule, declarations: [BmkLibraryFirstComponent], exports: [BmkLibraryFirstComponent] });
BmkLibraryFirstModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: BmkLibraryFirstModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: BmkLibraryFirstModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BmkLibraryFirstComponent
                    ],
                    imports: [],
                    exports: [
                        BmkLibraryFirstComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of bmk-library-first
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BmkLibraryFirstComponent, BmkLibraryFirstModule, BmkLibraryFirstService };
//# sourceMappingURL=bmk-library-first.mjs.map
