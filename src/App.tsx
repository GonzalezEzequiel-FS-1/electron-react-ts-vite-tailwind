import Header from './components/Header';

function App() {
  return (
    <main className="h-screen flex flex-col font-[roboto] font-bold bg-[#f7f7f7] dark:bg-main-light text-white">
      <Header />
      <section className='flex flex-row flex-1 w-full overflow-hidden justify-center items-center' >
       <h1 className="text-red-400">Testing</h1>
      </section>
    </main>
  )
}

export default App
