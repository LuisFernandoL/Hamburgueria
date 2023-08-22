import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	:root {
		--color-color-primary: #27ae60;
		--color-color-secondary: #eb5757;
		--color-grey-600: #333333;
		--color-grey-300: #828282;
		--color-grey-100: #e0e0e0;
		--color-negative: #e60000;
		--color-warning: #ffcd07;
		--color-sucess: #168821;
		--color-information: #155bcb;
		--gradiente: linear-gradient(100deg, #333333 45.64%, #EB5757 60.74%);
		font-size: 62.5%;
	}

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}	

	body{
		background-attachment: fixed;
		-webkit-font-smoothing: antialiased;
		overflow: none;
	}
	

	body, input, button, textarea{
		font-family: 'Inter', sans-serif;
		font-size: 1.6rem;
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: 500;
	} 

	button{
        cursor: pointer;
        background: transparent;
        border: none;
    }

    ul, ol, li{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    input{
        border: 0;
        background: transparent;
    }
		
		
`;