const ActiveEventRegistration = props => {
  const {details} = props

  const renderClosed = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations are closed now!</h1>
      <p>Stay tuned we will open the registrations soon</p>
    </div>
  )

  const renderToRegister = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p>fill the form</p>
      <button type="button">RegisterNow</button>
    </div>
  )

  const renderRegistered = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <p>You are already registered!</p>
    </div>
  )

  const renderView = () => (
    <div>
      <p>Click here to know the registration status</p>
    </div>
  )

  switch (details) {
    case 'REGISTRATIONS_CLOSED':
      return renderClosed()
    case 'YET_TO_REGISTER':
      return renderToRegister()
    case 'REGISTERED':
      return renderRegistered()
    default:
      return renderView()
  }
}

export default ActiveEventRegistration
