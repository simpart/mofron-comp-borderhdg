/**
 * @file   mofron-comp-borderhdg/index.js
 * @brief border heading component
 * @author simpart
 */
const mf      = require('mofron');
const Text    = require('mofron-comp-text');
const Heading = require('mofron-comp-heading');
const comutl  = mofron.util.common;

module.exports = class extends Heading {
    constructor (p1) {
        try {
            super();
            this.modname('BoderHdg');
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts () {
        try {
            super.initDomConts();
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
                'border-color' : comutl.getcolor(prm).toString()
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
