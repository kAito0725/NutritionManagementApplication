import { useState } from "react"

export default function Modal() {
  const [modal, setModal] = useState<Boolean>(false)

  const openModal = () => {
    setModal(!modal)
  }

  return (
    <>
      <button onClick={openModal}>Open</button>
      <button onClick={openModal}>Close</button>
    </>
  )
}
