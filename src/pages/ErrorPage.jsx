import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div>
      <h1>404 Error</h1>
      <p>Page not found</p>
      <button><Link to="/">Return to home</Link></button>
    </div>
  )
}
