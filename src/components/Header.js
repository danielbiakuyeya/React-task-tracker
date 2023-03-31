
import Button from "./Button"

const HEADER = ({title, onAdd,showAdd}) => {
   
  return (
    <header className="header">
      <h1> {title} </h1>
      <Button color = {showAdd? 'red' : 'green'} text = {showAdd?'Close':'Add'} onClick = {onAdd} />
    </header>
  )
}

//CSS STYLE IN JS
// const headingStyle = {
//     color:'red' ,
//     backgroundColor: 'black'
// }


export default HEADER
