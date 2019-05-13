<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Session;

class PagesController extends Controller
{
    public function talents() {

        return view('talents');
    }

    public function supports() {

        return view('supports');
    }
}