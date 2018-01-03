const greetingEl = document.getElementById("greeting");

renderHomes = (locations) => {
  let centerNames = locations.map((loc) => {
    return "<button onclick=address(\'"+loc.bin+"\')>"+loc.center_name+"</button>";
	});
  console.log(centerNames);
  homes.innerHTML = centerNames.join("");
}


getHomes = () =>{
	fetch('https://data.cityofnewyork.us/resource/kjtk-8yxq.json')
	.then(r => r.json())
	.then(homes=>renderHomes(homes));
}

window.onload = () => {
	greetingEl.innerText = "List of Homeless Centers in Greater NYC";
	getHomes();
}

function address(bin){
	//console.log(centerName);
	fetch('https://data.cityofnewyork.us/resource/kjtk-8yxq.json')
	.then(r => r.json())
	.then(homes=>{
		//console.log("homes:", homes);
		document.getElementById("info").innerHTML="";
		homes.forEach((home)=>{
			//console.log("home name:", home.center_name);
			if(home.bin === bin){
				console.log("center name:", home.center_name);
				var name = document.createElement('p')
				name.innerHTML = "Center Name: "+home.center_name+"\n";
				document.getElementById("info").appendChild(name);
				var address = document.createElement('p')
				address.innerHTML = "Address: "+home.address+"\n";
				document.getElementById("info").appendChild(address);
				var borough = document.createElement('p')
				borough.innerHTML = "Borough: "+home.borough+"\n";
				document.getElementById("info").appendChild(borough);
				var postCode = document.createElement('p')
				postCode.innerHTML = "Post Code: "+home.postcode+"\n";
				document.getElementById("info").appendChild(postCode);
				var comments = document.createElement('p')
				comments.innerHTML = "Comments: "+home.comments+"\n";
				document.getElementById("info").appendChild(comments);
			}
		})
	});
}


/*
	Allows users to interact with the DOM using JS event listeners
	Is styled with CSS
*/
