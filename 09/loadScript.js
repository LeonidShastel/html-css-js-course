window.onload = function() {
   const loadBlock = createLoadBlock();
   const animLoad = document.createElement(`div`);
   animLoad.className = `animLoad`;
   document.body.appendChild(animLoad);
   document.body.appendChild(loadBlock);
   const url = `https://api.myjson.com/bins/1300qe`;
   const config  = {
      method: `GET`
   };
   getContent(url, config);
   function getContent(url, config){
      fetch(url, config)
         .then((res)=>{
            return res.json();
         })
         .then((res)=>{
            createBlocks(res);
         });
   };
   function createBlocks(res){
      const contentBlock = document.createElement(`div`);
      document.body.appendChild(contentBlock);
      contentBlock.className = `contentBlock`;
      for(var car of res){
         const carBlock = document.createElement(`div`);
         const picCar = document.createElement(`img`);
         const aboutCar = document.createElement(`ul`);
         const milesPerGallon = document.createElement(`li`);
         milesPerGallon.className=`liLoad`;
         const cylinders = document.createElement(`li`);
         cylinders.className=`liLoad`;
         const origin = document.createElement(`li`);
         origin.className=`liLoad`;
         const year = document.createElement(`li`);
         year.className=`liLoad`;
         aboutCar.appendChild(milesPerGallon);
         milesPerGallon.innerHTML = '<b>Miles Per Gallon: </b>'+car.Miles_per_Gallon;
         aboutCar.appendChild(cylinders);
         cylinders.innerHTML = '<b>Cylinders: </b>'+car.Cylinders;
         aboutCar.appendChild(origin);
         origin.innerHTML = '<b>Origin: </b>'+car.Origin;
         aboutCar.appendChild(year);
         year.innerHTML = '<b>Year: </b>'+car.Year;
         carBlock.appendChild(picCar);
         carBlock.appendChild(aboutCar);
         contentBlock.appendChild(carBlock);
      };
      document.body.removeChild(animLoad);
      document.body.removeChild(loadBlock);
   };
   function createLoadBlock() {
      const contentLoadBlock = document.createElement(`div`);
      document.body.appendChild(contentLoadBlock);
      contentLoadBlock.className = `contentBlock loadBlock`;
      for (var i=0; i<8; i++) {
         const carBlock = document.createElement(`div`);
         const picCar = document.createElement(`img`);
         const aboutCar = document.createElement(`ul`);
         const milesPerGallon = document.createElement(`li`);
         milesPerGallon.className=`liOnload`;
         const cylinders = document.createElement(`li`);
         cylinders.className=`liOnload`;
         const origin = document.createElement(`li`);
         origin.className=`liOnload`;
         const year = document.createElement(`li`);
         year.className=`liOnload`;
         aboutCar.appendChild(milesPerGallon);
         aboutCar.appendChild(cylinders);
         aboutCar.appendChild(origin);
         aboutCar.appendChild(year);
         carBlock.appendChild(picCar);
         carBlock.appendChild(aboutCar);
         contentLoadBlock.appendChild(carBlock);
      }
      return contentLoadBlock
   }
};