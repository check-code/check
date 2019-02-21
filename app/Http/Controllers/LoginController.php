<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    //
    public function register(Request $request){

        if(!$request->has('name', 'email', 'password', 'role'))
            return cannotProcessData();

      try{
            $pass = Hash::make($request->password);
            User::create(['username'=>$request->name, 'email'=> $request->email, 'password' => $pass, 'roles' => $request->role]);
            return response('registered successfully..',200);
        }
        catch(QueryException $e){
            return cannotProcessData();
        }
    }

     public function checkAuth(){

        return response(Auth::user()->roles,200);  


    }


}
