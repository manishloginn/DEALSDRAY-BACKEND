const validateData = ({ name, email, mobile, designation, gender, course }) => {
    return new Promise((res, rej) => {

        if (!name || !email || !mobile || !designation || !gender || !course ) rej('all field not fill')


        res('ok')

    })
}


const loginValidator = ({username, password}) => {
    return new Promise((res, rej) => {
        if(!username || !password) rej("all field required")

            res('ok')
    })
}

module.exports = {validateData, loginValidator}