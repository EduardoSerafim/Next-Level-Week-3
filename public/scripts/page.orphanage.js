const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
};

// create map
const map = L.map('mapid', options).setView([-23.5340228, -46.5804767], 16);

//create and add title layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', ).addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 58],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

// create popup overlay


L.marker([-23.5340228, -46.5804767], {icon})
    .addTo(map)

//image galery
function selectImage(event){
    const button = event.currentTarget;

    const buttons = document.querySelectorAll("#images button");
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove ("active");
    }

    const image = button.children[0];
    const imageConteiner = document.querySelector("#orphanage-details > img");

    imageConteiner.src = image.src

    button.classList.add("active")

}