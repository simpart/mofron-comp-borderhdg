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
    /**
     * initialize component
     *
     * @param (mixed) text parameter
     *                component config
     * @param (number) level parameter
     * @type private
     */
    constructor (p1,p2) {
        try {
            super();
            this.modname('BoderHdg');
	    if (0 < arguments.length) {
                this.config(p1,p2);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
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
    
    /**
     * border color setter/getter
     * 
     * @param (mixed (color)) string: text color name, #hex
     *                        array: [red, green, blue, (alpha)]
     * @type parameter
     */
    mainColor (prm,opt) {
        try {
            this.style(
	        { 'border-color' : comutl.getcolor(prm).toString() }, opt
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
