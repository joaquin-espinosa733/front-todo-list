import Cards from '@/components/Cards/Cards'
import NavBar from '@/components/NavBar/NavBar'

export const metadata = {
  title: "Create tasks"
};

export default function Home() {
  return (
    <main className='flex flex-row'>
        <NavBar />
        <div className=" flex flex-col items-center w-full mx-48">
            <Cards />
        </div>
    </main>
);
}
