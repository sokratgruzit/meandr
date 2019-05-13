<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        @include('partials._head')
    </head>

    <body>
        @include('partials._messages')

        @yield('content')

        @include('partials._javascript')
    </body>
</html>