<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

use App\Events\TestBroadcastEvent;

Route::get('/test-broadcast', function () {
    broadcast(new TestBroadcastEvent('Hello from backend!'));
    return 'Event broadcasted subash!';
});

use Illuminate\Broadcasting\Channel;
use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('notification', function ($user) {
    return true; // Or your authorization logic
});