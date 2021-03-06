
function dataHandler(dataArr) {

 const downTestServer = {
    id: 100105299,
     status: "down",
     name: "test server 1",
     hostname: "test server 1",
     type: "http",
     lastresponsetime: 1000,
     resolution: 1,
     created: 1633683779,
     lasterrortime: 1649827074,
     lastdownstart: 1649827042,
     lastdownend: 1649827342,
     ipv6: false,
 }

 let serverData = [...dataArr];
 serverData.push(downTestServer);




 function sortServers(serverArr){

  let serverList = [...serverArr];
  let sortedServers = serverList.sort((a, b) => b["lastresponsetime"] - a["lastresponsetime"]);
 
  let pausedServers = sortedServers.filter(server => server.status.includes("paused"));

  let upServers = sortedServers.filter(server => server.status.includes("up"));
  let downServers = sortedServers.filter(server => server.status.includes("down"));
  sortedServers = downServers.concat(pausedServers).concat(upServers)

 
  return sortedServers
 }

 let sorted = sortServers(serverData);



  return sorted

  
}

export default dataHandler;

