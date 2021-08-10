import Head from 'next/head'
import Link from 'next/link'

export default function Header() {

  const appTitle: String = "NutritionManagementApplication"

  return (
    <>
      <Head>
        <title>{appTitle}</title>
      </Head>
      <header className="absolute mt-3 ml-4 text-3xl">
        <Link href="/">{appTitle}</Link>
      </header>
      <p className="absolute mt-4 right-32">
        <Link href="/components/header/aboutContact">Contact</Link>
      </p>
      <p className="absolute mt-4 right-72">
        <Link href="/components/header/siteIntroduction">About this site</Link>
      </p>
      <p className="mt-3 text-center">Categories</p>
      <ul className="flex space-x-5 justify-center">
        <li><Link href="/components/header/aboutNutrients">Nutrients</Link></li>
        <li><Link href="/components/header/aboutMuscle">Muscle</Link></li>
        <li><Link href="/components/header/aboutAntiAging">AntiAging</Link></li>
        <li><Link href="/components/header/aboutHealth">Health</Link></li>
      </ul>
    </>
  )
}
