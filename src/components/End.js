import { useContext } from 'react';
import { QuizContext } from '../context/quiz'
import style from './End.module.css'
import Button from './Button';
import { speech } from './Functions'


const End = ({
    errou,
    acertou
}) => {
    const [quizState, dispatch] = useContext(QuizContext)

    speech('Parabéns')
    return (
        <div className={style.End} >
            <h1>Parabéns 🎊</h1>
            <h3>você errou {errou} entre {acertou} questões, no entanto você teve <span style={{ color: (acertou - errou) > (acertou * 0.4) ? 'green' : 'red' }}>{acertou - errou}</span> pontos.</h3>
            <q className={style.q}>
                porém para você completar com sucesso a estas perguntas de {quizState.category} é porque você não é qualquer pessoa<br />
                então sucesso para você daqui para frente.
            </q>
            <span className={style.imojis}>🏆👩🏽‍🎓🥇</span>
            <Button
                btnContext='voltar ao menu principal'
                onClick={() => { dispatch({ type: 'BACK_TO_MAIN' }) }}
            />

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

        </div>
    )
}

export default End;