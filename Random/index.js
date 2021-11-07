// const obj = {
//     key: 'someKey',
//     method: function(){
//         const self = this

//         console.log(this.key)
//         console.log(self.key)
        
//         (function() {
            
//         })()
//     }
// }
// obj.method()


function getRandomColorString() {

    return `${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}`
}