import { defineComponent,ref } from "vue";

export const App2=defineComponent({
    setup(){
        const refCount=ref(0)
        
        const onClick=()=>{
            refCount.value+=1
        }
        
        return ()=>(<>
            <span>{refCount.value}</span>
            <div><button onClick={onClick}>+1</button></div>
        </>)
    }
})