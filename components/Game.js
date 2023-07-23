AFRAME.registerComponent("game-play",{
    schema:{
        Elementid:{type:"string",default:"#ring1"}
    },
    update:function(){
        this.isCollider(this.data.Elementid)
    },
    isCollider:function(element){
        const element=document.querySelector(element)
        element.addEventListener("colide",e=>{
            if (element.includes("#ring")){
                console.log(element+"collision")
            }
            else if (element.includes("#hurdle")){
                console.log(element+"collision")
            }
        })
    }
})