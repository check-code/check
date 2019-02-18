<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', function () {
    return View::make('index');
});


Route::get('/testPartial', function () {
    return view('partials/testPartial');
});

Route::get('/testTemplate', function(){
    return view('templates/testTemplate');
});

Route::post('/login','LoginController@loginCheck')->name('submitLogin');

Route::get('/ui_gridSample', function(){
    return view('templates/ui_gridSample');
});

