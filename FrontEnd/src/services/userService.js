export const postUser = async (data) => {

    console.log(data);
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            birthDate: data.birthDate,
            profilePicture: data.profilePicture,
            gender: data.gender
        }),
    }
    const res = await fetch(`http://localhost:8082/SpringMVC/user/saveUser`, options)
    const result = await res.json()
    console.log(result);
    return result
}