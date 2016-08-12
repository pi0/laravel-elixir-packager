# laravel-elixir-packager
[![npm version](https://badge.fury.io/js/laravel-elixir-packager.svg)](https://badge.fury.io/js/laravel-elixir-packager)
  
**Laravel Elixir Packager.**

### Usage
Packager will automatically process `sass/app/app.scss` and `js/app/app.js`. 

```js
const Elixir = require('laravel-elixir');
const Packager = require('laravel-elixir-packager');


Elixir(function (mix) {


      Packager('app', mix, [
    
            // Vendor Styles
    
            // ...
            Packager.npm + 'swiper/dist/css/swiper.min.css',
            // ...
            
        ], [
    
            // Vendor Scripts
            
            // ...
            Packager.npm + 'jquery.easing/jquery.easing.min.js',
            //...
    

        ]);

});

```