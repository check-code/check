<?php

namespace App\Http\Controllers;
use App\Http\Middleware\BasicAuth;
use Illuminate\Http\Request;
use App\User;
use App\Grievance;
use App\GrievanceStatus;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class grievanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $id = Auth::user()->id;
        $student_id = DB::table('user_student')->where('user_id',$id)->get(['id'])->first();
        $grievance = DB::table('table_grievance')->where('student_id',$student_id->id)->orderBy('id','asc')
                        ->get(['id','type','created_at','documents']);
        $data = [];
        $i = 0;
        foreach ($grievance as $id){
            $data[$i] = $id->id;
            $i++;
        }
        $grievance_status = DB::table('table_grievance_status')->whereIn('status',['raised','addressed'])
            ->whereIn('grievance_id',$data)->orderBy('grievance_id','asc')
            ->get(['grievance_id','status','eta']);
        $i = 0;

        $open=[];
        

        for ($i = 0; $i<count($grievance_status);$i++){
            if($grievance_status[$i]->status == 'addressed')
                $action = 1;
            else
                $action = 0;
            $open[$i] = [
              'grievance_id'=>$grievance[$i]->id,
              'grievance_type' => $grievance[$i]->type,
              'assigned_committee' => $grievance[$i]->type,
              'data_of_issue' => $grievance[$i]->created_at,
              'attachment'=>  $grievance[$i]->documents,
                'status'=>$grievance_status[$i]->status,
                'eta'=>$grievance_status[$i]->eta,
                'action'=>$action
            ];
        }

        $id = Auth::user()->id;
        $student_id = DB::table('user_student')->where('user_id',$id)->get(['id'])->first();
        $grievance_escalated = DB::table('table_grievance')->where('student_id',$student_id->id)->orderBy('id','asc')
                        ->get(['id','type','created_at','documents']);
        $data_escalated = [];
        $i = 0;
        foreach ($grievance_escalated as $id){
            $data_escalated[$i] = $id->id;
            $i++;
        }
        $grievance_status_escalated = DB::table('table_grievance_status')->whereIn('status',['delayed','reopened'])
            ->whereIn('grievance_id',$data_escalated)->orderBy('grievance_id','asc')
            ->get(['grievance_id','status','eta']);
        $i = 0;

        $esclated=[];
        

        for ($i = 0; $i<count($grievance_status_escalated);$i++){
            $action = 0;
            $esclated[$i] = [
              'grievance_id'=>$grievance_status_escalated[$i]->grievance_id,
              'grievance_type' => $grievance_escalated[$i]->type,
              'assigned_committee' => $grievance_escalated[$i]->type,
              'data_of_issue' => $grievance_escalated[$i]->created_at,
              'attachment'=>  $grievance_escalated[$i]->documents,
                'status'=>$grievance_status_escalated[$i]->status,
                'eta'=>$grievance_status_escalated[$i]->eta,
                'action'=>$action
            ];
        }

        $id ="5";
        //$id = Auth::user()->id;
        $student_id = DB::table('user_student')->where('user_id',$id)->get(['id'])->first();
        $grievance_solved = DB::table('table_grievance')->where('student_id',$student_id->id)->orderBy('id','asc')
                        ->get(['id','type','created_at','documents']);
        $data_solved = [];
        $i = 0;
        foreach ($grievance_solved as $id){
            $data_solved[$i] = $id->id;
            $i++;
        }
        $grievance_status_solved = DB::table('table_grievance_status')->whereIn('status',['resolved'])
            ->whereIn('grievance_id',$data_solved)->orderBy('grievance_id','asc')
            ->get(['grievance_id','status','eta']);
        $i = 0;

        $resolved=[];
        

        for ($i = 0; $i<count($grievance_status_solved);$i++){
            $action = 1;
            $resolved[$i] = [
              'grievance_id'=>$grievance_status_solved[$i]->grievance_id,
              'grievance_type' => $grievance_solved[$i]->type,
              'assigned_committee' => $grievance_solved[$i]->type,
              'data_of_issue' => $grievance_solved[$i]->created_at,
              'attachment'=>  $grievance_solved[$i]->documents,
                'status'=>$grievance_status_solved[$i]->status,
                'eta'=>$grievance_status_solved[$i]->eta,
                'action'=>$action
            ];
        }

        $result["open"] = $open;
        $result["esclated"] = $esclated;
        $result["resolved"] = $resolved;

        echo json_encode($result);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $type = $request->get('type');
        $description = $request->get('detail');
        $file = $request->file('attachment');
        $student_id = DB::table('user_student')->where('user_id',Auth::user()->getAuthIdentifier())->get(['id','college_id']);
        $department_id = DB::table('table_department')->where('name','LIKE',$type)->where('college_id',$student_id[0]->college_id)->get(['id']);
        $grievance = new Grievance;
        $grievance->type = $type;
        $grievance->description = $description;
        $grievance->student_id = $student_id[0]->id;
        $grievance->department_id = $department_id[0]->id;
        $grievance->documents = $file==null?'':$file->storeAs('documents',$file->getClientOriginalName());
        $grievance->save();
        $data = [];
        $new_grievance = DB::table('table_grievance')->where('student_id',$student_id[0]->id)->orderBy('id','desc')->get(['id'])->first();
        //Data insertion in grievance status table
        DB::table('table_grievance_status')->insert(
            [
                'grievance_id' => $new_grievance->id,
                'status' => 'raised',
                'eta' => 7,
                'level' => 1
            ]
        );
        $data = [
          'id' => $new_grievance->id,
          'message' => 'Your grievance is registered'
        ];
        return json_encode($data);
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $gid = Auth::user()->id;
         // $user_id = DB::table('users')->where('email', $email)->get(['id']);
         // return  $user_id->id;
        $student_id = DB::table('user_student')->where('user_id', $gid)->get(['id'])->pluck('id');
        $grievances = DB::table('table_grievance')->where(['id'=>$id,
            'student_id'=>$student_id])->get(['id','type','student_id','created_at','documents','department_id']);
        if($grievances->isEmpty())
                 return response(['message'=>'No Such grievance'],404);
        $grievance_status = DB::table('table_grievance_status')->where('grievance_id',$id)->get(['status','eta']);
        $department_name = DB::table('table_department')->where('id',$grievances[0]->department_id)->get(['name']);
            $data = [
                'grievance_id' => $grievances[0]->id,
                'grievance_type' => $grievances[0]->type,
                'data_of_issue'=> $grievances[0]->created_at,
                'attachment' => $grievances[0]->documents,
                'assigned_committee' => $department_name[0]->name,
                'status' => $grievance_status[0]->status,
                'eta' => $grievance_status[0]->eta
            ];
        return response(['message'=>$data],200);
    }



    public function statistics($type){

        $student_id = DB::table('user_student')->where('user_id',Auth::user()->id)->get(['id'])[0]->id;
        if($type == 'total'){
            $count = Grievance::all()->where('student_id',$student_id)->count();
            return ['type' => $type,'value'=>$count];
        }
        elseif ($type == 'satisfied'){
            $grievance_id = DB::table('table_grievance')->where('student_id',$student_id)->get(['id']);
            $data = [];
            $i = 0;
            foreach ($grievance_id as $id){
                $data[$i] = $id->id;
                $i++;
            }
            $count = DB::table('table_grievance_status')->where('status','resolved')->whereIn('grievance_id',$data)->count();
            return ['type' => $type,'value'=>$count];
        }
        elseif ($type == 'pending'){
            $array = ['raised','assigned'];
            $grievance_id = DB::table('table_grievance')->where('student_id',$student_id)->get(['id']);
            $data = [];
            $i = 0;
            foreach ($grievance_id as $id){
                $data[$i] = $id->id;
                $i++;
            }
            $count = DB::table('table_grievance_status')->whereIn('status',$array)->whereIn('grievance_id',$data)->count();
            return ['type' => $type,'value'=>$count];
        }

        elseif ($type == 'escalated'){
            $array = ['delayed','reopened'];
            $grievance_id = DB::table('table_grievance')->where('student_id',$student_id)->get(['id']);
            $data = [];
            $i = 0;
            foreach ($grievance_id as $id){
                $data[$i] = $id->id;
                $i++;
            }
            $count = DB::table('table_grievance_status')->whereIn('status',$array)->whereIn('grievance_id',$data)->count();
            return ['type' => $type,'value'=>$count];
        }

    }




    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    public function updateStatus(Request $request)
    {
        $id=$request->get('id');

        if($request->get('action') == '0'){
           DB::table('table_grievance_status')->where('grievance_id',$id)->update([
               'status'=>'escalated',
               'eta'=>7
           ]);
        }
        else{
            DB::table('table_grievance_status')->where('grievance_id',$id)->update([
                'status'=>'resolved',
                'eta'=>0
            ]);
        }


        $data=[];
        $data=[
            'message'=>"successfully updated",
            'id'=>$request->get('id')
        ];
        return json_encode($data);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    public function download($path){
        if($path != null){
            $path = '/documents/'.$path;
            return Storage::download($path);
        }
    }
   
}
