type Credentials = {
  email: string
  password: string
}

export default async function registerUser(params:Credentials) {

  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })

}