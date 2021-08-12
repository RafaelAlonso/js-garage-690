const garage = 'ubuntuAbencoado';
const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
const carList = document.querySelector('.cars-list');

const addCarToList = (car) => {
  const carInfo = `
    <div class="car">
        <div class="car-image">
            <img src="http://loremflickr.com/280/280/${car.brand} ${car.model}" />
        </div>
        <div class="car-info">
            <h4>${car.brand} ${car.model}</h4>
            <p><strong>Owner: </strong>${car.owner}</p>
            <p><strong>Plate: </strong>${car.plate}</p>
        </div>
    </div>`
  carList.insertAdjacentHTML('beforeend', carInfo);
}

const handleSubmit = (event) => {
  event.preventDefault();
  const brand = document.getElementById('brand').value;
  const model = document.getElementById('model').value;
  const plate = document.getElementById('plate').value;
  const owner = document.getElementById('owner').value;
  const info = {
    "brand": brand,
    "model": model,
    "owner": owner,
    "plate": plate
  }

  const params = {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(info)
  }
  
  fetch(url, params).then(response => response.json()).then(addCarToList);

  // cartada na manga: limpar o formulario
  document.getElementById('new-car').reset();
}

const addCars = (data) => {
  data.forEach(addCarToList);
}

const fetchCars = () => {
  fetch(url).then(response => response.json()).then(addCars);
}

export { handleSubmit, fetchCars };