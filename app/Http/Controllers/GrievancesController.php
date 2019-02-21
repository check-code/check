<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Grievance;

class GrievancesController extends Controller
{
    public function store(Request $request)
    {
        // $this->validate($request, [
        //     'subject' => 'required',
        //     'name' => 'required',
        //     'roll_no' => 'required',
        //     'contact' => 'required',
        //     'email' => 'required',
        //     'course' => 'required',
        //     'branch' => 'required',
        //     'year' => 'required',
        //     'grievance_against' => 'required',
        //     'details' => 'required'
        // ]);

        
        $grievance = new Grievance;
        $grievance->subject = $request->input('subject');
        $grievance->description = $request->input('details');
        $grievance->student_id = $request->input('roll_no');
        $grievance->save();
        return ('Grievance Lodged');
    }


    public function show(Request $request)
    {
        $grievance = Grievance::find($request->input('id'));
        return ($grievance);
    }
}
