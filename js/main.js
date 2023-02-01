const temas = {
    1:{
        background:{
            mainBackground: "hsl(222, 26%, 31%)",
            toggleBackground:"hsl(223, 31%, 20%)",
            keypadBackground:"hsl(223, 31%, 20%)",
            screenBackground:"hsl(224, 36%, 15%)"
        },
        keys:{
            keyBackground: "hsl(225, 21%, 49%)",
            keyShadow:"hsl(224, 28%, 35%)",
            keyBackground2: "hsl(6, 63%, 50%)",
            keyShadow2: "hsl(6, 70%, 34%)",
            keyBackground3: "hsl(30, 25%, 89%)",
            keyShadow3: "hsl(28, 16%, 65%)"
        },
        text:{
            key:"hsl(0, 0%, 100%)",
            key2:"hsl(0, 0%, 100%)",
            key3:"hsl(221, 14%, 31%)",
            otherText:"hsl(0, 0%, 100%)",
        },
        togglePosition:{
            toggleTranslate: "0px"
        }
    },
    2:{
        background:{
            mainBackground: "hsl(0, 0%, 90%)",
            toggleBackground:"hsl(0, 5%, 81%)",
            keypadBackground:"hsl(0, 5%, 81%)",
            screenBackground:" hsl(0, 0%, 93%)",
        },
        keys:{
            keyBackground: " hsl(185, 42%, 37%)",
            keyShadow:" hsl(185, 58%, 25%)",
            keyBackground2: "hsl(25, 98%, 40%)",
            keyShadow2: "hsl(25, 99%, 27%)",
            keyBackground3: "hsl(45, 7%, 89%)",
            keyShadow3: "hsl(35, 11%, 61%)"
        },
        text:{
            key:"hsl(0, 0%, 100%)",
            key2:"hsl(0, 0%, 100%)",
            key3:"hsl(60, 10%, 19%)",
            otherText:"hsl(60, 10%, 19%)",
        },
        togglePosition:{
            toggleTranslate: "20px"
        }
    },
    3:{
        background:{
            mainBackground: "hsl(268, 75%, 9%)",
            toggleBackground:"hsl(268, 71%, 12%)",
            keypadBackground:"hsl(268, 71%, 12%)",
            screenBackground:"hsl(268, 71%, 12%)",
        },
        keys:{
            keyBackground: "hsl(281, 89%, 26%)",
            keyShadow:"hsl(285, 91%, 52%)",
            keyBackground2: "hsl(176, 100%, 44%)",
            keyShadow2: "hsl(177, 92%, 70%)",
            keyBackground3: "hsl(268, 47%, 21%)",
            keyShadow3: "hsl(290, 70%, 36%)"
        },
        text:{
            key:"hsl(0, 0%, 100%)",
            key2:"hsl(198, 20%, 13%)",
            key3:"hsl(52, 100%, 62%)",
            otherText:"hsl(52, 100%, 62%)",
        },
        togglePosition:{
            toggleTranslate: "40px"
        }
    }
}


let toggle = 2;



document.querySelector('.theme-button').addEventListener("click", handleToggle)


export default function handleToggle(){
 
    let toggleString=toggle.toString()
    if(toggle <= 3){

        let copyTheme = {...temas[toggleString]}
        Object.keys(copyTheme).forEach((elements)=>{
            let copyThemeElements = copyTheme[elements]
            Object.keys(copyThemeElements).forEach(element=>{
                document.body.style.setProperty(`--${element}`,temas[toggleString][elements][element]);
            })
            
        });
        toggle++
        if(toggle>3){
            toggle=1
        }
    } else{
        toggle=1
    }
  
}


