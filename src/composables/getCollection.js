import { ref } from "@vue/reactivity"
import { watchEffect } from "@vue/runtime-core"
import {  projectFirestore } from '../firebase/config'

const getCollection = (collection) => {
    const error = ref(null)
    const documents = ref(null)

    let collectionRef = projectFirestore.collection(collection)
        .orderBy('createdAt')
        
    const unsub = collectionRef.onSnapshot((snap) => {
        let results = []
        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        })
        documents.value = results
        error.value= null
    }, (err) => {
        console.log(err.message)
        documents.value= null
        error.value= 'could not fetch data'
    })

    // to stop getting snapshots when logout
    watchEffect((onInvalidate) => {
        onInvalidate(() => unsub()) 
    })

    return { error, documents }

}


export default getCollection