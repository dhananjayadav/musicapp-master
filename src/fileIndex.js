export const addFile = (file,title) => { 
    return {
        type: 'ADD',
        data:{
            file,title
        }
    }
 }
 export const deleteFile = (index) =>{
    return {
        type : 'DELETE',
        index
    } 
 }