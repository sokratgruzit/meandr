@extends('main')

@section('title', '| Home')

@section('content')
    @include('partials._offer') 
    @include('partials._women_img')
    @include('partials._promo') 
    @include('partials._description') 
    @include('partials._advantages')
    @include('partials._contact_form')
@endsection