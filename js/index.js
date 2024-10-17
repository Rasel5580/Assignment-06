// Cat Button Work.....
const loadCat = async() => {
    document.getElementById('spin').style.display='none';
  
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/cat`);
    const data = await response.json();
    displayAllCats(data.data)
  
    // Filter only cats and display them
    const cats = filterCats(data.pets);
    displayAllCats(cats);
  }
    
  const catPets = () => {
     document.getElementById('spin').style.display='block';
  
    setTimeout(function(){
      loadCat ();
    },2000)
  }
  
  // Filter function to get only cats
  const filterCats = (pets) => {
    return pets.filter(pet => pet.category.toLowerCase() === 'cat');
  }
  
  // Display all Cats....
   const displayAllCats = (cats) => {
    const catsContainer = document.getElementById('catAll');
    petsContainer.innerHTML='';
    cats.forEach(cat => {
      console.log(cat)
      const div = document.createElement('div');
        div.innerHTML = `
        <div class="card m-2 bg-base-100 w-96 shadow-xl">
          <figure class="px-10 pt-10">
            <img src="${cat.image}" alt="Cat Image" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">${cat.pet_name}</h2>
            <h2 class="card-title">${cat.breed}</h2>
            <p>Category: ${cat.category}</p>
            <p>Date of Birth: ${cat.date_of_birth}</p>
            <p>Price: ${cat.price ? '$' + cat.price : 'Price not available'}</p>
            <p>Gender: ${cat.gender}</p>
          </div>
        </div>
        `;
      catsContainer.appendChild(div);
    });
   }

   // Dog Button Work.....
const loadDog = async() => {
    document.getElementById('spin').style.display='none';
  
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/dog`);
    const data = await response.json();
    displayAllDogs(data.data)
  
    // Filter only cats and display them
    const cats = filterCats(data.pets);
    displayAllCats(cats);
  }
    
  const dogPets = () => {
     document.getElementById('spin').style.display='block';
  
    setTimeout(function(){
      loadDog ();
    },2000)
  }

  // Rabbit Button Work.....
const loadRabbit = async() => {
    document.getElementById('spin').style.display='none';
  
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/rabbit`);
    const data = await response.json();
    displayAllRabbits(data.data)
  
    // Filter only cats and display them
    const cats = filterCats(data.pets);
    displayAllCats(cats);
  }
    
  const rabbitPets = () => {
     document.getElementById('spin').style.display='block';
  
    setTimeout(function(){
      loadRabbit ();
    },2000)
  }

  // Bird Button Work.....
const loadBird = async() => {
    document.getElementById('spin').style.display='none';
}
       
  const birdPets = () => {
     document.getElementById('spin').style.display='block';
     
  
    setTimeout(function(){
      loadBird ();
    },2000)
  }
  
   // Bird Button
   const displayBirds = (birds) => {
    const petsContainer = document.getElementById('allBird')
        petsContainer.innerHTML='';
  
       for(let bird of birds){
        console.log(bird);
         const birdCard = document.createElement('div');
         birdCard.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-xl', 'mb-4', 'flex', 'flex-col','w-96','md:w-full');
  
         birdCard.innerHTML = `
            <div>
             <h3 class="text-lg font-bold mt-2">No Birds</h3>
             <p>Abliable</p>
             </div>
         `;
       birdContainer.appendChild(birdCard);       
  }
  };
  
   
  
  // Fetch All Pets Display
  const allPets = () => {
      fetch('https://openapi.programming-hero.com/api/peddy/pets')
      .then(res => res.json())
      .then(data => displayPets(data.pets))
      .catch((error) => console.log(error))
  };
  
      const displayPets = (pets) => {
       const petsContainer = document.getElementById('allpet')
           petsContainer.innerHTML='';
  
          for(let pet of pets){
            const petCard = document.createElement('div');
            petCard.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-xl', 'mb-4', 'flex', 'flex-col','w-96','md:w-full');
  
            petCard.innerHTML = `
                <img src="${pet.image }" alt="${pet.name}" class="lg:w-full  object-cover rounded-md">
                <h3 class="text-lg font-bold mt-2">${pet.pet_name}</h3>
                <p>Breed: ${pet.breed}</p>
                <p>Birth Date: ${pet.date_of_birth}</p>
                <p>Gender: ${pet.gender}</p>
                <p>Price: ${pet.price ? '$' + pet.price : 'Price not available'}</p>
                <div class="flex justify-around mt-4">
                    <button class="px-4 py-2 bg-red-500 text-white rounded-lg" onclick="adoptPet(this)">Adopt</button>
  
                    <button class="px-4 py-2 bg-blue-500 text-white rounded-lg">Details</button>
  
                    <button class="px-4 py-2 bg-gray-300 text-black rounded-lg" onclick="likePet('${pet.image}')">Like</button>
                </div>
            `;
          petsContainer.appendChild(petCard);       
   }
  };
  
  // View More Button
  document.getElementById('btn').addEventListener('click', () => {
    document.getElementById('adopt').scrollIntoView({ behavior: 'smooth' });
  });
  
  function adoptPet(button) {
    let count = 3;
    button.disabled = true;
  
    const countdown = setInterval(() => {
        button.textContent = count;
        count--;
  
        if (count < 0) {
            clearInterval(countdown);
            button.textContent = 'Adopted';
            button.classList.add('bg-green-500');
        } 
    },700);
  }
  // Loading spinner
    function loadingSpinner (){
      const spinner = document.createElement('div');
      spinner.classList.add('spinner','border-t-4','border-blue-500','rounded-full','w-8','h-8');
      document.body.appendChild(spinner);
  
      setTimeout(()=>{
        spinner.remove();
      },2000);
  
    };
  
  //    const viewDetails = (petId) => {
  //     fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
  //         .then(res => res.json())
  //         .then(data => details(data))
  //         .catch((error) => console.log(error));
  // }
  
  // function details(data) {
  //     const petDetailsContainer = document.getElementById('petDetailsContain');
  //     petDetailsContainer.innerHTML = `
  //         <img src="${data.pet.image}" alt="${data.pet.pet_name}" class="w-full h-64 object-cover rounded-md mb-4">
  //         <h3 class="text-lg font-bold">${data.pet.pet_name}</h3>
  //         <p>Breed: ${data.pet.breed}</p>
  //         <p>Birth Date: ${data.pet.date_of_birth}</p>
  //         <p>Price: ${data.pet.price ? '$' + data.pet.price : 'Price not available'}</p>
  //         <p>Description: ${data.pet.description || 'No description available'}</p>
  //     `;
  //     // petDetailsContainer.appendChild(div);
  //     document.getElementById('petDetails').classList.remove('hidden');
       
  // }
  
  // document.getElementById('closeModel').addEventListener('click', () => {
  //     document.getElementById('petDetails').classList.add('hidden'); 
  // });
  
  
  
  
  
    // Like Button
   
  
    
  loadCat();
  loadingSpinner();
  allPets();
  //allCategories();