function cov_2574ttatsc(){var path="C:\\Users\\ultra\\Documents\\School files\\DEVOPS\\ZuFlow_Project_Forked\\public\\js\\comment.js";var hash="e399569dd79792f7136d16ec87a93467482e8446";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\ultra\\Documents\\School files\\DEVOPS\\ZuFlow_Project_Forked\\public\\js\\comment.js",statementMap:{"0":{start:{line:2,column:14},end:{line:2,column:36}},"1":{start:{line:3,column:17},end:{line:3,column:34}},"2":{start:{line:4,column:17},end:{line:4,column:37}},"3":{start:{line:5,column:4},end:{line:5,column:52}},"4":{start:{line:6,column:4},end:{line:6,column:56}},"5":{start:{line:9,column:0},end:{line:39,column:3}},"6":{start:{line:10,column:4},end:{line:10,column:23}},"7":{start:{line:12,column:19},end:{line:12,column:21}},"8":{start:{line:13,column:19},end:{line:13,column:21}},"9":{start:{line:14,column:4},end:{line:14,column:59}},"10":{start:{line:15,column:4},end:{line:15,column:64}},"11":{start:{line:16,column:4},end:{line:16,column:62}},"12":{start:{line:18,column:4},end:{line:22,column:5}},"13":{start:{line:19,column:8},end:{line:19,column:82}},"14":{start:{line:20,column:8},end:{line:20,column:80}},"15":{start:{line:21,column:8},end:{line:21,column:15}},"16":{start:{line:24,column:18},end:{line:24,column:38}},"17":{start:{line:25,column:4},end:{line:25,column:47}},"18":{start:{line:26,column:4},end:{line:26,column:65}},"19":{start:{line:27,column:4},end:{line:37,column:6}},"20":{start:{line:28,column:8},end:{line:28,column:52}},"21":{start:{line:29,column:8},end:{line:36,column:9}},"22":{start:{line:30,column:12},end:{line:30,column:55}},"23":{start:{line:31,column:12},end:{line:31,column:58}},"24":{start:{line:32,column:12},end:{line:32,column:48}},"25":{start:{line:34,column:12},end:{line:34,column:87}},"26":{start:{line:35,column:12},end:{line:35,column:84}},"27":{start:{line:38,column:4},end:{line:38,column:43}}},fnMap:{"0":{name:"load_id",decl:{start:{line:1,column:9},end:{line:1,column:16}},loc:{start:{line:1,column:18},end:{line:7,column:1}},line:1},"1":{name:"(anonymous_1)",decl:{start:{line:9,column:66},end:{line:9,column:67}},loc:{start:{line:9,column:79},end:{line:39,column:1}},line:9},"2":{name:"(anonymous_2)",decl:{start:{line:27,column:21},end:{line:27,column:22}},loc:{start:{line:27,column:33},end:{line:37,column:5}},line:27}},branchMap:{"0":{loc:{start:{line:18,column:4},end:{line:22,column:5}},type:"if",locations:[{start:{line:18,column:4},end:{line:22,column:5}},{start:{line:undefined,column:undefined},end:{line:undefined,column:undefined}}],line:18},"1":{loc:{start:{line:18,column:8},end:{line:18,column:56}},type:"binary-expr",locations:[{start:{line:18,column:8},end:{line:18,column:29}},{start:{line:18,column:33},end:{line:18,column:56}}],line:18},"2":{loc:{start:{line:29,column:8},end:{line:36,column:9}},type:"if",locations:[{start:{line:29,column:8},end:{line:36,column:9}},{start:{line:33,column:15},end:{line:36,column:9}}],line:29},"3":{loc:{start:{line:34,column:59},end:{line:34,column:86}},type:"binary-expr",locations:[{start:{line:34,column:59},end:{line:34,column:75}},{start:{line:34,column:79},end:{line:34,column:86}}],line:34}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0},f:{"0":0,"1":0,"2":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"e399569dd79792f7136d16ec87a93467482e8446"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_2574ttatsc=function(){return actualCoverage;};}return actualCoverage;}cov_2574ttatsc();function load_id(){cov_2574ttatsc().f[0]++;var url=(cov_2574ttatsc().s[0]++,document.location.href);var params=(cov_2574ttatsc().s[1]++,url.split('?')[1]);var taskid=(cov_2574ttatsc().s[2]++,params.split('=')[1]);cov_2574ttatsc().s[3]++;document.getElementById("taskid").value=taskid;cov_2574ttatsc().s[4]++;console.log(document.getElementById("taskid").value);}cov_2574ttatsc().s[5]++;document.getElementById('commentForm').addEventListener('submit',async e=>{cov_2574ttatsc().f[1]++;cov_2574ttatsc().s[6]++;e.preventDefault();var response=(cov_2574ttatsc().s[7]++,"");var jsonData=(cov_2574ttatsc().s[8]++,{});cov_2574ttatsc().s[9]++;jsonData.owner=document.getElementById("name").value;cov_2574ttatsc().s[10]++;jsonData.comment=document.getElementById("comment").value;cov_2574ttatsc().s[11]++;jsonData.taskid=document.getElementById("taskid").value;cov_2574ttatsc().s[12]++;if((cov_2574ttatsc().b[1][0]++,jsonData.owner==="")||(cov_2574ttatsc().b[1][1]++,jsonData.comment==="")){cov_2574ttatsc().b[0][0]++;cov_2574ttatsc().s[13]++;document.getElementById("message").innerHTML='All fields are required!';cov_2574ttatsc().s[14]++;document.getElementById("message").setAttribute("class","text-danger");cov_2574ttatsc().s[15]++;return;}else{cov_2574ttatsc().b[0][1]++;}var request=(cov_2574ttatsc().s[16]++,new XMLHttpRequest());cov_2574ttatsc().s[17]++;request.open("POST","/add-comment",true);cov_2574ttatsc().s[18]++;request.setRequestHeader('Content-Type','application/json');cov_2574ttatsc().s[19]++;request.onload=function(){cov_2574ttatsc().f[2]++;cov_2574ttatsc().s[20]++;response=JSON.parse(request.responseText);cov_2574ttatsc().s[21]++;if(response.message==='Comment added!'){cov_2574ttatsc().b[2][0]++;cov_2574ttatsc().s[22]++;document.getElementById("name").value="";cov_2574ttatsc().s[23]++;document.getElementById("comment").value="";cov_2574ttatsc().s[24]++;window.location.href='index.html';}else{cov_2574ttatsc().b[2][1]++;cov_2574ttatsc().s[25]++;document.getElementById("message").innerHTML=(cov_2574ttatsc().b[3][0]++,response.message)||(cov_2574ttatsc().b[3][1]++,'Error');cov_2574ttatsc().s[26]++;document.getElementById("message").setAttribute("class","text-danger");}};cov_2574ttatsc().s[27]++;request.send(JSON.stringify(jsonData));});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMjU3NHR0YXRzYyIsImFjdHVhbENvdmVyYWdlIiwibG9hZF9pZCIsImYiLCJ1cmwiLCJzIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsImhyZWYiLCJwYXJhbXMiLCJzcGxpdCIsInRhc2tpZCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwianNvbkRhdGEiLCJvd25lciIsImNvbW1lbnQiLCJiIiwiaW5uZXJIVE1MIiwic2V0QXR0cmlidXRlIiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbmxvYWQiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJtZXNzYWdlIiwid2luZG93Iiwic2VuZCIsInN0cmluZ2lmeSJdLCJzb3VyY2VzIjpbImNvbW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbG9hZF9pZCgpe1xyXG4gICAgdmFyIHVybCA9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XHJcbiAgICB2YXIgcGFyYW1zID0gdXJsLnNwbGl0KCc/JylbMV07XHJcbiAgICB2YXIgdGFza2lkID0gcGFyYW1zLnNwbGl0KCc9JylbMV07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tpZFwiKS52YWx1ZSA9IHRhc2tpZFxyXG4gICAgY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNraWRcIikudmFsdWUpXHJcbn1cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50Rm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgIHZhciByZXNwb25zZSA9IFwiXCI7XHJcbiAgICB2YXIganNvbkRhdGEgPSB7fTtcclxuICAgIGpzb25EYXRhLm93bmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpLnZhbHVlO1xyXG4gICAganNvbkRhdGEuY29tbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tbWVudFwiKS52YWx1ZTtcclxuICAgIGpzb25EYXRhLnRhc2tpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza2lkXCIpLnZhbHVlO1xyXG5cclxuICAgIGlmIChqc29uRGF0YS5vd25lciA9PT0gXCJcIiB8fCBqc29uRGF0YS5jb21tZW50ID09PSBcIlwiKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlXCIpLmlubmVySFRNTCA9ICdBbGwgZmllbGRzIGFyZSByZXF1aXJlZCEnO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZVwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRleHQtZGFuZ2VyXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgcmVxdWVzdC5vcGVuKFwiUE9TVFwiLCBcIi9hZGQtY29tbWVudFwiLCB0cnVlKTtcclxuICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm1lc3NhZ2UgPT09ICdDb21tZW50IGFkZGVkIScpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21tZW50XCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaW5kZXguaHRtbCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlXCIpLmlubmVySFRNTCA9IHJlc3BvbnNlLm1lc3NhZ2UgfHwgJ0Vycm9yJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlXCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGV4dC1kYW5nZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJlcXVlc3Quc2VuZChKU09OLnN0cmluZ2lmeShqc29uRGF0YSkpO1xyXG59KTsiXSwibWFwcGluZ3MiOiI0b0hBZVk7QUFBQUEsY0FBQSxTQUFBQSxDQUFBLFNBQUFDLGNBQUEsV0FBQUEsY0FBQSxFQUFBRCxjQUFBLEdBZlosUUFBUyxDQUFBRSxPQUFPQSxDQUFBLENBQUUsQ0FBQUYsY0FBQSxHQUFBRyxDQUFBLE1BQ2QsR0FBSSxDQUFBQyxHQUFHLEVBQUFKLGNBQUEsR0FBQUssQ0FBQSxNQUFHQyxRQUFRLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxFQUNoQyxHQUFJLENBQUFDLE1BQU0sRUFBQVQsY0FBQSxHQUFBSyxDQUFBLE1BQUdELEdBQUcsQ0FBQ00sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUM5QixHQUFJLENBQUFDLE1BQU0sRUFBQVgsY0FBQSxHQUFBSyxDQUFBLE1BQUdJLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDVixjQUFBLEdBQUFLLENBQUEsTUFDbENDLFFBQVEsQ0FBQ00sY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDQyxLQUFLLENBQUdGLE1BQU0sQ0FBQVgsY0FBQSxHQUFBSyxDQUFBLE1BQ2hEUyxPQUFPLENBQUNDLEdBQUcsQ0FB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