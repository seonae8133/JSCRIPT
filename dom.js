

let days = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];
let dates = [];
for (let i=1; i<=31; i++) {
    dates.push(i);
}
function loadPage() {
    let $table = document.createElement("table");
    $table.setAttribute('border','1');
    let $tr = document.createElement("tr");
    // for (let day of days) {
    //     let $th = document.createElement("th");
    //     let $text = document.createTextNode(day);
    //     $th.appendChild($text);
    //     $tr.appendChild($th);
    // }
    days.forEach(function(a) {
        let $th = document.createElement("th");
        let $text = document.createTextNode(a);
        $th.appendChild($text);
        $tr.appendChild($th);
    });
    $table.appendChild($tr);
    $tr = document.createElement("tr");
    // .forEach(function() {
    //     let $td = document.createElement("td");
    //     let $text = document.createTextNode(i+1);
    //     i++;
    //     if(i%8==0){
    //         $td.appendChild($text);
    //         $tr.appendChild($td);
    //     }
    // }); 
    let $td,$text;

    dates.forEach(function(a,b) {
        if((a-1)%7==0) {
            
            $tr = document.createElement("tr");
            $table.appendChild($tr);                 
        }
        $td = document.createElement("td");
        $text = document.createTextNode(a);
        $td.appendChild($text);
        $tr.appendChild($td);
        
    });
    $table.appendChild($tr);

    document.getElementById("bdy").appendChild($table);

    // console.log("loadPage()");
    // document.getElementById("bdy").innerHTML = "페이지로딩됨."
}
{/* <table border='1'>
    <th>일요일</th>
    <th>월요일</th>
    <th>화요일</th>
    <th>수요일</th>
    <th>목요일</th>
    <th>금요일</th>
    <th>토요일</th>
</table> */}
