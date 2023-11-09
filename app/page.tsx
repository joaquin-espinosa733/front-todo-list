import Cards from '@/components/Cards/Cards'
import NavBar from '@/components/NavBar/NavBar'

export const metadata = {
  title: "Create tasks"
};

export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-center h-0">
        <Cards />
      </section>
      <NavBar />
    </main>
  )
}
