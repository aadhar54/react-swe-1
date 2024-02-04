
function Bread({bgcolor, textColor}){
  const css = {
    backgroundColor: bgcolor,
     color: textColor
    };

  return (
    <h1 style={css}>BREAD LAYER</h1>
  )
}


function Jam(props){
  const css = {backgroundColor: props.bgcolor, color: props.textColor};
  return(
    <h2 style={css}>JAM</h2>
  )
}

// function BreadJam({breadColor, jamColor, textColor}){

//   return(
//     <>
//       <Bread bgcolor={breadColor} textColor={textColor}/>
//       <Jam bgcolor={jamColor}/>
//       <Bread bgcolor={breadColor}/>
//     </>
//   )
// }

function BreadJam(props){

  return(
    <>
      <Bread bgcolor={props.breadColor} textColor={props.textColor}/>
      <Jam   bgcolor={props.jamColor}   textColor={props.textColor}/>
      <Bread bgcolor={props.breadColor} textColor={props.textColor}/>
    </>
  )
}

export default BreadJam;