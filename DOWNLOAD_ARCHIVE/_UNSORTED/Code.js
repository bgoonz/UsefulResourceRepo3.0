import React from 'react'
import { useState, useEffect } from 'react'
import * as yup from 'yup'
import './signup.css'

function SignUp(props) {
  const [disabledButton, setDisabledButton] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pass: '',
    owner: false,
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    pass: '',
  })

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required('Pleae include your name.')
      .min(6, 'Name must be at least 6 characters long'),
    email: yup
      .string()
      .email('Please include your email address.')
      .required('Must include email address.'),
    pass: yup
      .string()
      .required('Password is Required')
      .min(6, 'Passwords must be at least 6 characters long.'),
  })

  const setFormErrors = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: '' }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(
      `we should submit an axios request now using ${JSON.stringify(formData)}`
    )
  }

  const handleChange = (e) => {
    const { name, type } = e.target
    const valueToUse = type === 'checkbox' ? 'checked' : 'value'
    setFormData((prev) => {
      return {
        ...formData,
        [e.target.name]: e.target[valueToUse],
      }
    })

    setFormErrors(name, e.target[valueToUse])
  }

  useEffect(() => {
    formSchema.isValid(formData).then((valid) => setDisabledButton(!valid))
  })

  return (
    <body className='text-center'>
      <main className='form-signin text-center'>
        <form className='text-center' onSubmit={handleSubmit}>
          <h1 class='h3 mb-3 fw-normal'>
            Welcome back! Please access your account
          </h1>
          <div className='form-floating'>
            <input
              name='name'
              className='form-control'
              id='floatingInput'
              placeholder='John Smith'
              type='text'
              value={formData.name}
              onChange={handleChange}
            />
            <label for='floatingInput'>Name</label>
          </div>

          <div className='form-floating'>
            <input
              name='email'
              id='floatingEmail'
              type='text'
              placeholder='john.smith@gmail.com'
              className='form-control'
              value={formData.email}
              onChange={handleChange}
            />
            <label for='floatingEmail'>Email</label>
          </div>

          <div className='form-floating'>
            <input
              name='pass'
              type='text'
              className='form-control'
              placeholder='******'
              value={formData.pass}
              id='floatingPassword'
              onChange={handleChange}
            />
            <label for='floatingPassword'>Password</label>
          </div>

          <div className='checkbox mb-3 row'>
            <input
              name='owner'
              id='floatingOwner'
              type='checkbox'
              checked={formData.owner}
              onChange={handleChange}
            />
            <label for='floatingOwner'>Owner?</label>
          </div>

          <button
            className='w-100 btn btn-lg btn-primary'
            disabled={disabledButton}
          >
            Submit!
          </button>
        </form>
      </main>
    </body>
  )
}

export default SignUp

/* https://drive.google.com/drive/folders/11iiMC9DiRtoqz77CTCeJPpR8zmiALyw0

User Object:
{
  id: integer
  username: string
  password: string 
  email: string
  isOwner: boolean
}
Item Object:
{
  id: integer
  item_name: string
  location: string
  quantity: integer
  price: float
  description: string
  user_id: integer // this references the id in the user table
} 

These are your ENDPOINTS and we list what each will return:
Users
[POST] https://team-amazing.herokuapp.com/api/auth/register
    returns user object
[POST] https://team-amazing.herokuapp.com/api/auth/login
    returns token, user object
Items


POST https://saudi-market-app.herokuapp.com/api/auth/login
POST https://saudi-market-app.herokuapp.com/api/auth/register
 */
