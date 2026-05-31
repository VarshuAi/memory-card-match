
            const emojis = ['🚀','🚀','🎨','🎨','🎮','🎮','🔑','🔑','⏱','⏱','🐍','🐍','📊','📊','🍿','🍿'];
            let activeCards = [];
            
            window.initMemory = function() {
                const grid = document.getElementById('memory-game');
                grid.innerHTML = '';
                // Simple shuffle
                const shuffled = [...emojis].sort(() => Math.random() - 0.5);
                shuffled.forEach((em, idx) => {
                    const card = document.createElement('div');
                    card.className = 'm-card';
                    card.dataset.val = em;
                    card.addEventListener('click', () => {
                        if (card.classList.contains('active')) return;
                        card.innerText = em;
                        card.classList.add('active');
                        activeCards.push(card);
                        if (activeCards.length === 2) {
                            if (activeCards[0].dataset.val !== activeCards[1].dataset.val) {
                                const c1 = activeCards[0];
                                const c2 = activeCards[1];
                                setTimeout(() => {
                                    c1.innerText = '';
                                    c1.classList.remove('active');
                                    c2.innerText = '';
                                    c2.classList.remove('active');
                                }, 500);
                            }
                            activeCards = [];
                        }
                    });
                    grid.appendChild(card);
                });
            }
            initMemory();
        