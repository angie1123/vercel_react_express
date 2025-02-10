import { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch ("https://vercel-express-api-sooty.vercel.app/")
      .then((response) => response.text())
      .then((data) => setMessage(data))
    .catch((error)=>console.error("Error fetching the message",error))
  }, [])
  
  return (
    <>
    {/*Display the message from the express api */}
      <p className="read-the-docs">
        {message?message:"Loading message..."}
    </p>
    </>
  )
}

export default App