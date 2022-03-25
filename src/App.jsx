import './App.css';
import Header from './Header'

function App() {

 function handleButtonClick(){
   alert('Clicou no botão');
 }

 function sum(a,b){
   return a + b
 }
  return (
    <>
       <Header title="Meu primeiro component React" />
       <Header title="Um componente com" />
       <h2>
        Senac Campinas
        <div>Retorno da Soma:{sum(5,6)}</div>
      </h2>
    </>
  );
}
export default App;
