<!DOCTYPE html>
<html>

<head>
    <title>@yield('title', 'Student System')</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>

<body>

    <header>
        <h1>Laravel Student Management</h1>
    </header>

    <div class="container">
        @yield('content')
    </div>

    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>