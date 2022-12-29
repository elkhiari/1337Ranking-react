import {useState} from 'react'
import './App.css';

function App() {
  const [compus_id,setCompus] = useState('16');
  const [year,setYear] = useState("2022");
  
  
  const changeCompus = (event) => {
    setCompus(event.target.value)
  }
  const changeYear = (event) => {
    setYear(event.target.value)
  }

  

  return (
    <div className="App">
      <div className=' w-screen  h-20 flex flex-wrap place-content-center place-items-center'>
      <div class="w-1/2 flex ">
            <select onChange={changeCompus} class="bg-gray-50 border mr-4 border-sky-600 border-3 text-gray-900 text-sm rounded-lg focus:border-4 outline-none duration-150 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="16" selected>Khouribga</option>
                <option value="21">Benguerir</option>
                <option value="55">Tétouan</option>
            </select>
            <select onChange={changeYear} class="bg-gray-50 border ml-4 border-sky-600 border-3 text-gray-900 text-sm rounded-lg focus:border-4 outline-none duration-150 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="16" selected>2022</option>
                <option value="21">2021</option>
                <option value="21">2020</option> 
                <option value="21">2019</option>
                <option value="21">2018</option>
            </select>

</div>
      </div>
      

    </div>
  );
}

export default App;
