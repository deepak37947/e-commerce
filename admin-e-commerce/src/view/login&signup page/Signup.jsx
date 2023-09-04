import React from 'react'

const Signup = () => {
    return (
        <>
            <h1>signup</h1>
            <form>
  <div className="row">
    <div className="col">
      <input
        type="text"
        className="form-control"
        placeholder="Enter email"
        name="email"
      />
    </div>
    <div className="col">
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        name="pswd"
      />
    </div>
  </div>
</form>

        </>
    )
}

export default Signup
