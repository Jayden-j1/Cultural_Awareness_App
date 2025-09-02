import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const links = [
  {name: "Home", link: "#"},
  {name: "About", link: "#"},
  {name: "Contact", link: "#"},
  {name: "Login", link: "#"},
]


export default function NavBar() {
  return (
    <>
     <header>
      
      <div className='flex justify-between'>
        <a className='cursor-pointer'>
          <span className='sr-only'>Open Main Menu</span>
          <FontAwesomeIcon icon={faBars} style={{color: "#000000"}} />
        </a>
      </div>

        <nav>
          <ul className="flex justify-center list-none p-0 m-0 w-100%">
            {links.map((item, index) =>
            (
              <li key={index}>
              <a href={item.link}
              className="block no-underline text-xl text-center font-bold text-red-500 px-4 py-2 hover:bg-gray-100"
              >{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
