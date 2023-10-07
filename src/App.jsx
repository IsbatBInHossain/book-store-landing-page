import BookCard from './components/BookCard'
import Card from './components/Card'
import NavBar from './components/Nav'

export default function App() {
  return (
    <section className=' w-full h-screen flex flex-col justify-center items-center font-sono '>
      <NavBar />
      <main className=' bg-[#e37754] w-full h-full'>
        <div className='grid grid-cols-3 w-full h-full justify-between'>
          <Card />
          <BookCard />
        </div>
      </main>
    </section>
  )
}
