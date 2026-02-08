<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    // return view('welcome');
    return "Hello , Yogesh Badgujar!";
});

Route::get('/admin', function () {
    // return view('welcome');
    return "Admin Page Visible !";
});

Route::get('/about', function () {
    // return view('welcome');
    return "About Page Visible !";
});

Route::get('/parameter/{name}', function ($name) {

    return "Parameter Page Visible ! with Name : " . $name;
});

Route::get('/multiparameter/{id?}/{name}', function ($id = null, $name ) {

    return "Multiparameter Page Visible ! with Id : " . $id." and Name : " . $name;
});


Route :: get('/returnView/{name}/{age}', function($name, $age){
    return view('dynamicView',compact('name', 'age'));
});

