// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
//import { Fragment,useState} from "react";
// const title = "bonjour <strong> les gens <strong/>";
// const strong= "strong" 
// const style ={color:'blue'}
// const show=false
// const tab =['react','jsx','creer composant']
// const handclick=()=> {
//   alert("j'ai cliquer")
// }

//title() comme composant

import Cards from "./Cards"


function App() {

  return (
    <>
     <Cards/>
    </>
  )
}

export default App






//    {show && <h1 id="title" onClick={handclick} className={strong} style={style}>{title}</h1>}
//{show ? <h1 id="title" onClick={handclick} className={strong} style={style}>{title}</h1>:
/*<p>hii</p>}
<ul>
  {tab.map(el=>(<li key= {el}>{el}</li>))}
</ul>*/

//le role de vite est de complier jsx plus vite  c'est pour ca on peut melanger html et améliore la structure de projet 
//attrubut aria donne des formations pour personne ne voit pas
/** 
 * dangerouslySetInnerHTML=({__html:title})
data- : pour passer des donner
pour classeName = class
  on peut utiliser fragement ou <> dans return sans div 
  obligatoire de fermer balise <input type="text" />
  const a= "hasna" -- {a} dans hmtl
 */
