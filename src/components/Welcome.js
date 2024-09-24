import { useContext } from 'react';
import style from './Welcome.module.css';
import { QuizContext } from '../context/quiz';
import Bluey from '../img/bluey.png';
// import Carregar from '../layouts/Carregar';
import Button from './Button';

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    if (!quizState) console.log('quizState está funcionado.');

    return (
        <div className={`${style.welcome}`}>
            <h1 className={style.h1} >bem vindo</h1>
            <p>clique no botão para iniciar o jogo.🙂🏆</p>
            {/* <Carregar/> */}
            <Button btnContext='🎮' typeButton='button' onClick={() => { dispatch({ type: 'CHOICE_CATEGORY' }) }} />
            <Button
                btnContext='sair do jogo'
                onClick={() => { 
                    if (window.confirm('Você tem a certeza que deseja sair ?')) {
                        window.close()
                    } else {
                        return false;
                    }
                }}
            />
            <img
                className={style.img}
                src={Bluey}
                alt='Apenas A Bluey'
                draggable='false'
            />
        </div>
    )
}
export { Bluey }
export default Welcome;