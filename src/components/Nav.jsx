import LogoSvg from '../assets/Logo.svg'
import bagSvg from '../assets/bag.svg'

const NavBar = () => {
  return (
    <nav className='bg-[#ffc7a9] w-full h-24 flex justify-between items-center shadow-2xl'>
      <div className='ml-8 flex gap-3'>
        <div className=' w-12 h-12'>
          <img src={LogoSvg} alt='logo' />
        </div>
        <h1 className=' font-ultrabold tracking-tighter flex flex-col'>
          <span>Banbury</span> Cross
        </h1>
      </div>
      <div className=''>
        <ul className='flex justify-between gap-5 font-extrabold'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>bookstore</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
          <li>
            <a href='#'>my Account</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </div>
      <div className=' w-6 h-6 mr-8'>
        <img src={bagSvg} alt='shopping icon' />
      </div>
    </nav>
  )
}

export default NavBar
