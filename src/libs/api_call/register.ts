type Credentials = {
  email: string
  password: string
}

export default async function registerUser(params:Credentials) {

  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })

}