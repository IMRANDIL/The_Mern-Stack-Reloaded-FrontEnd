

export const register = async ({ userName, email, password } = {}) => {


    const user = { userName, email, password };


    try {


        const res = await fetch(`${process.env.REACT_APP_API_URL}/user/register`, {
            method: 'POST',
            headers: {
                Accept: 'Application/json',
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(user)
        });


        const data = await res.json();

        console.log(data);
        return data;




    } catch (error) {
        throw new Error(`can not register, error:${error}`);






    }


}








//login....




export const login = async ({ email, password } = {}) => {


    const user = { email, password };


    try {


        const res = await fetch(`${process.env.REACT_APP_API_URL}/user/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                Accept: 'Application/json',
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(user)
        });


        const data = await res.json();

        console.log(data);
        return data;




    } catch (error) {
        throw new Error(`can not login, error:${error}`);

    }


}







//logout..........


export const logout = async () => {
    try {

        const res = await fetch(`${process.env.REACT_APP_API_URL}/user/logout`, {
            method: 'GET',
            credentials: 'include'
        });

        return await res.json()

    } catch (error) {

        console.log(error);


    }
}







//get user.........






export const getUser = async () => {
    try {

        const res = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
            method: 'GET',
            credentials: 'include'
        });

        return await res.json()

    } catch (error) {

        throw new Error(`Please login to continue, error: ${error}`)


    }
}