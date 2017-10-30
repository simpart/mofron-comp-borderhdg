/**
 * @file   Heading.js
 * @author simpart
 */
let mf = require('mofron');
let Text = require('mofron-comp-text');
let Heading = require('mofron-comp-heading');
/**
 * @class BorderHdg
 * @brief border heading component 
 */
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
            this.target().style({
                'border-left'   : 'solid 10px',
                'border-bottom' : 'solid 1px',
                'padding-left'  : '10px'
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    themeConts (thm) {
        try {
            let color = thm.color(0);
            if (null !== color) {
                this.target().style({
                    'border-color' : color.getStyle()
                });
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.BorderHdg;
