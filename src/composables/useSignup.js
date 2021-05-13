import { ref } from "@vue/reactivity"
import { projectAuth } from '../firebase/config'

const error = ref(null)

const signup = async (email,password,displayName) => {
    error.value= null
    try {
        const res = await projectAuth.createUserWithEmailAndPassword(email,password)
        if(!res)
        {
            throw Error('Could not complete signup')
        }
        await res.user.updateProfile({displayName:displayName})
        error.value= null
        return res
    } catch (err) {
        error.value = err.message
        console.log(err.message)
    }
}

const useSignup = () => {

    return { error, signup }
}

export default useSignup