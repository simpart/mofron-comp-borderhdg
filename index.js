/**
 * @file   mofron-comp-borderhdg/index.js
 * @brief border heading component
 * @author simpart
 */
const mf      = require('mofron');
const Text    = require('mofron-comp-text');
const Heading = require('mofron-comp-heading');

mofron.comp.BorderHdg = class extends Heading {
    constructor (po) {
        try {
            super();
            this.name('BoderHdg');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts (prm) {
        try {
            super.initDomConts(prm);
            this.style({
                'border-left'   : 'solid 10px',
                'border-bottom' : 'solid 1px',
                'padding-left'  : '10px'
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    mainColor (prm) {
        try {
            this.style({
                'border-color' : mf.func.getColor(prm).toString()
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.BorderHdg;
