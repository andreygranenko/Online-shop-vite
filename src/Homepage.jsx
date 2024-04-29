// eslint-disable-next-line react/prop-types
const Homepage = ({token}) => {

  return (
    // eslint-disable-next-line react/prop-types
    <h2>Hey {token.user.email}</h2>
  )
}

export default Homepage;