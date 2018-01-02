const greetingEl = document.getElementById("greeting");

const homes = document.getElementById("homes");


renderHomes = () => {
  let centerNames = locations.map((loc) => {
    return "<li>"+loc.center_name+"</li>";
  })
  homes.innerHTML = "<ul>"+centerNames.join("")+"</ul>";
}

window.onload = () => {
	greetingEl.innerText = "List of Homeless Centers in Greater NYC";
	renderHomes();
}
