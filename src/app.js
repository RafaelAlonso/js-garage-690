import { handleSubmit, fetchCars } from "./garage";

document.getElementById('new-car').addEventListener('submit', handleSubmit);
fetchCars();