import { createContext, useReducer } from "react";
import { question_complete } from "../data/question_complete";


const STAGES = ['START', 'CHOICE_CATEGORY', 'PLAYING', 'END'];
const initialState = {
    gameStart: STAGES[0],
    category: '',
    question_complete,
    item: {}
}

const quizReducer = (state, action) => {
    // console.group(action.type.split('_').reverse()[0]);
    // console.log(state);
    switch (action.type) {
        case 'CHOICE_CATEGORY':
            return {
                ...state,
                gameStart: STAGES[1],
            };
        case 'CHANGE_TO_HTML':
            return {
                ...state,
                gameStart: STAGES[2],
                category: 'HTML',
                item: question_complete.find(obj => obj.category === action.type.split('_').reverse()[0])
            };
        case 'CHANGE_TO_CSS':
            return {
                ...state,
                gameStart: STAGES[2],
                category: 'CSS',
                item: question_complete.find(obj => obj.category === action.type.split('_').reverse()[0])
            };
        case 'CHANGE_TO_JAVASCRIPT':
            return {
                ...state,
                gameStart: STAGES[2],
                category: 'JAVASCRIPT',
                item: question_complete.find(obj => obj.category === action.type.split('_').reverse()[0])
            };
        case 'CHANGE_TO_DragonBall':
            return {
                ...state,
                gameStart: STAGES[2],
                category: 'DragonBall',
                item: question_complete.find(obj => obj.category === action.type.split('_').reverse()[0])
            };
        case 'CHANGE_TO_NARUTO':
            return {
                ...state,
                gameStart: STAGES[2],
                category: 'NARUTO',
                item: question_complete.find(obj => obj.category === action.type.split('_').reverse()[0])
            };
            // voltar ao menu principal
        case 'BACK_TO_MAIN':
            return {
                ...state,
                gameStart: STAGES[0],
                category:''
            };

        case 'END':
            return {
                ...state,
                gameStart: 'END',
            };
        default:
            console.log(state);
            console.log('type not configured.')
            return state;
    }
}

export const QuizContext = createContext()
export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState);
    return <QuizContext.Provider value={value} >{children}</QuizContext.Provider>;
}