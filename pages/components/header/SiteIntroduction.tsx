import Header from './Header'
import Footer from '../footer/Footer'
import * as GiIcons from "react-icons/gi"
import * as RiIcons from "react-icons/ri"

export default function SiteIntroduction() {
  return (
    <>
      <Header />

      <main className="mt-20 text-center">
        <p>趣味で主に健康に関する情報をまとめてみました。</p>
        <p className="mt-10">About me</p>
        <ul className="mt-10 flex justify-center space-x-1">
          <li className="-mt-1">健康オタク度：</li>
          <li><GiIcons.GiStaryu className="text-yellow-400" /></li>
          <li><GiIcons.GiStaryu className="text-yellow-400" /></li>
          <li><GiIcons.GiStaryu className="text-yellow-400" /></li>
          <li><GiIcons.GiStaryu className="text-yellow-400" /></li>
          <li><GiIcons.GiStaryu className="text-yellow-400" /></li>
        </ul>
        <ul className="mt-5 flex justify-center space-x-1">
          <li className="-mt-1">プログラミング：</li>
          <li><GiIcons.GiStaryu className="text-yellow-400" /></li>
          <li><RiIcons.RiStarLine className="text-yellow-400" /></li>
          <li><RiIcons.RiStarLine className="text-yellow-400" /></li>
          <li><RiIcons.RiStarLine className="text-yellow-400" /></li>
          <li><RiIcons.RiStarLine className="text-yellow-400" /></li>
        </ul>
      </main>

      <Footer />
    </>
  )
}
