if (document.readyState === 'complete') {
    const element = document.getElementsByClassName('serviceworker adownload cssanimations csstransitions webp webp-alpha webp-animation webp-lossless wf-loading')[0]
    if (element) {
        const initiate = () => {
            window.addEventListener('keydown',(e) => {  
                if (e.keyIdentifier =='U+000A' || e.keyIdentifier =='Enter' || e.keyCode == 13) {
                    e.preventDefault()
                    e.stopPropagation()
                    return false
                }
              }, true);
            // Hiding all unnecessary elements

            const headerElement = document.getElementsByClassName('x1n2onr6 xfo81ep x9f619 x78zum5 x6s0dn4 x13a6bvl xh8yej3 x7j6532 x889kno x1a8lsjc x1swvt13 x1pi30zi x1pl83jw')[0];
            const searchButton = document.getElementsByClassName('_ai0b _ai08')[0];
            const filterButton = document.getElementsByClassName('x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j xl56j7k x1q0g3np x6s0dn4 x23j0i4 xd7y6wv xq22nx5 x14yjl9h xudhj91 x18nykt9 xww2gxu')[0];
            const contactPanel = document.getElementsByClassName('x1n2onr6 _ak9y')[0];

            const blankWhiteBoard1 = document.createElement('div');
            const blankWhiteBoard2 = document.createElement('div');
            blankWhiteBoard1.style.cssText = `
                display: block;
                position: absolute;
                height: 100%;
                width: 100%;
                z-index: 1001;
                background-color: white;
                pointer-events: auto;
                left: 0;
                top: 0;
            `;
            blankWhiteBoard2.style.cssText = `
                display: block;
                position: absolute;
                height: 100%;
                width: 100%;
                z-index: 1001;
                background-color: white;
                pointer-events: auto;
                left: 0;
                top: 0;
            `;
            const blankGrayBoard = document.createElement('div');
            blankGrayBoard.style.cssText = `
                display: block;
                position: absolute;
                height: 100%;
                width: 100%;
                z-index: 1001;
                background-color: #f0f2f5;
                pointer-events: auto;
                right: 0;
                top: 0;
            `

            headerElement.appendChild(blankWhiteBoard1);
            searchButton.appendChild(blankGrayBoard);
            filterButton.setAttribute('style', 'display: none');
            
            // Button Element
            const buttonElement = document.createElement('button');
            buttonElement.style.cssText = `
                position: absolute;
                width: 180px;
                height: 35px;
                display: block;
                margin: 0 auto;
                border-radius: 10px;
                top: 100px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 1100;
                background: #4CD360;
                color: white;
                font: inherit;
                box-shadow: 0px 0px 3px gray;
            `
            buttonElement.textContent = `Search`
            blankWhiteBoard2.appendChild(buttonElement)
            
            contactPanel.appendChild(blankWhiteBoard2);

            const selectContact = () => {
                // Searching contact
                const desiredContact = document.getElementsByClassName('_ak72 _ak73')[0];
                if (!desiredContact) {
                    alert('There is no such contact')
                } else {
                    const ghostElement = document.getElementsByClassName('x1iyjqo2 x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft x1rg5ohu _ao3e')[0];
                    const searchBox = document.getElementsByClassName('selectable-text copyable-text')[0];

                    const clickEvent = new MouseEvent('mousedown', {
                        view: window,
                        bubbles: true,
                        cancelable: true
                    });

                    if (searchBox.textContent.charAt(0) !== `+`) {
                        if (ghostElement.textContent.toLowerCase() !== searchBox.textContent.toLowerCase()) {
                            alert('There is no such contact')
                        } else {
                            desiredContact.dispatchEvent(clickEvent)
                        }
                    } else {
                        if (ghostElement.textContent.replace(/\s/g, '') === searchBox.textContent.replace(/\s/g, '')) {
                            desiredContact.dispatchEvent(clickEvent)
                        } else {
                            alert('There is no such contact')
                        }
                    }
                }
            }

            buttonElement.addEventListener('click', () => {
                const searchElement = document.getElementsByClassName('selectable-text copyable-text x15bjb6t x1n2onr6')[0];
                if (searchElement.innerHTML === `<br>`) {
                    alert('Please input contact address')
                } else {
                    selectContact();
                }
            })
        }

        initiate();
    }
}
