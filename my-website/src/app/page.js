import Image from 'next/image'
import Header from './components/Header'
import Main from './components/Main'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div>
        <div className="p-12">
          <Header />
          <Main />
        </div>
      </div>
    </div>
  )
}
