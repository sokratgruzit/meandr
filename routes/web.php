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

Route::get('/', 'PagesController@index')->name('home');
Route::get('talents', 'PagesController@talents')->name('talents');
Route::get('supports', 'PagesController@supports')->name('supports');
Route::get('contact-form', 'PagesController@ajaxContactForm')->name('submit-contact-form');