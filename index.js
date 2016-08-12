/*
 laravel-elixirx-packager
 Developer: Pooya Parsa <pooya@pi0.ir>
 */

function Packager(_package, mix, vendor_styles, vendor_scripts) {

    // Styles
    mix.sass(_package + '/' + _package + '.scss', 'public/' + _package + '/app.css');

    // Scripts
    mix.rollup(_package + '/' + _package + '.js', 'public/' + _package + '/app.js');

    // Vendor Styles
    mix.styles(vendor_styles, 'public/' + _package + '/vendor.css');

    // Vendor Scripts
    mix.scripts(vendor_scripts, 'public/' + _package + '/vendor.js');

}

module.exports = Packager;

const npm = '../../../node_modules/';
const build = '../../../build/';
const vendor = '../vendor/';

Packager.npm = npm;
Packager.build = build;
Packager.vendor = vendor;