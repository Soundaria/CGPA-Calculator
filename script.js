function valid(){
        if(document.getElementById("formname").value=="" ){
            document.getElementById("name").style.display="block";
        }
        if(document.getElementById("formname").value!=""){
            document.getElementById("name").style.display="none";
        }
        if(document.getElementById("formregno").value==""){
            document.getElementById("reg no").style.display="block";
        }
        if(document.getElementById("formregno").value!=""){
            document.getElementById("reg no").style.display="none";
        }
        if(document.getElementById("formcollege").value==""){
            document.getElementById("college").style.display="block";
        }
        if(document.getElementById("formcollege").value!=""){
            document.getElementById("college").style.display="none";
        }
        if(document.getElementById("formdept").value==""){
            document.getElementById("dept").style.display="block";
        }
        if(document.getElementById("formdept").value!=""){
            document.getElementById("dept").style.display="none";
        }
        if(document.getElementById("formsemester").value==""){
            document.getElementById("semester").style.display="block";
        }
        if(document.getElementById("formsemester").value!=""){
            document.getElementById("semester").style.display="none";
        }
        if(document.getElementById("formname").value!="" && document.getElementById("formregno").value!="" && document.getElementById("formcollege").value!="" && document.getElementById("formdept").value!="" && document.getElementById("formsemester").value!=""){
            window.location.href="ex.html";
            var Name=document.getElementById("formname").value;
            var regno=document.getElementById("formregno").value;
            var dept=document.getElementById("formdept").value;
            var college=document.getElementById("formcollege").value;
            var number =document.getElementById("formsemester").value;
            localStorage['name']=Name;
            localStorage['regno']=regno;
            localStorage['dept']=dept;
            localStorage['college']=college;
            localStorage['keyname']=parseInt(number);
        }
}
function call(){
    num=localStorage['keyname'];
    row(num);
}
function row(x){
    for(i=1;i<=x;i++){
        button(i);
    }
    result();
}
function button(i){
    id="id"+i;
    colid="col"+i;
    var button=document.createElement("button");
    button.setAttribute("class","btn p-3 col-10 ");
    button.setAttribute("id",id);
    button.setAttribute("onclick",offcanvas(i));
    button.setAttribute("data-bs-toggle","offcanvas");
    button.setAttribute("data-bs-target","#semester"+i);
    button.style.fontFamily="times new roman";
    button.style.backgroundColor="skyblue";
    button.style.fontSize="1.5rem";
    document.getElementById(colid).appendChild(button);
    button.innerHTML="Semester "+i;
    var ptag=document.createElement("p");
    ptag.setAttribute("id","ptag"+i);
    ptag.setAttribute("value","sgpa("+i+")");
    ptag.style.color="black";
    ptag.style.fontFamily="monospace";
    ptag.style.fontSize="1.5rem";
    document.getElementById("sgpa").appendChild(ptag);
}
function offcanvas(r){
    var div=document.createElement("div");
    div.setAttribute("class","offcanvas offcanvas-start");
    div.setAttribute("id","semester"+r);
    document.getElementById("col"+r).appendChild(div);
    var head=document.createElement("div");
    head.setAttribute("class","offcanvas-header");
    head.setAttribute("id","top"+r);
    document.getElementById("semester"+r).appendChild(head);
    var title=document.createElement("h5");
    title.setAttribute("id","header"+r);
    title.setAttribute("class","offcanavs-title");
    document.getElementById("top"+r).appendChild(title);
    var heading=document.createTextNode("Semester "+r);
    title.style.fontFamily="times new roman";
    title.style.fontSize="2rem";
    document.getElementById("header"+r).appendChild(heading);
    var linebreak=document.createElement("hr");
    document.getElementById("header"+r).appendChild(linebreak);
    var offbody=document.createElement("div");
    offbody.setAttribute("class","offcanvas-body");
    offbody.setAttribute("id","body"+r);
    document.getElementById("semester"+r).appendChild(offbody);
    subject(r);
    //addbutton
    var row1=document.createElement("div");
    document.getElementById("body"+r).appendChild(row1);
    row1.setAttribute("class","row");
    var col1=document.createElement("div");
    row1.appendChild(col1);
    col1.setAttribute("class","col-6")
    var button=document.createElement("button");
    button.setAttribute("id","Add"+r);
    button.setAttribute("class","btn btn-success col-4 ");
    button.style.marginLeft="2rem";
    col1.appendChild(button);
    button.setAttribute("onclick","add("+r+",1)");
    button.innerHTML="Add";
    //removebutton
    var col2=document.createElement("div");
    col2.setAttribute("class","col-6");
    row1.appendChild(col2);
    var button=document.createElement("button");
    button.setAttribute("id","Remove"+r);
    button.setAttribute("class","btn btn-danger col-7");
    button.setAttribute("onclick","remove("+r+",0)");
    col2.appendChild(button);
    button.innerHTML="Remove";
    var br = document.createElement("br");
    document.getElementById("body"+r).appendChild(br);
    //savebutton
    var row2=document.createElement("row");
    document.getElementById("body"+r).appendChild(row2);
    var button=document.createElement("button");
    button.setAttribute("id","save"+r);
    button.setAttribute("class","btn btn-primary col-12");
    button.setAttribute("data-bs-dismiss","offcanvas");
    button.setAttribute("onclick","sgpa("+r+",0)");
    row2.appendChild(button);
    button.innerHTML="Save";
}
function subject(s){
            var table=document.createElement("table");
            table.setAttribute("class","table");
            table.setAttribute("id","table"+s);
            table.style.marginTop="-1rem";
            document.getElementById("body"+s).appendChild(table);
            var thead=document.createElement("thead");
            table.appendChild(thead);
            var tr= document.createElement("tr");
            thead.appendChild(tr);
            var th = document.createElement("th");
            th.setAttribute("scope","col1");
            tr.appendChild(th);
            th.innerHTML="Subject";
            var th = document.createElement("th");
            th.setAttribute("scope","col2");
            tr.appendChild(th);
            th.innerHTML="Grade";
            var th = document.createElement("th");
            th.setAttribute("scope","col3");
            tr.appendChild(th);
            th.innerHTML="Credit";
            var tbody=document.createElement("tbody");
            document.getElementById("table"+s).appendChild(tbody);
            tbody.setAttribute("id","tbody"+s);
}
function add(s,j){ 
            //subject
            var trbody=document.createElement("tr");
            trbody.setAttribute("id","tr"+s+j);   
            document.getElementById("tbody"+s).appendChild(trbody);
            var thbody = document.createElement("th");
            trbody.appendChild(thbody);
            thbody.setAttribute("id","thbody"+s+j);
            thbody.setAttribute("scope","row");
            var subjectin=document.createElement("p");
            subjectin.innerHTML="sub"+j;
            document.getElementById("thbody"+s+j).appendChild(subjectin);
            //grade
            var tdbody = document.createElement("td");
            trbody.appendChild(tdbody);
            tdbody.setAttribute("id","tdbody"+s+j);
            var select=document.createElement("select");
            select.setAttribute("class","form-select");
           select.setAttribute("id","grade"+s+j);
            select.style.width="5rem";
            document.getElementById("tdbody"+s+j).appendChild(select);
            var option =document.createElement("option");
            option.setAttribute("selected","");
            document.getElementById("grade"+s+j).appendChild(option);
            var option =document.createElement("option");
            option.setAttribute("value","10");
            document.getElementById("grade"+s+j).appendChild(option);
            option.innerHTML="O";
            var option =document.createElement("option");
            option.setAttribute("value","9");
            document.getElementById("grade"+s+j).appendChild(option);
            option.innerHTML="A+";
            var option =document.createElement("option");
            option.setAttribute("value","8");
            document.getElementById("grade"+s+j).appendChild(option);
            option.innerHTML="A";
            var option =document.createElement("option");
            option.setAttribute("value","7");
            document.getElementById("grade"+s+j).appendChild(option);
            option.innerHTML="B+";
            var option =document.createElement("option");
            option.setAttribute("value","6");
            document.getElementById("grade"+s+j).appendChild(option);
            option.innerHTML="B";
            var option =document.createElement("option");
            option.setAttribute("value","5");
            document.getElementById("grade"+s+j).appendChild(option);
            option.innerHTML="C";
            var option =document.createElement("option");
            option.setAttribute("value","4");
            document.getElementById("grade"+s+j).appendChild(option);
            option.innerHTML="D";
            
            //credit
            var cr1=document.createElement("td");
            cr1.setAttribute("id","tdbodycr"+s+j);
            trbody.appendChild(cr1);
            var selectcr=document.createElement("select");
            selectcr.style.width="5rem";
            selectcr.setAttribute("class","form-select");
            selectcr.setAttribute("id","credit"+s+j);
            document.getElementById("tdbodycr"+s+j).appendChild(selectcr);
            var optioncr=document.createElement("option");
            optioncr.setAttribute("selected","");
            document.getElementById("credit"+s+j).appendChild(optioncr);
            var optioncr =document.createElement("option");
            optioncr.setAttribute("value","1");
            document.getElementById("credit"+s+j).appendChild(optioncr);
            optioncr.innerHTML="1";
            var optioncr =document.createElement("option");
            optioncr.setAttribute("value","2");
            document.getElementById("credit"+s+j).appendChild(optioncr);
            optioncr.innerHTML="2";
            var optioncr =document.createElement("option");
            optioncr.setAttribute("value","3");
            document.getElementById("credit"+s+j).appendChild(optioncr);
            optioncr.innerHTML="3";
            var optioncr =document.createElement("option");
            optioncr.setAttribute("value","4");
            document.getElementById("credit"+s+j).appendChild(optioncr);
            optioncr.innerHTML="4";
            m=j+1;
            document.getElementById("Add"+s).setAttribute("onclick","add("+s+","+m+")");
            document.getElementById("Remove"+s).setAttribute("onclick","remove("+s+","+j+")");
            document.getElementById("save"+s).setAttribute("onclick","sgpa("+s+","+j+")")
}
function remove(s,j){
    var m=j-1;
    document.getElementById("tr"+s+j).remove();
    document.getElementById("Add"+s).setAttribute("onclick","add("+s+","+j+")");
    document.getElementById("Remove"+s).setAttribute("onclick","remove("+s+","+m+")");
    document.getElementById("save"+s).setAttribute("onclick","save("+s+","+m+")");
}
var credits=[0,0,0,0,0,0,0,0];
var marks=[0,0,0,0,0,0,0,0,0];
function sgpa(r,j){
        var totalfield=j;
        var marksum=0;
        var totalcr=0;
        for(var i=1;i<=totalfield;i++){
            var grp =document.getElementById("grade"+r+i).value;
            var cr =document.getElementById("credit"+r+i).value;
            marksum=parseInt(grp)*parseInt(cr)+marksum;
            totalcr=parseInt(cr)+totalcr;
        }
        credits[r]=totalcr;
        marks[r]=marksum;
        var sem=marksum/totalcr;
        document.getElementById("ptag"+r).innerHTML="<br />SEMESTER "+r+ " SGPA : "+sem.toFixed(2);
        cgpa();
}

function cgpa(){
    var final=0;
    var tcredits=0;
    for(i=0;i<marks.length;i++){
        final=marks[i]+final;
        }
    for(i=0;i<credits.length;i++){
        tcredits=credits[i]+tcredits;
    }               
    var cgpa=(final/tcredits).toFixed(2);
    document.getElementById("cgpa").innerHTML="CGPA : <br />"+cgpa+"/10";
}
function result(){
    Fname=localStorage['name'];
    registerno=localStorage['regno'];
    College=localStorage['college'];
    department=localStorage['dept'];
    document.getElementById("result").innerHTML="Name : "+Fname+"<br / >Register No. : "+registerno+"<br /> College : "+College+"<br />Department : "+department;
    
}