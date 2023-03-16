import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const SvgImage = () => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
                <path
                    d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
                    fill="#FFF"
                />
                <path
                    d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
                    fill="#555AB9"
                />
                <path
                    d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
                    fill="#91BAF8"
                />
            </g>
        </svg>
    )
}

export const Button = ({ backgroundColor, size, icon, greeting, ...props }) => {
    return (
        <button
            type="button"
            className={['storybook-button', `storybook-button--${size}`].join(' ')}
            style={backgroundColor && { backgroundColor }}

            {...props}
        >
            {icon ?
                <SvgImage />
                :
                (greeting ? "thanks" : "click me")}
        </button>
    );
};

Button.propTypes = {
    /**
     * If show greeting
     */
    greeting: PropTypes.bool,
    /**
     * If button support icon
     */
    icon: PropTypes.bool,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Button contents
     */
    label: PropTypes.string,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
};

Button.defaultProps = {
    icon: false,
    greeting: false,
    backgroundColor: null,
    size: 'medium',
    onClick: undefined,
    label: "click me"
};