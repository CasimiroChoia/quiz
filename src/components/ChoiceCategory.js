import { useContext, useState } from 'react';
import style from './ChoicedCategory.module.css'
import Carregar from "../layouts/Carregar";
import Button from './Button';
import { Bluey } from './Welcome';
import { QuizContext } from '../context/quiz';
import { question_complete } from '../data/question_complete';


const ChoiceCategory = ({ delay }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [quizState, dispatch] = useContext(QuizContext);
    let [escolhido, setEscolhido] = useState(false);
    let types = []
    question_complete.forEach((element, index, array) => {
        if (!types.includes(element.type)) {
            types.push(element.type)
        }

    });

    // effect loading
    if (isLoading) {
        setTimeout(() => {
            setIsLoading(false);
        }, delay * 1000);
        return <Carregar />
    }

    // speech('Escolha a categoria em que deseja participar.');
    return (
        <div className={style.question}>
            <header className={style.header}>
                <Button onClick={() => { dispatch({ type: 'BACK_TO_MAIN' }) }} btnContext='voltar' style={{ margin: '0 auto 2px' }} />
                <p className={style.p}>
                    Escolha a categoria em que deseja participar.🧐
                </p>

                <select
                    className={style.select}
                    onChange={(e) => { setEscolhido(e.target.value) }}
                    value="none"
                >
                    <option
                        defaultChecked={true}
                        value="none"
                        disabled
                    >clique aqui</option>
                    {types.map((value, index) => {
                        return (
                            <option key={index} value={value}>{value.toUpperCase()}</option>
                        )
                    })}
                </select>
            </header>
            <div className={style.btnContainer}>

                {Boolean(escolhido) && (question_complete.filter(x => x.type === escolhido).map((selectedQuestions, i) => {
                    let index = i;
                    // console.log('index => ' + index);
                    return (
                        // <span key={index}>{index}</span>
                        <Button
                            key={index}
                            btnContext={selectedQuestions.category.toUpperCase()}
                            onClick={() => {
                                console.log({
                                    // substitui os " " por '_'
                                    type: `CHANGE_TO_${selectedQuestions.category.split(" ").join("_")}`,
                                    category: selectedQuestions.category
                                })
                                dispatch({
                                    type: `CHANGE_TO_${selectedQuestions.category.split(" ").join("_")}`,
                                    category: selectedQuestions.category
                                })
                            }}
                        />
                    )

                }))}


            </div>
            <img className={style.img} src={Bluey} alt={quizState.gameState} />
        </div>
    )
}

export default ChoiceCategory;