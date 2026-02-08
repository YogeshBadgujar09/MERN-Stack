@extends('layouts.master')

@section('content')
<h2>Registration Form</h2>

<form method="POST" action="/register">
    @csrf

    Name:
    <input type="text" name="name" value="{{ old('name') }}">
    @error('name')
    <p style="color:red">{{ $message }}</p>
    @enderror
    <br><br>

    Email:
    <input type="email" name="email" value="{{ old('email') }}">
    @error('email')
    <p style="color:red">{{ $message }}</p>
    @enderror
    <br><br>

    Password:
    <input type="password" name="password">
    @error('password')
    <p style="color:red">{{ $message }}</p>
    @enderror
    <br><br>

    <button type="submit">Register</button>
</form>
@endsection