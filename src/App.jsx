import NavBar from './components/Nav'

export default function App() {
  return (
    <body className=' w-full h-screen flex flex-col justify-center items-center font-sono '>
      <NavBar />
      <main className=' bg-[#e37754] w-full h-full'>Body</main>
    </body>
  )
}
