import style from './Button.module.css'
import { memo } from 'react';
const Button = memo(({
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

    const localHandleClick = () => {
        console.log('Você Clicou no Botão.')
    }

    return (
        <button
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