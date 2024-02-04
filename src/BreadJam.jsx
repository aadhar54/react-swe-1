
function Bread({breadColor}){
  console.log(`${breadColor}`);
  const css = {backgroundColor: `${breadColor}`, color: 'white'};

  return (
    <h1 style={css}>BREAD LAYER</h1>
  )
}


function Jam(props){
  const css = {backgroundColor: props.jamColor, color: 'white'};
  return(
    <h2 style={css}>JAM</h2>
  )
}

function BreadJam(props){

  return(
    <>
      <Bread color={props.breadColor} />
      <Jam color={props.jamColor}/>
      <Bread color={props.breadColor}/>
    </>
  )
}

export default BreadJam;