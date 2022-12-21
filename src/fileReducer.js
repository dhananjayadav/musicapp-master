let files = []

const handleFiles = (state = files,action) =>{
    switch(action.type){
        case 'ADD':
            files = [...files,action.data]
            return files
        case 'DELETE':
            files = [...files.filter((item,i) => i!== action.index)] 
            return files
        default:
        return files;
    }
}
export default handleFiles