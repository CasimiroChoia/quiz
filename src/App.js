import { useContext, useState } from 'react';
import style from './App.module.css';
import Welcome from './components/Welcome';
import { QuizContext } from './context/quiz';
import ChoiceCategory from './components/ChoiceCategory';
import End from './components/End';
import Playing from './components/Playing';

function App() {
  const [quizState] = useContext(QuizContext);
  const [errou, setErrou] = useState(0)
  const [acertou, setAcertou] = useState(0)
  let Tema = quizState.category;

  return (
    <div className={`${style.App} ${style[Tema] || ''}`}>
      {/* <h1>Quiz App</h1> */}
      {
        (quizState.gameStart === 'START')
          ?
          <Welcome
            errou={errou}
            setErrou={setErrou}
            acertou={acertou}
            setAcertou={setAcertou}
          />
          :
          (quizState.gameStart === 'CHOICE_CATEGORY')
            ?
            <ChoiceCategory
              errou={errou}
              setErrou={setErrou}
              acertou={acertou}
              setAcertou={setAcertou} delay={Math.random() || 0.5}
            />
            :
            (quizState.gameStart === 'PLAYING')
              ?
              <Playing
                errou={errou}
                setErrou={setErrou}
                acertou={acertou}
                setAcertou={setAcertou}
              />
              :
              quizState.gameStart === 'END' && <End 
              errou={errou}
              setErrou={setErrou}
              acertou={acertou}
              setAcertou={setAcertou}/>
      }
    </div>
  );
}

export default App;
