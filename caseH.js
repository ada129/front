export default function (instance) {
    return{
        getcase(){
            return instance.get('/Case')
        }
    }
    
}