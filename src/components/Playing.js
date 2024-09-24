import { useContext, useState, useRef } from "react";
import { QuizContext } from "../context/quiz";
import Carregar from "../layouts/Carregar";
import style from './Playing.module.css';
import Button from './Button'
import { question_complete } from "../data/question_complete";

const Playing = ({
    errou,
    setErrou,
    acertou,
    setAcertou,
}) => {
    const [nextQuestion, setNextQuestion] = useState(false)
    const [quizState, dispatch] = useContext(QuizContext)
    const [isLoading, setIsLoading] = useState(true)
    const containerQuestion = useRef(null)
    const [idea, setIdea] = useState(false)
    const [nivel, setNivel] = useState(0);
    const btnIdea = useRef(null)

    //lista das questões
    const listaDeQuestoes = [...question_complete.find(obj => obj.category === quizState.category).questions];

    const verificar = (e, respostaCerta) => {
        const element = e.target;
        if (element.innerText === respostaCerta) {
            // console.log('está certo.');
            setAcertou(acertou + 1);
            element.style.setProperty('--color', 'rgb(85, 255, 104)')
            element.style.setProperty('background-color', 'var(--color)')
            element.style.setProperty('box-shadow', '0 0 5px 2.5px var(--color)')
            setNextQuestion(true)
        } else {
            // console.log('está errado.');
            setErrou(errou + 1)
            element.style.setProperty('--color', 'red')
            element.style.setProperty('background-color', 'var(--color)')
            element.style.setProperty('box-shadow', '0 0 5px 2.5px var(--color)')
        }
    }

    function reset() {
        for (const option of document.querySelectorAll('.option')) {
            option.style = '';
        }
    }

    // effect loading
    if (isLoading) {
        setTimeout(() => {
            setIsLoading(false)
        }, Math.random() * 1000);
        return <Carregar />
    }

    return (
        <div className={style.Playing}>
            <header className={style.header} >
                <h2>jogando</h2>
                <p>de {listaDeQuestoes.length} perguntas você está na pergunta Nº {nivel + 1}.</p>
            </header>

            <div className={style.containerPergunta}>
                <h4>{listaDeQuestoes[nivel].question}</h4>

                {idea && <div className={style.idea}>{listaDeQuestoes[nivel].tip}</div>}

                <div ref={containerQuestion} className={style.options}>
                    {listaDeQuestoes[nivel].options.map((campo, index) => {
                        return (
                            <div
                                propkey={index}
                                className={style.option + ' option'}
                                onClick={(e) => verificar(e, listaDeQuestoes[nivel].answer)}
                            >
                                {campo}
                            </div>
                        )
                    })}

                    {nextQuestion && (
                        <div className={style.btnContainer}>
                            <Button
                                className={style.button}
                                animation={'deCima'}
                                variant='Button'
                                btnContext='proxima'
                                onClick={(e) => {
                                    reset()

                                    if (listaDeQuestoes.length - 1 >= nivel + 1) {
                                        setNivel(prevNivel => prevNivel + 1);
                                        setIdea(false)
                                    } else {
                                        dispatch({ type: 'END' });
                                    }

                                    setNextQuestion(prevState => !prevState)
                                }}
                                />
                        </div>
                    )}


                    <div className={style.ideas}>

                        <Button
                            btnContext='⏩'
                            onClick={(e) => {
                                // remover(e, listaDeQuestoes[nivel].answer)
                                setNextQuestion(false)
                                reset()
                                setNivel(prevNivel => prevNivel + 1);
                                setAcertou(prevState => prevState + 1)
                                e.target.remove()
                            }}
                        />

                        <Button
                            btnContext='💡'
                            reference={btnIdea}
                            onClick={(e) => {
                                setIdea(true)
                                e.target.remove()
                            }}
                        />
                    </div>
                </div>
            </div>
            <Button
                className={style.button}
                onClick={() => { dispatch({ type: 'BACK_TO_MAIN' }) }}
                btnContext='pagina inicial'
            />

        </div>
    )
}

export default Playing;