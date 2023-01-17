
async function damn(){
  document.getElementById("table1").innerHTML=""
  document.getElementById("p1").innerHTML=""
document.getElementById("p2").innerHTML=""
document.getElementById("tax").innerHTML=""

let d=await fetch('https://resultchecker.onrender.com/ducky', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({reg: document.getElementById("inp_Id").value.trim() , name: document.getElementById("inp_Name").value.trim()})
})

let data=await d.json();










if(data.length==1){
  document.getElementById("tax").innerHTML="REGISTERATION NO OR NAME NOT EXIST"
  return}


  document.getElementById("table1").style.display='block'

document.getElementById("table1").innerHTML+=`<tr>
        <th>Subject Code</th>
        <th>Subject Name</th>
        <th>Grade</th>
      </tr>`


for(let i=0;i<data.length-1;i++){
  document.getElementById("table1").innerHTML+=`<tr>
      <td>${data[i]["Subject Code"]}</td>
      <td>${data[i]["Subject Name"]}</td>
      <td>${data[i].Grade}</td>
    </tr>`
}


document.getElementById("tax").innerHTML=data[data.length-1].resul
document.getElementById("tax").style.display="block"


document.getElementById("p1").innerHTML=data[0].Name
document.getElementById("p2").innerHTML=data[0]["Registration No"]




}




