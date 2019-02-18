<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function loginCheck(Request $request)
    {
    $username = htmlspecialchars($_POST['username']);
       $password = htmlspecialchars($_POST['password']);
       if(Auth::attempt(['username' => $username, 'password' => $password],$request->filled('remember_token'))){
           $id = Auth::user()->getAuthIdentifier();
           $user = DB::table('users')->where('id',$id)->get(['username','roles']);
           session()->regenerate();
           Session::put('roles',$user[0]->roles);
           echo json_encode($user);
       }
       else
           echo 'Authentication failed';

    }
}
