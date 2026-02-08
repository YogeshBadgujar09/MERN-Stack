<!DOCTYPE html>
<html>

<head>
    <title>@yield('title')</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">

</head>

<body>
    <header>
        <h1>Student Management</h1>
    </header>
    <main>
        @yield('content')
    </main>
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>