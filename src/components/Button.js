import React, { useCallback } from "react";
import style from './Button.module.css'
const Button = React.memo(({
    propkey,
    animation,
    reference,
    btnContext,
    onClick,
    typeButton,
    variant,
    className,
    style: propStyle,
    onMouseEnter
}) => {

    useCallback(()=>{
        console.log('key => ' + propkey);
    },[propkey])


    const localHandleClick = () => {
        console.log('Você Clicou no Botão.')
    }

    return (
        <button
            key={propkey || 0}
            ref={reference}
            onClick={onClick || localHandleClick}
            onMouseEnter={onMouseEnter}
            type={typeButton ?? 'button'}
            className={className || ((variant) ? `${style[variant]} ${style[animation]}` : style.Button)}
            style={propStyle || {}}
        >
            {btnContext}
        </button >
    )
});

export default Button;