
const RowTable = (props) => {
   const _tds =  props.items.map ((item, index) => <td key ={index}> {item} </td>);
   return (
      <tr>
         {_tds}
     </tr> 
   )
}

const RTable = ({seats}) => {
   return (
     <div className="contenido">
      <table >
         <RowTable items = {seats[0]} />
         <RowTable items = {seats[1]} />
         <RowTable items = {seats[2]} />
         <RowTable items = {seats[3]} />
      </table>
      </div>
   );
}
class pasajero {
	constructor(numAsien, nom, ape, dni) {
    this.asiento = numAsien;
		this.nombre = nom;
		this.apellido = ape;
		this.dni = dni
	}
}

let personas =new Array(32);
 personas[2] = new pasajero("2","Milagros", "Mendoza" , "47445699");
 personas[31] = new pasajero("31","Andrea", "Quispe" , "9874569");
 personas[15] = new pasajero("15","Cristina", "Copa" , "00424545");
 personas[16] = new pasajero("16", "Diana", "Mendoza" , "47124578");
 personas[1] = new pasajero("1","Vanessa", "Percca" , "47895669");


function listPairs (seats) {
   console.log ("seats: ", seats);
   let newSeats = [];
  //  for ( let row  of seats ) {
  //     let filterArray = row.filter ( e => e % 2 == 0);
  //     newSeats.push(filterArray); 
  //  }
   return personas.map ((row, index) => {
      return (
        <div className= "lista">
         <li key = {index}> 
         <p><b>Numero de asiento:</b> {row.asiento} </p>
         <p><b>Nombre: </b>{row.nombre} </p>
         <p><b>Apellido:</b> {row.apellido} </p>
         <p><b>DNI: </b>{row.dni} </p>
         
         </li>
         </div>
      );
   });
}


const App = ({title, seats}) => {
   return (
      <div>
         <RTable  seats = {seats}/>
       
        
         <ol>
            {listPairs (seats)}
         </ol>
      </div>
   );
}

let seats = [
   [4, 8, 12, 16, 20, 24, 28, 32],
   [3, 7, 11, 15, 19, 23, 27, 31],
   [2, 6, 10, 14, 18, 22, 26, 30],
   [1, 5, 9, 13, 17, 21, 25, 29]
]

ReactDOM.render ( 
   <App  seats = {seats} />, 
   document.getElementById("root")
); 
 